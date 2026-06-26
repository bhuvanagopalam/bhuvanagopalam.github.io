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
    degree: "MS Data Science",
    institution: "University of Minnesota Twin Cities",
    location: "Minneapolis, MN",
    start: "2025",
    end: "Present (Expected May 2027)",
    gpa: "3.68/4.0",
    coursework: [
      " Data Mining",
      "Database Systems",
      "Applied Regression",
      "Machine Learning",
    ],
  },
  {
    degree: "BS in Data Science",
    institution: "Mahatma Gandhi Institute of technology",
    location: "Telangana, India",
    start: "2021",
    end: "2025",
    gpa: "8.84/10",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Computer Networks",
      "Data Mining",
      "Cyber Security",
      "Deep Learning",
      "3-D printing",
      "Natural Language Processing"
    ],
  },
];
