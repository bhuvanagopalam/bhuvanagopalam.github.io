export type EducationItem = {
  degree: string;
  institution: string;
  location?: string;
  start?: string;
  end: string;
  gpa?: string;
  coursework?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "MS Computer Science",
    institution: "University of Minnesota Twin Cities",
    location: "Minneapolis, MN",
    start: "2025",
    end: "Present (Expected May 2027)",
    gpa: "3.94/4.0",
    coursework: [
      "Computer Vision",
      "Behavioral Data Mining",
      "Natural Language Processing",
      "Deep Learning",
    ],
  },
  {
    degree: "BS Computer Science with Honors",
    institution: "IIIT Sri City",
    location: "Andhra Pradesh, India",
    start: "2020",
    end: "2024",
    gpa: "3.82/4.0",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Computer Networks",
      "Data Mining",
      "Cloud Computing",
    ],
  },
];
