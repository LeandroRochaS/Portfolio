import "./style.scss";

export default function HomeAbout() {
  return (
    <>
      <div className="home-about">
        <div className="home-about-left">
          <p>Hi 👋,</p>
          <p>My name is </p>
          <p className="title-secondary">Leandro Rocha S</p>
          <p className="ocupation">Full-stack developer</p>
        </div>

        <div className="home-about-right">
          <img src="../../../public/images/foto.png" />
        </div>
      </div>
    </>
  );
}
