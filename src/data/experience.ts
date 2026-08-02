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
