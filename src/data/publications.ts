export type Publication = {
  title: string;
  venue: string;
  year: string;
  summary: string;
  authors: string;
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const publications: Publication[] = [
  {
    title:
      "Cascading Robustness Verification: Toward Efficient Model-Agnostic Certification",
    venue: "IEEE Conference on Secure and Trustworthy Machine Learning (SaTML)",
    year: "2026",
    summary:
      "A model-agnostic robustness verification framework that progressively applies multiple verifiers to improve certified accuracy while reducing runtime.",
    authors: "Maleki, M., Sidibomma, R., Adibi, A., and Samavi, R.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2602.04236" },
      { label: "PDF", href: "/files/CRV_arxiv.pdf" },
    ],
  },
  {
    title:
      "Hate Speech Detection and Target Identification in Devanagari Languages via Parameter Efficient Fine-Tuning of LLMs",
    venue: "CHiPSAL Workshop, COLING",
    year: "2025",
    summary:
      "A parameter-efficient LLM fine-tuning approach for low-resource hate speech detection and target identification in Hindi and Nepali.",
    authors:
      "Sidibomma, R., Patwa, P., Patwa, P., Chadha, A., Jain, V., and Das, A.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2412.17131" },
      { label: "ACL Anthology", href: "https://aclanthology.org/2025.chipsal-1.34/" },
      { label: "PDF", href: "/files/2412.17131v1.pdf" },
    ],
  },
  {
    title:
      "Learning Semantic Representations and Discriminative Features in Unsupervised Domain Adaptation",
    venue: "IEEE International Symposium on Electronic Systems Devices and Computing",
    year: "2023",
    summary:
      "A domain adaptation method that aligns semantic representations while improving discriminative target-domain features.",
    authors: "Sidibomma, R. and Sanodiya, R. K.",
    links: [
      { label: "IEEE", href: "https://ieeexplore.ieee.org/abstract/document/10149872" },
      { label: "PDF", href: "/files/Rushendra_camera_ready_paper_ieee_esdc.pdf" },
    ],
  },
];
