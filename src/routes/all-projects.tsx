import { BiLinkExternal } from "react-icons/bi";
import { ProjectList } from "../components/projectList/ProjectList";
import { PROJECTS_DATA } from "../utils/projects_data";

export const AllProjects = () => {
  return (
    <main className="max-w-[1600px] mx-auto my-0 text-slate-100 lg:py-52 lg:px-36 h-auto  min-h-screen">
      <header>
        <h1 className="mt-28 text-3xl ml-2.5 lg:ml-0 font-semibold leading-tight lg:block lg:text-7xl">
          Archive routes
        </h1>
        <p className="ml-2.5 lg:ml-0 text-base text-red-300">
          All the projects I’ve worked on
        </p>
        <p className="lg:flex ml-2.5 lg:ml-0 text-base text-slate-300 ">
          This page is WIP, you can check my old projects in this
          <a
            href="https://laura-alabau-rodriguez.com/"
            className="inline-flex items-center gap-1 ml-2 font-bold hover:text-red-300"
            aria-label="Go to my old projects page"
          >
            Link
            <BiLinkExternal className="w-4 h-4" />
          </a>
        </p>
      </header>
      <div className="my-8 lg:my-24">
        <table className="w-full border-collapse cursor-default">
          <thead className="table-header-group align-middle">
            <tr className="table-row text-left">
              <th className="p-2.5 pl-5">Year</th>
              <th className="p-2.5">Title</th>
              <th className="hidden lg:table-cell p-2.5">Type</th>
              <th className="hidden lg:table-cell p-2.5">Tech stack</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody className="table-row-group align-middle ">
            {PROJECTS_DATA.map((project) => (
              <ProjectList {...project} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
