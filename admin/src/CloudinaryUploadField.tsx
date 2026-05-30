import { useState } from "react";
import type { FieldProps } from "@firecms/core";

// Public Cloudinary config (unsigned uploads — no secret needed).
const CLOUD_NAME = "dtkojiqp7";
const UPLOAD_PRESET = "portfolio_unsigned";

/**
 * Custom FireCMS field that uploads images to Cloudinary (unsigned) instead of
 * Firebase Storage (which requires the paid Blaze plan). Stores the resulting
 * secure URL as a plain string. Also accepts a pasted URL or a /public path.
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
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label style={{ fontSize: 13, fontWeight: 600 }}>
        {property.name ?? "Image"}
      </label>

      {value ? (
        <img
          src={value}
          alt="preview"
          style={{
            height: 96,
            width: "auto",
            maxWidth: 200,
            objectFit: "contain",
            borderRadius: 8,
            border: "1px solid rgba(128,128,128,0.3)",
            background: "#fff",
            padding: 4,
          }}
        />
      ) : null}

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <label
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px solid rgba(128,128,128,0.4)",
            cursor: uploading ? "default" : "pointer",
            fontSize: 13,
            opacity: uploading ? 0.6 : 1,
          }}
        >
          {uploading ? "Uploading…" : "⬆ Upload image"}
          <input
            type="file"
            accept="image/*"
            disabled={uploading}
            style={{ display: "none" }}
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) void handleFile(f);
            }}
          />
        </label>
      </div>

      <input
        type="text"
        placeholder="…or paste an image URL / /public path"
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value ? e.target.value : null)}
        style={{
          padding: "8px 10px",
          borderRadius: 6,
          border: "1px solid rgba(128,128,128,0.4)",
          fontSize: 13,
          background: "transparent",
        }}
      />

      {(uploadError || error) && (
        <span style={{ color: "#dc2626", fontSize: 12 }}>
          {uploadError ?? error}
        </span>
      )}
      {property.description && (
        <span style={{ fontSize: 12, opacity: 0.7 }}>{property.description}</span>
      )}
    </div>
  );
}
