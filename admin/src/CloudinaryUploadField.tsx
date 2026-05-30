import { useState } from "react";
import type { FieldProps } from "@firecms/core";

// Public Cloudinary config (unsigned uploads — no secret needed).
const CLOUD_NAME = "dtkojiqp7";
const UPLOAD_PRESET = "portfolio_unsigned";

/**
 * Custom FireCMS field that uploads images to Cloudinary (unsigned) instead of
 * Firebase Storage (which requires the paid Blaze plan). Stores the resulting
 * secure URL as a plain string. Also accepts a pasted URL or a /public path.
 *
 * Styled with FireCMS's own Tailwind tokens (surface-* / primary) so it matches
 * the admin theme and adapts to light/dark mode.
 */
export function CloudinaryUploadField({
  value,
  setValue,
  property,
  error,
}: FieldProps<string>) {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setUploadError(null);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        { method: "POST", body: form }
      );
      const data = await res.json();
      if (data.secure_url) {
        setValue(data.secure_url);
      } else {
        setUploadError(data?.error?.message ?? "Upload failed");
      }
    } catch (e) {
      setUploadError(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {property.name && (
        <label className="text-sm font-medium text-surface-800 dark:text-surface-200">
          {property.name}
        </label>
      )}

      <div className="flex items-center gap-4">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-surface-300 bg-surface-100 dark:border-surface-700 dark:bg-surface-800">
          {value ? (
            <img
              src={value}
              alt="preview"
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-xs text-surface-400 dark:text-surface-500">
              No image
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            className={`inline-flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 ${
              uploading ? "pointer-events-none opacity-60" : ""
            }`}
          >
            {uploading ? "Uploading…" : "⬆ Upload image"}
            <input
              type="file"
              accept="image/*"
              disabled={uploading}
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) void handleFile(f);
              }}
            />
          </label>
          {value && (
            <button
              type="button"
              onClick={() => setValue(null)}
              className="w-fit text-xs text-surface-500 hover:text-red-500"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <input
        type="text"
        placeholder="…or paste an image URL / /public path"
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value ? e.target.value : null)}
        className="w-full rounded-lg border border-surface-300 bg-surface-50 px-3 py-2 text-sm text-surface-900 outline-none focus:ring-2 focus:ring-primary dark:border-surface-700 dark:bg-surface-900 dark:text-surface-100"
      />

      {(uploadError || error) && (
        <span className="text-xs text-red-500">{uploadError ?? error}</span>
      )}
      {property.description && (
        <span className="text-xs text-surface-500 dark:text-surface-400">
          {property.description}
        </span>
      )}
    </div>
  );
}
