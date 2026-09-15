import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Moon,
  Waves,
  HeartPulse,
  Headphones,
  Sunrise,
  Feather,
  Compass,
  Layers,
  Plus,
  MapPin,
  Mail,
} from "lucide-react";
import { useState, type FormEvent } from "react";

import heroLotus from "@/assets/hero-lotus.png.asset.json";
import courseMist from "@/assets/course-mist-wide.jpg";
import branchShadow from "@/assets/branch-shadow.jpg";
import restHuman from "@/assets/course-rest-woman.jpg";
import dailyLight from "@/assets/daily-linen-morning.jpg";




import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { ReserveProvider, useReserve } from "@/components/site/reserve-context";
import { ReserveDialog } from "@/components/site/reserve-dialog";
import { Reveal } from "@/components/site/reveal";

import { useParallax } from "@/hooks/use-reveal";
import { seo, SITE_URL } from "@/lib/site";
import { readForm, validate } from "@/lib/form-validation";

const meta = seo({
  title: "Yoga Nidra — Quiet Change Within | Online Course",
  description:
    "An online Yoga Nidra course by Megie Santana: a practice that calms the nervous system, restores deep rest and brings presence into everyday life.",
  ogTitle: "Yoga Nidra — Quiet Change Within",
  ogDescription:
    "An online Yoga Nidra course — deep rest, nervous-system regulation and quiet change. Join the waiting list.",
  path: "/",
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: meta.meta,
    links: meta.links,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Yoga Nidra — Megie Santana",
          url: SITE_URL,
          description:
            "An online Yoga Nidra course and occasional live gatherings, guided by Megie Santana.",
        }),
      },
    ],
  }),
  component: Page,
});


function Page() {
  return (
    <ReserveProvider>
      <SiteNav />
      <ReserveDialog />
      <main>
        <Hero />
        <Benefits />
        <Course />
        <WhatIs />
        <DailyPractice />
        <Workshops />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </ReserveProvider>
  );
}

/* ------------------------------------------------------------- HELPERS */

