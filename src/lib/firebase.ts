import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

/**
 * Firebase client config — these NEXT_PUBLIC_* values are public by design
 * (security is enforced by Firestore rules, not by hiding the apiKey).
 * Put them in .env.local (see .env.local.example).
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** True only when the essential Firebase config is present. */
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId && firebaseConfig.appId
);

let cachedApp: FirebaseApp | null = null;
let cachedDb: Firestore | null = null;

/** Returns the Firestore instance, or null if Firebase isn't configured yet. */
export function getDb(): Firestore | null {
  if (!isFirebaseConfigured) return null;
  if (!cachedApp) {
    cachedApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
  }
  if (!cachedDb) {
    cachedDb = getFirestore(cachedApp);
  }
  return cachedDb;
}
