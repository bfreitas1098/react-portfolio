import "./App.css";
import Skills from "./components/skills";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <Skills />
    </div>
  );
}

export default App;
