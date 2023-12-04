import "./style.scss";
import { projetos } from "../../Data/data";
import CardProject from "../CardProject";

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h1> Projects </h1>
        <p> Things I’ve built so far</p>
      </div>
      <div className="projects-content">
        {projetos.map((project) => (
          <CardProject projeto={project} />
        ))}
      </div>
    </div>
  );
}
