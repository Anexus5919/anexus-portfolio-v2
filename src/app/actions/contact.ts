"use server";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  /** Honeypot — must stay empty. Bots tend to fill every field. */
  company?: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContact(
  input: ContactInput
): Promise<ContactResult> {
  const name = (input.name ?? "").trim();
  const email = (input.email ?? "").trim();
  const message = (input.message ?? "").trim();

  // Honeypot: silently accept (so bots think they succeeded) but do nothing.
  if (input.company && input.company.trim().length > 0) {
    return { ok: true };
  }

  if (name.length < 2 || name.length > 100) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length < 10 || message.length > 4000) {
    return { ok: false, error: "Message must be between 10 and 4000 characters." };
  }

  const db = getDb();
  if (!db) {
    return {
      ok: false,
      error: "The contact form isn't set up yet — please reach me by email instead.",
    };
  }

  try {
    await addDoc(collection(db, "messages"), {
      name,
      email,
      message,
      createdAt: serverTimestamp(),
      read: false,
      source: "portfolio-contact-form",
    });
  } catch {
    return {
      ok: false,
      error: "Something went wrong saving your message. Please try again or email me directly.",
    };
  }

  // Best-effort email notification — never fail the submission if this errors.
  await sendEmailNotification({ name, email, message }).catch(() => {});

  return { ok: true };
}

async function sendEmailNotification(msg: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return; // Email not configured — skip silently.

  const from =
    process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: msg.email,
      subject: `New portfolio message from ${msg.name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">📬 New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(msg.name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(msg.email)}">${escapeHtml(msg.email)}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap;border-left:3px solid #ddd;padding-left:12px;color:#333">${escapeHtml(msg.message)}</p>
        </div>
      `,
    }),
  });
}
