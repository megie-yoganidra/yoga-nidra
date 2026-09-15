import type { ReactNode } from "react";
import { ReserveProvider } from "./reserve-context";
import { ReserveDialog } from "./reserve-dialog";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

/** Shared chrome: sticky navigation, waiting-list dialog and footer. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <ReserveProvider>
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <ReserveDialog />
    </ReserveProvider>
  );
}
