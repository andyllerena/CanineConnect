export interface TeamMember {
  name: string;
  role: string;
  description: string;
  funFact: string;
  bgColor: string;
  iconColor: string;
  imageUrl?: string; // Optional for when you add actual images
}

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    description:
      "Passionate about connecting pets with loving families. Leads our mission to revolutionize pet adoption through technology.",
    funFact: "Has rescued 12 cats and 3 dogs over the past 15 years",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Technology",
    description:
      "Builds the smart matching algorithms that help create perfect pet-family connections. Expert in AI and machine learning.",
    funFact: "Once taught his golden retriever to code (sort of)",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Emma Thompson",
    role: "Veterinary Advisor",
    description:
      "Ensures all health assessments and medical information meet the highest standards. 10+ years in veterinary medicine.",
    funFact: "Speaks fluent 'dog' and can calm any anxious pet",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Jake Wilson",
    role: "Community Outreach",
    description:
      "Builds relationships with shelters and rescue organizations nationwide. Coordinates our network of adoption partners.",
    funFact: "Has visited over 500 animal shelters across 30 states",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
];
