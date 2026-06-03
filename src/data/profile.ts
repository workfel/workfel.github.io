export interface Social {
  /** Display handle, e.g. "workfel" */
  label: string;
  /** Network name, e.g. "GitHub" */
  network: "GitHub" | "X";
  url: string;
}

export interface Profile {
  name: string;
  /** Short brand mark used in the top bar / avatar fallback */
  brand: string;
  tagline: string;
  bio: string;
  location: string;
  /** Small mono kicker shown above the name in the hero */
  kicker: string;
  /** Current year, shown in the hero top line */
  year: number;
  /** Path to the avatar image (under /public) */
  avatar: string;
  /** Year Johan started developing — drives the "years coding" hero stat */
  codingSince: number;
  socials: Social[];
}

export const profile: Profile = {
  name: "Johan Pujol",
  brand: "JP",
  tagline: "I build more software than I ever ship — here's what made it out.",
  bio: "Full-stack developer at Digikare by day, indie maker the rest of the time. I care about the web, clean code, and software craftsmanship. When I log off, it's skiing or triathlon.",
  location: "Aveyron, France",
  kicker: "Software Craftsmanship · Aveyron",
  year: 2026,
  avatar: "/assets/johan.png",
  codingSince: 2009,
  socials: [
    { label: "workfel", network: "GitHub", url: "https://github.com/workfel" },
    { label: "JohanPujol", network: "X", url: "https://x.com/JohanPujol" },
  ],
};
