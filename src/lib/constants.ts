import {
  MapPin,
  Users,
  Shield,
  UserPlus,
  TrendingUp,
  Camera,
  ShieldCheck,
  Radar,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const HERO_FEATURES: Feature[] = [
  {
    title: "Live Heatmap",
    description: "See where people are gathering in real-time",
    icon: MapPin,
  },
  {
    title: "Find Friends",
    description: "Add friends and see where your crew is",
    icon: Users,
  },
  {
    title: "Privacy First",
    description: "No residential tracking. No driving tracking. Ever.",
    icon: Shield,
  },
];

export const ALL_FEATURES: Feature[] = [
  {
    title: "Real-Time Heatmap",
    description:
      "See an anonymized heatmap of venue activity across campus. Know where the energy is before you head out.",
    icon: MapPin,
  },
  {
    title: "Friend System",
    description:
      "Search for people, send friend requests, and build your circle. See where your friends are hanging out.",
    icon: UserPlus,
  },
  {
    title: "Trending Venues",
    description:
      "Spots ranked by real-time foot traffic. Find the hottest places on campus right now.",
    icon: TrendingUp,
  },
  {
    title: "Profile & Photos",
    description:
      "Set up your profile with photos so friends can find you. Express yourself and stand out.",
    icon: Camera,
  },
  {
    title: "Privacy Filtering",
    description:
      "Never tracked at home or while driving. Your location is only shared at public venues, never residential addresses.",
    icon: ShieldCheck,
  },
  {
    title: "Proximity Detection",
    description:
      "Get notified when friends are nearby. Never miss a chance to meet up when you're in the same area.",
    icon: Radar,
  },
];

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Aryan Choudhary",
    role: "CEO & Founder",
  },
  {
    name: "Weston Voglesonger",
    role: "Founder",
  },
  {
    name: "Thomas Carriero",
    role: "Founder",
  },
];

export const APP_STORE_LINK = "#";
export const GOOGLE_PLAY_LINK = "#";

export const CONTACT_EMAIL = "contact@flockapp.co";
