import React from 'react'
import { motion} from 'framer-motion'

const LandingPage = () => {

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
        staggerChildren: 0.2
        
      },
      
    },
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Starting position for children
    },
    visible: {
      opacity: 1,
      y: 0, // Final position after animation
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className='landing-page'>
      <motion.div
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className="contents">
        <motion.h1 variants={childVariants}><span className='ch-color'>Share Your story,</span> <span className='ch-other'>Inspire and connect</span></motion.h1>
        <motion.h2 variants={childVariants}>Your voice matters, Write , <span>Share, Thrive</span></motion.h2>
        <motion.h3 variants={childVariants}>Ideas in Action</motion.h3>

        <motion.div variants={childVariants} className="buttons">
          <motion.button variants={childVariants} className='get-started'>Get Started</motion.button>
          <motion.button variants={childVariants} className='learn-more'>Learn More</motion.button>
        </motion.div>

      </motion.div>
      
    </section>
  )
}

export default LandingPage
