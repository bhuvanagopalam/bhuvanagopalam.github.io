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
    title: "Applied AI Systems",
    status: "Placeholder",
    summary:
      "A slot for selected applied AI work covering problem framing, model or agent design, evaluation, and measurable outcome.",
    highlights: [
      "Problem context and target user or workflow.",
      "Model, retrieval, agent, or evaluation approach.",
      "Measured result, demo, repository, or write-up.",
    ],
    tags: ["Machine Learning", "Python", "Research"],
  },
  {
    title: "Backend & Data Systems",
    status: "Placeholder",
    summary:
      "A slot for engineering work that shows API design, data storage, automation, deployment, and reliability.",
    highlights: [
      "System architecture and core data flow.",
      "API, database, cloud, or automation decisions.",
      "Performance, reliability, demo, or repository link.",
    ],
    tags: ["Backend", "Data", "APIs"],
  },
  {
    title: "Research Prototypes",
    status: "Placeholder",
    summary:
      "A slot for experimental prototypes in robustness, NLP, or computer vision with clear baselines and evaluation.",
    highlights: [
      "Research objective or hypothesis.",
      "Datasets, experiments, and baselines.",
      "Code, paper, slides, or reproducibility notes.",
    ],
    tags: ["Robust ML", "Experimentation", "Evaluation"],
  },
];
