import Cartoon_img from "./img/Cartoon-pic.png";
import js_img from "./img/stack/JS.svg";
import react_img from "./img/stack/React.svg";
import TW_img from "./img/stack/Tailwind.svg";
import firebase_img from "./img/stack/firebase.svg";
import python_img from "./img/stack/python.svg";
import csharp_img from "./img/stack/csharp.svg";
import moodle_img from "./img/moodle-crop.jpg";
import edusity from "./img/edusity.jpg";
import prescripto_img from "./img/prescripto.jpg";
import estate_img from "./img/e-estate.jpg";
import travelSoul_img from "./img/travel-soul.png";

export const assets = { Cartoon_img };

export const skills = {
  js_img: "JavaScript",
  react_img: "React",
  TW_img: "TailwindCss",
  firebase_img: "Firebase",
  python_img: "Python",
  csharp_img: "CSharp",
};

export const skillsIcon = {
  js_img,
  react_img,
  TW_img,
  firebase_img,
  python_img,
  csharp_img,
};

export const projects = [
  {
    id: 1,
    title: "Moodle",
    description:
      "A web app for tracking your daily moods. This helps you detect your mood swings daily while focusing on cheering you up. 'Built with love💖'. Watch out for further upgrades😉 ",
    technologies: ["React", "Firebase", "Firestore", "TailwindCSS"],
    image: moodle_img,
    demoUrl: "https://mooddle.vercel.app/dashboard",
    githubUrl: "https://github.com/rkowusu17/Mooddle",
  },
  {
    id: 2,
    title: "Prescripto",
    description:
      "Prescripto is a collaborative doctor booking app designed to streamline appointment scheduling and communication between patients and healthcare providers. It features real-time booking, secure messaging, and an intuitive interface to enhance the healthcare experience for both doctors and patients to help streamline quality health care.",
    technologies: ["React", "Express.js", "Firebase", "Node.js"],
    image: prescripto_img,
    demoUrl: "#",
    githubUrl: "https://github.com/rkowusu17/Prescripto",
  },
  {
    id: 3,
    title: "Edusity",
    description:
      "A modern, responsive landing page for a school, highlighting its programs, facilities, and admission process. Edusity features clean UI/UX design, interactive sections, and showcases the school's values and achievements to engage prospective students and parents.",
    technologies: ["React", "TailwindCSS"],
    image: edusity,
    demoUrl: "https://eduisty-regdev.vercel.app/",
    githubUrl: " https://github.com/rkowusu17/Edusity-React-Project",
  },
  {
    id: 4,
    title: "E-estate",
    description:
      "A modern, responsive landing page for a real estate company, showcasing available properties, amenities, and the unique features of the estate. E-estate features clean UI/UX design, interactive property listings, and highlights the estate's lifestyle and community to engage potential buyers and investors.",
    technologies: ["React", "TailwindCSS"],
    image: estate_img,
    demoUrl: "https://e-estate-regdev.vercel.app",
    githubUrl: "https://github.com/rkowusu17/e-Estate-React",
  },
  {
    id: 5,
    title: "Travel-soul",
    description:
      "A visually engaging, responsive travel landing page designed to inspire wanderlust and help users plan their next adventure. Travel-soul features immersive destination imagery, curated travel guides, interactive booking options, and user testimonials. The clean UI/UX design ensures seamless navigation, while integrated search and filtering tools make it easy to discover unique destinations and experiences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: travelSoul_img,
    demoUrl: "https://landing-pages-kohl.vercel.app/",
    githubUrl: "http://github.com/rkowusu17/Landing-pages",
  },
];
