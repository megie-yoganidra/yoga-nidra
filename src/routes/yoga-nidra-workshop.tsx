import { createFileRoute, Link } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { readForm, validate, type Errors } from "@/lib/form-validation";

import workshopPlaster from "@/assets/workshop-hero-plaster.jpg";
import courseMist from "@/assets/course-mist-wide.jpg";
import sharedRoom from "@/assets/workshop-shared-room.jpg";

import {
  IconArrive,
  IconAsana,
  IconBreath,
  IconRest,
  IconHeartSpace,
  IconIntegration,
  IconSpark,
  IconClock,
  IconGroup,
  IconBlanket,
  IconLeaf,
} from "@/components/site/workshop-icons";


import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";
import { seo, breadcrumbs, SITE_URL } from "@/lib/site";

/**
 * Set to a workshop object when a date is scheduled; keep null when none is
 * planned — the page then invites visitors to the newsletter instead.
 */
const nextWorkshop: {
  location: string;
  date: string;
  time: string;
  duration: string;
  availability: string;
  price: string;
} | null = null;

const meta = seo({
  title: "Yoga Nidra Workshop — 90 Minutes of Deep Rest",
  description:
    "A 90-minute Yoga Nidra workshop to understand and experience the practice: gentle asana, pranayama, a full guided Yoga Nidra and heart-space meditation.",
  ogTitle: "Yoga Nidra Workshop",
  ogDescription: "90 minutes to understand and experience the practice.",
  path: "/yoga-nidra-workshop",
});

export const Route = createFileRoute("/yoga-nidra-workshop")({
  head: () => ({
    meta: meta.meta,
    links: meta.links,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Yoga Nidra Workshop", path: "/yoga-nidra-workshop" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Yoga Nidra Workshop",
          description: "90 minutes to understand and experience the practice.",
          url: `${SITE_URL}/yoga-nidra-workshop`,
        }),
      },
    ],
  }),
  component: WorkshopPage,
});

function WorkshopPage() {
  return (
    <PageShell>
      <WorkshopHero />
      <Explore />
      <Journey />
      <ForMe />
      <NextWorkshop />
      {nextWorkshop ? <Registration /> : null}
      <CourseBridge />
    </PageShell>
  );
}

/* -------------------------------------------------------- VISUAL PAUSES */







/* ---------------------------------------------------------------- HERO */

/** Oversized abstract circle + flowing lines, drawn from the Synergias mark. */
function SynergiasArc({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.9}
      strokeLinecap="round"
    >
      <circle cx="300" cy="300" r="280" />
      <circle cx="300" cy="300" r="272" opacity="0.4" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path
          key={i}
          d={`M60 ${330 + i * 17}c70-${26 + i * 3} 140-${26 + i * 3} 210 0s140 ${26 + i * 3} 280 ${4 + i * 2}`}
          opacity={0.75 - i * 0.07}
        />
      ))}
    </svg>
  );
}

