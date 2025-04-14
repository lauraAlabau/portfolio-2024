import { MdOutlineWorkOutline } from "react-icons/md";

export type ExperienceListProps = {
  company: string;
  rol: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  projects?: string[];
};

export const ExperienceList = ({
  company,
  rol,
  period,
  location,
  description,
  skills,
  projects,
}: ExperienceListProps) => {
  return (
    <>
      <li className="w-full pr-6 mx-10 mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 border border-red-400 rounded-full bg-slate-900 -start-4 ring-slate-900">
          <MdOutlineWorkOutline className="w-4 h-4 text-red-400" />
        </span>
        <p className="text-sm text-red-400 mt-1.5 mb-2.5">{company}</p>
        <h3 className="mb-2.5 text-xl font-semibold text-slate-100 ">{rol}</h3>
        <time className="block mb-1 text-sm font-normal leading-none text-slate-400 ">{period}</time>
        <p className="hidden mb-5 text-sm font-normal leading-none text-slate-400 ">{location}</p>
        <div className="mb-2.5 lg:mb-5 ">
          {description.map((task) => (
            <p key={task}>{task}</p>
          ))}
        </div>
        <ul className="flex flex-wrap  mb-2.5 mt-3  list-none gap-x-5 text-slate-400 text-sm whitespace-nowrap">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        {projects && <p className="hidden">{projects}</p>}
      </li>
    </>
  );
};
