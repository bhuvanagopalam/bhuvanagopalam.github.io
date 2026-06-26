export type Project = {
  title: string;
  status: "Placeholder" | "Active" | "Archived";
  summary: string;
  highlights: string[];
  tags: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
};

export const projects: Project[] = [
  {
    title: "Bone Fracture Detection in Musculoskeletal Radiographs",
    status: "Active",
    summary:
      "Developed deep learning object detection models for fracture localization on radiologist-annotated musculoskeletal X-ray images.",
    highlights: [
      "Evaluated Faster R-CNN and RetinaNet on the FracAtlas dataset containing 4,083 radiologist-annotated X-ray images.",
      "Built a transfer learning pipeline using ImageNet-pretrained backbones and compared results against models trained from scratch.",
      "Processed COCO-format bounding box annotations and evaluated detection quality using IoU, mAP@0.5, precision, and recall.",
      "Achieved mAP@0.5 of 0.67 and precision of 0.86 using pretrained RetinaNet.",
      "Used Grad-CAM interpretability analysis to inspect model attention and study alignment with clinically annotated fracture regions.",
    ],
    tags: ["PyTorch", "Object Detection", "Medical Imaging", "Faster R-CNN", "RetinaNet", "Grad-CAM"],
  },
  {
    title: "Self-Questioning Visual Question Answering System",
    status: "Active",
    summary:
      "Designed an explainable visual question answering system for cannabis detection and compliance monitoring using vision-language models.",
    highlights: [
      "Built a structured prompt-driven VQA pipeline using PyTorch, Transformers, OFA, Qwen2-VL, and Fairseq.",
      "Designed reasoning-based inference workflows for domain-specific cannabis detection and general image analysis.",
      "Developed an interactive Gradio web application with human-readable detection justifications.",
      "Integrated Bash automation and llama.cpp to support deployment and local inference workflows.",
      "Achieved 90% detection accuracy with zero false positives on the evaluation set.",
    ],
    tags: ["PyTorch", "Transformers", "OFA", "Qwen2-VL", "Gradio", "llama.cpp", "Computer Vision"],
  },
  {
    title: "Airline Delay Risk Prediction",
    status: "Active",
    summary:
      "Built machine learning models to predict high-delay airline operation periods at the airport-carrier-month level.",
    highlights: [
      "Processed and modeled 170K+ aggregated flight records using Pandas and NumPy.",
      "Handled missing data and class imbalance to improve data quality and model robustness.",
      "Engineered 15+ features including traffic volume, carrier market share, airport congestion metrics, and seasonality indicators.",
      "Trained and compared Random Forest and LightGBM models for delay risk prediction.",
      "Achieved 0.85 ROC-AUC with LightGBM after correcting data leakage through improved train-test splitting.",
    ],
    tags: ["Python", "Pandas", "NumPy", "Random Forest", "LightGBM", "Feature Engineering"],
  },
  {
    title: "Semantic Matching System for Drug Review Data Integration",
    status: "Active",
    summary:
      "Built a semantic matching system to connect patient drug reviews with standardized drug data for structured analysis.",
    highlights: [
      "Linked 3,100 patient drug reviews with standardized drug records using semantic similarity.",
      "Improved match accuracy from 8% to 75% by using embedding-based similarity search.",
      "Processed 1,500 drugs and handled messy inputs such as brand names, typos, and informal patient-written text.",
      "Designed a PostgreSQL database to combine structured drug information with patient reviews.",
      "Enabled analysis of top side effects per drug and brand-versus-generic comparisons.",
    ],
    tags: ["PostgreSQL", "Python", "LLMs", "Transformers", "Pinecone", "Semantic Search"],
  },
  {
    title: "Image Forgery Detection System",
    status: "Active",
    summary:
      "Built a deepfake and image forgery detection system using modern computer vision architectures with interpretability support.",
    highlights: [
      "Developed a digital forensics system using Faster-ViT and EfficientNet-B3 architectures.",
      "Achieved 82.32% validation accuracy and 81.77% test accuracy on large-scale datasets.",
      "Evaluated performance using confusion matrix analysis, precision, recall, and F1-score.",
      "Achieved precision of 0.64, recall of 1.0, and F1-score of 0.78.",
      "Deployed a Gradio interface with Grad-CAM visualization for real-time forgery detection and attention heatmaps.",
    ],
    tags: ["PyTorch", "Faster-ViT", "EfficientNet-B3", "Grad-CAM", "Gradio", "Computer Vision"],
  },
  {
    title: "Real-Time Violence Detection System",
    status: "Active",
    summary:
      "Built a real-time violence detection system for public safety use cases as part of an undergraduate research assistantship.",
    highlights: [
      "Developed a PyTorch/OpenCV-based video analysis system with sub-second latency.",
      "Engineered a high-throughput video pipeline using FFmpeg and GStreamer for scalable dataset ingestion and preprocessing.",
      "Optimized U-Net, ResNeXt101, and TSM-based components to reduce compute while retaining temporal action recognition accuracy.",
      "Built an edge-optimized multi-stream inference stack using TensorRT, InfluxDB, and Streamlit.",
      "Focused on scalable real-time inference for large-scale public safety monitoring scenarios.",
    ],
    tags: ["PyTorch", "OpenCV", "FFmpeg", "GStreamer", "TensorRT", "Streamlit", "Action Recognition"],
  },
];

```links: [{ label: "GitHub", href: "your-project-link" }]```
