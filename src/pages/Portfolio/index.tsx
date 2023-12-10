import Footer from "../../components/Footer";
import HomeAbout from "../../components/HomeAbout";
import NavBar from "../../components/NavBar";
import Projects from "../../components/Projects";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Stacks from "../../components/Stacks";
import "./style.scss";

export default function PortifolioPage() {
  return (
    <>
      <NavBar />

      <HomeAbout />

      <Stacks />
      <Projects />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
