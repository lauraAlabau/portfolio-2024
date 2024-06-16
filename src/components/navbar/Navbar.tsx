import { useNavbar } from "../../context/NavbarContext";
import { NAV_LINKS, RESUME } from "../../utils/navbar_elements";

export const Navbar = () => {
  const { isOpen, setIsOpen } = useNavbar();

  return (
    <div>
      <header className="fixed top-0 z-20 flex items-center justify-between w-full px-6 text-sm pointer-events-auto select-auto lg:px-14 filter-none h-28 bg-slate-950">
        <nav className="relative z-30 flex items-center justify-between w-full text-slate-100">
          <div className="flex items-center justify-center">
            <a href="/" className="relative z-10 w-12 h-12 text-red-400">
              <div className="relative flex items-center gap-3 text-2xl font-medium text-slate-300">
                {"{"}
                <span className="text-3xl font-black text-red-400">{"L"}</span>
                {"}"}
              </div>
            </a>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center">
              <ol className="flex justify-between items-center list-none gap-8 p-2.5 ">
                {NAV_LINKS.map((element) => (
                  <li
                    key={element.name}
                    className="transition-all duration-250 hover:text-red-400 hover:-translate-y-1 hover:-translate-x-1"
                  >
                    <a href={element.link}>{element.name}</a>
                  </li>
                ))}
              </ol>
              <div className="ml-6 border border-red-400 rounded-md px-4 py-3 text-red-400 font-semibold  transition-all duration-250 hover:shadow-[3px_3px_0_0_#ef4444] hover:-translate-x-2 hover:-translate-y-2">
                <a href={RESUME.link} target="_blank" download>
                  {RESUME.name}
                </a>
              </div>
            </div>
          </div>
          <div
            className="block text-base lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <button
                aria-label="Menu"
                className="flex justify-center items-center relative z-10 -mr-2.5 p-4 bg-transparent"
              >
                <div className="relative inline-block w-8 h-6 -top-2">
                  <div
                    className={`${
                      isOpen
                        ? "absolute top-1/2 right-0 w-8 h-0.5 rounded-sm bg-red-400 transform duration-200 delay-0 rotate-[225deg] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)] before:opacity-0 after:-rotate-90 after:w-full after:bottom-0 after:bg-red-400 after:h-0.5 after:rounded-sm after:absolute after:right-0"
                        : "absolute top-1/2 right-0 w-8 h-0.5 rounded-sm bg-red-400 transform duration-200 delay-0 rotate-0 ease-[cubic-bezier(0.55, 0.055, 0.675, 0.19)] before:w-10 before:-top-2.5  before:bg-red-400 before:h-0.5 before:rounded-sm before:absolute before:right-0 after:w-5 after:-bottom-2.5 after:bg-red-400 after:h-0.5 after:rounded-sm after:absolute after:right-0"
                    }`}
                  ></div>
                </div>
              </button>
              <aside
                aria-hidden="true"
                className={`flex justify-center items-center fixed top-0 bottom-0 right-0 px-2.5 py-12 min-w-72 w-3/4 h-screen bg-slate-900 shadow-md shadow-slate-950 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <nav className="flex flex-col items-center justify-between w-full gap-16 text-center">
                  <ol className="flex flex-col items-center justify-between w-full gap-8 text-center">
                    {NAV_LINKS.map((element) => (
                      <li
                        key={element.name}
                        className="transition-all duration-250 hover:text-red-400 hover:-translate-y-1 hover:-translate-x-1"
                      >
                        <a href={element.link}>{element.name}</a>
                      </li>
                    ))}
                  </ol>
                  <div className="border border-red-400 rounded-md px-8 py-3 text-red-400 font-semibold  transition-all duration-250 hover:shadow-[3px_3px_0_0_#ef4444] hover:-translate-x-2 hover:-translate-y-2">
                    <a href={RESUME.link} target="_blank" download>
                      {RESUME.name}
                    </a>
                  </div>
                </nav>
              </aside>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
