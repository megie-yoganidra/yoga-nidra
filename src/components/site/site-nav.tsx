import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useReserve } from "./reserve-context";
import { useScrollspy } from "@/hooks/use-scrollspy";

export const navLinks = [
  { id: "top", label: "Home" },
  { id: "practice", label: "What is Yoga Nidra?" },
  { id: "course", label: "Course" },
  { id: "daily", label: "Daily Practice" },
  { id: "workshops", label: "Workshops" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

/** Anchor on the homepage, cross-page hash link everywhere else. */
function SectionLink({
  id,
  isHome,
  className,
  onClick,
  children,
  ariaCurrent,
}: {
  id: string;
  isHome: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
  ariaCurrent?: boolean;
}) {
  if (isHome) {
    return (
      <a
        href={`#${id}`}
        onClick={onClick}
        className={className}
        aria-current={ariaCurrent ? "true" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to="/" hash={id} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useReserve();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const ids = useMemo(() => navLinks.map((l) => l.id), []);
  const spy = useScrollspy(isHome ? ids : []);
  const active = isHome ? spy : "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const light = !scrolled || menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          !scrolled || menuOpen
            ? "border-b border-transparent"
            : "border-b border-emerald/10 bg-cream/90 backdrop-blur-xl"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-5 sm:h-[72px] sm:px-9">
          <Link
            to="/"
            className={`label-eyebrow flex shrink-0 items-center gap-2 whitespace-nowrap transition-colors ${
              light ? "text-cream/75" : "text-emerald/70"
            }`}
          >
            <span className="hidden sm:inline">Yoga Nidra</span>
            {/* current section name — always visible */}
            <span aria-hidden className="opacity-40">
              /
            </span>
            <span className={light ? "text-khaki" : "text-earth"}>
              {isHome ? (navLinks.find((l) => l.id === active)?.label ?? "Home") : "Workshop"}
            </span>
          </Link>

          <ul className="hidden items-center gap-7 xl:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <SectionLink
                  id={link.id}
                  isHome={isHome}
                  ariaCurrent={active === link.id}
                  className={`label-eyebrow relative py-1 transition-colors duration-300 ${
                    active === link.id
                      ? light
                        ? "text-khaki"
                        : "text-earth"
                      : light
                        ? "text-cream/60 hover:text-cream"
                        : "text-emerald/55 hover:text-emerald"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-500 ${
                      active === link.id ? "w-full" : "w-0"
                    }`}
                  />
                </SectionLink>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-4">
            <button
              onClick={open}
              className="btn-gradient hidden !px-5 !py-2.5 !text-[10px] whitespace-nowrap xl:inline-flex"
            >
              Join the waiting list
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`-mr-1 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border transition-colors ${
                light ? "border-cream/30 text-cream" : "border-emerald/20 text-emerald"
              }`}
            >
              <span
                className={`block h-px w-4 bg-current transition-transform duration-500 ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-current transition-transform duration-500 ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen quiet menu */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto overflow-x-hidden transition-[opacity,visibility] duration-700 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="grain absolute inset-0 bg-emerald-deep" />
        <div
          aria-hidden
          className="drift-slow pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, var(--khaki) 0%, transparent 65%)",
            opacity: 0.08,
          }}
        />
        <div className="relative flex min-h-full flex-col justify-center px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-24 sm:px-12">
          <ul className="mx-auto w-full max-w-[1400px]">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <SectionLink
                  id={link.id}
                  isHome={isHome}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display flex min-h-[48px] items-baseline gap-4 border-b border-cream/10 py-3 text-[1.35rem] leading-tight transition-colors sm:text-[1.7rem] ${
                    active === link.id ? "text-khaki" : "text-cream/80 hover:text-khaki"
                  }`}
                >
                  <span className="label-eyebrow w-6 shrink-0 text-khaki/45">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <em className="italic">{link.label}</em>
                </SectionLink>
              </li>
            ))}
            <li>
              <Link
                to="/yoga-nidra-workshop"
                onClick={() => setMenuOpen(false)}
                className="font-display flex min-h-[48px] items-baseline gap-4 border-b border-cream/10 py-3 text-[1.35rem] leading-tight text-cream/80 transition-colors hover:text-khaki sm:text-[1.7rem]"
              >
                <span className="label-eyebrow w-6 shrink-0 text-khaki/45">08</span>
                <em className="italic">Workshop</em>
              </Link>
            </li>
          </ul>
          <div className="mx-auto mt-9 w-full max-w-[1400px]">
            <button
              onClick={() => {
                setMenuOpen(false);
                open();
              }}
              className="btn-gradient w-full sm:w-auto"
            >
              Join the waiting list
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
