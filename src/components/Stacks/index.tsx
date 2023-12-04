import "./style.scss";
import bootstrap from "../../../public/images/svgs/bootstrap.svg";
import css3 from "../../../public/images/svgs/css3.svg";
import dotnet from "../../../public/images/svgs/dotnet.svg";
import git from "../../../public/images/svgs/git.svg";
import html5 from "../../../public/images/svgs/html5.svg";
import java from "../../../public/images/svgs/java.svg";
import php from "../../../public/images/svgs/php.svg";
import python from "../../../public/images/svgs/python.svg";
import react from "../../../public/images/svgs/react.svg";
import spring from "../../../public/images/svgs/spring.svg";
import type from "../../../public/images/svgs/typescript.svg";
import sass from "../../../public/images/svgs/sass.svg";

export default function Stacks() {
  return (
    <>
      <div className="stacks-container">
        <div className="stacks-title">
          <h1> My Tech Stack</h1>
          <p> Technologies I’ve been working with recently</p>
        </div>

        <div className="stacks-content">
          <ul>
            <li>
              <img src={html5} />
            </li>
            <li>
              <img src={css3} />
            </li>
            <li>
              <img src={type} />
            </li>
            <li>
              <img src={spring} />
            </li>

            <li>
              <img src={react} />
            </li>
            <li>
              <img src={bootstrap} />
            </li>
          </ul>
          <ul>
            <li>
              <img src={java} />
            </li>
            <li>
              <img src={sass} />
            </li>
            <li>
              <img src={git} />
            </li>
            <li>
              <img src={python} />
            </li>

            <li>
              <img src={dotnet} />
            </li>
            <li>
              <img src={php} />
            </li>

            {/* Adicione outros itens conforme necessário */}
          </ul>
        </div>
      </div>
    </>
  );
}
