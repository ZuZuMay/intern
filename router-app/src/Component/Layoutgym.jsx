import React, { useState, useEffect } from 'react';
//import logo from './images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setNav(window.scrollY >= 50);
    };

    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li><Link to="header" smooth={true} duration={500}>Header</Link></li>
        <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
        <li><Link to="offer" smooth={true} duration={500}>Offer</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

// export default Navbar;

// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// const Layoutgym = () => {
//   return (
//     <>
//       <div className='flex'>
//            <Link className="" to="/">Gym</Link>
//             <Link to="/">HEADER</Link>
//             <Link to="feature"> FEATURES </Link>
//             <Link to="/offer"> OFFER</Link>
//             <Link to="/about">ABOUT</Link>
//             <Link to="/contact">CONTACT</Link>
//       </div>
//       <div >
//           <Outlet/>
//       </div>
//     </>
//   )
// }

// export default Layoutgym
