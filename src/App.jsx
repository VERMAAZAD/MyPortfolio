import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
