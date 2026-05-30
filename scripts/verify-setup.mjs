// One-off setup check: verifies Firestore write + Resend email using .env.local.
// Never prints secret values — only pass/fail. Run: node scripts/verify-setup.mjs
import { readFileSync } from "node:fs";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

// --- load .env.local ---
const env = {};
try {
  for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) env[m[1]] = m[2];
  }
} catch {
  console.log("❌ Could not read .env.local");
  process.exit(1);
}

const cfg = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
console.log("Firebase project:", cfg.projectId || "(missing)");

// --- Firestore write test ---
let testId = null;
try {
  const db = getFirestore(initializeApp(cfg));
  const ref = await addDoc(collection(db, "messages"), {
    name: "Setup Test",
    email: "setup-test@example.com",
    message: "Automated setup verification — safe to delete.",
    createdAt: serverTimestamp(),
    read: false,
    source: "setup-verification",
  });
  testId = ref.id;
  console.log("FIRESTORE: ✅ wrote test doc  messages/" + ref.id);
  try {
    await deleteDoc(doc(db, "messages", ref.id));
    console.log("FIRESTORE: 🧹 cleaned up test doc");
  } catch {
    console.log(
      "FIRESTORE: (left the test doc — delete 'messages/" +
        testId +
        "' in the console; harmless)"
    );
  }
} catch (e) {
  console.log("FIRESTORE: ❌ " + (e?.code || e?.message || e));
  if (String(e?.code).includes("permission-denied")) {
    console.log(
      "   → Apply the Firestore security rules from FIREBASE_SETUP.md (the 'messages' create rule)."
    );
  }
}

// --- Resend email test (skip with --no-email) ---
const key = env.RESEND_API_KEY;
const to = env.CONTACT_TO_EMAIL;
const from = env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
if (process.argv.includes("--no-email")) {
  console.log("RESEND: ⏭️  skipped (--no-email)");
} else if (!key || !to) {
  console.log("RESEND: ⚠️ RESEND_API_KEY or CONTACT_TO_EMAIL missing");
} else {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: "✅ Portfolio contact-form test",
        html: "<p>Your portfolio contact form email pipeline is working. This is an automated test — safe to ignore.</p>",
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      console.log("RESEND: ✅ sent test email to " + to + " (id " + (data.id || "?") + ")");
    } else {
      console.log("RESEND: ❌ HTTP " + res.status + " — " + JSON.stringify(data));
    }
  } catch (e) {
    console.log("RESEND: ❌ " + (e?.message || e));
  }
}

process.exit(0);
