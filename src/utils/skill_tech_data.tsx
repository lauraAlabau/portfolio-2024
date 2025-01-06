import { SiElixir, SiElm, SiExpress, SiJest, SiVitest } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandFigma,
  TbBrandGit,
  TbBrandGithub,
  TbBrandGraphql,
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
        icon: <TbBrandHtml5 className="stroke-1 size-10" />,
        name: "HTML",
        subtitle: "Frontend Development",
      },
      {
        icon: <TbBrandCss3 className="stroke-1 size-10" />,
        name: "CSS",
        subtitle: "Frontend Development",
      },
      {
        icon: <TbBrandJavascript className="stroke-1 size-10" />,
        name: "JavaScript",
        subtitle: "Frontend Development",
      },
      {
        icon: <TbBrandTypescript className="stroke-1 size-10" />,
        name: "Typescript",
        subtitle: "Frontend Development",
      },
      {
        icon: (
          <SiElm
            className="stroke-[1.1px] border-[1.1px] border-slate-400 size-8 stroke-slate-400"
            color="#030819"
          />
        ),
        name: "Elm",
        subtitle: "Frontend Development",
      },
      {
        icon: (
          <SiElixir
            className="h-10 stroke-1 w-9 stroke-slate-400"
            color="#030819"
          />
        ),
        name: "Elixir",
        subtitle: "Backend Development",
      },
    ],
  },
  {
    type: "Frameworks",
    technologies: [
      {
        icon: <TbBrandReact className="stroke-1 size-10" />,
        name: "React",
        subtitle: "Frontend Development",
      },
      {
        icon: <TbBrandGraphql className="stroke-1 size-10" />,
        name: "GraphQL",
        subtitle: "Frontend and Backend API Integration",
      },
      {
        icon: <SiJest className="size-10 stroke-[0.5px] stroke-slate-950" />,
        name: "Jest",
        subtitle: "Frontend Testing",
      },
      {
        icon: <TbBrandTailwind className="stroke-1 size-10" />,
        name: "Tailwind",
        subtitle: "CSS Framework",
      },
      {
        icon: <TbBrandNodejs className="stroke-1 size-10" />,
        name: "Node.js",
        subtitle: "Backend Development",
      },
      {
        icon: <SiExpress className="size-10" />,
        name: "Express",
        subtitle: "Backend Development",
      },
      {
        icon: <SiVitest className="stroke-1 size-10 stroke-[#030819]" />,
        name: "Vitest",
        subtitle: "Testing Framework",
      },
    ],
  },

  {
    type: "Softwares and Tools",
    technologies: [
      {
        icon: <TbBrandGit className="stroke-1 size-10" />,
        name: "Git",
        subtitle: "Version Control",
      },
      {
        icon: <TbBrandGithub className="stroke-1 size-10" />,
        name: "Github",
        subtitle: "Developer Platform",
      },
      {
        icon: <TbBrandVscode className="stroke-1 size-10" />,
        name: "VSCode",
        subtitle: "Code Editor",
      },
      {
        icon: <TbBrandMongodb className="stroke-1 size-10" />,
        name: "MongoDB",
        subtitle: "Backend Development",
      },
      {
        icon: <TbBrandFigma className="stroke-1 size-10" />,
        name: "Figma",
        subtitle: "Design Tools",
      },
    ],
  },
];
