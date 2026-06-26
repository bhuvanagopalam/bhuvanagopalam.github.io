export type NewsItem = {
  date: string;
  title: string;
  description: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: "May 2027 Expected",
    title: "Expected MS Data Science graduation",
    description:
      "Expected to complete my Master of Science in Data Science at the University of Minnesota Twin Cities.",
  },
  {
    date: "September 2025",
    title: "Joined University of Minnesota Twin Cities",
    description:
      "Started my Master of Science in Data Science program, with coursework in Data Mining, Database Systems, Applied Regression, Multivariate Analysis, and Machine Learning.",
  },
  {
    date: "June 2025",
    title: "Completed B.Tech in Data Science",
    description:
      "Completed my Bachelor of Technology in Data Science from Mahatma Gandhi Institute of Technology with a GPA of 8.84/10.",
  },
  {
    date: "June 2025",
    title: "Awarded Silver Medal in Data Science",
    description:
      "Awarded the Silver Medal for securing 2nd overall rank in the Data Science department during undergraduate studies.",
  },
  {
    date: "May 2025",
    title: "Completed undergraduate research assistantship",
    description:
      "Completed my Undergraduate Research Assistant role on real-time violence detection, where I built a PyTorch/OpenCV-based system for public safety use cases.",
  },
  {
    date: "August 2024",
    title: "Started research on real-time violence detection",
    description:
      "Began undergraduate research at Mahatma Gandhi Institute of Technology, working on high-throughput video pipelines, action recognition, and edge-optimized multi-stream inference.",
  },
  {
    date: "2024",
    title: "Coordinated academic and technical events",
    description:
      "Organized and coordinated an academic poster presentation during a college technical fest and supported sponsor outreach and funding arrangements for college programs.",
  },
  {
    date: "2022",
    title: "Ranked first in Data Science department",
    description:
      "Secured 1st place in the Data Science department during the first undergraduate year, ranked by GPA.",
  },
  {
    date: "December 2021",
    title: "Started B.Tech in Data Science",
    description:
      "Started my Bachelor of Technology in Data Science at Mahatma Gandhi Institute of Technology in Hyderabad, India.",
  },
];

