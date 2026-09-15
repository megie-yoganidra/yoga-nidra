import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { LegalPage, LegalSection } from "@/components/site/legal-page";
import { seo, breadcrumbs } from "@/lib/site";

const meta = seo({
  title: "Privacy Policy — Yoga Nidra",
  description:
    "How information shared through the Yoga Nidra website — newsletter signups, waiting list and workshop enquiries — is handled and protected.",
  path: "/privacy-policy",
});

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: meta.meta,
    links: meta.links,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PageShell>
      <LegalPage
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This is a starter policy describing, in plain language, how information shared through this website is handled. It will be reviewed and expanded as the course and workshops develop."
      >
        <LegalSection title="Information you may provide">
          <p>
            You can browse this website without giving us anything. Information reaches us only when
            you choose to send it — for example when you join the waiting list, subscribe to the
            newsletter, or enquire about a workshop. This is typically your name and email address,
            plus anything you write in a message.
          </p>
        </LegalSection>

        <LegalSection title="Newsletter and waiting list">
          <p>
            If you join the waiting list or newsletter, your details are used to let you know when the
            Yoga Nidra course opens and when gatherings are announced. Nothing else. You can ask to be
            removed at any time and your details will be deleted.
          </p>
        </LegalSection>

        <LegalSection title="Workshop and course enquiries">
          <p>
            Details you send about a workshop or the course are used to answer you and, where relevant,
            to organise your place. If a booking or payment system is added later, this policy will be
            updated to describe it before it is used.
          </p>
        </LegalSection>

        <LegalSection title="Analytics and cookies">
          <p>
            This website is intentionally light. Where measurement or cookies are used, they are
            described on the{" "}
            <Link to="/third-party-cookies" className="text-earth underline-offset-4 hover:underline">
              Third-Party Cookies
            </Link>{" "}
            page. We do not make claims here about tools that are not actually in use.
          </p>
        </LegalSection>

        <LegalSection title="Third-party services">
          <p>
            Some parts of the site may rely on external providers for hosting, fonts, email delivery or
            embedded media. These providers process only what is technically necessary to deliver the
            service you requested.
          </p>
        </LegalSection>

        <LegalSection title="How information is used">
          <p>
            To reply to you, to send the updates you asked for, and to keep the website working. Your
            information is not sold, and it is not shared for advertising.
          </p>
        </LegalSection>

        <LegalSection title="Retention">
          <p>
            Information is kept only as long as it serves the purpose you gave it for — for example,
            until the course launches, until an enquiry is resolved, or until you unsubscribe.
          </p>
        </LegalSection>

        <LegalSection title="Your rights">
          <p>
            You may ask what information is held about you, ask for it to be corrected, ask for it to be
            deleted, or withdraw consent for future emails. Write to us and we will act on it.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Questions about privacy can be sent through the contact section of the{" "}
            <Link to="/" hash="contact" className="text-earth underline-offset-4 hover:underline">
              homepage
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="Updates to this policy">
          <p>
            This policy will change as the website grows. The current version is always the one shown on
            this page.
          </p>
        </LegalSection>
      </LegalPage>
    </PageShell>
  );
}
