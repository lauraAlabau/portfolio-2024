import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";

export const SocialMedia = () => {
  return (
    <div className="fixed bottom-0 left-auto z-10 hidden w-10 right-10 text-slate-100 lg:block ">
      <ul className="flex flex-col m-0 p-2.5 list-none align-middle gap-5 after:block after:w-[1px] after:h-24 after:bg-slate-100 after:mx-auto">
        <li className="transition-all duration-250 hover:text-red-400 hover:-translate-y-2">
          <a
            href="https://github.com/lauraAlabau"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandGithub className="w-5 h-5" />
          </a>
        </li>

        <li className="transition-all duration-250 hover:text-red-400 hover:-translate-y-2">
          <a
            href="https://www.linkedin.com/in/laura-alabau-rodriguez/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </div>
  );
};
