import "./style.scss";

export default function ScrollToTopButton() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button onClick={handleClick} className="scroll-to-top-button">
      &#9650;
    </button>
  );
}
