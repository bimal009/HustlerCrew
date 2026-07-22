"use client";

import { useEffect, useRef } from "react";
import type { Milestone } from "../lib/data";

/**
 * Vertical timeline whose rail draws in with GSAP ScrollTrigger as the
 * section scrolls through the viewport, with each node/text block fading
 * up once the line reaches it.
 */
export function JourneyTimeline({ milestones }: { milestones: Milestone[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Only opt into the hidden/animated starting state once JS has actually
  // mounted — otherwise a failed script load would leave content invisible.
  useEffect(() => {
    rootRef.current?.classList.add("jt-enhanced");
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const fill = fillRef.current;
    const items = itemRefs.current.filter((el): el is HTMLLIElement => el !== null);
    if (!list || !fill || items.length === 0) return;

    let ctx: ReturnType<typeof import("gsap").gsap.context> | undefined;
    let cleanupRefresh: (() => void) | undefined;
    let cancelled = false;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Line draws in as the whole timeline scrolls through view.
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: list,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        // Each milestone fades/slides up once it's mostly in view.
        items.forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
              onStart: () => el.classList.add("is-revealed"),
            },
          );
        });
      });

      // ScrollTrigger calculates start/end pixel positions at setup time.
      // Images and fonts elsewhere on the page finish loading afterward and
      // shift layout, which leaves those positions stale — refresh whenever
      // the page's height actually changes.
      let refreshTimer = 0;
      const scheduleRefresh = () => {
        window.clearTimeout(refreshTimer);
        refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 200);
      };
      const ro = new ResizeObserver(scheduleRefresh);
      ro.observe(document.body);
      window.addEventListener("load", scheduleRefresh);

      cleanupRefresh = () => {
        ro.disconnect();
        window.clearTimeout(refreshTimer);
        window.removeEventListener("load", scheduleRefresh);
      };
    })();

    return () => {
      cancelled = true;
      cleanupRefresh?.();
      ctx?.revert();
    };
  }, [milestones]);

  return (
    <div ref={rootRef} className="relative">
      {/* Track + animated fill */}
      <div aria-hidden className="absolute left-[3px] top-1 h-[calc(100%-0.5rem)] w-0.5 bg-line">
        <div
          ref={fillRef}
          className="h-full w-full origin-top bg-accent"
          style={{ transform: "scaleY(0)" }}
        />
      </div>

      <ol ref={listRef} className="flex flex-col">
        {milestones.map((m, i) => (
          <li
            key={m.id}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`journey-item relative pl-10 py-8 ${i > 0 ? "border-t border-line" : ""}`}
          >
            <span
              aria-hidden
              className={`node-dot absolute left-1 top-9 h-2 w-2 -translate-x-1/2 rounded-full border-2 bg-background transition-colors duration-300 ${
                m.upcoming ? "node-dot--upcoming border-line" : "border-accent"
              }`}
            />
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-display text-2xl tracking-wide text-accent">{m.year}</p>
              <h3 className="font-display text-3xl tracking-wide">{m.title}</h3>
              {m.upcoming && (
                <span className="rounded-full border border-line px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
                  Upcoming
                </span>
              )}
            </div>
            <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              {m.location}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">{m.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
