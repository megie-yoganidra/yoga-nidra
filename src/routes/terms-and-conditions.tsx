import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { LegalPage, LegalSection } from "@/components/site/legal-page";
import { seo, breadcrumbs } from "@/lib/site";

const meta = seo({
  title: "Terms & Conditions — Yoga Nidra",
  description:
    "The terms for using this website and for taking part in the Yoga Nidra course and workshops — written plainly, to be reviewed as bookings open.",
  path: "/terms-and-conditions",
});

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: meta.meta,
    links: meta.links,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbs([
            { name: "Home", path: "/" },
            { name: "Terms & Conditions", path: "/terms-and-conditions" },
          ]),
        ),
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <LegalPage
        eyebrow="Legal"
        title="Terms & Conditions"
        intro="A starter set of terms for this website, the upcoming Yoga Nidra course and the occasional live gatherings. These will be finalised before bookings and payments open."
      >
        <LegalSection title="Using this website">
          <p>
            You are welcome to read, share and link to this website. Please use it lawfully and do not
            attempt to disrupt it or misuse the forms it offers.
          </p>
        </LegalSection>

        <LegalSection title="The nature of the content">
          <p>
            Yoga Nidra is a practice of guided deep rest. Everything here is educational and supportive
            in nature. It is not medical advice, diagnosis or treatment, and it does not replace care
            from a qualified health professional. If you have a health condition, are pregnant, or are
            receiving treatment for a mental-health condition, please seek advice before beginning a new
            practice.
          </p>
        </LegalSection>

        <LegalSection title="Taking part">
          <p>
            You take part in the course and in workshops at your own responsibility. Please rest within
            your own comfort, adapt anything that does not suit your body, and stop if something feels
            wrong.
          </p>
        </LegalSection>

        <LegalSection title="Intellectual property">
          <p>
            The recordings, written material, imagery and design of this website belong to Megie
            Santana unless stated otherwise. They are for your personal practice — please do not copy,
            resell or redistribute them.
          </p>
        </LegalSection>

        <LegalSection title="Bookings">
          <p>
            Places at a gathering are confirmed once a reservation is completed and, where applicable,
            payment is received. Booking details will be described here in full when the reservation
            system opens.
          </p>
        </LegalSection>

        <LegalSection title="Cancellations and refunds">
          <p>
            A cancellation and refund policy will be published before paid bookings are accepted. If a
            gathering is cancelled by us, you will be offered a place at the next one or a full refund.
          </p>
        </LegalSection>

        <LegalSection title="External links and services">
          <p>
            This website may link to or rely on external services. We are not responsible for their
            content or their own terms.
          </p>
        </LegalSection>

        <LegalSection title="Limitation">
          <p>
            To the extent permitted by law, liability is limited to the amount you paid for the course
            or workshop concerned. Nothing here limits rights that cannot lawfully be limited.
          </p>
        </LegalSection>

        <LegalSection title="Changes to these terms">
          <p>
            These terms may be updated as the offering grows. The version shown on this page is the one
            that applies.
          </p>
        </LegalSection>

        <LegalSection title="Contact">
          <p>
            Questions can be sent through the contact section of the{" "}
            <Link to="/" hash="contact" className="text-earth underline-offset-4 hover:underline">
              homepage
            </Link>
            . See also the{" "}
            <Link to="/privacy-policy" className="text-earth underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </LegalSection>
      </LegalPage>
    </PageShell>
  );
}
