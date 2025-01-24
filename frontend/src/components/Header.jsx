import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }, // Slide up
    },
    visible: {
      opacity: 1,
      y: 0, // Slide to original position
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: "-50%", // Starting position for children
    },
    visible: {
      opacity: 1,
      y: 0, // Slide to original position
      transition: {
        duration: 0.5,
        ease: "easeInOut",

      },
    },
  }
  return (
    <header className="header">
      <div className="logo"><img src='../img/Design.png' alt="logo" /></div>

      <AnimatePresence>

        {
          isOpen && (
            <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="links"
          >
            <motion.li variants={linkVariants} ><NavLink className='m-link' onClick={handleLinkClick} to="/homepage">Home</NavLink> </motion.li>
            <motion.li variants={linkVariants} ><NavLink className='m-link' onClick={handleLinkClick} to="/about">About Us</NavLink></motion.li>
            <motion.li variants={linkVariants} ><NavLink className='m-link' onClick={handleLinkClick} to="/login">Login</NavLink></motion.li>
            <motion.li variants={linkVariants} > <NavLink className='m-link' onClick={handleLinkClick} to="/signup">Signup</NavLink></motion.li>
            <motion.li variants={linkVariants} > <NavLink className='m-link' onClick={handleLinkClick} to="/user">user</NavLink></motion.li>
          </motion.ul>

          )
        }
       
      </AnimatePresence>

      <ul className="large-links">
        <NavLink className='tag' to="/homepage">Home</NavLink>
        <NavLink className='tag' to="/about">About Us</NavLink>
        <NavLink className='tag' to="/login">Login</NavLink>
        <NavLink className='tag' to="/signup">Signup</NavLink>
        <NavLink className='tag' to="/user">user</NavLink>
      </ul>

      <button className="toggle" onClick={() => setIsOpen((prev) => !prev)}>
        open
      </button>
    </header>
  );
};

export default Header;
