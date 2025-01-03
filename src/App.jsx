import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import CampusGallery from './pages/CampusGallery';

const sections = {
  hero: 'hero',
  programs: 'programs',
  about: 'about',
  campus: 'campus',
  testimonials: 'testimonials',
  contact: 'contact',
};

const ScrollToSectionWrapper = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.target) {
      const targetElement = document.getElementById(location.state.target);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return children;
};

const App = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <Router>
      <ScrollToSectionWrapper>
        <ScrollToTop />
        <Navbar sections={sections} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero id={sections.hero} />
                <div className="container">
                  <Title subTitle="OUR PROGRAM" title="What We Offer" id={sections.programs} />
                  <Programs />
                  <About setPlayState={setPlayVideo} id={sections.about} />
                  <Title subTitle="Gallery" title="Campus Photos" id={sections.campus} />
                  <Campus />
                  <Title subTitle="Testimonials" title="What Student Say" id={sections.testimonials} />
                  <Testimonials />
                  <Title subTitle="Contact us" title="Get in Touch" id={sections.contact} />
                  <Contact />
                </div>
                <VideoPlayer playState={playVideo} setPlayState={setPlayVideo} />
              </div>
            }
          />
          <Route path="/campus-gallery" element={<CampusGallery />} />
        </Routes>
        <Footer />
      </ScrollToSectionWrapper>
    </Router>
  );
};

export default App;
