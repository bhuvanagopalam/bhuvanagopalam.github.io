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
  // When set, the card title links through to a full write-up page at
  // /projects/<slug>/ and that page renders the named interactive.
  slug?: string;
  interactive?: "vigil" | "fracture-compare" | "sqvqa-pipeline" | "leakage" | "matcher" | "confusion" | "stream-pipeline";
};

export const projects: Project[] = [
  {
    title: "Vigil: Waiting-Room Vital Signs from a Phone Camera",
    status: "Active",
    summary:
      "Turned the phones already in an ER waiting room into a continuous monitor: pulse, breathing, HRV, perfusion and capillary refill from a fingertip on the camera, ranked on a nurse's board with reasons. Built in 24 hours at Social Hack 2026 (UMN).",
    highlights: [
      "Patients scan a QR to a plain web page, no app: 20 seconds with a fingertip over the flash gives a pulse-oximeter-grade PPG waveform, and a 10-second press-and-release gives capillary refill timed to a single frame.",
      "Wrote the signal pipeline in NumPy: moving-average detrend, 0.7 to 3 Hz band-pass, a spectral heart-rate estimate that guides beat detection past the dicrotic notch, RMSSD heart-rate variability, perfusion index, and breathing rate from amplitude, interval and baseline modulation of the pulse.",
      "Built the FastAPI server and nurse board: everyone in the room ranked by a transparent NEWS2-style score with every point explained, trend since arrival, re-checks every 15 minutes, and a Find button that makes the patient's phone glow.",
      "Trained a logistic deterioration model on 3,964 PhysioNet/CinC 2019 ICU patients (151,000 hourly rows): test AUROC 0.67 against 0.64 for the NEWS bands alone, shown on the board as a risk percentile with its reasons.",
      "Added a room camera that counts breathing per chair from chest motion and flags apnea, tied to each patient by chair number so it feeds their score between finger checks.",
    ],
    tags: ["Python", "NumPy", "FastAPI", "Signal Processing", "PPG", "Logistic Regression", "PhysioNet", "Camera API"],
    links: [{ label: "GitHub", href: "https://github.com/bhuvanagopalam/Vigil" }],
    slug: "vigil",
    interactive: "vigil",
  },
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
    links: [{ label: "GitHub", href: "https://github.com/bhuvanagopalam/Bone-Fracture-Detection" }],
    slug: "bone-fracture-detection",
    interactive: "fracture-compare",
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
    links: [{ label: "GitHub", href: "https://github.com/bhuvanagopalam/SQVQA" }],
    slug: "sqvqa",
    interactive: "sqvqa-pipeline",
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
    slug: "airline-delay-risk",
    interactive: "leakage",
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
    slug: "semantic-drug-matching",
    interactive: "matcher",
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
    slug: "image-forgery-detection",
    interactive: "confusion",
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
    slug: "real-time-violence-detection",
    interactive: "stream-pipeline",
  },
];
