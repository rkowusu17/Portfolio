import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      url: "mailto:owusureginald17@gmail.com",
      color: "hover:text-red-500",
    },
    // {
    //   name: "LinkedIn",
    //   icon: Linkedin,
    //   url: "https://linkedin.com/in/johndeveloper",
    //   color: "hover:text-blue-600",
    // },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/johndeveloper",
      color: "hover:text-gray-800",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gradient-to-b  dark:from-slate-900 dark:via-black dark:to-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-scroll">
          <h2 className="text-4xl font-bold text-center mb-16 textGradient">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 animate-fade-in-scroll">
            <div>
              <h3 className="text-2xl font-semibold mb-6 dark:text-slate-50 text-gray-800">
                Let's Work Together
              </h3>
              <p className="dark:text-slate-400 text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a project in mind or just want to
                chat about technology, feel free to reach out!
              </p>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-600 ${social.color} transition-colors duration-200`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-scroll">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
