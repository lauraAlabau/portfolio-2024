export type ProjectCard = {
  slug: string;
  header: string;
  title: string;
  description: string;
  skills: string[];
  thumbnailSrc: string;
  githubLinkFront: string;
  githubLinkBack: string;
  previewLink: string;
  isBlog?: boolean;
  blogImgs?: string[];
};

export const PROJECTS_DATA: ProjectCard[] = [
  {
    slug: "portfolio",
    header: "Personal Project - 2024",
    title: "Portfolio",
    description:
      "New portfolio web where you can find some information about me, my technical skills and work done. This project it's done with some of the technologies I usually work with. This project is still in progress.",
    skills: ["Html", "Tailwind", "Typescript", "React", "Vercel"],
    thumbnailSrc:
      "https://utfs.io/f/fd6f9e1b-29b6-443c-a19d-63934961b92a-1e3q3f.webp",
    githubLinkFront: "https://github.com/lauraAlabau/portfolio-react",
    githubLinkBack: "",
    previewLink: "https://laura-alabau.vercel.app/",
  },
  {
    slug: "finance-tracker",
    header: "Personal Project - 2024",
    title: "Finance Tracker",
    description:
      "Fullstack project to task th incomes and expenses each month and have an overview of the previous and current month and also the total of all times. This project use Clerk as third party api to authenticate and manage the users.",
    skills: [
      "Html",
      "Tailwind",
      "Typescript",
      "React",
      "Node.js",
      "Express",
      "Clerk",
      "Vercel",
    ],
    thumbnailSrc:
      "https://utfs.io/f/48d58539-3d74-41d0-9cf8-88f9182a63c3-9i3xtq.webp",
    githubLinkFront: "https://github.com/lauraAlabau/finance-tracker-client",
    previewLink: "https://finance-tracker-cli.vercel.app/",
    githubLinkBack: "https://github.com/lauraAlabau/finance-tracker-server",
  },
  {
    slug: "mtg-deck-creator-v2",
    header: "Personal Project - 2024",
    title: "MTG Deck Creator - V2",
    description:
      "This is a new version of a project developed during my bootcamp in 2021. I wanted to improve the functionality, the UI and also the complexity creating both backend and frontend as different and independant repositories. This project is still in progress.",
    skills: [
      "Html",
      "Css",
      "Javascript",
      "React",
      "Node.js",
      "Express",
      "Vercel",
    ],
    thumbnailSrc:
      "https://utfs.io/f/08505edd-d5f2-437a-982d-a06fe190d8a3-hudq8l.webp",
    githubLinkFront: "https://github.com/lauraAlabau/mtg-deck-creator-client",
    previewLink: "https://mtg-deck-creator-client.vercel.app/",
    githubLinkBack: "https://github.com/lauraAlabau/mtg-deck-creator-server",
  },
  {
    slug: "portfolio-2021",
    header: "Personal Project - 2021",
    title: "Portfolio",
    description: "First portfolio with React",
    skills: ["Javascript", "React", "Scss"],
    thumbnailSrc: "",
    githubLinkFront: "https://github.com/lauraAlabau/portfolio-react",
    previewLink: "https://portfolio-react-smoky-phi.vercel.app/",
    githubLinkBack: "",
  },
  {
    slug: "commercly",
    header: "Bootcamp Project - 2021",
    title: "Commercly",
    description:
      "Last project developed during the fullstack bootcamp in Ironhack. The objective of the project was to create a Fullstack project where aply all the technologies together.",
    skills: ["Handelbars", "Javascript", "Node.js", "Express", "Mongo db"],
    thumbnailSrc: "",
    githubLinkFront: "https://github.com/lauraAlabau/commercly-cli",
    previewLink: "https://commercly-cli.herokuapp.com/",
    githubLinkBack: "https://github.com/lauraAlabau/commercly-srv",
  },
  {
    slug: "mtg-deck-creator",
    header: "Bootcamp Project - 2021",
    title: "MTG Deck Creator",
    description:
      "Second project developed during the fullstack bootcamp in Ironhack. The objective of the project was to create a Backend project with a external api and also its own database where being able to manage users and it's data",
    skills: ["Handelbars", "Javascript", "Node.js", "Express", "Mongo db"],
    thumbnailSrc: "",
    githubLinkFront: "https://github.com/lauraAlabau/project-2_API",
    previewLink: "https://mtg-deck-creator.cyclic.app/",
    githubLinkBack: "",
  },
  {
    slug: "hungry-cats",
    header: "Bootcamp Project - 2021",
    title: "Hungry Cats",
    description:
      "First project developed during the fullstack bootcamp in Ironhack. The objective was to create a game with javescript and canva.",
    skills: ["Html", "Css", "Javascript", "Canva"],
    thumbnailSrc:
      "https://utfs.io/f/28715dd5-dec5-448d-9c45-4d05dfc5314d-1muarz.jpg",
    githubLinkFront: "https://github.com/lauraAlabau/proyect-1_the-game",
    previewLink: "https://lauraalabau.github.io/proyect-1_the-game/index.html",
    githubLinkBack: "",
  },
  {
    slug: "bwin",
    header: "Profesional project - 2019",
    title: "UX/UI Design",
    description: "test blabla",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc:
      "https://utfs.io/f/eebcf297-3041-4773-97fa-cada1c1eb45e-mrc8f6.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/eebcf297-3041-4773-97fa-cada1c1eb45e-mrc8f6.jpg",
    ],
  },
];

export const getProject = async (slug: string) => {
  const project = PROJECTS_DATA.find((project) => project.slug.includes(slug));
  console.log({ project });
  return project ?? null;
};
