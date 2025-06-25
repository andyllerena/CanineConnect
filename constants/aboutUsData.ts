import {
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Heart,
  Users,
  Building,
  Target,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  borderColor: string;
}

export const milestones: Milestone[] = [
  {
    year: "2004",
    title: "The Beginning",
    description:
      "Founded by Sarah Chen after volunteering at local shelters and seeing the disconnect between amazing pets and loving families.",
    icon: Heart,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    year: "2008",
    title: "First 1,000 Adoptions",
    description:
      "Reached our first major milestone, proving that technology could transform the pet adoption experience.",
    icon: Award,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    year: "2012",
    title: "National Expansion",
    description:
      "Expanded beyond California to serve shelters and families across 15 states, building our network of trusted partners.",
    icon: MapPin,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    year: "2018",
    title: "Smart Matching Launch",
    description:
      "Introduced our AI-powered matching algorithm, revolutionizing how pets and families find each other.",
    icon: Target,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    year: "2021",
    title: "100K Adoptions",
    description:
      "Celebrated our 100,000th successful adoption, with families spanning all 50 states.",
    icon: TrendingUp,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    year: "2024",
    title: "Today",
    description:
      "Over 223,000 successful adoptions and partnerships with 15,000+ shelters, rescues, and foster families nationwide.",
    icon: Building,
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export const values: Value[] = [
  {
    title: "Compassion First",
    description:
      "Every decision we make is guided by what's best for the animals in our care and the families who love them.",
    icon: Heart,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    title: "Innovation for Good",
    description:
      "We leverage cutting-edge technology to solve real problems in pet adoption and animal welfare.",
    icon: TrendingUp,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Community Impact",
    description:
      "We believe in supporting local shelters and building stronger communities through pet adoption.",
    icon: Users,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    title: "Transparency",
    description:
      "Honest communication about each pet's needs, history, and health ensures successful, lasting adoptions.",
    icon: Award,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];
