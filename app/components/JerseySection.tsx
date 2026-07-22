"use client";

import Image from "next/image";
import { useState } from "react";
import { jerseys } from "../lib/data";

export function JerseySection() {
  const [active, setActive] = useState(jerseys[0]);

  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Product image */}
      <div className="overflow-hidden rounded-2xl bg-surface">
        <Image
          key={active.id}
          src={active.image}
          alt={active.alt}
          width={900}
          height={1350}
          sizes="(max-width: 1024px) 92vw, 46vw"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="lg:pt-4">
        <div className="flex gap-2" role="group" aria-label="Choose jersey">
          {jerseys.map((j) => (
            <button
              key={j.id}
              type="button"
              aria-pressed={active.id === j.id}
              onClick={() => setActive(j)}
              className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                active.id === j.id
                  ? "bg-foreground text-white"
                  : "border border-line text-muted hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {j.name}
            </button>
          ))}
        </div>

        <h3 className="font-display mt-8 text-4xl tracking-wide">{active.name}</h3>
        <p className="mt-4 max-w-lg leading-relaxed text-muted">{active.description}</p>

        <ul className="mt-8 flex flex-col divide-y divide-line border-y border-line">
          {active.details.map((d) => (
            <li key={d} className="flex items-center gap-3 py-3.5 text-sm text-foreground/85">
              <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
              {d}
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-dark mt-8">
          Enquire About This Kit
        </a>
      </div>
    </div>
  );
}
