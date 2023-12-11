import CardAbout from "../../components/CardAbout";
import NavBar from "../../components/NavBar";
import "./style.scss";

export default function AboutMe() {
  return (
    <>
      <NavBar />
      <div className="about-container">
        <div className="about-content">
          <div className="about-description">
            <h1 className="about-title about-title-primary">About Me</h1>

            <p className="about-text">
              Welcome to my corner on the web! I'm a self-taught web developer
              with an immense passion for technology. My journey into the world
              of IT began during my university days. Intrigued by the
              possibilities, I dove headfirst into the dynamic universe of web
              development. Starting with Python, I explored a variety of
              languages such as Java, HTML, CSS, JavaScript, React, TypeScript,
              Spring, and more. The thrill of unraveling the intricacies of each
              language and framework keeps me excited in this ever-evolving
              adventure. Driven by curiosity, I'm always on the lookout for
              challenges and opportunities to enhance my skills. Join me on this
              exciting journey as we continue to push the boundaries of what's
              possible in the digital landscape. Let's create, innovate, and
              build the future together.
            </p>
          </div>
          <div className="about-work">
            <h1 className="about-title">Work</h1>
            <CardAbout
              title="Waiting for an opportunity"
              yearsWorked="Jan 0000 - Dec 0000"
              institute="Company Name"
              time="Time worked"
            />{" "}
         
          </div>
          <div className="about-education">
            <h1 className="about-title">Education</h1>
            <CardAbout
              title="Bachelor in computer Science"
              yearsWorked="Feb 2022 - May 2026"
              institute="University Tiradentes"
              time="In Progress"
            />
            <CardAbout
              title="Full-Stack Developer"
              yearsWorked="Dec 2023 - May 2024"
              institute="Senai"
              time="In Progress"
            />
            </div>
          </div>
          <div className="about-education">
            <h1 className="about-title">Courses</h1>
            <CardAbout
              title="Banco PAN Java Developer"
              yearsWorked="Aug 2022 - Oct 2023"
              institute="Dio"
              time="Finished"
            />
            <CardAbout
              title="CS50: Computer Science"
              yearsWorked="Feb 2023 - Apr 2023"
              institute="Havard"
              time="Finished"
            />
            </div>
          </div>
    </>
  );
}
