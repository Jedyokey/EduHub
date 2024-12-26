import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMenuToggle = () => {
    // mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <Link
        to='hero'
        smooth={true}
        offset={0}
        duration={500}>
          <img src={logo} alt="" className='logo' />
      </Link>

      <ul className={mobileMenu === true ? '' : 'hide-mobile-menu'}>
        <li>
          <Link
            to='hero'
            smooth={true}
            offset={0}
            duration={500}>
              Home
          </Link>
        </li>
        <li>
          <Link
            to='program'
            smooth={true}
            offset={-260}
            duration={500}>
              Program
          </Link>
        </li>
        <li>
          <Link
            to='about'
            smooth={true}
            offset={-150}
            duration={500}>
              About
          </Link>
        </li>
        <li>
          <Link
            to='campus'
            smooth={true}
            offset={-260}
            duration={500}>
              Campus
          </Link>
        </li>
        <li>
          <Link
            to='testimonials'
            smooth={true}
            offset={-225}
            duration={500}>
              Testimonial
          </Link>
        </li>
        <li>
          <Link
            to='contact'
            smooth={true}
            offset={-220}
            duration={500}
            className='btn'>
              Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={handleMenuToggle} />
    </nav>
  )
}

export default Navbar
