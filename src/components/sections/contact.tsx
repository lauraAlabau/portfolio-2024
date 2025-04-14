export const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-[1000px] mx-auto my-0  text-slate-300 pt-28 h-auto flex flex-col justify-center items-center min-h-screen p-0"
    >
      <h2 className="block mb-5 text-red-400">Contact with me</h2>
      <h2 className="mb-5 text-4xl font-semibold lg:text-6xl">Get In Touch</h2>
      <p className="max-w-[600px]  text-center  text-slate-400">
        I’m currently looking for any new opportunities and projects. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>
      <div className="border border-red-400 rounded-md px-8 py-4 text-red-400 font-semibold  transition-all duration-250 hover:shadow-[3px_3px_0_0_#ef4444] hover:-translate-x-2 hover:-translate-y-2 mt-12">
        <a
          className="email-link"
          href="mailto:laura.alabau.rodriguez@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};
