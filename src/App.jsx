import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HeroSection from "./webpages/HeroSection";
import Footer from "./components/Footer";
import ContactSection14 from "./webpages/Contacts";
import CarouselSection from "./webpages/Carousel";
import TutorialPage from "./webpages/Tutorials";
import Navbar from "./components/Navbar";
import Merch from "./webpages/Merch";
import ShortsPage from "./webpages/Shorts";

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Include Navbar */}
        <Navbar isDarkBackground={false} />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CarouselSection />
                <Footer />
              </>
            }
          />
          <Route path="/shorts" element={<ShortsPage />} />
          <Route path="/tutorials" element={<TutorialPage />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/contact" element={<ContactSection14 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;