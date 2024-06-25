import {
  LoaderFunctionArgs,
  ParamParseKey,
  useLoaderData,
} from "react-router-dom";
import { ProjectCard, getProject } from "../utils/projects_data";
import { SLUG_PROJECT } from "../utils/routes_index";

export async function loader({ params }: LoaderFunctionArgs) {
  type TypedParams = Record<ParamParseKey<typeof SLUG_PROJECT>, string>;
  const slug = (params as TypedParams).slug;
  const project = await getProject(slug);
  if (!project) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { project };
}

export const Project = () => {
  const { project } = useLoaderData() as { project: ProjectCard };

  return (
    <main
      id="project"
      className="max-w-[1600px] mx-auto my-0 text-slate-100 lg:py-52 lg:px-36 h-auto  min-h-screen"
    >
      <header>
        <h1 className="mt-28 text-3xl ml-2.5 lg:ml-0 font-semibold leading-tight lg:block lg:text-7xl">
          {project.title}
        </h1>
        <p className="ml-2.5 lg:ml-0 text-base text-red-300">
          {project.header}
        </p>
        <p className="lg:flex ml-2.5 lg:ml-0 text-base text-slate-300 ">
          This page is WIP, you can check my old projects in this
        </p>
      </header>
      <div className="my-8 lg:my-24"></div>
    </main>
  );
};