function WorkshopHero() {
  return (
    <section id="top" className="relative min-h-[86svh] overflow-hidden bg-emerald-deep">
      <img
        src={workshopPlaster}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        decoding="async"
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-[70%_40%]"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.263 0.028 166 / 0.94) 0%, oklch(0.263 0.028 166 / 0.72) 46%, oklch(0.334 0.031 165 / 0.42) 100%)",
        }}
      />

      {/* oversized abstract artwork — crops further off-screen on small viewports */}
      <SynergiasArc className="pointer-events-none absolute -right-[38%] top-[8%] h-[86%] w-auto text-khaki/25 sm:-right-[18%] lg:-right-[6%]" />

      {/* restrained band of dark water along the bottom edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[16%] sm:h-[18%]"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.263 0.028 166 / 0) 0%, oklch(0.24 0.034 190 / 0.85) 35%, oklch(0.2 0.036 195 / 0.96) 100%)",
        }}
      />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto flex min-h-[86svh] max-w-[1400px] flex-col justify-end px-6 pb-28 pt-36 sm:px-9 sm:pb-32">
        <Reveal>
          <nav aria-label="Breadcrumb" className="label-eyebrow text-cream/45">
            <Link to="/" className="transition-colors hover:text-khaki">
              Home
            </Link>
            <span aria-hidden className="px-2 opacity-50">
              /
            </span>
            <span className="text-khaki">Workshop</span>
          </nav>
        </Reveal>

        <Reveal delay={120}>
          <p className="label-eyebrow mt-10 text-khaki">Yoga Nidra Workshop</p>
          <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.6rem,7vw,5.2rem)] leading-[1.02] text-cream">
            Yoga Nidra
          </h1>
          <p className="font-display mt-4 max-w-xl text-[clamp(1.4rem,3.2vw,2.1rem)] italic leading-[1.3] text-khaki">
            Quiet change
          </p>
          <p className="mt-7 max-w-xl text-[15px] leading-[1.95] text-cream/70">
            An invitation to meet Yoga Nidra fully — not just as something to try, but as something to
            understand and take home with you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}


/* ------------------------------------------------------- WHAT WE EXPLORE */

const exploreItems = [
  {
    title: "Asana",
    body: "Gentle movement to release physical tension and prepare the body for stillness.",
    Icon: IconAsana,
  },
  {
    title: "Pranayama",
    body: "How breath directly regulates the nervous system, with practical tools.",
    Icon: IconBreath,
  },
  {
    title: "Practice & Science",
    body: "Where Yoga Nidra comes from and what research tells us about its effects.",
    Icon: IconIntegration,
  },
  {
    title: "Guided Yoga Nidra",
    body: "A full experience of the practice so you know exactly how it feels.",
    Icon: IconRest,
  },
];

function Explore() {
  return (
    <section className="relative bg-cream px-6 pb-0 pt-24 sm:pt-32">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <h2 className="font-display text-center text-[clamp(1.5rem,2.6vw,2rem)] italic text-emerald">
            <span aria-hidden className="mr-3 text-earth/60">
              ·
            </span>
            What we explore together
            <span aria-hidden className="ml-3 text-earth/60">
              ·
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {exploreItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <article className="border-t border-emerald/12 pt-6">
                <h3 className="font-display flex items-center text-[1.4rem] text-emerald">
                  <item.Icon className="mr-3 h-[1.15em] w-[1.15em] shrink-0 text-earth/75" />
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-[1.95] text-noir/65">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* the practice itself, on the same grid as the four items above */}
        <div className="relative z-10 mt-14 grid items-start gap-x-16 gap-y-10 pb-16 sm:mt-14 sm:grid-cols-2 sm:pb-20 lg:-mb-28 lg:pb-0">
        <Reveal delay={140}>
          <article className="border-t border-emerald/12 pt-6">
            <h3 className="font-display flex items-center text-[1.4rem] text-emerald">
              <IconHeartSpace className="mr-3 h-[1.15em] w-[1.15em] shrink-0 text-earth/75" />
              Hridayakasha Dharana
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-[1.95] text-noir/65">
              Meditation on the inner space of the heart — the natural companion to Yoga Nidra.
            </p>
          </article>
        </Reveal>

        <Reveal>
          <figure>
            <img
              src={sharedRoom}
              alt="Several people resting under sage wool blankets on mats in a warm daylight room during a Yoga Nidra workshop, one woman resting in the foreground"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1200}
              sizes="(min-width: 640px) 46vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </Reveal>
        </div>
      </div>
    </section>
  );
}



/* --------------------------------------------------------------- JOURNEY */

const journey = [
  {
    title: "Arrive & settle",
    body: "A few moments to land, slow down and arrive in the space.",
    Icon: IconArrive,
  },
  {
    title: "Gentle movement",
    body: "Simple asana to release tension and prepare the body for stillness.",
    Icon: IconAsana,
  },
  {
    title: "Breath & understanding",
    body: "Explore pranayama, the nervous system and the foundations behind the practice.",
    Icon: IconBreath,
  },
  {
    title: "Guided Yoga Nidra",
    body: "Lie down and experience a complete guided practice.",
    Icon: IconRest,
  },
  {
    title: "Hridayakasha Dharana",
    body: "Close with meditation on the inner space of the heart and a quiet period of integration.",
    Icon: IconHeartSpace,
  },
];

function Journey() {
  return (
    <section className="relative overflow-hidden bg-emerald px-6 pb-24 pt-40 sm:pb-32 sm:pt-52">
      <img
        src={courseMist}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.334 0.031 165 / 0.92) 0%, oklch(0.263 0.028 166 / 0.95) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[900px]">
        <Reveal>
          <p className="label-eyebrow text-khaki">The rhythm of the evening</p>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] text-cream">
            The 90-minute <em className="italic text-khaki">journey</em>
          </h2>
        </Reveal>

        {/* a single hairline runs behind the markers: surface → depth */}
        <ol className="relative mt-14 pl-[3.6rem] sm:pl-[4.6rem]">
          <span
            aria-hidden
            className="absolute bottom-10 left-[1.4rem] top-10 w-px bg-cream/18 sm:left-[1.9rem]"
          />
          {journey.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="relative py-6 sm:py-7">
                <span
                  aria-hidden
                  className="absolute -left-[3.6rem] top-6 grid h-[2.8rem] w-[2.8rem] place-items-center rounded-full border border-cream/15 bg-emerald-deep sm:-left-[4.6rem] sm:h-[3.8rem] sm:w-[3.8rem]"
                >
                  <step.Icon className="h-[1.35rem] w-[1.35rem] text-khaki/80 sm:h-[1.6rem] sm:w-[1.6rem]" />
                </span>
                <h3 className="font-display text-[1.35rem] italic text-cream">{step.title}</h3>
                <p className="mt-2 max-w-lg text-[15px] leading-[1.95] text-cream/60">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- IS THIS FOR ME */

const curiousAbout = [
  { label: "deep rest", Icon: IconBlanket },
  { label: "stress and nervous-system regulation", Icon: IconLeaf },
  { label: "meditation", Icon: IconHeartSpace },
  { label: "sleep", Icon: IconRest },
  { label: "developing a personal Yoga Nidra practice", Icon: IconClock },
  {
    label: "understanding the practice beyond simply listening to a recording",
    Icon: IconGroup,
  },
];

function ForMe() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] text-emerald">
            Is this <em className="italic text-earth">for me?</em>
          </h2>
          <span aria-hidden className="mt-6 block h-px w-16 bg-earth/40" />
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-[15px] leading-[1.95] text-noir/70">
            <p>
              This workshop is suitable whether Yoga Nidra is completely new to you or already part of
              your practice.
            </p>
            <p>No previous experience with yoga or meditation is required.</p>
            <p className="text-emerald/80">Come if you are curious about:</p>
            <ul className="space-y-3 border-t border-emerald/12 pt-5">
              {curiousAbout.map((item) => (
                <li key={item.label} className="flex items-start gap-3.5">
                  <item.Icon className="mt-[0.42em] h-[1.05em] w-[1.05em] shrink-0 text-earth/70" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


/* -------------------------------------------------------- NEXT WORKSHOP */

function NextWorkshop() {
  const scrollToRegistration = () => {
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="next"
      className={`relative overflow-hidden px-6 py-24 sm:py-28 ${
        nextWorkshop ? "bg-cream-soft" : "bg-emerald-deep"
      }`}
    >
      {!nextWorkshop && (
        <SynergiasArc className="pointer-events-none absolute -bottom-[46%] left-1/2 h-[80%] w-auto -translate-x-1/2 text-khaki/12" />
      )}
      <div className="relative mx-auto max-w-[900px]">
        <Reveal>
          <p className={`label-eyebrow ${nextWorkshop ? "text-earth" : "text-khaki"}`}>
            Next Workshop
          </p>
        </Reveal>

        {nextWorkshop ? (
          <Reveal delay={100}>
            <h2 className="font-display mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-[1.15] text-emerald">
              {nextWorkshop.location}
            </h2>
            <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-emerald/12 pt-8 sm:grid-cols-3">
              {(
                [
                  ["Date", nextWorkshop.date],
                  ["Time", nextWorkshop.time],
                  ["Duration", nextWorkshop.duration],
                  ["Availability", nextWorkshop.availability],
                  ["Price", nextWorkshop.price],
                ] as const
              ).map(([label, value]) => (
                <div key={label}>
                  <dt className="label-eyebrow text-wasabi">{label}</dt>
                  <dd className="mt-2 text-[15px] text-emerald">{value}</dd>
                </div>
              ))}
            </dl>
            <button onClick={scrollToRegistration} className="btn-gradient mt-10">
              Reserve your spot
            </button>
          </Reveal>
        ) : (
          <Reveal delay={100}>
            <h2 className="font-display mt-5 max-w-2xl text-[clamp(1.9rem,3.4vw,2.7rem)] leading-[1.15] text-cream">
              The next gathering is <em className="italic text-khaki">taking shape.</em>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-[1.95] text-cream/65">
              Upcoming dates and locations are shared through the newsletter.
            </p>
            <NewsletterForm />
          </Reveal>
        )}
      </div>
    </section>
  );
}


function NewsletterForm() {
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(readForm(e.currentTarget), ["email"]);
    setError(found["email"] ?? null);
    if (!found["email"]) setDone(true);
  };

  if (done) {
    return (
      <p role="status" className="mt-9 text-[15px] italic leading-[1.9] text-cream/85">
        Thank you — we will write when the next gathering is set.
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="mt-9 flex max-w-md flex-col gap-4 sm:flex-row sm:items-end"
    >
      <label className="block flex-1">
        <span className="label-eyebrow text-khaki/80">Email address</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "workshop-newsletter-error" : undefined}
          className={`mt-2 min-h-[44px] w-full border-b bg-transparent pb-2 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/45 focus:border-khaki ${
            error ? "border-khaki" : "border-cream/30"
          }`}
        />
        {error ? (
          <span id="workshop-newsletter-error" className="mt-2 block text-[12px] text-khaki">
            {error}
          </span>
        ) : null}
      </label>
      <button type="submit" className="btn-quiet hover-lift shrink-0 text-khaki">
        Subscribe
      </button>
    </form>
  );
}

/* ---------------------------------------------------------- REGISTRATION */

function Registration() {
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(readForm(e.currentTarget), ["firstName", "lastName", "email"]);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(true);
  };

  return (
    <section id="reserve" className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-[720px]">
        <Reveal>
          <p className="label-eyebrow text-earth">Reservation</p>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] leading-[1.15] text-emerald">
            Reserve your <em className="italic text-earth">spot</em>
          </h2>
        </Reveal>

        {done ? (
          <p role="status" className="mt-8 text-[15px] italic leading-[1.9] text-emerald">
            Your request is noted — we will confirm your place by email.
          </p>
        ) : (
          <Reveal delay={100}>
            <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="First name"
                  name="firstName"
                  autoComplete="given-name"
                  error={errors["firstName"]}
                />
                <Field
                  label="Last name"
                  name="lastName"
                  autoComplete="family-name"
                  error={errors["lastName"]}
                />
              </div>
              <Field
                label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                error={errors["email"]}
              />
              <button type="submit" className="btn-gradient mt-2">
                Reserve your spot
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  error?: string | undefined;
}) {
  return (
    <label className="block">
      <span className="label-eyebrow text-wasabi">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-workshop-error` : undefined}
        className={`mt-2 min-h-[44px] w-full border-b bg-transparent pb-2 text-[15px] text-emerald outline-none transition-colors focus:border-earth ${
          error ? "border-earth" : "border-emerald/25"
        }`}
      />
      {error ? (
        <span id={`${name}-workshop-error`} className="mt-2 block text-[12px] text-earth">
          {error}
        </span>
      ) : null}
    </label>
  );
}

/* --------------------------------------------------------- COURSE BRIDGE */

function CourseBridge() {
  return (
    <section className="bg-emerald px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-[820px] text-center">
        <Reveal>
          <h2 className="font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.2] text-cream">
            Prefer to practise <em className="italic text-khaki">in your own time?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-[1.95] text-cream/65">
            The upcoming Yoga Nidra course brings the practice into your own home through guided
            recordings you can return to whenever you need them.
          </p>
          <Link to="/" hash="course" className="btn-quiet mt-9 text-khaki">
            Explore the course
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
