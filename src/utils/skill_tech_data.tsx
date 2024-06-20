import { SiExpress, SiJest } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandFigma,
  TbBrandGit,
  TbBrandGithub,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVscode,
} from "react-icons/tb";

export const SKILL_TECH_DATA = [
  {
    type: "Languages",
    technologies: [
      {
        icon: <TbBrandHtml5 className="w-10 h-10 stroke-1" />,
        name: "HTML",
        subtitle: "Frontend Development",
      },
      {
        icon: <TbBrandCss3 className="w-10 h-10 stroke-1" />,
        name: "Css",
        subtitle: "Frontend Development",
      },
      {
        icon: <TbBrandJavascript className="w-10 h-10 stroke-1" />,
        name: "JavaScript",
        subtitle: "Frontend Development",
      },
      {
        icon: <TbBrandTypescript className="w-10 h-10 stroke-1" />,
        name: "Typescript",
        subtitle: "Frontend Development",
      },
    ],
  },
  {
    type: "Frameworks",
    technologies: [
      {
        icon: <TbBrandReact className="w-10 h-10 stroke-1" />,
        name: "React",
        subtitle: "Frontend Development",
      },
      {
        icon: <SiJest className="w-10 h-10 stroke-[0.5px] stroke-slate-950" />,
        name: "Jest",
        subtitle: "Frontend Testing",
      },
      {
        icon: <TbBrandTailwind className="w-10 h-10 stroke-1" />,
        name: "Tailwind",
        subtitle: "CSS Framework",
      },
      {
        icon: <TbBrandNodejs className="w-10 h-10 stroke-1" />,
        name: "Node.js",
        subtitle: "Backend Development",
      },
      {
        icon: <SiExpress className="w-10 h-10 " />,
        name: "Express",
        subtitle: "Backend Development",
      },
    ],
  },

  {
    type: "Softwares and Tools",
    technologies: [
      {
        icon: <TbBrandGit className="w-10 h-10 stroke-1" />,
        name: "Git",
        subtitle: "Version Control",
      },
      {
        icon: <TbBrandGithub className="w-10 h-10 stroke-1" />,
        name: "Github",
        subtitle: "Developer Platform",
      },
      {
        icon: <TbBrandVscode className="w-10 h-10 stroke-1" />,
        name: "vscode",
        subtitle: "Code Editor",
      },
      {
        icon: <TbBrandMongodb className="w-10 h-10 stroke-1" />,
        name: "Mongo db",
        subtitle: "Backend Development",
      },
      {
        icon: <TbBrandFigma className="w-10 h-10 stroke-1" />,
        name: "Figma",
        subtitle: "Design Tools",
      },
    ],
  },
];
