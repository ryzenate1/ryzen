// src/lib/mock-data/projects.ts
export interface Project {
  _id: string;
  name: string;
  slug: string;
  image: string;
  tags: string[];
  client: string;
  url: string;
  description: string;
}

export const projects: Project[] = [
  {
    _id: "1",
    name: "Project One",
    slug: "project-one",
    image: "/project_1.png",
    tags: ["Web Design", "Astro"],
    client: "Client A",
    url: "#",
    description: "A description for project one.",
  },
  {
    _id: "2",
    name: "Project Two",
    slug: "project-two",
    image: "/project_2.png",
    tags: ["Web Development", "React"],
    client: "Client B",
    url: "#",
    description: "A description for project two.",
  },
  {
    _id: "3",
    name: "Project Three",
    slug: "project-three",
    image: "/project_3.png",
    tags: ["UI/UX", "Figma"],
    client: "Client C",
    url: "#",
    description: "A description for project three.",
  },
  {
    _id: "4",
    name: "Project Four",
    slug: "project-four",
    image: "/project_4.png",
    tags: ["Branding", "Illustrator"],
    client: "Client D",
    url: "#",
    description: "A description for project four.",
  },
];
