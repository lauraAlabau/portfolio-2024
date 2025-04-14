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
    thumbnailSrc: "/projects/portfolio-dark.svg",
    githubLinkFront: "https://github.com/lauraAlabau/portfolio-2024",
    githubLinkBack: "",
    previewLink: "https://laura-alabau.vercel.app/",
  },
  {
    slug: "budget-buddy",
    header: "Personal Project - 2024",
    title: "Budget Buddy",
    description:
      "Fullstack project to task th incomes and expenses each month and have an overview of the previous and current month and also the total of all times. This project use Clerk as third party api to authenticate and manage the users.",
    skills: ["Html", "Tailwind", "Typescript", "React", "Node.js", "Express", "Clerk", "Vercel"],
    thumbnailSrc: "/projects/budgetbuddy.svg",
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
    skills: ["Html", "Css", "Javascript", "React", "Node.js", "Express", "Vercel"],
    thumbnailSrc: "/projects/mtg-deck-creator.svg",
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
    slug: "mtg-creator-deck",
    header: "Ironhack - 2021",
    title: "MTG Creator Deck",
    description:
      "Second project developed during the fullstack bootcamp in Ironhack. The objective of the project was to create a Backend project with a external api and also its own database where being able to manage users and it's data",
    skills: ["Handelbars", "Css", "Javascript", "Node.js", "Express", "Mongo db"],
    thumbnailSrc: "/projects/magic-deck-creator-1.svg",
    githubLinkFront: "https://github.com/lauraAlabau/project-2_API",
    previewLink: "",
    githubLinkBack: "",
    blogImgs: [
      "/projects/magic-deck-creator-1.svg",
      "/projects/magic-deck-creator-2.svg",
      "/projects/magic-deck-creator-3.svg",
    ],
  },
  {
    slug: "hungry-cats",
    header: "Ironhack - 2021",
    title: "Hungry Cats",
    description:
      "First project developed during the fullstack bootcamp in Ironhack. The objective was to create a game with javescript and canvas.",
    skills: ["Html", "Css", "Javascript", "Canvas"],
    thumbnailSrc: "https://utfs.io/f/28715dd5-dec5-448d-9c45-4d05dfc5314d-1muarz.jpg",
    githubLinkFront: "https://github.com/lauraAlabau/proyect-1_the-game",
    previewLink: "https://lauraalabau.github.io/proyect-1_the-game/index.html",
    githubLinkBack: "",
  },
  // ENTAIN - 2019/2021
  {
    slug: "entain",
    header: "Entain - 2019/21",
    title: "Bwin, Betboo & Sportingbet",
    description:
      "Design of promotional banners for Bwin Sports and Bwin online casino, Betboo sports and casino and Sportingbet e-sports and casino. Adaptation for different countries, Spain, Brazil, Mexico and Colombia, and to different platforms and social networks.",
    skills: ["Ps", "Ai"],
    thumbnailSrc: "/projects/bwin-1.svg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "/projects/bwin-1.svg",
      "/projects/bwin-2.svg",
      "/projects/betboo-1.svg",
      "/projects/betboo-2.svg",
      "/projects/sportingbet-1.svg",
      "/projects/sportingbet-2.svg",
      "/projects/sportingbet-3.svg",
    ],
  },
  // MTG (Freelance) - 2017/2018
  {
    slug: "god-mtg",
    header: "Freelance - 2017/18",
    title: "GOD MTG",
    description: "",
    skills: ["Ps", "Ai"],
    thumbnailSrc: "/projects/god-mtg-2017.svg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/god-mtg-2017.svg", "/projects/god-mtg-2018.svg"],
  },
  // DINAMIC COMUNICACIO - 2017/2016
  {
    slug: "uqifa",
    header: "Dinàmic Comunicació - 2017",
    title: "Uquifa",
    description:
      "Web built with Joomla and personalised with CSS to make it responsive and to meet client needs. Design of graphic elements for the web.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc: "/projects/uqifa-1.svg",
    githubLinkFront: "",
    previewLink: "https://dinamiccomunicacio.com/celebrem-amb-uquifa-seu-80-aniversari-creant-nova-web/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/uqifa-1.svg", "/projects/uqifa-2.svg", "/projects/uqifa-5.svg", "/projects/uqifa-6.svg"],
  },
  {
    slug: "vecesam",
    header: "Dinàmic Comunicació - 2017",
    title: "Vecesam",
    description:
      "Vecesam is a company that manufactures PVC windows and doors. Website built with Joomla and customised with CSS and HTML to fit the devices and client's requirements. Graphics elements design for the web.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc: "/projects/vecesam-1.svg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "/projects/vecesam-1.svg",
      "/projects/vecesam-2.svg",
      "/projects/vecesam-3.svg",
      "/projects/vecesam-4.svg",
    ],
  },
  {
    slug: "som-hi-boi",
    header: "Dinàmic Comunicació - 2017",
    title: "Som-HiBoi",
    description:
      "Website built with Joomla and customised with CSS and HTML to fit the devices and client's requirements.",
    skills: ["Ai", "Html", "Css", "Joomla"],
    thumbnailSrc: "/projects/som-hi-boi-1.svg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/dinamic-posa-la-seva-experiencia-al-servei-d-un-crowdfunding-solidari-de-la-ue-santboiana/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/som-hi-boi-1.svg", "/projects/som-hi-boi-2.svg"],
  },
  {
    slug: "my-ideal-it",
    header: "Profesional project - 2017",
    title: "My Ideal It",
    description:
      "Website built with Joomla and customised with CSS and HTML to fit the devices and client's requirements. This is a premium customisation company for mobile and laptop devices. Design of graphic elements for the web and also create some custom designs for devices.",
    skills: ["Ps", "Ai", "Ae", "Html", "Css", "Joombla"],
    thumbnailSrc: "/projects/my-ideal-it-1.svg",
    githubLinkFront: "",
    previewLink: "https://dinamiccomunicacio.com/myideal-it-dispositius-amb-un-300-mes-de-prestacions/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/my-ideal-it-1.svg", "/projects/my-ideal-it-2.svg"],
  },
  {
    slug: "catchapp",
    header: "Dinàmic Comunicació - 2017",
    title: "CatchAPP",
    description:
      "Catchapp is an application where users can buy and share events with their friends and even resell tickets. Re-design of menu for the mobile version.",
    skills: ["Ps", "Ai"],
    thumbnailSrc: "/projects/catchapp.svg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/catchapp.svg"],
  },
  {
    slug: "apiject",
    header: "Dinàmic Comunicació - 2017",
    title: "Apiject",
    description:
      "Website built with Joomla and customised using CSS and HTML to adjust it to the different devices and client's requirements. Graphics design elements created specific to the website and customised to the look and feel of the brand.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc: "/projects/apiject-1.svg",
    githubLinkFront: "",
    previewLink: "https://dinamiccomunicacio.com/apiject-confia-en-dinamic-per-crear-la-landing-del-seu-nou-productec/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/apiject-1.svg", "/projects/apiject-2.svg", "/projects/apiject-3.svg"],
  },
  {
    slug: "fantosfreak",
    header: "Dinàmic Comunicació - 2017",
    title: "FantosFreak",
    description: "Design and layout of media dossiers.",
    skills: ["Ps", "Ai", "In"],
    thumbnailSrc: "/projects/fantos-freak-1.svg",
    githubLinkFront: "",
    previewLink: "https://dinamiccomunicacio.com/myideal-it-dispositius-amb-un-300-mes-de-prestacions/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/fantos-freak-1.svg", "/projects/fantos-freak-2.svg"],
  },
  {
    slug: "trip-troop",
    header: "Dinàmic Comunicació - 2017",
    title: "Trip Troop",
    description: "Design and final artwork for printing.",
    skills: ["Ps", "Ai"],
    thumbnailSrc: "/projects/trip-troop-1.svg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/trip-troop-1.svg", "/projects/trip-troop-2.svg"],
  },
  {
    slug: "cines-full",
    header: "Dinàmic Comunicació - 2016",
    title: "Cines Full",
    description: "Design of banners for web, email and social networks for the client Full cinemas.",
    skills: ["Ps", "Ai", "Html", "Css"],
    thumbnailSrc: "/projects/cines-full-2.svg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "/projects/cines-full-2.svg",
      "/projects/cines-full-3.svg",
      "/projects/cines-full-4.svg",
      "/projects/cines-full-5.svg",
      "/projects/cines-full-6.svg",
      "/projects/cines-full-7.svg",
    ],
  },
  {
    slug: "acpg",
    header: "Dinàmic Comunicació - 2016",
    title: "ACPG",
    description:
      "Web made with Joomla, customisation based on the client's needs and custom responsive made with CSS and HTML.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc: "/projects/acpg-1.svg",
    githubLinkFront: "",
    previewLink: "https://dinamiccomunicacio.com/portal-associacio-professionals-gastonomia/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/acpg-1.svg", "/projects/acpg-2.svg", "/projects/acpg-3.svg", "/projects/acpg-4.svg"],
  },
  {
    slug: "avgvstvs-forvm",
    header: "Dinàmic Comunicació - 2016",
    title: "Avgvstvs Forvm",
    description:
      "Redesign with a simple structure that provides agile navigation, faster and quicker access to content and has been specially designed to adjust to different mobile devices: laptops, tablets and mobiles.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc: "/projects/avgvstvs-forvm-0.svg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/treballem-amb-el-departament-de-cellers-avgvstvs-forvm-per-crear-la-nova-web/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "/projects/avgvstvs-forvm-0.svg",
      "/projects/avgvstvs-forvm-1.svg",
      "/projects/avgvstvs-forvm-2.svg",
      "/projects/avgvstvs-forvm-3.svg",
    ],
  },
  // ANANOS (Freelance) - 2016
  {
    slug: "ananos",
    header: "Freelance - 2016",
    title: "Ananos",
    description: "Logo and advertising design for a jam brand.",
    skills: ["Ps", "Ai"],
    thumbnailSrc: "/projects/ananos-1.svg",
    githubLinkFront: "",
    previewLink: "https://ananosberries.com/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: ["/projects/ananos-1.svg", "/projects/ananos-2.svg", "/projects/ananos-3.svg"],
  },
  // BIRRABOX (Freelance) - 2015/2016
  {
    slug: "birrabox",
    header: "Freelance - 2015/16",
    title: "Birrabox",
    description:
      "Redesign of the website and landing page was carried out to improve Birrabox's online presence. Also creation of advertising banners specifically adapted to web and social media to help boost the brand's presence.",
    skills: ["Ps", "Ai"],
    thumbnailSrc: "https://utfs.io/f/93a65d4d-425c-4f93-a458-dca37db091b5-daf9fv.jpg",
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
    title: "Groupalia E-commerce",
    description: "Web banner creation and design for ecommerce company.",
    skills: ["Ps", "Ai"],
    thumbnailSrc: "https://utfs.io/f/12364f5a-4140-415b-9e56-987a89b77697-j251uu.jpg",
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
    thumbnailSrc: "https://utfs.io/f/ffd4cd65-d0c0-4a15-9409-88fdb4dbb275-x1zeuj.jpg",
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

// {
//   slug: "",
//   header: "Profesional project - 2019",
//   title: "",
//   description: "",
//   skills: ["Ps", "Ai", "Ae", "Html", "Css"],
//   thumbnailSrc: "https://utfs.io/f/",
//   githubLinkFront: "",
//   previewLink: "",
//   githubLinkBack: "",
//   isBlog: true,
//   blogImgs: ["https://utfs.io/f/", "https://utfs.io/f/"],
// },s

export const getProject = async (slug: string) => {
  const project = PROJECTS_DATA.find((project) => project.slug.includes(slug));
  return project ?? null;
};
