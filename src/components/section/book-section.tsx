/* eslint-disable @next/next/no-img-element */
import { BookLinks } from "@/components/book-links";
import { getContent } from "@/lib/content";

export default async function BookSection() {
  const content = await getContent();
  const books = content.writing ?? [];
  if (!books.length) return null;

  return (
    <div className="flex min-h-0 flex-col gap-y-8 w-full">
      <div className="flex items-center w-full">
        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
          <h2 className="text-background text-sm font-medium">Beyond Code</h2>
        </div>
        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
      </div>

      <div className="flex flex-col gap-y-12">
        {books.map((book) => (
          <article
            key={book.title}
            className="flex flex-col gap-6 sm:flex-row sm:gap-8"
          >
            <img
              src={book.cover}
              alt={`${book.title} book cover`}
              width={600}
              height={900}
              loading="lazy"
              decoding="async"
              className="h-auto w-32 shrink-0 self-start rounded-[2px] shadow-lg shadow-black/30 ring-1 ring-black/5 dark:ring-white/10 sm:w-44"
            />
            <div className="flex min-w-0 flex-col gap-y-5">
              <div className="flex flex-col gap-y-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {book.title}
                </h3>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {book.kicker}
                </p>
              </div>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {book.description}
              </p>
              <p className="text-xs tabular-nums text-muted-foreground">
                {book.publisher} · {book.date}
                {book.isbn && (
                  <>
                    {" · "}ISBN{" "}
                    <span className="font-mono">{book.isbn}</span>
                  </>
                )}
              </p>
              <BookLinks links={book.links} stores={book.amazon} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
