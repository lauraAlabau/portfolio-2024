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
      "https://utfs.io/f/440d9b1a-8fe6-4843-b4e7-f28183336897-1m8ujl.webp",
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
    slug: "mtg-creator-deck",
    header: "Ironhack - 2021",
    title: "MTG Creator Deck",
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
    previewLink: "",
    githubLinkBack: "",
    blogImgs: [
      "https://utfs.io/f/719713aa-be27-4427-99d4-d4882c151872-qd5o7g.jpg",
      "https://utfs.io/f/d439e4dc-584c-473a-bc33-bce63bb7f42c-qd5o7h.jpg",
      "https://utfs.io/f/ec7adf2c-d8c9-4a38-8250-27c443207ba7-qd5o7i.jpg",
    ],
  },
  {
    slug: "hungry-cats",
    header: "Ironhack - 2021",
    title: "Hungry Cats",
    description:
      "First project developed during the fullstack bootcamp in Ironhack. The objective was to create a game with javescript and canvas.",
    skills: ["Html", "Css", "Javascript", "Canvas"],
    thumbnailSrc:
      "https://utfs.io/f/28715dd5-dec5-448d-9c45-4d05dfc5314d-1muarz.jpg",
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
    thumbnailSrc:
      "https://utfs.io/f/eebcf297-3041-4773-97fa-cada1c1eb45e-mrc8f6.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/eebcf297-3041-4773-97fa-cada1c1eb45e-mrc8f6.jpg",
      "https://utfs.io/f/cfe3bf69-6cc3-449e-b36b-97d61438abeb-mrc8f5.jpg",
      "https://utfs.io/f/199e37d0-a3f5-4e0f-bbc3-92d4b712f11a-uoiyut.jpg",
      "https://utfs.io/f/ead1dd87-ab7e-4f01-8182-a12da1ccdfa7-uoiyuu.jpg",
      "https://utfs.io/f/188897b6-b69a-4dd2-8f93-4a9593e00973-5ul493.jpg",
      "https://utfs.io/f/aca2bb12-d3b9-4ff6-933c-306a18727a57-5ul494.jpg",
      "https://utfs.io/f/6fae347f-9477-4a09-87f7-dbb1b87a9c9d-5ul495.jpg",
    ],
  },
  // MTG (Freelance) - 2017/2018
  {
    slug: "god-mtg",
    header: "Freelance - 2017/18",
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
      "https://utfs.io/f/eabb0803-92f0-4af4-a101-61fa3ab43b1f-2qqf4z.jpg",
    ],
  },
  // DINAMIC COMUNICACIO - 2017/2016
  {
    slug: "uqifa",
    header: "Dinàmic Comunicació - 2017",
    title: "Uquifa",
    description:
      "Web built with Joomla and personalised with CSS to make it responsive and to meet client needs. Design of graphic elements for the web.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc:
      "https://utfs.io/f/b5152377-69ea-41aa-825b-6c5e4137a35a-3bpaqc.jpg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/celebrem-amb-uquifa-seu-80-aniversari-creant-nova-web/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/b5152377-69ea-41aa-825b-6c5e4137a35a-3bpaqc.jpg",
      "https://utfs.io/f/323cb253-fdbd-4005-b8d6-09cb6751e75e-3bpaq8.jpg",
      "https://utfs.io/f/a1750f9d-c4ed-448d-8f11-e92d42d7673e-3bpaqb.jpg",
      "https://utfs.io/f/796b459c-eeb0-49c6-bf0c-bd85474dce89-3bpaq7.jpg",
    ],
  },
  {
    slug: "vecesam",
    header: "Dinàmic Comunicació - 2017",
    title: "Vecesam",
    description:
      "Vecesam is a company that manufactures PVC windows and doors. Website built with Joomla and customised with CSS and HTML to fit the devices and client's requirements. Graphics elements design for the web.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc:
      "https://utfs.io/f/df8a47da-0d62-4cba-b28a-0314c67d0eb6-y7d442.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/df8a47da-0d62-4cba-b28a-0314c67d0eb6-y7d442.jpg",
      "https://utfs.io/f/3bcc03ae-3f13-4951-b9af-e2e76bfeacbd-y7d443.jpg",
      "https://utfs.io/f/ebd0bca7-2f44-41af-b865-1e69a8581cac-y7d444.jpg",
      "https://utfs.io/f/fdea3315-fbe6-4712-b969-df0c0f1e4862-y7d445.jpg",
    ],
  },
  {
    slug: "som-hi-boi",
    header: "Dinàmic Comunicació - 2017",
    title: "Som-HiBoi",
    description:
      "Website built with Joomla and customised with CSS and HTML to fit the devices and client's requirements.",
    skills: ["Ai", "Html", "Css", "Joomla"],
    thumbnailSrc:
      "https://utfs.io/f/421a3fa9-7eaa-4bd8-ab3c-652ac675f041-m2oxg0.jpg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/dinamic-posa-la-seva-experiencia-al-servei-d-un-crowdfunding-solidari-de-la-ue-santboiana/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/421a3fa9-7eaa-4bd8-ab3c-652ac675f041-m2oxg0.jpg",
      "https://utfs.io/f/17e46a24-129f-48d5-a5d4-a59927a77472-m2oxg1.jpg",
    ],
  },
  {
    slug: "my-ideal-it",
    header: "Profesional project - 2017",
    title: "My Ideal It",
    description:
      "Website built with Joomla and customised with CSS and HTML to fit the devices and client's requirements. This is a premium customisation company for mobile and laptop devices. Design of graphic elements for the web and also create some custom designs for devices.",
    skills: ["Ps", "Ai", "Ae", "Html", "Css", "Joombla"],
    thumbnailSrc:
      "https://utfs.io/f/776a9208-f2e6-4e0e-9608-0755dc995e32-glt6x4.jpg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/myideal-it-dispositius-amb-un-300-mes-de-prestacions/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/776a9208-f2e6-4e0e-9608-0755dc995e32-glt6x4.jpg",
      "https://utfs.io/f/2a39d71b-f2af-461d-936b-99620ae2852b-glt6x5.jpg",
    ],
  },
  {
    slug: "catchapp",
    header: "Dinàmic Comunicació - 2017",
    title: "CatchAPP",
    description:
      "Catchapp is an application where users can buy and share events with their friends and even resell tickets. Re-design of menu for the mobile version.",
    skills: ["Ps", "Ai"],
    thumbnailSrc:
      "https://utfs.io/f/0c87139d-aece-4964-99a8-819094026e19-szdza.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/0c87139d-aece-4964-99a8-819094026e19-szdza.jpg",
    ],
  },
  {
    slug: "apiject",
    header: "Dinàmic Comunicació - 2017",
    title: "Apiject",
    description:
      "Website built with Joomla and customised using CSS and HTML to adjust it to the different devices and client's requirements. Graphics design elements created specific to the website and customised to the look and feel of the brand.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
    thumbnailSrc:
      "https://utfs.io/f/9a24661b-4060-42e2-ac47-1c7ad320332f-3qu2wa.jpg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/apiject-confia-en-dinamic-per-crear-la-landing-del-seu-nou-productec/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/9a24661b-4060-42e2-ac47-1c7ad320332f-3qu2wa.jpg",
      "https://utfs.io/f/59ad4d4a-5eef-4bac-993e-e2dc9d5bedd3-3qu2wb.jpg",
      "https://utfs.io/f/060e7bb0-71e8-4279-9bba-c26da5af3d9a-3qu2wc.jpg",
    ],
  },
  {
    slug: "fantosfreak",
    header: "Dinàmic Comunicació - 2017",
    title: "FantosFreak",
    description: "Design and layout of media dossiers.",
    skills: ["Ps", "Ai", "In"],
    thumbnailSrc:
      "https://utfs.io/f/69c98568-b59f-4e7f-bb07-038a30c4f5b0-f7wqdd.jpg",
    githubLinkFront: "",
    previewLink:
      "https://dinamiccomunicacio.com/myideal-it-dispositius-amb-un-300-mes-de-prestacions/",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/69c98568-b59f-4e7f-bb07-038a30c4f5b0-f7wqdd.jpg",
      "https://utfs.io/f/66e1863d-5d10-49a7-af1f-95ef7c9f8914-f7wqdc.gif",
    ],
  },
  {
    slug: "trip-troop",
    header: "Dinàmic Comunicació - 2017",
    title: "Trip Troop",
    description: "Design and final artwork for printing.",
    skills: ["Ps", "Ai"],
    thumbnailSrc:
      "https://utfs.io/f/6f81e273-e3b5-49e7-b9fc-f6b2300cfa18-9e3eb5.jpg",
    githubLinkFront: "",
    previewLink: "",
    githubLinkBack: "",
    isBlog: true,
    blogImgs: [
      "https://utfs.io/f/6f81e273-e3b5-49e7-b9fc-f6b2300cfa18-9e3eb5.jpg",
      "https://utfs.io/f/1fafbb07-88e8-45e1-93ef-ed9bc49074a3-9e3eb6.jpg",
    ],
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
      "https://utfs.io/f/4054d56f-68ce-4895-b1d2-a4d765805c10-cl8kha.jpg",
      "https://utfs.io/f/191c37f3-5562-4e55-9a49-1cbf9255af5b-cl8kh7.jpg",
      "https://utfs.io/f/6ec11bc3-4e26-4dd9-9a17-62f04a892f92-cl8khc.jpg",
      "https://utfs.io/f/04a5a82c-7ee5-4956-b45d-360f411848ca-cl8kh9.jpg",
      "https://utfs.io/f/4818a6b7-292b-4f9b-ac5e-3261e46f2b9c-cl8khb.jpg",
      "https://utfs.io/f/07b27300-3cc1-4e95-bc9b-8ad7085df339-cl8kh8.jpg",
    ],
  },
  {
    slug: "acpg",
    header: "Dinàmic Comunicació - 2016",
    title: "ACPG",
    description:
      "Web made with Joomla, customisation based on the client's needs and custom responsive made with CSS and HTML.",
    skills: ["Ps", "Ai", "Html", "Css", "Joomla"],
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
    title: "Groupalia E-commerce",
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
  console.log({ project });
  return project ?? null;
};
