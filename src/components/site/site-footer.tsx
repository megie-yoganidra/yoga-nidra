import { Link, useRouterState } from "@tanstack/react-router";

const sectionLinks = [
  { id: "top", label: "Home" },
  { id: "course", label: "Yoga Nidra Course" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const pageLinks = [
  { to: "/yoga-nidra-workshop", label: "Yoga Nidra Workshop" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/third-party-cookies", label: "Third-Party Cookies" },
] as const;

const linkClass =
  "block min-h-[40px] py-1 text-[13px] leading-[2.1] text-cream/75 transition-colors duration-300 hover:text-khaki focus-visible:text-khaki";

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  return (
    <footer className="bg-noir px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-[1.5rem] italic text-cream/85">Yoga Nidra</p>
            <p className="mt-3 max-w-xs text-[13.5px] leading-[1.9] text-cream/70">
              Conscious deep rest with Megie Santana — an online course, and occasional gatherings in
              person.
            </p>
          </div>

          <nav aria-label="Sections">
            <p className="label-eyebrow text-cream/65">Explore</p>
            <ul className="mt-4">
              {sectionLinks.map((link) => (
                <li key={link.id}>
                  {isHome ? (
                    <a href={`#${link.id}`} className={linkClass}>
                      {link.label}
                    </a>
                  ) : (
                    <Link to="/" hash={link.id} className={linkClass}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link to="/yoga-nidra-workshop" className={linkClass}>
                  Yoga Nidra Workshop
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="label-eyebrow text-cream/65">Legal</p>
            <ul className="mt-4">
              {pageLinks.slice(1).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-cream/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="label-eyebrow text-cream/70">Synergias · Yoga Nidra · Megie Santana</p>
          <p className="label-eyebrow text-cream/55">The quiet change within</p>
        </div>
      </div>
    </footer>
  );
}
