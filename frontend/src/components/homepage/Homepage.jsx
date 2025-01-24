import React from "react";
import "./homepage.css";
import BlogCard from "../card/BlogCard";
import { motion } from "framer-motion";

const Homepage = () => {
  const parentVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.5,
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
  };
  return (
    <div className="homepage-container">
      <motion.div className="homePage">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="hero-contents"
        >
          <h1>
            Discover. Engage. Share – Dive Into <br />
            Stories That Inspire.
          </h1>
        </motion.div>
      </motion.div>
      <h1 className="post-header">Post</h1>
      <motion.div className="blogPosts">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </motion.div>
    </div>
  );
};

export default Homepage;
