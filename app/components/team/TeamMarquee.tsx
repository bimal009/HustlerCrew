import Image from "next/image";
import type { Player } from "../../lib/data";

const GRADIENTS = [
  "from-[#690000] to-[#0d0d0d]",
  "from-[#0d0d0d] to-[#690000]",
  "from-[#1a0000] via-[#690000] to-black",
];

function roleLabel(role: string) {
  return role === "Team Coach" ? "Coach" : "Athlete";
}

function FlipCard({
  player,
  gradient,
  hidden,
}: {
  player: Player;
  gradient: string;
  hidden?: boolean;
}) {
  return (
    <div
      className="flip-card h-[22rem] w-[16rem] shrink-0 outline-none [perspective:1200px]"
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden || undefined}
      role={hidden ? undefined : "group"}
      aria-label={hidden ? undefined : `${player.name}, ${roleLabel(player.role)}. ${player.bio}`}
    >
      <div className="flip-card-inner relative h-full w-full">
        {/* Front */}
        <div
          className={`flip-card-face absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
        >
          <Image
            src={player.image}
            alt={hidden ? "" : `${player.name} — ${roleLabel(player.role)} at Hustler Crew`}
            fill
            sizes="256px"
            className="object-cover object-top opacity-95"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/85 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="font-display text-2xl tracking-wide text-white">{player.name}</h3>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-white/75 uppercase">
              {roleLabel(player.role)}
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-face flip-card-face--back absolute inset-0 flex flex-col justify-center rounded-2xl bg-surface-dark p-6 text-white">
          <h3 className="font-display text-2xl tracking-wide">{player.name}</h3>
          <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-accent-bright uppercase">
            {roleLabel(player.role)}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{player.bio}</p>
        </div>
      </div>
    </div>
  );
}

export function TeamMarquee({ players }: { players: Player[] }) {
  return (
    <div className="marquee-viewport w-full overflow-hidden">
      <div className="marquee-track flex w-max gap-5">
        {players.map((p, i) => (
          <FlipCard key={p.id} player={p} gradient={GRADIENTS[i % GRADIENTS.length]} />
        ))}
        {players.map((p, i) => (
          <FlipCard
            key={`${p.id}-dup`}
            player={p}
            gradient={GRADIENTS[i % GRADIENTS.length]}
            hidden
          />
        ))}
      </div>
    </div>
  );
}
