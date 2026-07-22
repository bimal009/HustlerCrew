import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import {
  dev1ceAchievements,
  dev1ceEmployment,
  dev1ceProfile,
  dev1ceResultsByOrg,
  dev1ceSkills,
  siteEmail,
} from "../../lib/data";

export const metadata: Metadata = {
  title: "Dev1ce — Coaching CV",
  description:
    "Dinesh Roka Magar (Dev1ce) — professional PUBG Mobile esports coach available for booking through Hustler Crew. Employment history, coaching skills and tournament record.",
  alternates: {
    canonical: "/coach/dev1ce",
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display border-b border-line pb-3 text-2xl tracking-wide md:text-3xl">
      {children}
    </h2>
  );
}

export default function Dev1ceCVPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Profile header */}
        <section className="pt-24 pb-6 md:pt-28" aria-label="Dev1ce profile">
          <div className="section-shell">
            <span className="kicker">Book A Coach</span>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h1 className="font-display text-4xl tracking-wide md:text-5xl">
                {dev1ceProfile.name}
              </h1>
              <span className="rounded-full bg-foreground px-3 py-1 text-xs font-bold tracking-wide text-white">
                {dev1ceProfile.tag}
              </span>
            </div>
            <p className="mt-1 text-sm font-semibold tracking-[0.1em] text-muted uppercase">
              {dev1ceProfile.title}
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">{dev1ceProfile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/#contact" className="btn-dark">
                Book Through Hustler Crew
              </a>
            </div>
            <p className="mt-3 text-xs text-muted">
              Coaching sessions are booked through Hustler Crew, not Dev1ce directly.
            </p>

            {/* Quick facts */}
            <dl className="mt-10 grid grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="flex flex-col gap-1 py-5 sm:pr-8">
                <dt className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                  Location
                </dt>
                <dd className="font-display text-xl tracking-wide">{dev1ceProfile.location}</dd>
              </div>
              <div className="flex flex-col gap-1 py-5 sm:pl-8">
                <dt className="text-xs font-semibold tracking-[0.22em] text-muted uppercase">
                  Languages
                </dt>
                <dd className="font-display text-xl tracking-wide">
                  {dev1ceProfile.languages.join(" · ")}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Employment history */}
        <section className="py-20 md:py-24" aria-label="Employment history">
          <div className="section-shell">
            <SectionTitle>Employment History</SectionTitle>
            <ol className="mt-8 flex flex-col gap-4">
              {dev1ceEmployment.map((job) => (
                <li key={job.id} className="rounded-2xl bg-surface p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-base font-semibold">
                      {job.title} <span className="text-muted">— {job.org}</span>
                      {job.region && <span className="text-muted"> · {job.region}</span>}
                    </h3>
                    <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
                      {job.period}
                    </p>
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Core coaching skills */}
        <section className="border-t border-line bg-surface/60 py-20 md:py-24" aria-label="Core coaching skills">
          <div className="section-shell">
            <SectionTitle>Core Coaching Skills</SectionTitle>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {dev1ceSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 text-sm shadow-sm"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Key results by organization */}
        <section className="py-20 md:py-24" aria-label="Key results by organization">
          <div className="section-shell">
            <SectionTitle>Key Results by Organization</SectionTitle>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dev1ceResultsByOrg.map((group) => (
                <div key={group.id} className="rounded-2xl bg-surface p-6">
                  <h3 className="font-display text-lg tracking-wide">{group.org}</h3>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {group.results.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Major tournament achievements */}
        <section className="border-t border-line bg-surface/60 py-20 md:py-24" aria-label="Major tournament achievements">
          <div className="section-shell">
            <SectionTitle>Major Tournament Achievements</SectionTitle>
            <ul className="mt-8 flex flex-col divide-y divide-line rounded-2xl bg-background px-6 shadow-sm">
              {dev1ceAchievements.map((a) => (
                <li key={a.id} className="flex items-center gap-4 py-4">
                  <span className="w-16 shrink-0 rounded-full border border-accent/30 py-1 text-center text-xs font-bold text-accent">
                    {a.placement}
                  </span>
                  <p className="min-w-0 flex-1 text-sm font-semibold">{a.event}</p>
                  {a.tier && (
                    <span className="shrink-0 rounded-full bg-surface px-2.5 py-1 text-[10px] font-semibold tracking-wide text-muted">
                      {a.tier}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-line bg-surface-dark py-20 md:py-24" aria-label="Book Dev1ce">
          <div className="section-shell flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="kicker kicker-on-dark">Available For Booking</span>
              <h2 className="font-display mt-3 max-w-xl text-4xl leading-[0.95] tracking-wide text-white md:text-5xl">
                Ready to level up?
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/60">
                Book a coaching session with Dev1ce through Hustler Crew.
              </p>
            </div>
            <a
              href={`mailto:${siteEmail}`}
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
