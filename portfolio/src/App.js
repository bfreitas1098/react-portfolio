import "./App.css";
import Footer from "./components/footer";
import Skills from "./components/skills";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <Skills />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;
