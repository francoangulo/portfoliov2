import { Stack } from "@chakra-ui/react";
import "./App.css";
import About from "./components/portfolio/About";
import Home from "./components/portfolio/Home";
import "animate.css";
import Projects from "./components/portfolio/Projects";
import Skills from "./components/portfolio/Skills";
import Navbar from "./components/portfolio/Navbar";
import Contact from "./components/portfolio/Contact";
import Footer from "./components/portfolio/Footer";
import { CodePieces } from "./components/portfolio/CodePieces";

const App = () => {
  return (
    <Stack className="App" fontFamily={"raleway"}>
      <Navbar />
      <Home />
      <About data-aos="fade-up" />
      <Projects />
      <Skills />
      <CodePieces />
      <Contact />
      <Footer />
    </Stack>
  );
};

export default App;
