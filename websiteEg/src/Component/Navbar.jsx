import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const Navbar = () => {
  const navItems = [
    { label: "Overview", path: "home" },
    { label: "Feature", path: "feature" },
    { label: "About", path: "about" },
    { label: "Pricing", path: "pricing" },
  ];

  return (
    <nav className="bg-white mt-1 mb-0 ">
      <div className="text-lg mx-auto flex justify-between items-center font-medium">
        <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"}
                            viewport={{once:false,amount:0.5}} className="flex space-x-8  items-center">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-5">
            <img src={logo} alt="Logo" className=" w-50 " />
          </a>
        </motion.div>
        <motion.div variants={fadeIn("left",0.2)} initial="hidden" whileInView={"show"}
                            viewport={{once:false,amount:0.5}} className="flex space-x-24 font-black text-3xl">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              className="block hover:text-gray-300 cursor-pointer"
            >
              {label}
            </Link>
          ))}
          <button className="bg-fuchsia-500 py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
            Sign up
          </button>
         </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
