import { type LoaderFunctionArgs, type ParamParseKey, useLoaderData } from "react-router-dom";
import { Gallery } from "../components";
import { getProject, type ProjectCard } from "../utils/projects_data";
import type { SLUG_PROJECT } from "../utils/routes_index";

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
    <main id="project" className="max-w-[1600px] mx-auto my-0 text-slate-100 lg:py-52 lg:px-36 h-auto  min-h-screen">
      <header>
        <h1 className="mx-4 text-3xl font-semibold leading-tight mt-28 lg:ml-0 lg:block lg:text-7xl lg:mt-0">
          {project.title}
        </h1>
        <p className="mx-4 mt-2 text-base text-red-300 lg:ml-0">{project.header.split("-")[0]}</p>
      </header>
      <section className="mx-4 mt-8 lg:flex lg:mx-0">
        <p className="text-base lg:flex lg:ml-0 text-slate-300 lg:mt-10">{project.description}</p>
      </section>
      <section className="mx-4 mt-2 lg:flex lg:justify-center lg:mt-8 lg:mx-0">
        <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
          {project.blogImgs?.map((src) => (
            <Gallery src={src} key={src} />
          ))}
        </div>
      </section>

      <div className="my-8 lg:my-24" />
    </main>
  );
};
