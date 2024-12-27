import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaCommentDots } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-links">
                <ul>
                    <li>About Edusity</li>
                    <li>Admissions</li>
                    <li>Community</li>
                    <li>Campus Life</li>
                </ul>
                <ul>
                    <li>The President</li>
                    <li>Campus Map</li>
                    <li>Library</li>
                    <li>Careers</li>
                </ul>
                <ul>
                    <li>Accessibility</li>
                    <li>Ethical Concerns</li>
                    <li>Non-Discrimination</li>
                    <li>Privacy Statement</li>
                </ul>
            </div>
            <div className="footer-icons">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <FaYoutube />
                <FaCommentDots />
            </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
            <p>Developed by Jedy++</p>
            <p>
                © 2024 Edusity University. All rights reserved. <br />
                Rue des Jardins, Cocody, Abidjan, 01 BP 1234, Côte d'Ivoire.  
                <MdCall className="call-icon" /> +225 07 65 123 456 
            </p>
      </div>
    </footer>
  );
};

export default Footer;
