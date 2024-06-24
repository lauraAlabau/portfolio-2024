import { EXPERIENCE_DATA } from "../../utils/experience_data";
import { ExperienceList } from "../experience/ExperienceList";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-[1000px] mx-auto my-0 text-slate-100 pt-28 h-auto flex flex-col justify-center items-center min-h-screen p-0"
    >
      <h2 className="flex items-center relative mt-2.5 mb-10 w-full text-2xl whitespace-nowrap font-semibold after:block after:relative after:top-0 after:w-80 after:h-[1px] after:bg-slate-400 after:ml-5">
        Latest companies
      </h2>
      <ul className="relative flex flex-col gap-1 p-0 m-0 list-none lg:gap-4 border-s border-slate-700">
        {EXPERIENCE_DATA.slice(0, 3).map((job) => (
          <ExperienceList {...job} />
        ))}
      </ul>
      <div className="mt-20  border border-red-400 rounded-md px-6 py-4 text-red-400 font-semibold  transition-all duration-250 hover:shadow-[3px_3px_0_0_#ef4444] hover:-translate-x-2 hover:-translate-y-2">
        <a href="/all-experience" aria-label="View all my experience">
          View all experience
        </a>
      </div>
    </section>
  );
};
