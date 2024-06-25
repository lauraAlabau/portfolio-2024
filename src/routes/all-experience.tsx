import { ExperienceList } from "../components/experience/ExperienceList";

import { EXPERIENCE_DATA } from "../utils/experience_data";

export const AllExperience = () => {
  return (
    <main className="max-w-[1000px] mx-auto my-0 text-slate-100 lg:py-52 lg:px-36 h-auto  min-h-screen">
      <header>
        <h1 className="mt-28 text-3xl ml-2.5 lg:ml-0 font-semibold leading-tight lg:block lg:text-7xl">
          Archive
        </h1>
        <p className="ml-2.5 lg:ml-0 text-base text-red-300 ">
          All the companies I’ve worked for
        </p>
      </header>

      <ul className="relative flex flex-col gap-1 p-0 mx-8 mt-8 mb-0 list-none lg:mt-12 lg:gap-4 border-s border-slate-700 ">
        {EXPERIENCE_DATA.map((job) => (
          <ExperienceList {...job} />
        ))}
      </ul>
      <div className="w-6 h-[1px] bg-slate-700 ml-5 mb-6"></div>
    </main>
  );
};
