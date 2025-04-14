import { RiExternalLinkLine } from "react-icons/ri";
import { TbBrandGithub, TbDatabaseShare } from "react-icons/tb";

type ProjectCardProps = {
  header: string;
  title: string;
  description: string;
  skills: string[];
  thumbnailSrc: string;
  githubLinkFront: string;
  githubLinkBack: string;
  previewLink: string;
};

export const ProjectCard = ({
  header,
  title,
  description,
  skills,
  thumbnailSrc,
  githubLinkFront,
  githubLinkBack,
  previewLink,
}: ProjectCardProps) => {
  return (
    <>
      <li className="relative grid items-center grid-cols-12 gap-5 p-6 lg:bg-transparent bg-slate-100/5 lg:p-0">
        <div className="relative hidden h-full lg:col-start-1 lg:col-end-7 lg:shadow-sm lg:shadow-black/30 lg:block">
          <a
            href={githubLinkFront}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block w-full h-full transition duration-200 ease-in rounded-md bg-red-400/70 mix-blend-screen hover:bg-transparent"
            aria-label="GitHub Frontend Link"
          >
            <div className="relative inline-block w-full h-full overflow-hidden transition duration-200 ease-in rounded-md mix-blend-multiply filter grayscale contrast-100 brightness-90 hover:filter-none">
              <img className="w-full h-full" alt="" src={thumbnailSrc} />
            </div>
          </a>
        </div>
        <div className="relative col-span-12 lg:text-right lg:col-start-6 lg:absolute lg:-col-end-1">
          <div>
            <p className="text-sm text-red-400 my-2.5">{header}</p>
            <h3 className="mb-5 text-xl font-semibold leading-5 transition delay-75 text-slate-100 hover:text-red-400">
              <a href={githubLinkFront} target="_blank" aria-label="GitHub Frontend Link" rel="noreferrer">
                {title}
              </a>
            </h3>
            <div className="py-5 lg:p-5 lg:bg-slate-900">
              <p>{description}</p>
            </div>
            <ul className="flex flex-wrap lg:mt-6 mb-2.5 mt-3 lg:ml-20 list-none lg:justify-end gap-x-5 text-slate-400 text-sm whitespace-nowrap ">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="flex items-center relative top-2.5 lg:justify-end lg:-mr-2.5 -ml-2.5 h-10 text-slate-200">
              {githubLinkFront && (
                <a
                  href={githubLinkFront}
                  aria-label="GitHub Frontend Link"
                  className="relative flex items-center justify-center p-4 hover:text-red-400 group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbBrandGithub className="w-5 h-5" />
                  <span className="absolute px-2 py-1 mx-auto text-xs transition-opacity -translate-y-full rounded-md opacity-0 -translate-x-1/3 lg:-translate-x-1/2 text-slate-100 bg-slate-800 group-hover:opacity-100 left-1/2 whitespace-nowrap">
                    Github Frontend
                  </span>
                </a>
              )}
              {githubLinkBack && (
                <a
                  href={githubLinkBack}
                  aria-label="GitHub Backend Link"
                  className="relative flex items-center justify-center p-4 hover:text-red-400 group"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TbDatabaseShare className="w-5 h-5" />
                  <span className="absolute px-2 py-1 mx-auto text-xs transition-opacity -translate-x-1/2 -translate-y-full rounded-md opacity-0 text-slate-100 bg-slate-800 group-hover:opacity-100 left-1/2 whitespace-nowrap">
                    Github Backend
                  </span>
                </a>
              )}
              {previewLink && (
                <a
                  href={previewLink}
                  aria-label="Live Preview Link"
                  className="relative flex items-center justify-center p-4 hover:text-red-400 group"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <RiExternalLinkLine className="w-5 h-5" />
                  <span className="absolute px-2 py-1 mx-auto text-xs transition-opacity -translate-x-1/2 -translate-y-full rounded-md opacity-0 text-slate-100 bg-slate-800 group-hover:opacity-100 left-1/2 whitespace-nowrap">
                    Live Preview
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
