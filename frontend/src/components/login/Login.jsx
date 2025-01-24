import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {

  const parentVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      }, // Slide up
    },
    visible: {
      opacity: 1,
      y: 0, // Slide to original position
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Starting position for children
    },
    visible: {
      opacity: 1,
      y: 0, // Slide to original position
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };  
  return (
    <div className="login-container">
      <motion.div variants={parentVariants} initial="hidden" animate="visible" className="page-container">
        <motion.img variants={childVariants} src="../img/Design.png" alt="" />
        <motion.div variants={childVariants} className="form-container">
          <motion.div variants={childVariants} className="form">
            <h1>Welcome Back</h1>
            <p>Please enter you details to login</p>

            <motion.div variants={childVariants} className="control">
              <label>Email</label>
              <input type="text" />
            </motion.div>

            <motion.div variants={childVariants} className="control">
              <label>Password</label>
              <input type="text" />
            </motion.div>

            <motion.div variants={childVariants} className="control control-password">
              <NavLink className='fg-password' to="/forgetpassword">Forget Password</NavLink>
            </motion.div>
            <motion.div variants={childVariants} className="lg-btn">
            <button className="login-button">sign in</button>

            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div variants={childVariants} className="textContainer">
          <h1>Step Into Your Story – Share, Discover, and Connect!</h1>
          <span>&ldquo;</span>
          <p className="login-para">There is no greater agony than bearing an untold story inside you.</p>
          <span className="end">&rdquo;</span>

          <p>- Maya Angelou</p>

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
