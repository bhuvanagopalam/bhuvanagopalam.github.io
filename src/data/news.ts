export type NewsItem = {
  date: string;
  title: string;
  description: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: "January 2026",
    title: "SaTML 2026 acceptance",
    description:
      "Our paper on Cascading Robustness Verification was accepted at the IEEE Conference on Secure and Trustworthy Machine Learning.",
    href: "https://arxiv.org/abs/2602.04236",
  },
  {
    date: "September 2025",
    title: "Joined University of Minnesota",
    description:
      "Started the MS Computer Science program at the University of Minnesota Twin Cities.",
  },
  {
    date: "December 2024",
    title: "COLING 2025 workshop paper",
    description:
      "Our Devanagari hate speech and target identification paper was accepted at CHiPSAL, COLING 2025.",
    href: "https://aclanthology.org/2025.chipsal-1.34/",
  },
  {
    date: "July 2024",
    title: "Joined AutomationEdge",
    description:
      "Started as a Machine Learning Research Engineer after completing a six-month internship.",
  },
];
