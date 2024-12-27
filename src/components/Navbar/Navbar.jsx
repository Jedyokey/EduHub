import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleNavLinkClick = () => {
    setMobileMenu(false);
  };

  // Toggle menu on menu icon click
  const handleMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <Link to="hero" smooth={true} offset={0} duration={500}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <ul className={mobileMenu ? "mobile-menu" : "hide-mobile-menu"}>
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleNavLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="program"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={handleNavLinkClick}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-150}
              duration={500}
              onClick={handleNavLinkClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="campus"
              smooth={true}
              offset={-260}
              duration={500}
              onClick={handleNavLinkClick}
            >
              Campus
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              offset={-235}
              duration={500}
              onClick={handleNavLinkClick}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-220}
              duration={500}
              className="btn"
              onClick={handleNavLinkClick}
            >
              Contact us
            </Link>
          </li>
        </ul>

        <img
          src={menu_icon}
          alt="Menu Icon"
          className="menu-icon"
          onClick={handleMenuToggle}
        />
      </nav>

      {/* Overlay for closing menu when clicking outside */}
      <div
        className={`nav-overlay ${mobileMenu ? "show" : ""}`}
        onClick={() => setMobileMenu(false)}
      ></div>
    </>
  );
};

export default Navbar;
