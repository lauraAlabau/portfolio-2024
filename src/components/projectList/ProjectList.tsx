import { RiExternalLinkLine } from "react-icons/ri";
import { TbBrandGithub, TbEyePlus } from "react-icons/tb";

type ProjectListProps = {
  header: string;
  title: string;
  skills: string[];
  githubLink: string;
  previewLink: string;
  otherLink: string;
};

export const ProjectList = ({
  header,
  title,

  skills,

  githubLink,
  previewLink,
  otherLink,
}: ProjectListProps) => {
  return (
    <>
      <tr className="transition duration-200 ease-in hover:bg-slate-900">
        <td className="w-auto p-5 text-red-300">{header.split("-")[1]}</td>
        <td className="p-2.5 text-lg font-semibold">{title}</td>
        <td
          className="hidden lg:table-cell p-2.5 
 text-slate-400"
        >
          <span>{header.split("-")[0]}</span>
        </td>
        <td
          className="hidden lg:table-cell p-2.5 lg:text-left text-sm
 text-slate-400"
        >
          {skills.map((skill, idx) => (
            <div key={skill} className="inline-block mr-2.5 last-of-type:mr-0 ">
              {skill}
              {idx + 1 < skills.length && <span className="ml-2.5">·</span>}
            </div>
          ))}
        </td>
        <td className="p-2.5">
          <div className="flex">
            {githubLink && (
              <a
                href={githubLink}
                aria-label="GitHub Link"
                className="p-4 hover:text-red-400"
                target="_blank"
              >
                <TbBrandGithub className="w-5 h-5" />
              </a>
            )}
            {previewLink && (
              <a
                href={previewLink}
                aria-label="External Link"
                className="p-4 hover:text-red-400"
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
        </td>
      </tr>
    </>
  );
};
