import React, { useEffect, useState } from 'react'
import '../CSS/Navbar.css'
import logo from "../assets/images/logo9.png"
import line from "../assets/images/line.png"
import { CgMenuRight } from 'react-icons/cg'
import { RxCross2 } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { LuDiamond } from 'react-icons/lu'

export const Navbar = () => {

  const [menu, setMenu] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarBg, setNavbarBg] = useState(false);



  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setShowNavbar(true);
        setNavbarBg(false);
      } else {
        setNavbarBg(true)

        // Scroll Down
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        }
        // Scroll Up
        else {
          setShowNavbar(true);
        }
        lastScrollY = currentScrollY;
      }


    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])


  return (
    <div>
      <div className={`navbar-cont ${showNavbar ? "show" : "hide"} ${navbarBg ? "bg" : ""}`}>
        <NavLink to={"/"}><img src={logo} alt="logo" /></NavLink>
        <ul>
          <li><NavLink to={"/"}>HOME</NavLink></li>
          <li><a href="/#FeaturedMenu">MENUS</a></li>
          <li><NavLink to={"/about"}>ABOUT US</NavLink></li>
          <li><a href="/#ourChef">OUR CHEF</a></li>
          <li><NavLink to={"/contact"}>CONTACT</NavLink></li>
        </ul>
        <a href='/#reserveTable'><button>
          <p className='text text1'>FIND A TABLE</p>
          <a><p className='text text2' aria-hidden={true}>FIND A TABLE</p></a>
        </button>
        </a>
        <CgMenuRight color='#f8f8f8' size={24} className='menuIcon' onClick={() => setMenu(true)} />
      </div>

      {menu && (
        <div className="menu-overlay" onClick={() => setMenu(false)}></div>
      )}
      <div className={`menu-cont ${menu ? "showMenu" : ""}`}>
        <div className='cross-icon-cont'>
          <RxCross2 className='cross-icon' onClick={() => setMenu(false)} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li onClick={() => setMenu(false)}><NavLink to={"/"}><LuDiamond className='nav-icon' /> HOME</NavLink></li>
          <li onClick={() => setMenu(false)}><LuDiamond className='nav-icon' /> <a href="#FeaturedMenu">MENUS</a></li>
          <li onClick={() => setMenu(false)}><NavLink to={"/about"}><LuDiamond className='nav-icon' /> ABOUT US</NavLink></li>
          <li onClick={() => setMenu(false)}><LuDiamond className='nav-icon' /> <a href="#ourChef">OUR CHEF</a></li>
          <li onClick={() => setMenu(false)}><NavLink to={"/contact"}><LuDiamond className='nav-icon' /> CONTACT</NavLink></li>
          <li onClick={() => setMenu(false)}><NavLink to={"/policy"}><LuDiamond className='nav-icon' /> POLICY</NavLink></li>
        </ul>

        <div className='menu-address-details'>
          <h1>Visit Us</h1>
          <p>Golden Plate Restaurant, Mumbai 2487, India</p>
          <p>Open: 10:00 am - 10:00 pm</p>
          <p>booking@gp.com</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }} className='line-cont'>
          <img src={line} alt="line" className='line' />
        </div>

        <div className="booking-request">
          <p>Booking Request</p>
          <span>+91 896 857 8990</span>
        </div>

      </div>

    </div>
  )
}
