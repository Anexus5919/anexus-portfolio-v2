"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-shadow";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setError("");

    const res = await submitContact({
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
      company: String(data.get("company") || ""), // honeypot
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
      setError(res.error);
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card/40 p-8 text-center">
        <CheckCircle2 className="size-10 text-emerald-500" />
        <h3 className="text-lg font-semibold">Message sent!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — I&apos;ll get back to you as soon as I can.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-xl border border-border bg-card/40 p-6 text-left"
    >
      {/* Honeypot field — hidden from humans, off-screen, not focusable. */}
      <div aria-hidden className="absolute left-[-9999px]" tabIndex={-1}>
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            placeholder="Your name"
            className={inputClass}
            disabled={status === "loading"}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="you@example.com"
            className={inputClass}
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={4}
          placeholder="What would you like to say?"
          className={`${inputClass} resize-y min-h-24`}
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        className="w-full gap-2 cursor-pointer sm:w-fit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send message
          </>
        )}
      </Button>
    </form>
  );
}
