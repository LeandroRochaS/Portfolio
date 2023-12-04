import { BrowserRouter } from "react-router-dom";
import PortfolioPage from "./pages/Portfolio";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomeSingle";
import TechStacksPage from "./pages/TechStacks";
import ProjectsPage from "./pages/Projects";
import ContactPage from "./pages/Contact";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/TechStacks" element={<TechStacksPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/About" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
