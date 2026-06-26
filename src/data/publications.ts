
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

export const publications: Publication[] = [];

