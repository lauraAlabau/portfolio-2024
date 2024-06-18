import { ProjectCard } from "../";
import { PROJECTS_DATA } from "../../utils/projects_data";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-[1000px] mx-auto my-0 text-slate-100 pt-28 h-auto flex flex-col justify-center items-center min-h-screen p-0"
    >
      <h2 className="flex items-center relative mt-2.5 mb-10 w-full text-2xl whitespace-nowrap font-semibold after:block after:relative after:top-0 after:w-80 after:h-[1px] after:bg-slate-400 after:ml-5">
        Some projects I've built
      </h2>
      <ul className="relative flex flex-col gap-8 p-0 m-0 list-none lg:gap-24">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard {...project} />
        ))}
      </ul>
    </section>
  );
};
