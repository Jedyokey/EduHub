import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  // Check if the current page matches specific routes: homepage, explore more, or campus gallery
  const isHomePage = location.pathname === "/";
  const isExploreMorePage = location.pathname === "/explore-more";
  const isCampusGalleryPage = location.pathname === "/campus-gallery";

  useEffect(() => {
    if (isHomePage || isExploreMorePage) {
      // Apply the sticky class for homepage and explore-more page
      const handleScroll = () => {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setSticky(false);
    }
  }, [isHomePage, isExploreMorePage]);

  const handleNavLinkClick = () => {
    setMobileMenu(false);
  };

  const handleMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const sections = {
    hero: "hero",
    program: "program",
    about: "about",
    campus: "campus",
    testimonials: "testimonials",
    contact: "contact",
  };

  return (
    <>
      <nav 
        className={`
            container ${sticky ? "dark-nav" : ""} 
            ${isCampusGalleryPage ? "fixed-bg" : ""}`
        }
      >
        {isHomePage ? (
          <ScrollLink
            to={sections.hero}
            smooth={true}
            duration={500}
            className="logo-link"
            onClick={handleNavLinkClick}
          >
            <img src={logo} alt="Logo" className="logo" />
          </ScrollLink>
        ) : (
          <RouterLink to="/" onClick={handleNavLinkClick}>
            <img src={logo} alt="Logo" className="logo" />
          </RouterLink>
        )}

        <ul className={mobileMenu ? "mobile-menu" : "hide-mobile-menu"}>
          {/* Navigation links */}
          <li>
            {isHomePage ? (
              <ScrollLink to={sections.hero} smooth={true} duration={500} onClick={handleNavLinkClick}>
                Home
              </ScrollLink>
            ) : (
              <RouterLink to="/" onClick={handleNavLinkClick}>
                Home
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to={sections.program} smooth={true} duration={500} offset={-260} onClick={handleNavLinkClick}>
                Program
              </ScrollLink>
            ) : (
              <RouterLink to="/" state={{ scrollTo: sections.program }} onClick={handleNavLinkClick}>
                Program
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to={sections.about} smooth={true} duration={500} offset={-150} onClick={handleNavLinkClick}>
                About
              </ScrollLink>
            ) : (
              <RouterLink to="/" state={{ scrollTo: sections.about }} onClick={handleNavLinkClick}>
                About
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to={sections.campus} smooth={true} duration={500} offset={-260} onClick={handleNavLinkClick}>
                Campus
              </ScrollLink>
            ) : (
              <RouterLink to="/campus-gallery" onClick={handleNavLinkClick}>
                Campus
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to={sections.testimonials} smooth={true} duration={500} offset={-235} onClick={handleNavLinkClick}>
                Testimonials
              </ScrollLink>
            ) : (
              <RouterLink to="/" state={{ scrollTo: sections.testimonials }} onClick={handleNavLinkClick}>
                Testimonials
              </RouterLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <ScrollLink to={sections.contact} smooth={true} duration={500} offset={-220} className="btn" onClick={handleNavLinkClick}>
                Contact us
              </ScrollLink>
            ) : (
              <RouterLink to="/" state={{ scrollTo: sections.contact }} className="btn" onClick={handleNavLinkClick}>
                Contact us
              </RouterLink>
            )}
          </li>
        </ul>

        <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={handleMenuToggle} />
      </nav>

      {/* Overlay for closing menu when clicking outside */}
      <div className={`nav-overlay ${mobileMenu ? "show" : ""}`} onClick={() => setMobileMenu(false)}></div>
    </>
  );
};

export default Navbar;
