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
    title: "AI Development Intern",
    organization: "BioStack Platforms (YC P26)",
    category: "Industry",
    location: "San Francisco, CA",
    start: "May 2026",
    end: "Present",
    summary:
      "Designing reinforcement-learning environments and evaluation scenarios for LLM agents in clinical workflows.",
    details: [
      "Designed and implemented 15+ reinforcement-learning environments for LLM agents, converting longitudinal clinical workflows into measurable states, actions, rewards, and task success criteria for post-training.",
      "Generated 300+ LLM-agent scenarios across reasoning, retrieval, and tool-use workflows, using structured traces and scoring rubrics to support RLHF/RLVR data generation and failure analysis.",
      "Improved LLM-agent task success rate by 18% and reduced unsupported responses by 25% by converting failure traces into targeted red-teaming cases, reward refinements, and post-training data signals.",
    ],
    tags: ["LLM Agents", "RLHF/RLVR", "Clinical AI", "Evaluation"],
  },
  {
    title: "Machine Learning Engineer",
    organization: "AutomationEdge Technologies",
    category: "Industry",
    location: "Pune, India",
    start: "July 2024",
    end: "July 2025",
    summary:
      "Built production document-intelligence and agentic extraction systems for clinical workflow automation.",
    details: [
      "Built a production document-intelligence platform combining OCR, VLM-based layout handling, agentic LLM extraction, and schema validation to convert unstructured clinical documents into validated records; reduced patient intake errors by 40%.",
      "Fine-tuned a VLM-based layout classifier to detect multi-column layouts, checkboxes, and other complex page formats, routing only high-value pages to frontier vision models and reducing vision-model inference costs by over 50%.",
      "Devised keyword-based page pruning to skip 60% of irrelevant pages before extraction, cutting model-processing costs by 40% while preserving field-level recall on gold-standard documents.",
      "Implemented Django REST APIs and PostgreSQL-backed workflow state for upload, parsing, extraction, validation, audit logs, and RPA handoffs; kept large-document latency under 90 seconds across 20,000+ monthly requests.",
      "Built a pytest-based regression suite over gold-standard medical documents to validate schema correctness and field-level extraction quality despite nondeterministic LLM outputs; kept extraction error rate under 10%.",
    ],
    tags: ["Document AI", "OCR", "VLMs", "Django", "PostgreSQL", "Healthcare AI"],
  },
  {
    title: "Backend Engineering Intern",
    organization: "Eyemote Vision",
    category: "Industry",
    location: "Remote",
    start: "September 2023",
    end: "January 2024",
    summary:
      "Built backend ML inference services for diabetic-retinopathy screening from retinal fundus images.",
    details: [
      "Engineered a backend ML inference service in Python for detecting diabetic retinopathy from retinal fundus images, exposing deep learning model predictions via APIs for integration into clinical screening workflows.",
      "Trained and deployed computer vision models in PyTorch to grade severity of diabetic retinopathy on large-scale retinal imaging datasets, optimizing inference for low-latency, near real-time predictions.",
      "Integrated the ML system with partner eye clinics' internal systems to enable automated image ingestion and delivery of diagnostic predictions in production healthcare environments, shipping the system as the minimum viable product.",
    ],
    tags: ["Computer Vision", "PyTorch", "Healthcare", "APIs"],
  },
  {
    title: "Graduate Research Assistant",
    organization: "Masonic Cancer Research Center, University of Minnesota",
    category: "Research",
    location: "Minneapolis, MN",
    start: "January 2026",
    end: "May 2026",
    summary:
      "Built microscopy-image processing and analysis pipelines for multiplex histology datasets.",
    details: [
      "Engineered Python pipelines for 230GB+ high-resolution microscopy images, handling preprocessing, segmentation, and structured feature extraction across diverse multiplex histology datasets.",
      "Fine-tuned deep learning-based segmentation models using PyTorch to extract features from 1M+ cells; improved the segmentation accuracy of standard Cellpose models by 10% on internal lab-generated imaging datasets.",
      "Developed GPU-accelerated clustering and analysis workflows with RAPIDS, Pandas, and NumPy, reducing manual review time by 60% and improving cell identification and classification reliability.",
    ],
    tags: ["Microscopy", "PyTorch", "RAPIDS", "Segmentation", "Cancer Research"],
  },
  {
    title: "Mitacs Fellow",
    organization: "Trustworthy AI Lab, Toronto Metropolitan University",
    category: "Fellowship",
    location: "Toronto, Canada",
    start: "May 2023",
    end: "May 2025",
    summary:
      "Researched scalable neural-network robustness verification under a competitive Mitacs fellowship.",
    details: [
      "Received a $10,000 fellowship with an acceptance rate below 8% globally among 25,000 applicants.",
      "Built scalable verification frameworks to evaluate neural network reliability under adversarial conditions, reducing certification runtime by 70% compared to prior methods.",
      "Designed optimization-based certification pipelines that improved computational efficiency by 47% while maintaining less than 2% deviation from comparable high-cost state-of-the-art methods.",
      "Developed reproducible benchmarking methods to compare model robustness across architectures, supporting systematic model validation and safety assessment of deep learning models.",
    ],
    tags: ["Trustworthy AI", "Certified Robustness", "Optimization", "Mitacs"],
  },
];
