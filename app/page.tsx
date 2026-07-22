import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { JerseySection } from "./components/JerseySection";
import { JourneyTimeline } from "./components/JourneyTimeline";
import { TeamMarquee } from "./components/team/TeamMarquee";
import {
  dev1ceAchievements,
  gmailComposeUrl,
  milestones,
  players,
  services,
  siteEmail,
} from "./lib/data";

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <span className="kicker">{kicker}</span>
      <h2 className="font-display text-4xl tracking-wide md:text-5xl">{title}</h2>
    </div>
  );
}

function ServiceIcon({ id }: { id: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (id) {
    case "jersey-design":
      return (
        <svg {...common}>
          <path d="M8.5 4 12 5.5 15.5 4l4 3-2 2.7-1.5-.8V20h-8v-11l-1.5.8-2-2.7 4-3z" />
        </svg>
      );
    case "graphic-design":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="9.5" cy="9.5" r="1.8" />
          <path d="M4 16.5 9 12l7 8M14 14l2.5-2.5L20 15" />
        </svg>
      );
    case "3d-editing":
      return (
        <svg {...common}>
          <path d="M12 3l7.5 4.3v9.4L12 21l-7.5-4.3V7.3L12 3z" />
          <path d="M12 3v9m0 0-7.5-4.7M12 12l7.5-4.7M12 12v9" />
        </svg>
      );
    case "video-editing":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M10 10v4l3.5-2L10 10z" />
        </svg>
      );
    case "motion-graphics":
      return (
        <svg {...common}>
          <path d="M4 17V7m5.5 10V7m5.5 10V7M20 17V7" opacity="0.4" />
          <path d="M4 12h16" />
          <circle cx="15" cy="12" r="2.4" />
        </svg>
      );
    case "tournament-production":
      return (
        <svg {...common}>
          <rect x="4" y="14" width="4" height="6" />
          <rect x="10" y="10" width="4" height="10" />
          <rect x="16" y="16" width="4" height="4" />
        </svg>
      );
    case "web-development":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 9h18M9.5 13 8 14.5 9.5 16m5-3 1.5 1.5L14.5 16" />
        </svg>
      );
    case "app-development":
      return (
        <svg {...common}>
          <rect x="8" y="3" width="8" height="18" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "custom-software":
      return (
        <svg {...common}>
          <path d="M8 6 3 12l5 6M16 6l5 6-5 6M14 4l-4 16" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 2.5" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section
          className="pt-24 pb-6 md:pt-28"
          aria-label="Hustler Crew — professional PUBG Mobile esports organization"
        >
          <div className="section-shell grid gap-4 md:grid-cols-3">
            {/* Main hero card */}
            <div className="relative min-h-[26rem] overflow-hidden rounded-2xl bg-surface-dark md:col-span-2 md:min-h-[30rem]">
              <Image
                src="/hero.JPG"
                alt="The Hustler Crew roster at the PUBG MOBILE Global Open"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover object-center"
              />

              {/* Gradient scrim — tall and dark enough to guarantee contrast under the full text block */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black from-15% via-black/70 via-60% to-transparent md:h-72"
              />

              <div className="relative flex h-full flex-col justify-end p-6 text-white md:p-10">
                <h1
                  className="font-display max-w-lg text-4xl leading-[0.95] tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-5xl"
                >
                  Built on grind. Headed for the{" "}
                  <span className="text-accent-bright">world stage.</span>
                </h1>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="#team" className="btn-dark">
                    Meet the Team
                  </a>
                </div>
              </div>
            </div>

            {/* Squad quick-list card */}
            <div className="flex min-h-[26rem] flex-col rounded-2xl bg-surface p-6 md:min-h-[30rem]">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl tracking-wide">The Squad</h2>
                <a
                  href="#team"
                  aria-label="View all team members"
                  className="text-muted transition-colors duration-200 hover:text-foreground"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
                Athletes &amp; Coach
              </p>

              <ul className="mt-5 flex flex-1 flex-col divide-y divide-line">
                {players.map((p) => (
                  <li key={p.id} className="flex items-center gap-3 py-2.5">
                    <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-background">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="36px"
                        className="object-cover object-top"
                      />
                    </span>
                    <p className="min-w-0 flex-1 truncate text-sm font-semibold">{p.name}</p>
                    <span className="text-[10px] font-semibold tracking-[0.1em] text-muted uppercase">
                      {p.role === "Head Coach" ? "Coach" : "Athlete"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Facts strip */}
        <div className="mt-2 border-b border-line">
          <dl className="section-shell grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["Roster", "5 Athletes + Head Coach"],
              ["On the calendar", "PUBG MOBILE Global Open 2026"],
              ["Base", "Dharan, Nepal"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0">
                <dt className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">{label}</dt>
                <dd className="font-display text-2xl tracking-wide">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team */}
        <section id="team" className="scroll-mt-20 py-24 md:py-32" aria-label="Team roster">
          <div className="section-shell">
            <SectionHeader kicker="The Roster" title="Meet the Team" />
          </div>
          <TeamMarquee players={players} />
        </section>

        {/* Jerseys */}
        <section id="jerseys" className="scroll-mt-20 border-t border-line bg-surface/60 py-24 md:py-32" aria-label="Official jerseys">
          <div className="section-shell">
            <SectionHeader kicker="Official Kit" title="The Jerseys" />
            <JerseySection />
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="scroll-mt-20 border-t border-line py-24 md:py-32" aria-label="Team journey">
          <div className="section-shell">
            <SectionHeader kicker="The Story" title="Journey So Far" />
            <JourneyTimeline milestones={milestones} />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 border-t border-line bg-surface/60 py-24 md:py-32" aria-label="Services">
          <div className="section-shell grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <SectionHeader kicker="Beyond the Lobby" title="Crew Services" />
              <p className="max-w-sm leading-relaxed text-muted">
                Design, video, motion, web and app development — the same craft we put into our
                own brand, available for yours.
              </p>
              <Link href="/#contact" className="btn-dark mt-8 inline-block">
                Get In Touch
              </Link>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:col-span-8">
              {services.map((s, i) => {
                const active = i === 0;
                return (
                  <li
                    key={s.id}
                    className={`group rounded-2xl p-6 transition-shadow duration-200 hover:shadow-md ${
                      active ? "bg-accent text-white shadow-lg" : "bg-background text-foreground shadow-sm"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-200 ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-surface text-foreground group-hover:text-accent"
                      }`}
                    >
                      <ServiceIcon id={s.id} />
                    </span>
                    <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${active ? "text-white/80" : "text-muted"}`}>
                      {s.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Coaching */}
        <section id="coaching" className="scroll-mt-20 border-t border-line py-24 md:py-32" aria-label="Coaching">
          <div className="section-shell grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <span className="kicker">Book A Coach</span>
              <h2 className="font-display mt-3 text-4xl tracking-wide md:text-5xl">
                Coaching with <span className="text-accent">Dev1ce</span>
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-muted">
                Alongside Head Coach Trix, who runs Hustler Crew&apos;s own preparation, the
                crew also offers bookable coaching sessions from Dev1ce a competitive PUBG
                Mobile coach with a proven tournament record across multiple organizations.
              </p>
              <ul className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "VOD review & analysis",
                  "Rotation & zone planning",
                  "Scrim structure & drills",
                  "Individual mechanics",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-lg bg-surface px-4 py-3 text-sm">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-dark">
                  Book A Coaching Session
                </Link>
                <Link href="/coach/dev1ce" className="btn-outline">
                  View Full CV
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-surface p-6 md:p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl tracking-wide">Dev1ce — Career Highlights</h3>
                <Link
                  href="/coach/dev1ce"
                  aria-label="View Dev1ce's full CV"
                  className="text-muted transition-colors duration-200 hover:text-foreground"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M9 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                Tournament results
              </p>
              <ul className="mt-5 flex flex-col divide-y divide-line">
                {dev1ceAchievements.slice(0, 6).map((a) => (
                  <li key={a.id} className="flex items-center gap-4 py-3.5">
                    <span className="w-16 shrink-0 rounded-full border border-accent/30 py-1 text-center text-xs font-bold text-accent">
                      {a.placement}
                    </span>
                    <p className="min-w-0 flex-1 truncate text-sm font-semibold">{a.event}</p>
                    {a.tier && (
                      <span className="shrink-0 rounded-full bg-background px-2.5 py-1 text-[10px] font-semibold tracking-wide text-muted">
                        {a.tier}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] leading-relaxed text-muted">
                Results from Dev1ce&apos;s professional coaching career not achieved with
                Hustler Crew.{" "}
                <Link
                  href="/coach/dev1ce"
                  className="underline underline-offset-2 transition-colors duration-200 hover:text-foreground"
                >
                  View full employment history →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 border-t border-line bg-surface-dark py-24 md:py-32" aria-label="Contact">
          <div className="section-shell flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="kicker kicker-on-dark">Run It With Us</span>
              <h2 className="font-display mt-3 max-w-2xl text-5xl leading-[0.95] tracking-wide text-white md:text-7xl">
                Let&apos;s talk.
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/60">
                Sponsorships, services, scrims or coaching the lobby is open.
              </p>
            </div>
            <a
              href={gmailComposeUrl(siteEmail)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0d0d0d] transition-colors duration-200 hover:bg-white/90"
            >
              {siteEmail}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
