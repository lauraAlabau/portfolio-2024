import { RiExternalLinkLine } from "react-icons/ri";
import { TbBrandGithub, TbEyePlus } from "react-icons/tb";

type ProjectCardProps = {
  header: string;
  title: string;
  description: string;
  skills: string[];
  imageSrc: string;
  githubLink: string;
  previewLink: string;
  otherLink: string;
};

export const ProjectCard = ({
  header,
  title,
  description,
  skills,
  imageSrc,
  githubLink,
  previewLink,
  otherLink,
}: ProjectCardProps) => {
  return (
    <>
      <li className="relative grid items-center grid-cols-12 gap-5 p-6 lg:bg-transparent bg-slate-100/5 lg:p-0">
        <div className="relative hidden h-full col-start-1 col-end-7 shadow-lg shadow-black lg:block">
          <a
            href={githubLink}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block w-full h-full transition duration-200 ease-in rounded-md bg-red-400/70 mix-blend-screen hover:bg-transparent"
          >
            <div className="relative inline-block w-full h-full overflow-hidden transition duration-200 ease-in rounded-md mix-blend-multiply filter grayscale contrast-100 brightness-90 hover:filter-none">
              <img className="w-full h-full" alt="" src={imageSrc} />
            </div>
          </a>
        </div>
        <div className="relative col-span-12 lg:text-right lg:col-start-6 lg:absolute lg:-col-end-1">
          <div>
            <p className="text-sm text-red-400 my-2.5">{header}</p>
            <h3 className="mb-5 text-xl font-semibold leading-5 transition delay-75 text-slate-100 hover:text-red-400">
              <a href={githubLink} target="_blank">
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
              {githubLink && (
                <a
                  href={githubLink}
                  aria-label="GitHub Link"
                  className="relative flex items-center justify-center p-4 hover:text-red-400"
                  target="_blank"
                >
                  <TbBrandGithub className="w-5 h-5" />
                </a>
              )}
              {previewLink && (
                <a
                  href={previewLink}
                  aria-label="External Link"
                  className="relative flex items-center justify-center p-4 hover:text-red-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <RiExternalLinkLine className="w-5 h-5" />
                </a>
              )}
              {otherLink && (
                <a
                  href={otherLink}
                  aria-label="Other Link"
                  className="relative flex items-center justify-center p-4 hover:text-red-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TbEyePlus className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
