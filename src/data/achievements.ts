export type AchievementPhoto = {
  src: string;
  alt: string;
  caption?: string;
  // CSS object-position for the cover crop, e.g. "35% 50%" to keep the left
  // part of a wide photo in view. Defaults to centre.
  focus?: string;
};

export type Achievement = {
  title: string;
  // Who gave the award or ran the event.
  issuer: string;
  date: string;
  // Hackathon, Award, Scholarship, Rank ...
  kind: string;
  summary: string;
  details?: string[];
  // Put files in public/images/achievements/ and reference them as
  // /images/achievements/<file>. The first photo is the card cover; the rest
  // show as thumbnails under it.
  photos?: AchievementPhoto[];
  // Internal links (starting with /) open in the same tab; external ones open
  // in a new tab.
  links?: Array<{
    label: string;
    href: string;
  }>;
};

// Newest first. The Achievements section only renders when this list has at
// least one entry.
export const achievements: Achievement[] = [
  {
    title: "Second Place, Vision Track at Social Hack 2026",
    issuer: "Social Coding, University of Minnesota",
    date: "October 25, 2026",
    kind: "Hackathon",
    summary:
      "Vigil, a phone-camera vital-signs monitor for ER waiting rooms, took second place in the Vision track at Social Hack, the free 24-hour hackathon run by Social Coding at Coffman Memorial Union. We built it from nothing between Saturday morning and Sunday afternoon and demoed it live on stage.",
    details: [
      "Judged by Bellamy John (Two Sigma), Yehor Zharikhin (ICPC World Finalist), Aaron Castle (Meta) and Seth Koenig (UMN professor).",
      "Built with one teammate. The full write-up, the signal pipeline and an in-browser demo on a real recording are on the Vigil project page.",
    ],
    photos: [
      {
        src: "/images/achievements/social-hack-2026-team.jpg",
        alt: "Two students on the Coffman Theatre stage under a slide reading 2nd Place, Vision, Vigil",
        caption: "On stage as the Vision track result went up.",
        focus: "36% 50%",
      },
      {
        src: "/images/achievements/social-hack-2026-judges.jpg",
        alt: "The four Social Hack judges standing on stage in front of the Social Hack judging slide",
        caption: "The judges: Bellamy John, Yehor Zharikhin, Aaron Castle and Seth Koenig.",
      },
    ],
    links: [
      { label: "Vigil project page", href: "/projects/vigil/" },
      { label: "GitHub", href: "https://github.com/bhuvanagopalam/Vigil" },
      { label: "Event page", href: "https://cse.umn.edu/cs/events/social-hack-presented-social-coding" },
    ],
  },
  {
    title: "Silver Medal, Data Science Department",
    issuer: "Mahatma Gandhi Institute of Technology",
    date: "June 2025",
    kind: "Award",
    summary:
      "Awarded the Silver Medal and a Certificate of Merit for Outstanding Academic Excellence for the second position in B.Tech Computer Science and Engineering (Data Science), academic years 2021 to 2025, with a CGPA of 8.84.",
    photos: [
      {
        src: "/images/achievements/silver-medal-2025.jpg",
        alt: "Silver medal on a yellow ribbon beside the Certificate of Merit from Mahatma Gandhi Institute of Technology for second position in B.Tech Computer Science and Engineering (Data Science), 2021 to 2025",
        caption: "Silver Medal and Certificate of Merit, 2025.",
        focus: "45% 50%",
      },
    ],
  },
  {
    title: "First Rank, Data Science Department",
    issuer: "Mahatma Gandhi Institute of Technology",
    date: "Academic year 2021-22",
    kind: "Rank",
    summary:
      "Ranked first in the Data Science department by GPA in the first year of the B.Tech programme. Recognised with a Certificate of Merit and trophy for Outstanding Academic Excellence, presented by the MGIT Women Development Committee on International Women's Day 2023.",
    photos: [
      {
        src: "/images/achievements/first-rank-2022.jpg",
        alt: "Certificate of Merit from Mahatma Gandhi Institute of Technology for first position in B.Tech first year, 2021-22, next to the International Women's Day award trophy",
        caption: "Certificate of Merit and trophy, International Women's Day 2023.",
        focus: "38% 50%",
      },
    ],
  },
];
