import "./App.scss";
import LandingPage from "./components/LandingPage";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <LandingPage toggleTheme={toggleTheme} theme={theme} />
        <Bio />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
