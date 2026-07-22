import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="section-shell flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Image src="/emblem.png" alt="" width={26} height={22} className="h-5 w-6 object-contain" />
          <p className="font-display text-lg tracking-[0.08em]">
            HUSTLER <span className="text-accent">CREW</span>
          </p>
        </div>
        <p className="text-sm text-muted">Professional PUBG Mobile esports organization</p>
        <p className="text-sm text-muted">© {new Date().getFullYear()} Hustler Crew</p>
      </div>
      <div className="border-t border-line">
        <div className="section-shell py-4">
          <p className="text-xs text-muted">
            Site managed by{" "}
            <a
              href="https://www.chautari.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground transition-colors duration-200 hover:text-accent"
            >
              Chautari Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
