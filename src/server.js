import "dotenv/config";
import cors from "cors";
import express from "express";
import { defaults } from "./defaultContent.js";
import { FieldValue, initFirebase } from "./firebase.js";

const app = express();
const port = process.env.PORT || 5000;
const adminUsername = (process.env.ADMIN_USERNAME || "Ajoke").trim();
const adminPassword = (process.env.ADMIN_PASSWORD || "Simi1234#").trim();
const adminToken = (process.env.ADMIN_TOKEN || "simi-admin-token").trim();

app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.options("*", cors({
  origin: true,
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json({ limit: "2mb" }));

let firebase;
function getFirebase() {
  if (!firebase) firebase = initFirebase();
  return firebase;
}

function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (token !== adminToken) return res.status(401).json({ message: "Unauthorized" });
  next();
}

function sortItems(items) {
  return items.sort((a, b) => (a.order || 0) - (b.order || 0));
}

async function getConfigDoc(id, fallback) {
  try {
    const { db } = getFirebase();
    const snap = await db.collection("config").doc(id).get();
    return snap.exists ? snap.data() : fallback;
  } catch (error) {
    return fallback;
  }
}

async function setConfigDoc(id, payload) {
  const { db } = getFirebase();
  await db.collection("config").doc(id).set({ ...payload, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  return getConfigDoc(id, payload);
}

async function getPage(slug) {
  try {
    const { db } = getFirebase();
    const snap = await db.collection("pages").doc(slug).get();
    return snap.exists ? snap.data() : defaults.pages[slug];
  } catch (error) {
    return defaults.pages[slug];
  }
}

async function setPage(slug, payload) {
  const { db } = getFirebase();
  await db.collection("pages").doc(slug).set({ ...payload, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  return getPage(slug);
}

async function getCollection(name, fallback = []) {
  try {
    const { db } = getFirebase();
    const snap = await db.collection(name).get();
    if (snap.empty) return fallback;
    const items = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    if (name === "enquiries") {
      return items.sort((a, b) => {
        const aTime = a.createdAt?.toMillis?.() || a.createdAt?.seconds || 0;
        const bTime = b.createdAt?.toMillis?.() || b.createdAt?.seconds || 0;
        return bTime - aTime;
      });
    }
    return sortItems(items);
  } catch (error) {
    return fallback;
  }
}

async function createItem(collection, payload) {
  const { db } = getFirebase();
  const ref = await db.collection(collection).add({
    ...payload,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp()
  });
  const snap = await ref.get();
  return { id: ref.id, ...snap.data() };
}

async function updateItem(collection, id, payload) {
  const { db } = getFirebase();
  const ref = db.collection(collection).doc(id);
  await ref.set({ ...payload, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  const snap = await ref.get();
  return { id: ref.id, ...snap.data() };
}

async function deleteItem(collection, id) {
  const { db } = getFirebase();
  await db.collection(collection).doc(id).delete();
}

async function getBootstrap() {
  const [siteSettings, navigation, services, portfolio, clients, stats] = await Promise.all([
    getConfigDoc("site-settings", defaults.siteSettings),
    getConfigDoc("navigation", defaults.navigation),
    getCollection("services", defaults.services),
    getCollection("portfolio", defaults.portfolio),
    getCollection("clients", defaults.clients),
    getCollection("stats", defaults.stats),
  ]);

  const pages = {};
  await Promise.all(
    Object.keys(defaults.pages).map(async (slug) => {
      pages[slug] = await getPage(slug);
    })
  );

  return { siteSettings, navigation, pages, services, portfolio, clients, stats };
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "simi-backend" });
});

app.get("/ping", (req, res) => {
  res.json({ ok: true, uptime: process.uptime(), timestamp: new Date().toISOString() });
});

app.get("/api/bootstrap", async (req, res) => {
  res.json(await getBootstrap());
});

app.post("/api/auth/login", (req, res) => {
  const username = String(req.body.username || "").trim();
  const password = String(req.body.password || "").trim();

  if (username === adminUsername && password === adminPassword) {
    return res.json({ token: adminToken, username: adminUsername });
  }
  return res.status(401).json({ message: "Invalid username or password" });
});

app.get("/api/auth/me", requireAdmin, (req, res) => {
  res.json({ username: adminUsername });
});

app.post("/api/auth/logout", requireAdmin, (req, res) => {
  res.json({ ok: true });
});

app.get("/api/site-settings", async (req, res) => {
  res.json(await getConfigDoc("site-settings", defaults.siteSettings));
});

app.patch("/api/site-settings", requireAdmin, async (req, res) => {
  res.json(await setConfigDoc("site-settings", req.body));
});

app.get("/api/navigation", async (req, res) => {
  res.json(await getConfigDoc("navigation", defaults.navigation));
});

app.patch("/api/navigation", requireAdmin, async (req, res) => {
  res.json(await setConfigDoc("navigation", req.body));
});

app.get("/api/pages/:slug", async (req, res) => {
  const page = await getPage(req.params.slug);
  if (!page) return res.status(404).json({ message: "Page not found" });
  res.json(page);
});

app.patch("/api/pages/:slug", requireAdmin, async (req, res) => {
  res.json(await setPage(req.params.slug, req.body));
});

function collectionRoutes(path, collection, fallback) {
  app.get(`/api/${path}`, async (req, res) => {
    let items = await getCollection(collection, fallback);
    if (req.query.type) items = items.filter((item) => item.type === req.query.type);
    res.json(items);
  });

  app.get(`/api/${path}/:id`, async (req, res) => {
    const items = await getCollection(collection, fallback);
    const item = items.find((entry) => entry.id === req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  });

  app.post(`/api/${path}`, requireAdmin, async (req, res) => {
    res.status(201).json(await createItem(collection, req.body));
  });

  app.patch(`/api/${path}/:id`, requireAdmin, async (req, res) => {
    res.json(await updateItem(collection, req.params.id, req.body));
  });

  app.delete(`/api/${path}/:id`, requireAdmin, async (req, res) => {
    await deleteItem(collection, req.params.id);
    res.status(204).end();
  });
}

app.get("/api/portfolio/photos", async (req, res) => {
  const items = await getCollection("portfolio", defaults.portfolio);
  res.json(items.filter((item) => item.type === "photo"));
});

app.get("/api/portfolio/videos", async (req, res) => {
  const items = await getCollection("portfolio", defaults.portfolio);
  res.json(items.filter((item) => item.type === "video"));
});

collectionRoutes("services", "services", defaults.services);
collectionRoutes("portfolio", "portfolio", defaults.portfolio);
collectionRoutes("clients", "clients", defaults.clients);
collectionRoutes("stats", "stats", defaults.stats);

app.post("/api/enquiries", async (req, res) => {
  const payload = {
    name: req.body.name || "",
    email: req.body.email || "",
    projectType: req.body.projectType || "",
    message: req.body.message || "",
    sourcePage: req.body.sourcePage || "",
    status: "new"
  };
  res.status(201).json(await createItem("enquiries", payload));
});

app.get("/api/enquiries", requireAdmin, async (req, res) => {
  res.json(await getCollection("enquiries", []));
});

app.get("/api/enquiries/:id", requireAdmin, async (req, res) => {
  const items = await getCollection("enquiries", []);
  const item = items.find((entry) => entry.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Enquiry not found" });
  res.json(item);
});

app.patch("/api/enquiries/:id", requireAdmin, async (req, res) => {
  res.json(await updateItem("enquiries", req.params.id, req.body));
});

app.get("/api/media", requireAdmin, async (req, res) => {
  res.json(await getCollection("media", []));
});

app.post("/api/media/upload", requireAdmin, async (req, res) => {
  return res.status(410).json({ message: "Uploads are disabled. Add image URLs directly in the admin." });
});

app.delete("/api/media/:id", requireAdmin, async (req, res) => {
  await deleteItem("media", req.params.id);
  res.status(204).end();
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: error.message || "Server error" });
});

app.listen(port, () => {
  console.log(`Simi backend running on http://localhost:${port}`);
});
