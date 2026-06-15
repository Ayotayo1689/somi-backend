import admin from "firebase-admin";

function getCredential() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
    if (serviceAccount.private_key) {
      serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
    }
    return admin.credential.cert(serviceAccount);
  }

  return admin.credential.applicationDefault();
}

export function initFirebase() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: getCredential(),
    });
  }

  return {
    db: admin.firestore(),
  };
}

export const FieldValue = admin.firestore.FieldValue;
