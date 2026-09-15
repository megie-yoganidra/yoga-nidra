import type { SVGProps } from "react";

/**
 * Synergias line-icon family — one consistent hairline weight, no fills,
 * always drawn in currentColor so the palette stays with the design tokens.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Seated figure — gentle movement, asana. */
export function IconAsana(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="16" cy="8.5" r="2.6" />
      <path d="M16 11.4v6.2" />
      <path d="M8 23.5c2.4-3.4 5-5.1 8-5.1s5.6 1.7 8 5.1" />
      <path d="M10.5 23.5h11" />
    </Base>
  );
}

/** Layered breath lines — pranayama. */
export function IconBreath(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12.5c2.8-2.4 5.5-2.4 8.3 0s5.5 2.4 8.3 0" />
      <path d="M5 17c2.8-2.4 5.5-2.4 8.3 0s5.5 2.4 8.3 0" />
      <path d="M5 21.5c2.8-2.4 5.5-2.4 8.3 0s5.5 2.4 8.3 0" />
      <path d="M24.5 9.5c1.6 0 2.5 1 2.5 2.2s-.9 2.1-2.2 2.1" />
    </Base>
  );
}

/** Reclining figure under a horizon — yoga nidra. */
export function IconRest(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="9" cy="17" r="2.2" />
      <path d="M11.2 19c1.6-2.1 3.5-3.2 5.7-3.2 3.2 0 5.4 2 6.6 5.2" />
      <path d="M5 21.4h22" />
      <path d="M20 10.6c1.2-1 2.4-1 3.6 0" />
    </Base>
  );
}

/** Open page and pen — integration, journaling. */
export function IconIntegration(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 7.5h11a2 2 0 0 1 2 2v15H10a2 2 0 0 1-2-2z" />
      <path d="M11.5 13h6M11.5 17h6M11.5 21h3.5" />
      <path d="M23.5 8.5 26 11l-4.6 4.6-2.6.6.6-2.6z" />
    </Base>
  );
}

/** Doorway / arch — arriving in the space. */
export function IconArrive(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 25V15a8 8 0 0 1 16 0v10" />
      <path d="M5.5 25h21" />
      <path d="M16 25v-6" />
    </Base>
  );
}

/** Heart space — hridayakasha dharana. */
export function IconHeartSpace(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="16" cy="16" r="10" />
      <path d="M16 21.2c-2.6-2-4.2-3.4-4.2-5.3A2.4 2.4 0 0 1 16 14.4a2.4 2.4 0 0 1 4.2 1.5c0 1.9-1.6 3.3-4.2 5.3z" />
    </Base>
  );
}

/* --------------------------------------------- small supporting icons */

export function IconSpark(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M16 5c0 6 2.5 9 11 11-8.5 2-11 5-11 11-0-6-2.5-9-11-11 8.5-2 11-5 11-11z" />
    </Base>
  );
}

export function IconClock(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="16" cy="16" r="10.5" />
      <path d="M16 10v6.4l4 2.4" />
    </Base>
  );
}

export function IconGroup(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12.5" cy="12" r="3.2" />
      <path d="M6.5 23c1.2-3.2 3.4-4.8 6-4.8s4.8 1.6 6 4.8" />
      <circle cx="22" cy="12.8" r="2.4" />
      <path d="M20 18.6c2.3-.3 4.1 1.1 5.3 4.4" />
    </Base>
  );
}

export function IconBlanket(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12.5h22v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
      <path d="M5 12.5c3-3.5 6.4-3.5 9.5 0 3.1-3.5 6.5-3.5 9.5 0" />
    </Base>
  );
}

export function IconLeaf(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M25 7c0 9.4-4.6 15-11 15a6.6 6.6 0 0 1-6.6-6.6C7.4 10.2 14.4 7 25 7z" />
      <path d="M7 25c3.5-4.8 7.4-8.4 12.5-11.4" />
    </Base>
  );
}
