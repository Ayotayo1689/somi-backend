import admin from "firebase-admin";

function normalizeServiceAccount(serviceAccount) {
  if (serviceAccount.private_key) {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
  }
  return serviceAccount;
}

function getFirebaseConfig() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
    const decoded = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8");
    const serviceAccount = normalizeServiceAccount(JSON.parse(decoded));
    return {
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID || serviceAccount.project_id,
    };
  }

  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    const serviceAccount = normalizeServiceAccount(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON));
    return {
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID || serviceAccount.project_id,
    };
  }

  return {
    credential: admin.credential.applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID,
  };
}

export function initFirebase() {
  if (!admin.apps.length) {
    const firebaseConfig = getFirebaseConfig();
    admin.initializeApp({
      ...firebaseConfig,
    });
  }

  return {
    db: admin.firestore(),
  };
}

export const FieldValue = admin.firestore.FieldValue;
