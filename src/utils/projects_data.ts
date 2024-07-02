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
  // IRONHACK - 2021
  {
    slug: "commercly",
    header: "Ironhack - 2021",
    title: "Commercly",
    description:
      "Last project developed during the fullstack bootcamp in Ironhack. The objective of the project was to create a Fullstack project where aply all the technologies together.",
    skills: ["Css", "Javascript", "React", "Node.js", "Express", "Mongo db"],
    thumbnailSrc: "",
    githubLinkFront: "https://github.com/lauraAlabau/commercly-cli",
    previewLink: "https://commercly-cli.herokuapp.com/",
    githubLinkBack: "https://github.com/lauraAlabau/commercly-srv",
  },
  {
    slug: "mtg-deck-creator",
    header: "Ironhack - 2021",
    title: "MTG Deck Creator",
    description:
      "Second project developed during the fullstack bootcamp in Ironhack. The objective of the project was to create a Backend project with a external api and also its own database where being able to manage users and it's data",
    skills: [
      "Handelbars",
      "Css",
      "Javascript",
      "Node.js",
      "Express",
      "Mongo db",
    ],
    thumbnailSrc: "",
    githubLinkFront: "https://github.com/lauraAlabau/project-2_API",
    previewLink: "https://mtg-deck-creator.cyclic.app/",
    githubLinkBack: "",
  },
  {
    slug: "hungry-cats",
    header: "Ironhack - 2021",
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
  // ENTAIN - 2019/2021
  // DINAMIC COMUNICACIO - 2017/2016

  {
    slug: "uqifa",
    header: "Dinàmic Comunicació - 2017",
    title: "Uquifa",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/celebrem-amb-uquifa-seu-80-aniversari-creant-nova-web/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "apiject",
    header: "Dinàmic Comunicació - 2017",
    title: "Apiject",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/apiject-confia-en-dinamic-per-crear-la-landing-del-seu-nou-productec/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "som-hi-boi",
    header: "Dinàmic Comunicació - 2017",
    title: "Som-HiBoi",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/dinamic-posa-la-seva-experiencia-al-servei-d-un-crowdfunding-solidari-de-la-ue-santboiana/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "my-ideal-it",
    header: "Profesional project - 2019",
    title: "",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/myideal-it-dispositius-amb-un-300-mes-de-prestacions/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "",
    header: "Profesional project - 2019",
    title: "",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "",
    header: "Profesional project - 2019",
    title: "",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "",
    header: "Profesional project - 2019",
    title: "",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "",
    header: "Profesional project - 2019",
    title: "",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "trip-troop",
    header: "Dinàmic Comunicació - 2019",
    title: "Trip Troop",
    description: "",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc: "https://utfs.io/f/",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
  },
  {
    slug: "cines-full",
    header: "Dinàmic Comunicació - 2016",
    title: "Cines Full",
    description:
      "Design of banners for web, email and social networks for the client Full cinemas.",
    skills: ["Ps", "Ai", "Html", "Css"],
    thumbnailSrc:
      "https://utfs.io/f/c4693770-ec37-4489-b75b-d1c46e95fc37-cl8kh6.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/c4693770-ec37-4489-b75b-d1c46e95fc37-cl8kh6.jpg",
      "https://utfs.io/f/191c37f3-5562-4e55-9a49-1cbf9255af5b-cl8kh7.jpg",
      "https://utfs.io/f/07b27300-3cc1-4e95-bc9b-8ad7085df339-cl8kh8.jpg",
      "https://utfs.io/f/04a5a82c-7ee5-4956-b45d-360f411848ca-cl8kh9.jpg",
    ],
  },
  {
    slug: "acpg",
    header: "Dinàmic Comunicació - 2016",
    title: "Asociación Catalana de Profesionales de la Gastronomía (ACPG)",
    description:
      "Web made with Joomla, customisation based on the client's needs and custom responsive made with CSS and HTML",
    skills: ["Ps", "Ai", "Ae", "Html", "Css"],
    thumbnailSrc:
      "https://utfs.io/f/bb60bbc2-4b75-4abb-ab3b-716e38fcede4-nj9eyr.jpg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/portal-associacio-professionals-gastonomia/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/bb60bbc2-4b75-4abb-ab3b-716e38fcede4-nj9eyr.jpg",
      "https://utfs.io/f/863a7513-455e-4a97-8881-ad8aa07af19a-nj9eyq.jpg",
      "https://utfs.io/f/92cdab43-28ef-4414-b449-474b68f3aa49-nj9eyp.jpg",
      "https://utfs.io/f/844c1c0c-ddf5-4f57-b6bd-bf0e0f73f0c9-nj9eyo.jpg",
    ],
  },
  {
    slug: "avgvstvs-forvm",
    header: "Dinàmic Comunicació - 2016",
    title: "Avgvstvs Forvm",
    description:
      "Redesign with a simple structure that provides agile navigation, faster and quicker access to content and has been specially designed to adjust to different mobile devices: laptops, tablets and mobiles.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc:
      "https://utfs.io/f/91d31686-4d03-40ae-b549-8394dad7ff29-4n0ilk.jpg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/treballem-amb-el-departament-de-cellers-avgvstvs-forvm-per-crear-la-nova-web/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/91d31686-4d03-40ae-b549-8394dad7ff29-4n0ilk.jpg",
      "https://utfs.io/f/e7070b4a-511b-4ce6-a629-4e6d5ec32ecd-4n0ilj.jpg",
      "https://utfs.io/f/dd2f012e-74d3-4f5e-91a3-997a7df21d3d-4n0ili.jpg",
      "https://utfs.io/f/f61a847d-8a53-4cec-a508-98287b277be0-4n0ilh.jpg",
    ],
  },
  // MTG (Freelance) - 2018
  {
    slug: "god-mtg-2018",
    header: "Freelance - 2018",
    title: "GOD MTG",
    description: "",
    skills: ["Ps", "Ai"],
    thumbnailSrc:
      "https://utfs.io/f/eabb0803-92f0-4af4-a101-61fa3ab43b1f-2qqf4z.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/eabb0803-92f0-4af4-a101-61fa3ab43b1f-2qqf4z.jpg",
    ],
  },
  // MTG (Freelance) - 2017
  {
    slug: "god-mtg-2017",
    header: "Freelance - 2017",
    title: "GOD MTG",
    description: "",
    skills: ["Ps", "Ai"],
    thumbnailSrc:
      "https://utfs.io/f/f10afdfe-e4f1-41dd-9900-8f2652122b98-2qqf4y.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/f10afdfe-e4f1-41dd-9900-8f2652122b98-2qqf4y.jpg",
    ],
  },
  // ANANOS (Freelance) - 2016
  {
    slug: "ananos",
    header: "Freelance - 2016",
    title: "Ananos",
    description: "Logo and advertising design for a jam brand.",
    skills: ["Ps", "Ai"],
    thumbnailSrc:
      "https://utfs.io/f/ebdc27ac-a46e-42b0-8613-a028f92815ec-gx09jy.jpg",
    githubLinkFront: "",
    previewLink: "https://ananosberries.com/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/ebdc27ac-a46e-42b0-8613-a028f92815ec-gx09jy.jpg",
      "https://utfs.io/f/c2f26ac0-e345-4a75-9d14-46f5e08cc294-gx09jx.jpg",
      "https://utfs.io/f/421fb296-0f28-4cf7-b621-1a77583838d6-gx09jw.jpg",
    ],
  },
  // BIRRABOX (Freelance) - 2015/2016
  {
    slug: "birrabox",
    header: "Freelance - 2015/16",
    title: "Birrabox",
    description:
      "Redesign of the website and landing page was carried out to improve Birrabox's online presence. Also creation of advertising banners specifically adapted to web and social media to help boost the brand's presence.",
    skills: ["Ps", "Ai"],
    thumbnailSrc:
      "https://utfs.io/f/93a65d4d-425c-4f93-a458-dca37db091b5-daf9fv.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/93a65d4d-425c-4f93-a458-dca37db091b5-daf9fv.jpg",
      "https://utfs.io/f/611c3d64-c0d7-4129-ac48-72b14d676dbd-daf9fu.jpg",
      "https://utfs.io/f/40561dce-c8d0-4db8-a556-f50d323b3c1f-daf9ft.jpg",
    ],
  },
  // GROUPALIA - 2015
  {
    slug: "groupalia",
    header: "Groupalia - 2015",
    title: "E-commerce designs",
    description: "Web banner creation and design for ecommerce company.",
    skills: ["Ps", "Ai"],
    thumbnailSrc:
      "https://utfs.io/f/12364f5a-4140-415b-9e56-987a89b77697-j251uu.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/12364f5a-4140-415b-9e56-987a89b77697-j251uu.jpg",
      "https://utfs.io/f/16c8921d-e829-46a5-abfe-dca897a2828b-j251uv.jpg",
      "https://utfs.io/f/ea838144-a675-4338-aa91-0a2141eeea33-j251uw.jpg",
    ],
  },
  // SPOTS (Freelance) - 2015
  {
    slug: "spots-2015",
    header: "Freelance - 2015",
    title: "SPOTS",
    description: "Logo and icon design for a game in the App store",
    skills: ["Ps", "Ai"],
    thumbnailSrc:
      "https://utfs.io/f/ffd4cd65-d0c0-4a15-9409-88fdb4dbb275-x1zeuj.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/ffd4cd65-d0c0-4a15-9409-88fdb4dbb275-x1zeuj.jpg",
      "https://utfs.io/f/ebf48f99-7254-46b3-91f3-b14aea2b07a0-x1zeui.jpg",
    ],
  },
];

export const getProject = async (slug: string) => {
  const project = PROJECTS_DATA.find((project) => project.slug.includes(slug));
  console.log({ project });
  return project ?? null;
};
