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
      "Building data pipelines and interpretable machine learning models over large multi-source administrative datasets for student outcome prediction.",
    details: [
      "Designed and implemented data processing pipelines in Python to ingest, clean, and integrate large multi-source administrative datasets (attendance, grades, health, and discipline records) for downstream analysis.",
      "Engineered reusable ETL and feature-construction modules handling missing data, schema normalization, and student-level outcome definitions, improving data quality and pipeline reliability.",
      "Built and benchmarked interpretable machine learning models using scalable, testable code to identify risk factors and compare modeling approaches for outcome prediction.",
    ],
    tags: ["Python", "ETL", "Pandas", "Feature Engineering", "Interpretable ML"],
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
