import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { LegalPage, LegalSection } from "@/components/site/legal-page";
import { seo, breadcrumbs } from "@/lib/site";

const meta = seo({
  title: "Third-Party Cookies — Yoga Nidra",
  description:
    "What cookies are, which ones this Yoga Nidra website may use, and how you can control them in your own browser.",
  path: "/third-party-cookies",
});

export const Route = createFileRoute("/third-party-cookies")({
  head: () => ({
    meta: meta.meta,
    links: meta.links,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Third-Party Cookies", path: "/third-party-cookies" },
          ]),
        ),
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <PageShell>
      <LegalPage
        eyebrow="Legal"
        title="Third-Party Cookies"
        intro="A plain explanation of cookies and how they relate to this website. This page will be refined as new services are introduced."
      >
        <LegalSection title="What cookies are">
          <p>
            Cookies are small files a website can store in your browser. They allow a site to remember
            something between page views — a preference, a session, or a measurement.
          </p>
        </LegalSection>

        <LegalSection title="Essential cookies">
          <p>
            Some cookies exist only to make a website work: keeping a page stable, remembering that a
            form was submitted, or protecting against abuse. These cannot meaningfully be switched off
            without breaking the site.
          </p>
        </LegalSection>

        <LegalSection title="Analytics cookies">
          <p>
            Analytics cookies count visits and show which pages are read. This website is intentionally
            minimal; where analytics are introduced, this page will name them before they are used. We
            do not claim to use tools that are not actually in place.
          </p>
        </LegalSection>

        <LegalSection title="Third-party cookies">
          <p>
            Third-party cookies are set by a domain other than this one — usually through an embedded
            service. If such a service is added, it is listed here.
          </p>
        </LegalSection>

        <LegalSection title="Embedded and external services">
          <p>
            Pages may include content served by external providers, such as fonts or hosted media.
            Those providers can see the technical request needed to deliver that content.
          </p>
        </LegalSection>

        <LegalSection title="Your cookie preferences">
          <p>
            You are always free to refuse non-essential cookies. If a preference banner is introduced,
            your choice will be respected and can be changed at any time.
          </p>
        </LegalSection>

        <LegalSection title="Controlling cookies in your browser">
          <p>
            Every major browser lets you view, block or delete cookies in its privacy settings. Blocking
            all cookies may affect how some websites behave.
          </p>
        </LegalSection>

        <LegalSection title="Related information">
          <p>
            How information is handled more generally is described in the{" "}
            <Link to="/privacy-policy" className="text-earth underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            , and the terms of use in the{" "}
            <Link to="/terms-and-conditions" className="text-earth underline-offset-4 hover:underline">
              Terms & Conditions
            </Link>
            .
          </p>
        </LegalSection>
      </LegalPage>
    </PageShell>
  );
}
