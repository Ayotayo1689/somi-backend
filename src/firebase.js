import admin from "firebase-admin";

function getCredential() {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON));
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
