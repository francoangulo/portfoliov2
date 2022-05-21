import { Stack, Text } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import "animate.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
    return (
        <Stack className="App" fontFamily={"raleway"}>
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </Stack>
    );
}

export default App;
