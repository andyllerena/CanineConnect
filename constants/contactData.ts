import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Users,
  Heart,
  HelpCircle,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ContactMethod {
  title: string;
  description: string;
  value: string;
  link: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export interface ContactCategory {
  title: string;
  description: string;
  email: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
}

export interface OfficeHour {
  day: string;
  hours: string;
}

export const contactMethods: ContactMethod[] = [
  {
    title: "Email Us",
    description: "Send us a message anytime",
    value: "hello@canineconnect.com",
    link: "mailto:hello@canineconnect.com",
    icon: Mail,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Call Us",
    description: "Speak with our team",
    value: "(555) 123-PETS",
    link: "tel:+15551237387",
    icon: Phone,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Visit Us",
    description: "Our headquarters",
    value: "123 Pet Lane, San Francisco, CA 94102",
    link: "https://maps.google.com/?q=123+Pet+Lane,+San+Francisco,+CA+94102",
    icon: MapPin,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Live Chat",
    description: "Chat with support",
    value: "Available 9 AM - 6 PM PST",
    link: "#",
    icon: MessageCircle,
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];

export const contactCategories: ContactCategory[] = [
  {
    title: "Adoption Support",
    description:
      "Questions about the adoption process, pet profiles, or matching",
    email: "adopt@canineconnect.com",
    icon: Heart,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    title: "Shelter Partners",
    description: "Information for shelters and rescue organizations",
    email: "partners@canineconnect.com",
    icon: Users,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Technical Support",
    description: "Website issues, account problems, or technical questions",
    email: "support@canineconnect.com",
    icon: HelpCircle,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export const officeHours: OfficeHour[] = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
  { day: "Sunday", hours: "Closed" },
];

export const faqItems = [
  {
    question: "How does the adoption process work?",
    answer:
      "Our adoption process is designed to ensure the best match for both pets and families. Start by browsing our available pets, then complete an adoption application. We'll review your application and connect you with the shelter or rescue organization.",
  },
  {
    question: "Is there a fee to use CanineConnect?",
    answer:
      "CanineConnect is completely free for families looking to adopt. We never charge adoption seekers to use our platform or matching services.",
  },
  {
    question: "How do I become a shelter partner?",
    answer:
      "We'd love to work with your organization! Contact our partnerships team at partners@canineconnect.com to learn about our requirements and get started.",
  },
  {
    question: "Can I update my adoption preferences?",
    answer:
      "Absolutely! Log into your account to update your preferences, search criteria, and profile information at any time.",
  },
];
