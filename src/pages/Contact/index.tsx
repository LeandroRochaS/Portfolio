import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import "./style.scss";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="contact">
        <div className="contact-main">
          <p>For any questions please mail us:</p>
          <a
            className="contact-title-secundary"
            href="mailto:lerocha644@gmail.com"
          >
            {" "}
            lerocha644@gmail.com
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
