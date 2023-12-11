import ImageWithTooltip from "../../utils/ImageWithTooltip"; // Certifique-se de ajustar o caminho conforme necessário
import "./style.scss";

import bootstrap from "../../assets/images/svgs/bootstrap.svg";
import css3 from "../../assets/images/svgs/css3.svg";
import dotnet from "../../assets/images/svgs/dotnet.svg";
import git from "../../assets/images/svgs/git.svg";
import html5 from "../../assets/images/svgs/bootstrap.svg";
import java from "../../assets/images/svgs/java.svg";
import php from "../../assets/images/svgs/php.svg";
import python from "../../assets/images/svgs/python.svg";
import react from "../../assets/images/svgs/react.svg";
import spring from "../../assets/images/svgs/spring.svg";
import typescript from "../../assets/images/svgs/typescript.svg";
import sass from "../../assets/images/svgs/sass.svg";
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
              <ImageWithTooltip
                imageName="HTML5"
                svg={<img src={html5} alt="HTML5" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="CSS3"
                svg={<img src={css3} alt="CSS3" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="TypeScript"
                svg={<img src={typescript} alt="TypeScript" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="Spring"
                svg={<img src={spring} alt="Spring" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="React"
                svg={<img src={react} alt="React" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="Bootstrap"
                svg={<img src={bootstrap} alt="Bootstrap" />}
              />
            </li>
          </ul>
          <ul>
            <li>
              <ImageWithTooltip
                imageName="Java"
                svg={<img src={java} alt="Java" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="Sass"
                svg={<img src={sass} alt="Sass" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="Git"
                svg={<img src={git} alt="Git" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="Python"
                svg={<img src={python} alt="Python" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="Dotnet"
                svg={<img src={dotnet} alt="Dotnet" />}
              />
            </li>
            <li>
              <ImageWithTooltip
                imageName="PHP"
                svg={<img src={php} alt="php" />}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
