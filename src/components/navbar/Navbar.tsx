export const Navbar = () => {
  return (
    <div>
      <header className="fixed top-0 z-20 flex items-center justify-between w-full text-sm bg-transparent pointer-events-auto select-auto px-14 filter-none h-28">
        <nav className="relative z-30 flex items-center justify-between w-full text-slate-100">
          <div className="flex items-center justify-center">
            <a
              href="/"
              aria-label="home"
              className="relative z-10 w-12 h-12 text-red-500"
            >
              <div className="relative">
                <svg
                  id="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 84 96"
                >
                  <g transform="translate(-8.000000, -2.000000)">
                    <g transform="translate(11.000000, 5.000000)">
                      {/* <polygon
                        id="Shape"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="39 0 0 22 0 67 39 90 78 68 78 23"
                      ></polygon> */}
                      <polygon
                        id="Shape"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="39 0 0 22 0 35 39 10 78 35 78 22"
                      ></polygon>
                      <polygon
                        id="Shape"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="39 0 0 22 0 35 39 10 78 35 78 22"
                      ></polygon>
                      <path
                        d="M30 20 L30 65 L54 65 L54 55 L40 55 L40 20 Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </div>
          <div className="flex items-center">
            <ol className="flex justify-between items-center list-none gap-8 p-2.5 ">
              <li className="transition-all duration-250 hover:text-red-500 hover:-translate-y-1 hover:-translate-x-1">
                <a href="/#skills">Skills</a>
              </li>
              <li className="transition-all duration-250 hover:text-red-500 hover:-translate-y-1 hover:-translate-x-1">
                <a href="/#jobs">Experience</a>
              </li>
              <li className="transition-all duration-250 hover:text-red-500 hover:-translate-y-1 hover:-translate-x-1">
                <a href="/#projects">Projects</a>
              </li>
              <li className="transition-all duration-250 hover:text-red-500 hover:-translate-y-1 hover:-translate-x-1">
                <a href="/#contact">Contact</a>
              </li>
            </ol>
            <div className="ml-6 border border-red-500 rounded-md px-4 py-3 text-red-500 font-semibold  transition-all duration-250 hover:shadow-[3px_3px_0_0_#ef4444] hover:-translate-x-2 hover:-translate-y-2">
              <a href="/resume.pdf" target="_blank" className="">
                Resume
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