function SectionHeading({
  eyebrow,
  children,
  tone = "dark",
}: {
  eyebrow: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div>
      <span className={`label-eyebrow ${tone === "light" ? "text-khaki" : "text-earth"}`}>
        {eyebrow}
      </span>
      <h2
        className={`font-display mt-5 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] ${
          tone === "light" ? "text-cream" : "text-emerald"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}

/* ---------------------------------------------------------------- HERO */

function Hero() {
  const { open } = useReserve();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-emerald-deep">
      {/* the still water, mist, light and lotus — lifted so the lotus sits higher in the frame.
          Below the crop, the image's own bottom edge continues as a soft mirror reflection,
          so the water flows on with no colour band or seam. */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroLotus.url}
          alt="A white lotus resting on still misty water in soft warm morning light, with a large flowing golden circle drawn across the surface"
          width={1376}
          height={768}
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="hero-still absolute inset-x-0 top-0 h-[84%] w-full object-cover object-[68%_100%] sm:h-[86%] sm:object-[60%_100%] lg:h-[88%] lg:object-bottom"
        />
        {/* mirrored continuation of the water below the crop line */}
        <img
          src={heroLotus.url}
          alt=""
          aria-hidden
          decoding="async"
          className="absolute inset-x-0 bottom-0 h-[18%] w-full scale-y-[-1] object-cover object-[68%_100%] blur-[3px] sm:object-[60%_100%] lg:object-bottom"
        />
        {/* seam softener: a whisper of emerald where the two waters meet */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[12%] h-[10%] sm:bottom-[10%] lg:bottom-[9%]"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, oklch(0.263 0.028 166 / 0.22) 45%, oklch(0.263 0.028 166 / 0.22) 55%, transparent 100%)",
          }}
        />
        {/* deepen the water toward the bottom edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[16%]"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, oklch(0.263 0.028 166 / 0.45) 100%)",
          }}
        />
      </div>


      {/* drifting mist */}
      <div
        aria-hidden
        className="mist-drift pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 78% 18%, oklch(0.95 0.03 95 / 0.28) 0%, transparent 70%), radial-gradient(85% 45% at 30% 62%, oklch(0.9 0.02 160 / 0.14) 0%, transparent 72%)",
        }}
      />

      {/* the water itself, moving: a blurred reflection of the scene drifting on the surface —
          masked so it melts into the scene with no visible top edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] overflow-hidden"
        style={{
          maskImage: "linear-gradient(180deg, transparent 0%, black 55%)",
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 55%)",
        }}
      >
        <img
          src={heroLotus.url}
          alt=""
          aria-hidden
          decoding="async"
          className="water-surface absolute inset-0 h-full w-full scale-y-[-1] object-cover object-top opacity-60 blur-[6px] mix-blend-soft-light"
        />
        <div
          className="water-sheen absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 40% at 40% 65%, oklch(0.95 0.03 100 / 0.3) 0%, transparent 70%), radial-gradient(50% 35% at 72% 40%, oklch(0.92 0.02 165 / 0.22) 0%, transparent 72%)",
          }}
        />
      </div>

      {/* the water surface settling */}
      <div
        aria-hidden
        className="water-still pointer-events-none absolute inset-x-0 bottom-0 h-[42%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.55 0.03 168 / 0.16) 55%, oklch(0.263 0.028 166 / 0.28) 100%)",
        }}
      />





      {/* keeps the copy readable without flattening the picture */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 62% at 46% 48%, oklch(0.263 0.028 166 / 0.62) 0%, oklch(0.263 0.028 166 / 0.34) 55%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.263 0.028 166 / 0.5) 0%, transparent 34%, transparent 60%, oklch(0.263 0.028 166 / 0.5) 100%)",
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col items-center justify-center px-6 pb-24 pt-40 text-center sm:px-10 sm:pb-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.8rem,7.4vw,5.6rem)] leading-[1.02] text-cream">
            Yoga Nidra
          </h1>

          <p className="font-display mt-4 text-[clamp(1.4rem,3.2vw,2.2rem)] italic leading-[1.3] text-khaki">
            Quiet change within.
          </p>


          <div className="mx-auto mt-9 flex items-center justify-center gap-3" aria-hidden>
            <span className="h-px w-16 bg-cream/25 sm:w-24" />
            <span className="h-1 w-1 rounded-full bg-khaki/70" />
            <span className="h-px w-16 bg-cream/25 sm:w-24" />
          </div>

          <p className="mx-auto mt-9 max-w-md text-[15px] leading-[1.95] text-cream/78">
            Learn a practice that calms your nervous system, restores deep rest, and helps you bring
            more presence into everyday life.
          </p>

          <p className="label-eyebrow mt-9 text-khaki/70">Online Course · Coming Soon</p>
          <button onClick={open} className="btn-gradient mt-5">
            Join the waiting list
          </button>
        </div>
      </div>
    </section>
  );
}



/* ------------------------------------------------------------ BENEFITS */

const scienceTiles = [
  {
    icon: Moon,
    title: "The Hypnagogic State",
    body: "Between waking and sleep, the brain enters a state of exceptional receptivity. Intentions and new patterns are absorbed without resistance — below the level of logic and willpower.",
  },
  {
    icon: HeartPulse,
    title: "Nervous System Reset",
    body: "Yoga Nidra shifts the body from sympathetic (stress) to parasympathetic (rest) activation. Blood pressure lowers, cortisol drops, and the body learns how to truly let go.",
  },
  {
    icon: Waves,
    title: "Threefold Release",
    body: "Modern science identifies three layers of tension — muscular, emotional, and mental. Yoga Nidra works systematically through all three, where ordinary rest cannot reach.",
  },
];

function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-emerald px-6 py-28 sm:py-40">
      <div
        aria-hidden
        className="drift-slow pointer-events-none absolute left-1/2 top-0 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/3 rounded-full"
        style={{ background: "radial-gradient(circle, var(--khaki) 0%, transparent 62%)", opacity: 0.07 }}
      />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.3] text-cream">
            We try to change through effort.{" "}
            <em className="italic text-khaki">More discipline. More willpower. More thinking.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[2] text-cream/72">
            But the patterns that shape us — the way we react, the thoughts that loop, the tension we
            carry — do not live in the thinking mind. They live deeper. Yoga Nidra reaches that place.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border border-khaki/15 md:grid-cols-3">
          {scienceTiles.map((tile, i) => (
            <Reveal key={tile.title} delay={i * 120}>
              <article className="h-full border-b border-khaki/15 bg-emerald px-8 py-12 transition-colors duration-700 last:border-0 hover:bg-emerald-deep md:border-b-0 md:border-r md:px-10 md:py-14">
                <tile.icon className="h-5 w-5 text-khaki" strokeWidth={1} />
                <span className="label-eyebrow mt-8 block text-cream/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-2xl text-cream">{tile.title}</h3>
                <p className="mt-5 text-[14px] leading-[1.85] text-cream/70">{tile.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- WHAT IS */


function WhatIs() {
  const { ref, offset } = useParallax(0.12);

  return (
    <section id="practice" className="relative bg-cream px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          <Reveal className="order-2 lg:order-1">
            <div ref={ref} className="relative">
              <div
                aria-hidden
                className="absolute -left-4 -top-4 hidden h-full w-full border border-earth/20 sm:block"
              />
              <img
                src={branchShadow}
                alt="Shadows of bare branches on a warm plaster wall"
                loading="lazy"
                width={1280}
                height={1600}
                className="relative aspect-[4/5] w-full object-cover"
                style={{ transform: `translateY(${offset * 0.2}px)` }}
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionHeading eyebrow="What is Yoga Nidra">
              A state of conscious <em className="italic">deep rest</em>
            </SectionHeading>
            <div className="mt-7 max-w-xl space-y-5 text-[15px] leading-[1.95] text-noir/75">
              <p>
                Yoga Nidra is the threshold between waking and sleep — where the body relaxes
                completely while awareness remains awake. An ancient practice, refined over
                centuries, now studied by modern neuroscience.
              </p>
              <p>
                In this state the mind becomes extraordinarily receptive. Tension held in the
                muscles, emotions, and thoughts begins to dissolve — not through effort, but through
                awareness. A single session can provide rest equivalent to several hours of ordinary
                sleep.
              </p>
              <p>It is at once profoundly simple and profoundly transformative.</p>
            </div>
          </Reveal>
        </div>

        {/* editorial pause — intentionally centred, independent of the grid */}
        <Reveal delay={100}>
          <blockquote className="mx-auto mt-28 max-w-3xl text-center sm:mt-36">
            <span aria-hidden className="mx-auto block h-8 w-px bg-earth/40" />
            <p className="font-display mt-8 text-[clamp(1.35rem,2.4vw,1.9rem)] italic leading-[1.55] text-emerald">
              “Relaxation does not mean sleep. Relaxation means to be blissfully happy. Sleep gives
              only mind and sense relaxation. Yoga Nidra relaxes the inner self.”
            </p>
            <cite className="label-eyebrow mt-7 block not-italic text-wasabi">
              — Swami Satyananda Saraswati
            </cite>
            <span aria-hidden className="mx-auto mt-8 block h-8 w-px bg-earth/40" />
          </blockquote>
        </Reveal>

        <div className="mt-28 grid gap-12 sm:mt-36 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

          <Reveal>
            <h3 className="font-display text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.25] text-emerald">
              Practiced regularly, it does not just relax you.{" "}
              <em className="italic text-earth">It gently rewrites what is underneath.</em>
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-[15px] leading-[2] text-noir/75">
              <p>
                Our habits, reactions and inner narratives are not stored in the conscious mind. They
                live in the subconscious — where willpower cannot reach. This is why so much personal
                change feels like pushing against a wall.
              </p>
              <p>
                Yoga Nidra works precisely at this layer. Through the practice, the mind enters a
                state of profound receptivity, where new intentions, patterns, and impressions can be
                planted and old ones gently released.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- COURSE */

const courseBenefits = [
  "Sleep that returns on its own",
  "A nervous system that learns to settle",
  "Rest deeper than sleeping",
  "Less anxiety, more space",
  "Steadier emotional ground",
  "Recovery from long stress",
];

const coursePillars = [
  {
    icon: Headphones,
    title: "What to expect",
    body: "Professionally recorded Yoga Nidra practices you can return to at any hour, in your own room, at your own pace.",
  },
  {
    icon: Feather,
    title: "How to use the course",
    body: "Separate recordings for sleep, for anxious days, for deep rest, and for working with sankalpa — your own heartfelt intention.",
  },
  {
    icon: Sunrise,
    title: "A beginning for beginners",
    body: "Clear guidance on what Yoga Nidra is, how to lie down, what to expect, and why nothing you feel is wrong.",
  },
  {
    icon: Compass,
    title: "Why this course",
    body: "One practice, taught deeply — in the same voice and the same spirit as the live workshops, recorded slowly and carefully.",
  },
  {
    icon: Layers,
    title: "Course structure",
    body: "A gentle sequence: understanding first, then guided practice, then a library you can keep returning to for years.",
  },
];

function Course() {
  const { open } = useReserve();

  return (
    <section id="course" className="relative overflow-hidden bg-emerald-deep">
      <img
        src={courseMist}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.263 0.028 166 / 0.95) 0%, oklch(0.263 0.028 166 / 0.55) 45%, oklch(0.263 0.028 166 / 0.96) 100%)",
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-28 pt-28 sm:pb-40 sm:pt-40">
        <div className="grid items-start gap-y-10 lg:grid-cols-[0.86fr_1.14fr] lg:grid-rows-[auto_1fr] lg:gap-x-0">
          {/* intro — column one, row one */}
          <Reveal className="lg:col-start-1 lg:row-start-1 lg:pr-20">
            <span className="label-eyebrow text-khaki">Coming Soon</span>
            <h2 className="font-display mt-6 text-[clamp(2.3rem,4.4vw,3.9rem)] leading-[1.05] text-cream">
              The Yoga Nidra <em className="italic text-khaki">Course</em>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[2] text-cream/75">
              A library of recorded Yoga Nidra sessions you can lie down with whenever the day asks too
              much of you. When it opens, those on the waiting list will hear first.
            </p>
            <button onClick={open} className="btn-gradient mt-10">
              Join the waiting list
            </button>
          </Reveal>

          {/* photograph — bleeds off the right edge and spans both rows */}
          <Reveal
            delay={80}
            className="-mx-6 sm:mx-0 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full lg:-mt-16 lg:-mr-[7vw]"
          >
            <figure className="relative h-full">
              <img
                src={restHuman}
                alt="A woman lying on her back on a cream mat with her eyes closed, resting under a sage linen blanket in morning light"
                loading="lazy"
                decoding="async"
                width={1280}
                height={1600}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-full w-full object-cover aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[680px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, oklch(0.263 0.028 166 / 0.42) 0%, transparent 34%), linear-gradient(180deg, oklch(0.263 0.028 166 / 0.22) 0%, transparent 30%, oklch(0.263 0.028 166 / 0.3) 100%)",
                }}
              />
              <figcaption className="label-eyebrow absolute bottom-5 left-6 text-cream/55 sm:left-8">
                Savasana — the shape of the practice
              </figcaption>
            </figure>
          </Reveal>

          {/* what the practice supports — column one, row two */}
          <Reveal delay={120} className="lg:col-start-1 lg:row-start-2 lg:pr-20 lg:pt-2">
            <p className="label-eyebrow text-cream/45">What the practice supports</p>
            <ul className="mt-6">
              {courseBenefits.map((b) => (
                <li
                  key={b}
                  className="font-display flex items-baseline gap-3 border-b border-cream/10 py-4 text-[1.1rem] text-cream/85"
                >
                  <span className="text-[10px] text-khaki">✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-x-16 gap-y-2 sm:mt-32 sm:grid-cols-2 lg:grid-cols-3">
          {coursePillars.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="grid h-full grid-cols-[auto_1fr] gap-5 border-t border-cream/10 py-8">
                <item.icon className="mt-1 h-5 w-5 shrink-0 text-khaki" strokeWidth={1} />
                <div className="min-w-0">
                  <h3 className="font-display text-[1.35rem] text-cream">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.85] text-cream/68">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}

/* ------------------------------------------------------- DAILY PRACTICE */

const useItems = [
  {
    title: "As a Standalone Practice",
    body: "Twenty minutes of Yoga Nidra can restore the body more deeply than several hours of ordinary sleep. A practice you can return to whenever you need to reset.",
  },
  {
    title: "To Complete Your Yoga Practice",
    body: "The final integration of any yoga session. Where asana releases the body and pranayama settles the breath, Yoga Nidra integrates everything into stillness.",
  },
  {
    title: "For Stress, Sleep, and Anxiety",
    body: "A direct tool to calm an overactive nervous system. Used regularly, it restores natural sleep, eases anxiety, and creates a felt sense of safety in the body.",
  },
  {
    title: "To Work with Sankalpa",
    body: "A short, heartfelt intention planted at the deepest level of the mind. This is how Yoga Nidra becomes a vehicle for real, lasting change.",
  },
];

function UseItem({ item, index }: { item: (typeof useItems)[number]; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <div className="grid gap-3 border-t border-emerald/12 py-9 sm:grid-cols-[4rem_1fr] sm:gap-8">
        <span className="font-display block text-[2rem] italic leading-none tabular-nums text-earth/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.3fr] lg:gap-12">
          <h3 className="font-display text-[1.5rem] leading-snug text-emerald">{item.title}</h3>
          <p className="max-w-xl text-[14.5px] leading-[1.9] text-noir/72">{item.body}</p>
        </div>
      </div>
    </Reveal>
  );
}

function DailyPractice() {
  return (
    <section id="daily" className="overflow-hidden bg-cream-soft px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-y-8 lg:grid-cols-[1.32fr_0.68fr] lg:grid-rows-[auto_1fr] lg:gap-x-16">
        <Reveal className="lg:col-start-1 lg:row-start-1">
          <div className="max-w-2xl">
            <SectionHeading eyebrow="Daily Practice">
              A quiet place in <em className="italic text-earth">every day</em>
            </SectionHeading>
            <p className="mt-7 max-w-md text-[15px] leading-[1.95] text-noir/70">
              A mat unrolled by a window. A blanket folded at the end of the day. The practice asks
              for very little room.
            </p>
          </div>
        </Reveal>

        {/* small lifestyle detail — participates in the grid, half-bleeds on mobile */}
        <Reveal
          delay={140}
          className="order-3 -mr-6 sm:mr-0 lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-mr-[4vw] lg:self-start"
        >
          <figure className="relative ml-10 sm:ml-0 lg:mt-12">
            <img
              src={dailyLight}
              alt="Morning light through a sheer curtain across a folded linen blanket, a rolled mat and a small plant"
              loading="lazy"
              decoding="async"
              width={1024}
              height={1280}
              sizes="(min-width: 1024px) 30vw, 70vw"
              className="aspect-[3/4] w-full object-cover lg:aspect-[5/6]"
            />
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b border-l border-earth/25 sm:block"
            />
          </figure>
        </Reveal>

        {/* the four practices */}
        <div className="order-2 mt-6 self-start lg:order-none lg:col-start-1 lg:row-start-2 lg:mt-10">
          {useItems.map((item, i) => (
            <UseItem key={item.title} item={item} index={i} />
          ))}
          <div className="border-t border-emerald/12" />
        </div>

      </div>
    </section>
  );
}


/* ----------------------------------------------------------- WORKSHOPS */

const workshopNotes = [
  {
    icon: MapPin,
    title: "Different places, different seasons",
    body: "Each gathering takes place somewhere new — a studio, a retreat space, a quiet room borrowed for an afternoon.",
  },
  {
    icon: Feather,
    title: "The practice, in person",
    body: "Gentle movement, breath, a little of the science, and a full guided Yoga Nidra — experienced in a shared room rather than alone.",
  },
  {
    icon: Mail,
    title: "Announced by letter",
    body: "Dates are shared through the newsletter first. There is no fixed calendar; when one opens, subscribers hear about it.",
  },
];

function Workshops() {
  return (
    <section id="workshops" className="relative bg-cream px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="label-eyebrow text-earth">Workshops</span>
              <h2 className="font-display mt-5 text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.15] text-emerald">
                <Link
                  to="/yoga-nidra-workshop"
                  className="link-quiet inline-block cursor-pointer no-underline"
                >
                  Occasional live <em className="italic text-earth">gatherings</em>
                </Link>
              </h2>
              <p className="mt-7 max-w-md text-[15px] leading-[1.95] text-noir/72">
                Alongside the course, Megie holds occasional in-person workshops — seasonal, pop-up
                sessions in changing locations. They are not the heart of the offering; they are an
                invitation to experience Yoga Nidra in a shared room, guided live.
              </p>
              <p className="mt-5 max-w-md text-[15px] leading-[1.95] text-noir/72">
                They are announced through the newsletter, whenever the next one finds its place and
                date.
              </p>
              <Link
                to="/yoga-nidra-workshop"
                className="link-arrow hover-lift mt-9 inline-flex items-center gap-2 text-[13px] tracking-[0.16em] text-emerald uppercase"
              >
                Curious to know more?
                <span aria-hidden className="link-arrow-mark">
                  →
                </span>
              </Link>
            </div>
          </Reveal>


          <Reveal delay={140}>
            <div className="space-y-2">
              {workshopNotes.map((item) => (
                <div
                  key={item.title}
                  className="grid grid-cols-[auto_1fr] gap-5 border-t border-earth/20 py-8"
                >
                  <item.icon className="mt-1 h-5 w-5 shrink-0 text-earth" strokeWidth={1} />
                  <div>
                    <h3 className="font-display text-[1.4rem] text-emerald">{item.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.85] text-noir/72">{item.body}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-earth/20" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ FAQ */

const faqItems = [
  "Do I need any experience with yoga or meditation?",
  "What do I need in order to practise?",
  "How long is a single session?",
  "What if I fall asleep?",
  "When does the course open?",
  "How will I hear about upcoming workshops?",
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream-soft px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading eyebrow="FAQ">
              Questions, <em className="italic text-earth">answered quietly</em>
            </SectionHeading>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 max-w-3xl">
          {faqItems.map((q, i) => (
            <Reveal key={q} delay={i * 70}>
              <div className="border-t border-emerald/12">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                >
                  <span className="font-display text-[1.25rem] leading-snug text-emerald sm:text-[1.4rem]">
                    {q}
                  </span>
                  <Plus
                    className={`h-4 w-4 shrink-0 text-earth transition-transform duration-500 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                    strokeWidth={1.25}
                  />
                </button>
                <div
                  className="grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: openIndex === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-8 text-[14.5px] leading-[1.9] text-noir/60">
                      The answer to this question is being written. It will appear here soon.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-emerald/12" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- CONTACT */

function Contact() {
  const { open } = useReserve();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(readForm(e.currentTarget), ["email"]);
    setError(found["email"] ?? null);
    if (!found["email"]) setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-emerald-deep px-6 py-32 sm:py-44">
      <div
        aria-hidden
        className="drift-slower pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, var(--khaki) 0%, transparent 62%)", opacity: 0.07 }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.9rem)] italic leading-[1.45] text-khaki">
            “Once you understand it,
            <br />
            it belongs to you forever.”
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-20 grid max-w-4xl gap-14 border-t border-cream/12 pt-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="label-eyebrow text-khaki">Stay Close</span>
              <h3 className="font-display mt-5 text-[clamp(1.7rem,2.8vw,2.3rem)] leading-[1.2] text-cream">
                Letters from the <em className="italic">stillness</em>
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-[1.9] text-cream/70">
                Occasional notes on rest, the nervous system, and the practice — plus the first word
                when the Yoga Nidra course opens and when a workshop is announced.
              </p>
              <div className="mt-8 flex justify-center">
                <button onClick={open} className="btn-gradient">
                  Join the waiting list
                </button>
              </div>

            </div>

            <div className="lg:pt-2">
              {sent ? (
                <p role="status" className="font-display text-[1.4rem] italic text-cream/85">
                  Thank you. You will hear from us when there is something quiet and worth reading.
                </p>
              ) : (
                <form onSubmit={submit} noValidate className="w-full">
                  <label className="block">
                    <span className="label-eyebrow text-cream/70">Email address</span>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      aria-invalid={error ? true : undefined}
                      aria-describedby={error ? "home-newsletter-error" : undefined}
                      className={`mt-3 min-h-[44px] w-full border-b bg-transparent pb-3 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/45 focus:border-khaki ${
                        error ? "border-khaki" : "border-cream/30"
                      }`}
                    />
                    {error ? (
                      <span id="home-newsletter-error" className="mt-2 block text-[12px] text-khaki">
                        {error}
                      </span>
                    ) : null}
                  </label>
                  <button type="submit" className="btn-quiet mt-7 text-cream/70">
                    Subscribe
                  </button>
                </form>
              )}
              <p className="mt-10 text-[14px] leading-[1.9] text-cream/55">
                Guided by <span className="text-cream/85">Megie Santana</span> — warm, precise
                teaching of one practice, deeply, so you can carry it into your life.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

