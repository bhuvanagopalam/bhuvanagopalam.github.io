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
      { name: "Go", icon: "go" },
      { name: "SQL", icon: "sql" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Java", icon: "java" },
      { name: "Bash", icon: "bash" },
    ],
  },
  {
    title: "LLMs & Agents",
    skills: [
      { name: "LangChain", icon: "langchain" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Transformers", icon: "huggingface" },
      { name: "RAG", icon: "concept" },
      { name: "LLM Evaluation", icon: "concept" },
      { name: "Agent Orchestration", icon: "concept" },
    ],
  },
  {
    title: "ML Frameworks",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "Scikit-Learn", icon: "scikitlearn" },
      { name: "NVIDIA RAPIDS", icon: "nvidia" },
      { name: "Computer Vision", icon: "concept" },
      { name: "Fine-tuning", icon: "concept" },
      { name: "LoRA", icon: "concept" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Django", icon: "django" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Node.js", icon: "nodejs" },
      { name: "REST APIs", icon: "concept" },
      { name: "Async Workers", icon: "concept" },
      { name: "Microservices", icon: "concept" },
    ],
  },
  {
    title: "Data & Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "Linux", icon: "linux" },
      { name: "AWS", icon: "concept" },
      { name: "Azure", icon: "concept" },
    ],
  },
];
