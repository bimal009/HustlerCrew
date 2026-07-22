"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#team", label: "Team" },
  { href: "/#jerseys", label: "Jerseys" },
  { href: "/#journey", label: "Journey" },
  { href: "/#services", label: "Services" },
  { href: "/#coaching", label: "Coaching" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <nav aria-label="Main navigation" className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Hustler Crew home">
          <Image src="/emblem.png" alt="" width={30} height={25} className="h-6 w-7 object-contain" />
          <span className="font-display text-xl tracking-[0.08em]">
            HUSTLER <span className="text-accent">CREW</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/#contact" className="btn-dark hidden !px-5 !py-2.5 md:inline-block">
            Contact
          </Link>
          <button
            type="button"
            className="cursor-pointer rounded-md border border-line p-2 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-background md:hidden">
          <ul className="section-shell flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-dark block text-center"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
