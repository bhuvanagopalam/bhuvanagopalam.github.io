export type SkillGroup = {
  title: string;
  skills: Array<{
    name: string;
    icon?: string;
  }>;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "python" },
      { name: "SQL", icon: "sql" },
      { name: "R", icon: "concept" },
      { name: "C", icon: "concept" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Machine Learning", icon: "concept" },
      { name: "Deep Learning", icon: "concept" },
      { name: "Natural Language Processing", icon: "concept" },
      { name: "Computer Vision", icon: "concept" },
      { name: "LLMs", icon: "concept" },
      { name: "MLOps", icon: "concept" },
    ],
  },
  {
    title: "ML Frameworks",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "Transformers", icon: "huggingface" },
      { name: "Fairseq", icon: "concept" },
      { name: "XGBoost", icon: "concept" },
      { name: "LightGBM", icon: "concept" },
    ],
  },
  {
    title: "LLMs & Applied AI",
    skills: [
      { name: "LangChain", icon: "langchain" },
      { name: "LlamaIndex", icon: "concept" },
      { name: "llama.cpp", icon: "concept" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Semantic Search", icon: "concept" },
      { name: "Visual Question Answering", icon: "concept" },
    ],
  },
  {
    title: "Data Science Libraries",
    skills: [
      { name: "NumPy", icon: "python" },
      { name: "Pandas", icon: "python" },
      { name: "Matplotlib", icon: "python" },
      { name: "Seaborn", icon: "python" },
      { name: "Plotly", icon: "concept" },
      { name: "NLTK", icon: "concept" },
    ],
  },
  {
    title: "Computer Vision Tools",
    skills: [
      { name: "OpenCV", icon: "concept" },
      { name: "Pillow", icon: "concept" },
      { name: "torchvision", icon: "pytorch" },
      { name: "Grad-CAM", icon: "concept" },
      { name: "Object Detection", icon: "concept" },
      { name: "Medical Imaging", icon: "concept" },
    ],
  },
  {
    title: "Backend, Data & Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "AWS Linux", icon: "linux" },
      { name: "Gradio", icon: "concept" },
    ],
  },
  {
    title: "Tools & Analytics",
    skills: [
      { name: "Tableau", icon: "concept" },
      { name: "Microsoft Excel", icon: "concept" },
      { name: "VS Code", icon: "concept" },
      { name: "Anaconda", icon: "python" },
      { name: "Pinecone", icon: "concept" },
    ],
  },
];
