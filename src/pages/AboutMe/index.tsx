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
              Welcome to my corner of the web! I'm a self-taught web developer
              with an unquenchable passion for technology. The journey into the
              realm of IT began during my university days. Intrigued by the
              possibilities, I dove headfirst into the dynamic world of web
              development. My coding odyssey kicked off with Python, leading me
              to explore a diverse array of languages such as Java, HTML, CSS,
              JavaScript, React, TypeScript, Spring, and more. The thrill of
              unraveling the intricacies of each language and framework keeps me
              fueled on this ever-evolving adventure. Driven by an insatiable
              curiosity, I am always on the lookout for fresh challenges and
              opportunities to enhance my skills and broaden my knowledge. The
              dynamic nature of technology ensures that there's always something
              new to discover and master, and I thrive on staying at the
              forefront of these innovations. Join me on this exciting journey
              as I continue to push the boundaries of what's possible in the
              digital landscape. Let's create, innovate, and build the future
              together.
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
            <CardAbout
              title="Waiting for an opportunity"
              yearsWorked="Jan 0000 - Dec 0000"
              institute="Company Name"
              time="Time worked"
            />
          </div>
          <div className="about-education">
            <h1 className="about-title">Education</h1>
            <CardAbout
              title="Bachelor in computer Science"
              yearsWorked="Feb 2022 - May 2026"
              institute="University Tiradentes"
              time="In Progress"
            />
          </div>
        </div>
      </div>
    </>
  );
}
