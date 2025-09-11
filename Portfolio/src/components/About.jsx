import React from "react";
import TechStack from "./TechStack";

const About = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "TailwindCSS",
    "Express.js",
  ];

  return (
    <section id="about" className="py-20 bg-white  dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto animate-fade-in-scroll">
          <h2 className="text-4xl font-bold text-center mb-16 textGradient">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-scroll ">
            <div>
              <h3 className="text-2xl font-semibold mb-6  text-slate-500">
                Passionate Developer & Innovator.
              </h3>
              <p className="text-gray-600 dark:text-slate-100 mb-6 leading-relaxed">
                Hello, and welcome to my portfolio. So it all started with a
                curiosity for how things (systems) really worked. This made me
                develop much interest in system designs and data science, but I
                realized users can't use my systems or models without
                interacting with an interface, so I had to learn software
                development. Specifically <b>Front-End</b>. I am passionate
                about backend with Python too.
              </p>
              <p className=" dark:text-slate-100 text-gray-600 mb-6 leading-relaxed">
                I believe in hard work, consistency and writing clean,
                maintainable code and also staying up-to-date with the latest
                technologies. With my 3+ years of experience in software
                development I think I have learnt enough for me to develop clean
                UI/UX for my future models😉. When I'm not coding, you'll find
                me mentoring aspiring developers or playing the guitar 🎸🔥.
              </p>
              <p className="dark:text-slate-100 text-gray-600 leading-relaxed">
                My goal is to build solution-oriented applications that will not
                only function perfectly but also provide exceptional user
                experiences.
              </p>
            </div>

            <div className="animate-fade-in-scroll">
              <h3 className="text-2xl font-semibold dark:text-slate-100 mb-6 text-gray-800">
                Skills & Technologies
              </h3>
              <TechStack className="animate-fade-in-scroll" />
              <div className="text-center mt-8 text-gray-600 dark:text-slate-100">
                Have a peep at my
                <a
                  href="https://drive.google.com/file/d/18r8iOXvUagou_c4VCESeeEYg6nRTUUAI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-blue-500 hover:underline ml-1">
                    <strong>Curriculum Vitae (CV)</strong>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
  {skills.map((skill, index) => (
    <div
      key={skill}
      className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700 hover:shadow-md transition-shadow duration-200"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {skill}
    </div>
  ))}
</div>; */
}
