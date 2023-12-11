import gitfind from "../assets/images/projects/gitfind.png";
import calculadora from "../assets/images/projects/calculadora.png";
import cardapio from "../assets/images/projects/cardapio.png";
import todolist from "../assets/images/projects/todolist.png";
import ecommerce from "../assets/images/projects/ecommerce.png";
import ViaCep from "../assets/images/projects/ViaCep.png"
import clock from "../assets/images/projects/clock.png"
import tempoAgora from "../assets/images/projects/tempoAgora.png";

export const projetos: {
  img: string;
  title: string;
  description: string;
  skills: string[];
  linkRepo: string;
  linkLive: string;
}[] = [
  {
    img: gitfind,
    title: "GitFind",
    description:
      "GitFind: Input a GitHub username, get name, description, and repositories. Features light and dark modes for user customization.",
    skills: ["React", "TypeScript", "HTML", "CSS"],
    linkRepo: "https://github.com/LeandroRochaS/GitFind",
    linkLive: "https://gitfind-leandrorochas.netlify.app/",
  },

  {
    img: calculadora,
    title: "Calculator",
    description:
      "Simple HTML and CSS calculator project for basic arithmetic operations. Provides a user-friendly interface for straightforward calculations.",
    skills: ["HTML", "CSS", "JavaScript"],
    linkRepo: "https://github.com/LeandroRochaS/CalculadoraS",
    linkLive: "https://calculadoraleandrorochas.netlify.app/",
  },
  {
    img: cardapio,
    title: "Menu",
    description:
      "Simplified menu project with the ability to register food options. Streamlines the management and updating of menu items in an intuitive manner.",
    skills: ["React", "TypeScript", "BancoJson", "CSS"],
    linkRepo: "https://github.com/LeandroRochaS/cardapio",
    linkLive: "https://cardapio2.vercel.app/",
  },
  {
    img: todolist,
    title: "To Do List",
    description:
      "A website for creating to-do lists, allowing users to easily add, edit, or delete tasks. Simplifies task management with an intuitive and customizable interface.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    linkRepo: "https://github.com/LeandroRochaS/ToDoList",
    linkLive: "https://to-do-list-alpha-ten-76.vercel.app/",
  },
  {
    img: ecommerce,
    title: "DSCommerce",
    description:
      "Ecommerce with login, product and customer registration Allows users to make online purchases and administrators to manage the website.",
    skills: ["React", "Spring", "TypeScript", "Sass"],
    linkRepo: "https://github.com/LeandroRochaS/DSCommerce-FrontEnd",
    linkLive: "/building",
  },
  {
    img: ViaCep,
    title: "ViaCep",
    description:
      "The website integrates the Viacep API, enabling quick retrieval of location information by entering a postal code. Relevant data is efficiently retrieved and presented to users.",
    skills: ["HTML", "CSS", "JavaScript", "API"],
    linkRepo: "https://github.com/LeandroRochaS/ViaCep",
    linkLive: "https://via-cep-phi.vercel.app/",
  },
  {
    img: tempoAgora,
    title: "TempoAgora",
    description:
      "Using the OpenWeather API, this project quickly provides real-time weather information for a specified city.",
    skills: ["HTML", "CSS", "JavaScript", "API"],
    linkRepo: "https://github.com/LeandroRochaS/TempoHoje",
    linkLive: "https://tempo-hoje-psi.vercel.app/",
  },
  {
    img: clock,
    title: "Clock",
    description:
      "Using vanilla javascript, this project quickly provides real-time date and time according to the user's time zone.",
    skills: ["HTML", "CSS", "JavaScript"],
    linkRepo: "https://github.com/LeandroRochaS/RelogioDigital",
    linkLive: "https://relogio-digital-alpha-weld.vercel.app/",
  },
  {
    img: "https://www.cloudways.com/blog/wp-content/uploads/fix-503-service-unavailable-error-in-wordpress.jpg",
    title: "Projects in production",
    description:
      "Projects in production, on my github there are more projects like apis",
    skills: ["Spring", "React", "C#", "Python"],
    linkRepo: "https://github.com/LeandroRochaS",
    linkLive: "https://cardapio2.vercel.app/",
  },
];

export interface Projeto {
  img: string;
  title: string;
  description: string;
  skills: string[];
  linkRepo: string;
  linkLive: string;
}
