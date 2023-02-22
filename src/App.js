import "./App.scss";
import LandingPage from "./components/LandingPage";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Bio />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
