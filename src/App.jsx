import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Oval, BallTriangle } from "react-loader-spinner";
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
import ExploreMore from './pages/ExploreMore/ExploreMore';
import CampusGallery from './pages/CampusGallery/CampusGallery';
import BackToTop from "./components/BackToTop/BackToTop";

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
  const [loading, setLoading] = useState(false); // Spinner state for page
  const [appLoading, setAppLoading] = useState(true); // Spinner state for app

  // Simulate app loading and hide the spinner after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppLoading(false); // Hide the spinner after loading is complete
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {appLoading ? (
        <div className="app-spinner-overlay">
          <BallTriangle height={100} width={100} color="#fff" visible={true} />
        </div>
      ) : (
        <ScrollToSectionWrapper>
          <ScrollToTop />
          <Navbar sections={sections} />
          {loading && (
            <div className="spinner-overlay">
              <Oval height={80} width={80} color="#4CAF50" visible={true} />
            </div>
          )}
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Hero setLoading={setLoading} id={sections.hero} />
                  <div className="container">
                    <Title subTitle="OUR PROGRAM" title="What We Offer" id={sections.programs} />
                    <Programs />
                    <About setPlayState={setPlayVideo} id={sections.about} />
                    <Title subTitle="Gallery" title="Campus Photos" id={sections.campus} />
                    <Campus setLoading={setLoading} />
                    <Title subTitle="Testimonials" title="What Student Say" id={sections.testimonials} />
                    <Testimonials />
                    <Title subTitle="Contact us" title="Get in Touch" id={sections.contact} />
                    <Contact />
                  </div>
                  <VideoPlayer playState={playVideo} setPlayState={setPlayVideo} />
                  {!playVideo && <BackToTop />} {/* Render BackToTop only on homepage */}
                </div>
              }
            />
            <Route path="/explore-more" element={
              <>
                <ExploreMore />
                {!playVideo && <BackToTop />} {/* Render BackToTop on explore-more */}
              </>
            } />
            <Route path="/campus-gallery" element={<CampusGallery />} />
          </Routes>
          <Footer />
        </ScrollToSectionWrapper>
      )}
    </Router>
  );
};

export default App;
