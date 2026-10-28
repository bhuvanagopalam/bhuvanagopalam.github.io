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
  interactive?: "vigil" | "fracture-compare" | "sqvqa-pipeline" | "leakage" | "matcher" | "confusion" | "stream-pipeline" | "shelf-pipeline";
};

export const projects: Project[] = [
  {
    title: "Vigil: Waiting-Room Vital Signs from a Phone Camera",
    status: "Active",
    summary:
      "Turned the phones already in an ER waiting room into a continuous monitor: pulse, breathing, HRV, perfusion and capillary refill from a fingertip on the camera, ranked on a nurse's board with reasons. Built in 24 hours at Social Hack 2026 (UMN), where it took second place in the Vision track.",
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
    title: "The Shelf Is Lying: Inventory Availability Analysis",
    status: "Active",
    summary:
      "A retail analytics project that finds products recorded as in stock but unlikely to be on the shelf, explains the likely cause such as unprocessed returns or clearance moves, and recommends which store actions are worth the staff time. Built on a simulated 24-store seasonal collection so every result can be checked against known ground truth.",
    highlights: [
      "Simulated a 16-week seasonal collection across 24 stores and 120 products, with daily sales, returns, markdowns, online pickup orders and store audits. Recorded stock and the true location of each unit were tracked separately, which gives a ground truth for testing.",
      "Built two ways to flag at-risk inventory: a simple rule-based score from common warning signs, and an interpretable logistic regression model that uses only the information a store system already has.",
      "Tested both on later weeks the model had not seen. Among the 20% of records flagged as highest risk, 86.7% were real availability problems, compared with 80.7% for the rule-based score.",
      "Compared each store's clearance mix with similar stores to separate normal local variation from signs of an operational problem, such as heavy returns or aging stock.",
      "Converted risk scores into a weekly action list for store teams, ranked by expected margin recovered per hour of labor. Under the same labor budget this recovered about $22.1K, compared with $21.4K for checking the largest stock counts first and $9.1K for responding to cancellations first.",
      "Delivered a four-view Streamlit dashboard, a one-page leadership summary with a pilot plan, and unit tests for the business rules. All data is simulated and does not represent any real retailer.",
    ],
    tags: ["Python", "Pandas", "NumPy", "scikit-learn", "Logistic Regression", "Streamlit", "Plotly", "Retail Analytics", "Decision Analysis"],
    links: [{ label: "GitHub", href: "https://github.com/bhuvanagopalam/the-shelf-is-lying" }],
    slug: "the-shelf-is-lying",
    interactive: "shelf-pipeline",
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
      "Dropped the delay-cause columns that leak the target, then split by carrier-airport pair so no pair appears in both train and test: 0.85 ROC-AUC with LightGBM on unseen pairs, against 0.87 on the leaky random split.",
    ],
    tags: ["Python", "Pandas", "NumPy", "Random Forest", "LightGBM", "Feature Engineering"],
    links: [{ label: "GitHub", href: "https://github.com/bhuvanagopalam/Airline-Delay-Risk" }],
    slug: "airline-delay-risk",
    interactive: "leakage",
  },
  {
    title: "Semantic Matching System for Drug Review Data Integration",
    status: "Active",
    summary:
      "Built a semantic matching system to connect patient drug reviews with standardized drug data for structured analysis.",
    highlights: [
      "Linked 3,107 patient drug reviews to a standardized table of 1,507 generic drugs; an exact name join reaches only 5% of the reviews, because patients write Xanax, Lyrica and Vyvanse where the table says alprazolam, pregabalin and lisdexamfetamine.",
      "Built a three-stage soft foreign key: an LLM proposes the generic name, MiniLM embeddings stored in Pinecone find candidates above 0.5 cosine similarity, and the LLM validates the final pick, with an explicit fallback when the drug is missing from the table.",
      "Handled messy inputs such as brand names, typos and informal patient-written text; ambiguous matches in the 0.50 to 0.60 similarity band were the reason for the validation stage.",
      "Designed a PostgreSQL database to combine structured drug information with patient reviews.",
      "Enabled analysis of top side effects per drug and brand-versus-generic comparisons.",
    ],
    tags: ["PostgreSQL", "Python", "LLMs", "Transformers", "Pinecone", "Semantic Search"],
    links: [{ label: "GitHub", href: "https://github.com/bhuvanagopalam/Drug-Review-Semantic-Matching" }],
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
