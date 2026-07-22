// Central content data for the Hustler Crew site.

export const siteEmail = "contact@hustlercrew.com";

/** Opens a Gmail compose window in the browser instead of the OS default mail app. */
export function gmailComposeUrl(to: string) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`;
}

export type Player = {
  id: string;
  name: string;
  role: string;
  image: string;
  /** Placeholder bio — replace with the real player bio when available. */
  bio: string;
};

export const players: Player[] = [
  {
    id: "vinnie",
    name: "Vinnie",
    role: "PUBG Mobile Athlete",
    image: "/vinnie.PNG",
    bio: "Competitive PUBG Mobile athlete and core member of Hustler Crew's roster.",
  },
  {
    id: "loco",
    name: "Loco",
    role: "PUBG Mobile Athlete",
    image: "/loco.PNG",
    bio: "Competitive PUBG Mobile athlete representing Hustler Crew across South Asia.",
  },
  {
    id: "kal3y",
    name: "Kal3y",
    role: "PUBG Mobile Athlete",
    image: "/kal3y.PNG",
    bio: "Competitive PUBG Mobile athlete and core member of Hustler Crew's roster.",
  },
  {
    id: "jmson",
    name: "Jmson",
    role: "PUBG Mobile Athlete",
    image: "/jmson.PNG",
    bio: "Competitive PUBG Mobile athlete representing Hustler Crew across South Asia.",
  },
  {
    id: "aazzmmm",
    name: "Aazzmmm",
    role: "PUBG Mobile Athlete",
    image: "/aazzmmm.PNG",
    bio: "Competitive PUBG Mobile athlete and core member of Hustler Crew's roster.",
  },
];

export type CoachHighlight = {
  id: string;
  placement: string;
  event: string;
};

// Trix is Hustler Crew's own Team Coach (not Dev1ce, the bookable outside
// coach). Achievements are the team's real results under his tenure —
// see https://liquipedia.net/pubgmobile/Hustler_Crew
export const teamCoach = {
  id: "trix",
  name: "Trix",
  role: "Team Coach",
  image: "/trix.png",
  bio: "Runs Hustler Crew's in-house preparation — rotations, drop plans and endgame execution.",
  achievements: [
    {
      id: "pmgo-weu-2026",
      placement: "1st",
      event: "PMGO 2026 Season 1 Western Europe Finals — Champions",
    },
    {
      id: "pmgo-main-2026",
      placement: "32nd",
      event: "PMGO 2026 Season 1 Main Event",
    },
  ] satisfies CoachHighlight[],
};

export type Jersey = {
  id: string;
  name: string;
  image: string;
  alt: string;
  description: string;
  details: string[];
};

export const jerseys: Jersey[] = [
  {
    id: "jersey-01",
    name: "Jersey 01",
    image: "/jersey1.png",
    alt: "Hustler Crew Jersey 01 — white kit with maroon shoulder panels and crest, front view",
    description:
      "The main competition kit. White base with maroon shoulder panels, the Hustler Crew crest at center chest and a tonal geometric print through the body.",
    details: [
      "Breathable lightweight polyester",
      "Sublimated print never peels",
      "PUBG Mobile sleeve patch",
      "Patterned sleeve trim",
      "Sizes S – 3XL",
    ],
  },
  {
    id: "jersey-02",
    name: "Jersey 02",
    image: "/jersey2.png",
    alt: "Hustler Crew Jersey 02 — white kit with navy, gold and red panels, front view",
    description:
      "The alternate kit. White base cut with navy and red panels, gold linework and the crest in a deep-red chrome finish.",
    details: [
      "Breathable lightweight polyester",
      "Navy and red side panels with gold linework",
      "Chrome-finish crest print",
      "Patterned sleeve trim",
      "Sizes S – 3XL",
    ],
  },
];

export type Milestone = {
  id: string;
  year: string;
  title: string;
  location: string;
  description: string;
  upcoming?: boolean;
};

// Real, sourced results — see https://liquipedia.net/pubgmobile/Hustler_Crew
export const milestones: Milestone[] = [
  {
    id: "founded",
    year: "2024",
    title: "Founded as Hatyara Crew",
    location: "Nepal",
    description: "Riwaj Gurung (\"Reyes\") founds the organization that becomes Hustler Crew.",
  },


  {
    id: "rebrand-2026",
    year: "2026",
    title: "Rebrands to Hustler Crew",
    location: "UK & Nepal",
    description: "Hatyara Crew becomes Hustler Crew as the current roster forms.",
  },
  {
    id: "pmgo-weu-finals-2026",
    year: "2026",
    title: "PMGO Western Europe Finals — Champions",
    location: "A-Tier",
    description:
      "1st place at the PMGO 2026 Season 1 Western Europe Finals. Loco named Finals MVP and Top Fragger.",
  },
  {
    id: "global-open-2026",
    year: "2026",
    title: "PUBG Mobile Global Open 2026",
    location: "S-Tier",
    description:
      "32nd place on the international stage — Hustler Crew's biggest tournament to date.",
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "coaching",
    title: "Esports Coaching",
    description: "Bookable competitive PUBG Mobile coaching sessions with Dev1ce.",
  },
    {
    id: "tournament-production",
    title: "Tournament Production",
    description: "End-to-end event production brackets, casting and live show operations.",
  },
  {
    id: "jersey-design",
    title: "Jersey Design",
    description:
      "Custom esports kit design from concept to production-ready artwork.",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Posters, banners, stream packages and full brand identities.",
  },
  {
    id: "3d-editing",
    title: "3D Editing",
    description: "3D compositions, product renders and animated brand assets.",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Highlight reels, montages and cinematic tournament recaps.",
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description: "Kinetic typography, intros, stingers and animated overlays.",
  },

  {
    id: "web-development",
    title: "Website Development",
    description: "Fast, modern websites for teams, brands and creators.",
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Mobile apps designed and built for engagement.",
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    description: "Bespoke tools and platforms built around your workflow.",
  },
];

export const dev1ceProfile = {
  name: "Dinesh Roka Magar",
  tag: "Dev1ce",
  title: "Professional PUBG Mobile Esports Coach",
  location: "Kathmandu, Nepal",
  languages: ["English", "Nepali", "Hindi"],
  summary:
    "Professional PUBG Mobile esports coach with experience in strategic analysis, team development, competitive preparation, and high-tier tournament coaching. Proven ability to guide teams in regional and international competitions through tactical planning, opponent analysis, and performance optimization. Experienced working with multiple esports organizations across South Asia and Southeast Asia competitive circuits.",
};

export type Dev1ceEmployment = {
  id: string;
  title: string;
  org: string;
  region?: string;
  period: string;
  bullets: string[];
};

export const dev1ceEmployment: Dev1ceEmployment[] = [
  {
    id: "national-coach",
    title: "National Coach",
    org: "Government of Nepal",
    period: "Jun 2026",
    bullets: [
      "Represented Nepal in PUBG Mobile on an international esports stage",
      "Supported national-level team preparation, strategy planning, and competitive readiness",
      "Gained experience from high-level esports environments and global competitive standards",
    ],
  },
  {
    id: "horaa",
    title: "Coach",
    org: "Horaa Esports",
    region: "South Asia",
    period: "Aug 2025 – Present",
    bullets: ["Leading competitive strategy and team performance development"],
  },
  {
    id: "tribe-aeromacy",
    title: "Coach",
    org: "Tribe Aeromacy",
    region: "South Asia",
    period: "Mar 2025 – Aug 2025",
    bullets: [
      "Player performance",
      "Strategic coaching and scrim preparation",
      "Tournament analysis and draft strategy improvement",
      "Performance analytics and improvement plans",
      "Communication and coordination systems",
    ],
  },
  {
    id: "3-real-bros",
    title: "Coach",
    org: "3 Real Bros",
    period: "Mar 2026 – Apr 2026",
    bullets: [
      "Early competitive team building",
      "Scrim training and roster development",
      "Analysed opponent teams, their drop spots, rotation patterns, fight style, and zone movement",
      "Helped players understand their roles better during early game, mid-game, and end-game situations",
    ],
  },
  {
    id: "harame-bro",
    title: "Coach & Analyst",
    org: "Harame Bro",
    region: "Southeast Asia",
    period: "Jul 2024 – Mar 2025",
    bullets: [
      "Opponent analysis and data breakdown",
      "Team management and motivation",
      "Tactical reports for team improvement",
      "Map rotations and zone strategy analysis",
      "Pressure management during tournaments",
    ],
  },
  {
    id: "fpg",
    title: "Coach",
    org: "FPG",
    region: "South Asia",
    period: "Aug 2022 – Dec 2023",
    bullets: [
      "Early competitive team building",
      "Scrim training and roster development",
      "Competitive strategy foundations",
    ],
  },
];

export const dev1ceSkills = [
  "Conducting scrim analysis and opponent scouting",
  "Match strategy planning and in-game macro development",
  "Player coordination and team communication systems",
  "Competitive strategy development",
];

export type Dev1ceResultGroup = {
  id: string;
  org: string;
  results: string[];
};

export const dev1ceResultsByOrg: Dev1ceResultGroup[] = [
  {
    id: "horaa",
    org: "Horaa Esports",
    results: [
      "5th — PUBG Mobile Super League Central & South Asia Fall 2025",
      "1st — PUBG Mobile Nepal Series 2025",
      "2nd — PUBG Mobile Global Open 2026 Season 1 – South Asia Finals",
      "1st — Group A, PUBG Mobile Global Open Main Event 2026 Season 1",
      "12th — PUBG Mobile Global Open 2026 Finals Season 1",
    ],
  },
  {
    id: "tribe-aeromacy",
    org: "Tribe Aeromacy",
    results: [
      "2nd — PUBG Mobile National Championship South Asia Spring 2025",
      "2nd — PUBG Mobile National Championship Nepal Spring 2025",
    ],
  },
  {
    id: "harame-bro",
    org: "Harame Bro",
    results: ["1st — PUBG Mobile Challengers League Southeast Asia Fall 2024"],
  },
  {
    id: "fpg",
    org: "FPG",
    results: ["Regional tournament participation and competitive roster development"],
  },
];

export type CoachAchievement = {
  id: string;
  placement: string;
  event: string;
  tier?: string;
};

// Consolidated highlight reel — used on both the homepage teaser and the full CV page.
// Ordered newest year first.
export const dev1ceAchievements: CoachAchievement[] = [
  {
    id: "pmgo-2026-s1-sa-finals",
    placement: "2nd",
    event: "PUBG Mobile Global Open 2026 S1 – South Asia Finals",
  },
  {
    id: "pmsl-csa-fall-2025",
    placement: "5th",
    event: "PUBG Mobile Super League Central & South Asia Fall 2025",
  },
  { id: "pmns-2025", placement: "1st", event: "PUBG Mobile Nepal Series 2025" },
  {
    id: "pmnc-sa-fall-2025",
    placement: "5th",
    event: "PUBG Mobile National Championship South Asia Fall 2025",
  },
  {
    id: "pmcl-sa-spring-2025",
    placement: "3rd",
    event: "PUBG Mobile Challengers League South Asia Spring 2025",
  },
  { id: "pmwc-2024", placement: "24th", event: "PUBG Mobile World Cup 2024", tier: "S-Tier" },
  {
    id: "pmcl-sea-fall-2024",
    placement: "1st",
    event: "PUBG Mobile Challengers League Southeast Asia Fall 2024",
  },
  {
    id: "pmgc-2024",
    placement: "41st–43rd",
    event: "PUBG Mobile Global Championship 2024",
    tier: "S-Tier",
  },
];
