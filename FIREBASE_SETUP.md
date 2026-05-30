# Firebase + Contact Form + Dynamic CMS — Setup Guide

This portfolio is moving from static content to a **Firebase-backed, dynamic site** with a private **FireCMS** admin. This guide covers what's built now (contact form) and what's next (dynamic content + admin).

---

## ✅ Phase A — Contact form + email notifications (built)

The "Get in Touch" section now has a form that saves submissions to Firestore
(`messages` collection) and emails you on each new message.

### 1. Create a Firebase project
1. Go to <https://console.firebase.google.com> → **Add project**.
2. Once created, **Build → Firestore Database → Create database** → Production mode → pick a region.
3. **Build → Authentication → Get started → enable Google** (needed later for the admin).
4. **Build → Storage → Get started** (needed later for image uploads from the CMS).

### 2. Get your web config
**Project settings (gear) → General → Your apps →** click the web icon `</>` to register a web app → copy the `firebaseConfig` values into `.env.local`:

```bash
cp .env.local.example .env.local
# then paste your values into .env.local
```

> The `NEXT_PUBLIC_FIREBASE_*` values are **public by design** — security is enforced by the Firestore rules below, not by hiding them.

### 3. Set Firestore security rules
**Firestore Database → Rules** → paste this, replacing `YOUR_ADMIN_EMAIL`:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Anyone may submit a contact message (shape-validated). Only you can read them.
    match /messages/{id} {
      allow create: if
        request.resource.data.keys().hasOnly(['name','email','message','createdAt','read','source'])
        && request.resource.data.name is string
        && request.resource.data.name.size() >= 2 && request.resource.data.name.size() <= 100
        && request.resource.data.email is string && request.resource.data.email.size() <= 200
        && request.resource.data.message is string
        && request.resource.data.message.size() >= 10 && request.resource.data.message.size() <= 4000
        && request.resource.data.createdAt == request.time;
      allow read, update, delete: if request.auth != null
        && request.auth.token.email == 'YOUR_ADMIN_EMAIL';
    }

    // Public content (Phase B). Anyone can read; only you can edit (via FireCMS).
    match /{col}/{doc} {
      allow read: if col in ['profile','socials','skills','work','education','projects','openSource'];
      allow write: if request.auth != null
        && request.auth.token.email == 'YOUR_ADMIN_EMAIL';
    }
  }
}
```

### 4. Set up email (Resend)
1. Sign up at <https://resend.com> → **API Keys** → create one (starts with `re_`).
2. Put it in `.env.local` as `RESEND_API_KEY`, and set `CONTACT_TO_EMAIL` to your inbox.
3. (Optional) Verify a domain in Resend and set `CONTACT_FROM_EMAIL`; otherwise the
   default test sender `onboarding@resend.dev` is used (it can email your own account).

### 5. Run it
```bash
pnpm dev
```
Open the site, scroll to **Get in Touch**, submit the form — the message appears in
Firestore (`messages`) and an email lands in your inbox.

> Until `.env.local` is filled, the form renders but submitting shows a friendly
> "reach me by email" message — the site never breaks.

### 6. Deploy
Add the same env vars in **Vercel → Project → Settings → Environment Variables**, then redeploy.

---

## 🔜 Phase B — Dynamic content + self-hosted FireCMS admin (next)

Goal: edit every section (About, Work, Education, Skills, Projects, Open Source,
contact details) from a private admin UI; changes go live immediately.

**Planned Firestore data model** (one editable place per section):

| Collection / doc      | Holds                                                            |
|-----------------------|-----------------------------------------------------------------|
| `profile/main` (doc)  | name, headline/description, About summary, avatar, résumé, email, phone, location |
| `socials`             | GitHub / LinkedIn / Email links (label, url, icon, order)       |
| `skills`              | the 6 categories, each with its chip items + highlight flags    |
| `work`                | roles (company, title, dates, description, logo, badge media)   |
| `education`           | schools (name, degree, dates, logo)                             |
| `projects`            | the project cards (title, type, tags, links, image, order)      |
| `openSource`          | contributions (repo, PR count, description, PR list, order)     |
| `messages`            | contact-form submissions (Phase A)                              |

**Then:**
1. A one-time **seed script** migrates today's content into Firestore.
2. The site switches to read from Firestore (server-rendered, always fresh).
3. A separate **FireCMS** app (its own URL, Google-login locked to you) edits these
   collections — including image uploads to Firebase Storage.

This phase is built once your Firebase project above is live, so it can be verified
against your real database (rules, queries, admin auth) rather than guessed.
