import { SKILL_TECH_DATA } from "../../utils/skill_tech_data";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-[1000px] mx-auto my-0 text-slate-100 pt-28 h-auto flex flex-col justify-center items-center min-h-screen p-0"
    >
      <h2 className="flex items-center relative mt-2.5 mb-16 w-full text-2xl whitespace-nowrap font-semibold after:block after:relative after:top-0 after:w-80 after:h-[1px] after:bg-slate-400 after:ml-5">
        Some technologies I know
      </h2>
      <div className="flex flex-col w-full gap-6 lg:gap-16">
        {SKILL_TECH_DATA.map((skill) => (
          <div className="flex flex-col gap-4 lg:gap-10">
            <h3 className="text-sm text-red-400">{skill.type}</h3>
            <ul className="flex flex-wrap items-center justify-between gap-4">
              {skill.technologies.map((tech) => (
                <li
                  key={tech.name}
                  className="flex items-center gap-4 px-2 py-2 lg:px-6 text-slate-400"
                >
                  <div>{tech.icon}</div>
                  <div>
                    <h4 className="text-slate-100">{tech.name}</h4>
                    <p className="text-xs">{tech.subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
