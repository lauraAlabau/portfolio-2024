export const About = () => {
  return (
    <section className="max-w-[1000px] mx-auto my-0 text-slate-100 lg:pt-28 h-auto flex flex-col justify-center items-start min-h-screen p-0">
      <h1 className="mb-6 ml-1 leading-tight text-red-400">Hi, my name is</h1>

      <h2 className="text-4xl font-bold leading-tight lg:text-8xl text-slate-100">
        Laura Alabau
      </h2>

      <h3 className="mt-1.5 text-slate-400 lg:text-7xl text-3xl font-bold">
        I'm a Frontend Developer.
      </h3>

      <p className="text-slate-400 max-w-[540px] mt-5">
        I’m a frontend developer with a background as UI designer. I have
        experience working with a wide range of technical skills such as HTML,
        CSS, JavaScript, React, and more. My knowledge in UI/UX design sets me
        apart in understanding user behavior and creating intuitive designs.
      </p>

      <div className="border border-red-400 rounded-md px-4 py-3 text-red-400 font-semibold  transition-all duration-250 hover:shadow-[3px_3px_0_0_#ef4444] hover:-translate-x-2 hover:-translate-y-2 mt-12">
        <a href="/resume.pdf" target="_blank" className="">
          Check out my Resume
        </a>
      </div>
    </section>
  );
};
