import { useEffect, useState } from "react";

/** Returns the id of the section currently closest to the top of the viewport. */
export function useScrollspy(ids: string[], offset = 140) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;

        // Sections are not necessarily in nav order in the DOM, so pick the
        // one whose top is closest to (but still above) the header line.
        let current = "";
        let bestTop = -Infinity;
        let firstId = "";
        let firstTop = Infinity;

        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top - offset;
          if (top < firstTop) {
            firstTop = top;
            firstId = id;
          }
          if (top <= 0 && top > bestTop) {
            bestTop = top;
            current = id;
          }
        }

        if (!current) current = firstId;

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
          // at the very bottom, activate the last section in the DOM
          let lastId = current;
          let lastTop = -Infinity;
          for (const id of ids) {
            const el = document.getElementById(id);
            if (!el) continue;
            const top = el.getBoundingClientRect().top;
            if (top > lastTop) {
              lastTop = top;
              lastId = id;
            }
          }
          current = lastId;
        }
        setActive(current);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids, offset]);

  return active;
}
