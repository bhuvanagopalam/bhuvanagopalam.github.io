export type ConferencePhoto = {
  src: string;
  alt: string;
  caption?: string;
  // CSS object-position for the cover crop, e.g. "35% 50%" to keep the left
  // part of a wide photo in view. Defaults to centre.
  focus?: string;
};

export type Conference = {
  name: string;
  // Attendee, Presenter, Poster, Volunteer, Panelist ...
  role: string;
  organizer?: string;
  location: string;
  date: string;
  summary: string;
  // Optional extra lines shown under the summary (talks attended, people met,
  // what was presented).
  details?: string[];
  // Put files in public/images/conferences/ and reference them as
  // /images/conferences/<file>. The first photo is the card cover; the rest
  // show as thumbnails under it.
  photos?: ConferencePhoto[];
  // Internal links (starting with /) open in the same tab; external ones open
  // in a new tab.
  links?: Array<{
    label: string;
    href: string;
  }>;
};

// Newest first. The Conferences section only renders when this list has at
// least one entry.
export const conferences: Conference[] = [
  {
    name: "WiADS 2026: Women in AI and Data Science Conference",
    role: "Attendee",
    organizer: "University of Minnesota AI Hub",
    location: "McNamara Alumni Center, Minneapolis, MN",
    date: "October 26, 2026",
    summary:
      "A full day at the Midwest's largest gathering of women in AI and data science, one day after the hackathon. I walked in running on very little sleep and walked out with a notebook full of ideas and a long list of people I want to learn from. The talks went from how AI quietly fails the people it was never built for to the exact engineering of shrinking a language model down to one domain, and every one of them was given by someone I would happily work for.",
    details: [
      "Keynote: Dangerously Biased AI, by Meredith Broussard (NYU), on using empathy to anticipate where AI goes wrong before it ships.",
      "Fine-Tuning and Distillation for Domain-Specialized Language Models, by Sona Maniyan (Thrivent).",
      "From Prediction to Action: Using Meta Learners to Measure Incremental Impact, by Gowthami Peri (Target).",
      "The Women's Health Data Gap: What Menopause Reveals About AI, by Robin Austin (UMN School of Nursing).",
      "Plus sessions by Jen Simon (Verus), Jamie Johnson (CNA Insurance) and many other speakers, and lunch-table conversations with women across the field that I am still thinking about.",
    ],
    photos: [
      {
        src: "/images/conferences/conference-2026-3.jpg",
        alt: "A packed session in Memorial Hall at the McNamara Alumni Center, with attendees at round tables facing the speaker's screen",
        caption: "Memorial Hall during a session.",
      },
      {
        src: "/images/conferences/conference-2026-1.jpg",
        alt: "Bhuvana at the WiADS photo booth holding a speech-bubble sign that reads My code includes everyone",
        caption: "Photo booth: My code includes everyone.",
      },
      {
        src: "/images/conferences/conference-2026-2.jpg",
        alt: "Bhuvana at the WiADS photo booth holding the Women in Analytics and Data Science sign",
        caption: "With the WiADS sign.",
      },
    ],
    links: [
      { label: "Conference site", href: "https://ai.umn.edu/training-events/wiads-2026-women-ai-and-data-science-conference" },
    ],
  },
];
