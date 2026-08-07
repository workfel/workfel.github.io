/**
 * The lifecycle stages an app moves through, in order.
 * `stage` is the ONLY status field you set per app — it drives both the
 * maturity stepper on the right of each band and the status pill on the left.
 */
export const STAGES = ["idea", "wip", "beta", "shipped"] as const;
export type Stage = (typeof STAGES)[number];

/** Pricing model. Anything other than "Free" is treated as a paid app. */
export type AppType = "Free" | "Subscription" | "Freemium" | "One-time";

/** Payment provider for paid apps. */
export type Provider = "stripe" | "polar";

export interface App {
  /** App name, shown in giant Anton type. */
  name: string;
  /** Short line shown above the name (the "kicker"). */
  kicker: string;
  /** One- or two-sentence description. */
  description: string;
  /** Pricing model. */
  type: AppType;
  /** Lifecycle stage — drives the stepper and the status pill. */
  stage: Stage;
  /** Year the app launched / went public. */
  launchYear: number;
  /** Tech stack tags. */
  stack: string[];
  /** Public URL of the app. */
  url: string;
  /** Payment provider (paid apps only). */
  provider?: Provider;
  /** Link to the provider checkout / product page (paid apps only). */
  providerUrl?: string;
  /** Optional per-app accent colour (any CSS color). Used on the title hover
   *  (the flip-board reveal); falls back to the global accent if omitted. */
  accent?: string;
}

/**
 * Add a new app by appending an object here. Everything else — the hero stats,
 * the "selected work" counter, the index numbers — is computed automatically.
 */
export const apps: App[] = [
  {
    name: "Futlete",
    accent: "#f2c14e",
    kicker: "Turn your Strava profile into a player card rated out of 99.",
    description:
      "Connect Strava and get a player card rated out of 99. Six stats measured from real efforts — not vanity totals — on one absolute scale published in full. Challenge anyone to a duel that replays in 3D. Free, six languages, nothing to install.",
    type: "Free",
    stage: "shipped",
    launchYear: 2026,
    stack: ["Strava API", "Three.js", "PWA"],
    url: "https://futlete.com/",
  },
  {
    name: "Ou-Fly",
    accent: "#2f9bff",
    kicker: "Paragliding, cleared by the weather.",
    description:
      "The weather tells you if it flies. Built for slope-soaring RC: wind, slope orientation, gusts — go or no-go at a glance.",
    type: "Subscription",
    stage: "shipped",
    launchYear: 2026,
    provider: "polar",
    stack: ["Weather API", "Maps", "PWA", "Bun"],
    url: "https://oufly.workfel.cloud/",
  },
  {
    name: "Fantatri",
    accent: "#ff5a1f",
    kicker: "Fantasy league for triathlon.",
    description:
      "Fantasy Triathlon. Draft real pro races, challenge your club, and rule the season-long leaderboard.",
    type: "Free",
    stage: "shipped",
    launchYear: 2026,
    stack: ["PWA", "Angular", "Hono"],
    url: "https://fantatri.workfel.cloud/",
  },
  {
    name: "Tri tools",
    kicker: "Multiple tools for triathlon",
    description:
      "A collection of small tools for triathlon. Including analyse CDA, swim tempo cadence, drafting detector from TCX...",
    type: "Free",
    stage: "shipped",
    launchYear: 2026,
    stack: ["Math", "Ionic"],
    url: "https://tri-tools.workfel.cloud/",
  },
  {
    name: "Wallofme",
    accent: "#a06bff",
    kicker: "Your trophy room, in 3D.",
    description:
      "Scan your race medals and bibs, then show them off in a fully customisable 3D room. Trail, tri, road, cycling.",
    type: "Subscription",
    stage: "beta",
    launchYear: 2025,
    stack: ["Three.js", "WebGL", "3D Scan"],
    url: "https://wallofme.workfel.cloud/",
    provider: "polar",
  },
  {
    name: "NutriMeal",
    accent: "#16b364",
    kicker: "Eat better, according to your training",
    description:
      "NutriMeal automatically generates your weekly nutrition plan, perfectly aligned with your training load.",
    type: "Subscription",
    stage: "shipped",
    launchYear: 2025,
    provider: "stripe",
    stack: ["Nuxt", "Supabase", "AI.SDK"],
    url: "https://nutrimeal.app",
  },
  {
    name: "Smatchy",
    accent: "#f49f3f",
    kicker: "Find activities near you",
    description: "Find sports partners around you",
    type: "Subscription",
    stage: "shipped",
    launchYear: 2023,
    stack: ["Android", "iOS", "NestJS"],
    url: "https://smatchy.app/",
  },
];

/** Aggregate stats, derived from the apps list — never maintained by hand. */
export const stats = {
  appsCount: apps.length,
  shippedCount: apps.filter((a) => a.stage === "shipped").length,
  since: apps.length
    ? Math.min(...apps.map((a) => a.launchYear))
    : new Date().getFullYear(),
};

/** Status pill (left side) derived from the lifecycle stage. */
export function statusFor(stage: Stage): { key: string; label: string } {
  switch (stage) {
    case "shipped":
      return { key: "shipped", label: "Shipped" };
    case "beta":
      return { key: "beta", label: "Beta" };
    case "wip":
      return { key: "wip", label: "In progress" };
    case "idea":
    default:
      return { key: "idea", label: "Idea" };
  }
}

/** True when the app is paid and wired to a payment provider. */
export function isPaid(app: App): boolean {
  return app.type !== "Free" && !!app.provider;
}
