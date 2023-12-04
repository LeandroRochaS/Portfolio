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
          <p className="contact-title-secundary">lerocha644@gmail.com</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
