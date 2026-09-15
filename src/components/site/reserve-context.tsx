import { createContext, useContext, useState, type ReactNode } from "react";

type ReserveContextValue = { open: () => void; close: () => void; isOpen: boolean };

const ReserveContext = createContext<ReserveContextValue | null>(null);

export function ReserveProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ReserveContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}
    >
      {children}
    </ReserveContext.Provider>
  );
}

export function useReserve() {
  const ctx = useContext(ReserveContext);
  if (!ctx) throw new Error("useReserve must be used inside ReserveProvider");
  return ctx;
}
