import React from "react";

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 textGradient">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Passionate Developer with a Purpose
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a dedicated full-stack developer with over 5 years of
                experience building web applications that solve real-world
                problems. My journey started with curiosity about how things
                work, and it has evolved into a passion for creating digital
                solutions that make people's lives easier.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest technologies. When I'm not coding,
                you'll find me contributing to open source projects or mentoring
                aspiring developers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My goal is to build applications that not only function
                perfectly but also provide exceptional user experiences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-700 hover:shadow-md transition-shadow duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
