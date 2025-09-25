import React from "react";
import { ChevronDown, Github, MailCheck } from "lucide-react";
import Header from "./Header";
import { assets } from "../assets/assets";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      id="hero"
      className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-16 md:mt-5  dark:bg-gradient-to-b dark:from-slate-900 dark:via-black dark:to-slate-800 scroll-mt-5"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:gap-10 md:flex-row items-center justify-between ">
          <div className="flex-1 flex flex-col items-center max-w-[95%]">
            <h1 className="text-3xl text-center md:text-7xl font-bold p-8 mb-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in whitespace-nowrap">
              Reg-Dev
            </h1>
            <p
              className="text-xl text-center md:text-2xl text-gray-600 animate-fade-in mb-1"
              style={{ animationDelay: "0.2s" }}
            >
              Software Developer, Innovator & Problem Solver
            </p>
            <p
              className=" text-gray-500 text-left sm:text-center sm:p-14 md:max-w-xl mx-auto animate-fade-in mb-1"
              style={{ animationDelay: "0.4s" }}
            >
              Passionate about creating innovative solutions that make a
              difference in the tech space. I build scalable web applications
              with modern technologies. <br />{" "}
              <span className="block textGradient text-center font-semibold animate-pulse">
                You dream it, I build it.
              </span>
            </p>
            <div
              className="self-center flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div
            className="max-w-xl flex flex-col items-center gap-2 md:gap-5 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              className="bg-transparent border-2 border-purple-600 mt-3 w-36 h-36 rounded-full md:w-auto md:border-none md:h-auto md:mt-0 md:rounded "
              src={assets.Cartoon_img}
              width={"250px"}
              height={"200px"}
            />
            <div className="flex justify-center items-center gap-10">
              <a
                href="https://github.com/rkowusu17"
                className="h-10 border-2 border-slate-600 rounded-md p-2"
              >
                <Github className=" text-base text-blue-400 hover:opacity-40 cursor-pointer" />
              </a>
              <a
                href="mailto:owusureginald17@gmail.com"
                className="h-10 border-2 border-slate-600 rounded-md p-2"
              >
                <MailCheck className="text-base text-blue-400 hover:opacity-40 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
    </div>
  );
};

export default Hero;
