import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <article className="relative overflow-hidden bg-cream pb-24 pt-32 sm:pt-40">
      <div className="relative mx-auto max-w-[760px] px-6">
        <Reveal>
          <p className="label-eyebrow text-earth">{eyebrow}</p>
          <h1 className="font-display mt-5 text-[clamp(2.4rem,6vw,3.6rem)] leading-[1.05] text-emerald">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.95] text-noir/65">{intro}</p>
        </Reveal>
        <div className="mt-14 space-y-12">{children}</div>
      </div>
    </article>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <section>
        <h2 className="font-display text-[1.5rem] italic text-emerald">{title}</h2>
        <div className="mt-3 space-y-4 text-[15px] leading-[1.95] text-noir/70">{children}</div>
      </section>
    </Reveal>
  );
}
