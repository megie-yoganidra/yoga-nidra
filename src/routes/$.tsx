import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page Not Found — Yoga Nidra" },
      {
        name: "description",
        content:
          "This page could not be found. Return to the Yoga Nidra homepage to explore the online course, the practice itself, and occasional live workshops with Megie Santana.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Page Not Found — Yoga Nidra" },
      {
        property: "og:description",
        content: "This page could not be found. Return to the Yoga Nidra homepage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-cream px-6 pb-28 pt-36 sm:pt-44">
        <div
          aria-hidden
          className="drift-slower pointer-events-none absolute left-1/2 top-1/3 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, var(--khaki) 0%, transparent 65%)",
            opacity: 0.12,
          }}
        />
        <div className="relative mx-auto max-w-[640px] text-center">
          <p className="label-eyebrow text-earth">404</p>
          <h1 className="font-display mt-5 text-[clamp(2.2rem,6vw,3.4rem)] leading-[1.1] text-emerald">
            This path leads <em className="italic text-earth">nowhere</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-[1.95] text-noir/75">
            The page you were looking for has moved, or never existed. Take a breath — everything
            else is still exactly where you left it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="btn-gradient">
              Back to the homepage
            </Link>
            <Link to="/yoga-nidra-workshop" className="btn-quiet text-emerald">
              See the workshop
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
