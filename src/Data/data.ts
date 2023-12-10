export const projetos: {
  img: string;
  title: string;
  description: string;
  skills: string[];
  linkRepo: string;
  linkLive: string;
}[] = [
  {
    img: "../../public/images/projects/gitfind.png",
    title: "GitFind",
    description:
      "GitFind: Input a GitHub username, get name, description, and repositories. Features light and dark modes for user customization.",
    skills: ["React", "TypeScript", "HTML", "CSS"],
    linkRepo: "https://github.com/LeandroRochaS/GitFind",
    linkLive: "https://gitfind-leandrorochas.netlify.app/",
  },
  {
    img: "../../public/images/projects/ecommerce.png",
    title: "DSCommerce",
    description:
      "Ecommerce with login, product and customer registration Allows users to make online purchases and administrators to manage the website.",
    skills: ["React", "Spring", "TypeScript", "Sass"],
    linkRepo: "https://github.com/LeandroRochaS/DSCommerce-FrontEnd",
    linkLive: "https://gitfind-leandrorochas.netlify.app/",
  },
  {
    img: "../../public/images/projects/calculadora.png",
    title: "Calculator",
    description:
      "Simple HTML and CSS calculator project for basic arithmetic operations. Provides a user-friendly interface for straightforward calculations.",
    skills: ["HTML", "CSS", "JavaScript"],
    linkRepo: "https://github.com/LeandroRochaS/CalculadoraS",
    linkLive: "https://calculadoraleandrorochas.netlify.app/",
  },
  {
    img: "../../public/images/projects/cardapio.png",
    title: "Menu",
    description:
      "Simplified menu project with the ability to register food options. Streamlines the management and updating of menu items in an intuitive manner.",
    skills: ["React", "TypeScript", "BancoJson", "CSS"],
    linkRepo: "https://github.com/LeandroRochaS/cardapio",
    linkLive: "https://cardapio2.vercel.app/",
  },
  {
    img: "../../public/images/projects/todolist.png",
    title: "To Do List",
    description:
      "A website for creating to-do lists, allowing users to easily add, edit, or delete tasks. Simplifies task management with an intuitive and customizable interface.",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    linkRepo: "https://github.com/LeandroRochaS/cardapio",
    linkLive: "https://cardapio2.vercel.app/",
  },
  {
    img: "https://www.cloudways.com/blog/wp-content/uploads/fix-503-service-unavailable-error-in-wordpress.jpg",
    title: "Projects in production",
    description:
      "Projects in production, on my github there are more projects like apis",
    skills: ["Spring", "React", "C#", "Python"],
    linkRepo: "https://github.com/LeandroRochaS/cardapio",
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
