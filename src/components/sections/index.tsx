import { useNavbar } from "../../context/NavbarContext";
import { About } from "./about";
import { Contact } from "./contact";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Skills } from "./skills";

export const Sections = () => {
  const { isOpen } = useNavbar();
  return (
    <main className={`my-0 mx-auto w-full max-w-[1600px] min-h-screen py-0 lg:px-40 px-7 ${isOpen ? "blur-sm" : ""}`}>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};
