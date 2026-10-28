export type ExperienceCategory = "Industry" | "Research" | "Fellowship";

export type ExperienceItem = {
  title: string;
  organization: string;
  category: ExperienceCategory;
  location?: string;
  start: string;
  end: string;
  summary: string;
  details: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Research Assistant - Hopkins Big Data Project",
    organization: "University of Minnesota - Twin Cities",
    category: "Research",
    location: "Minneapolis, MN",
    start: "Summer 2026",
    end: "Present",
    summary:
      "Studying which non-core elective courses are linked to stronger student outcomes, and for which students, on a 20-year longitudinal district dataset inside a secure data enclave.",
    details: [
      "Driving a new study of non-core elective courses such as art and music to find which electives are linked to stronger student outcomes, and which types of students benefit more or less from each.",
      "Designing an elective recommender system that suggests classes to each student based on their profile and the results of similar students. Scoped the research questions and data sources with the faculty advisor.",
      "Built data cleaning and ETL pipelines in R and Python for a 20-year longitudinal dataset of district records (attendance, grades, demographics), resolving issues such as mismatched ID columns and missing year fields.",
      "Developed interpretable predictive models to flag early student risk factors, working independently with incomplete, ambiguous data in a secure data enclave under strict privacy rules.",
    ],
    tags: ["Python", "R", "ETL", "Longitudinal Data", "Recommender Systems", "Interpretable ML"],
  },
  {
    title: "Undergraduate Research Assistant - Realtime Violence Detection",
    organization: "Mahatma Gandhi Institute of Technology",
    category: "Research",
    location: "Hyderabad, India",
    start: "August 2024",
    end: "May 2025",
    summary:
      "Built a real-time violence detection system with sub-second latency for large-scale public safety use cases.",
    details: [
      "Built a real-time violence detection system in PyTorch/OpenCV with sub-second latency for large-scale public safety use cases.",
      "Engineered a high-throughput video pipeline using FFmpeg and GStreamer for scalable dataset ingestion and preprocessing.",
      "Optimized U-Net + ResNeXt101 + TSM to reduce compute while retaining temporal accuracy for action recognition.",
      "Deployed an edge-optimized, multi-stream inference stack using TensorRT, InfluxDB, and Streamlit.",
    ],
    tags: ["PyTorch", "OpenCV", "TensorRT", "FFmpeg", "GStreamer", "InfluxDB", "Streamlit"],
  },
];
