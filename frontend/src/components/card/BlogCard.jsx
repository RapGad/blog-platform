import React from 'react'
import './blog-card.css'
import { motion } from 'framer-motion'
const BlogCard = () => {

    const parentVariants = {
        initial:{
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0,
            viewport:{
                once: true,
                amount: 1
            },
            
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            }
        },
       
    }

    const childVariants = {
        initial: {
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }   
    }

    const descvariants = {
        initial: {
            opacity: 0,
            y: -100
        },
        hover: {
            opacity: 1,
            y: 100,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }   
    }

    const overlayVariants = {
        initial: {
            opacity: 0
        },
        hover: {
            opacity: 1,

        }   
    }
    
  return (

    <motion.div variants ={parentVariants} initial="initial" whileInView="animate"  className='blogCard'>
        <motion.div variants={childVariants} whileHover="hover" className="imgContainer">
            <motion.div  variants={overlayVariants} initial="initial" whileHover="hover" className="overlay">
            <motion.p variants={descvariants} initial="initial" whileHover="hover" className='desc'>lorem ipsum</motion.p>
            </motion.div>
            <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsb2d8ZW58MHx8MHx8fDA%3D" alt="post" />
            <motion.p className="post-title">Post title</motion.p>
            
        </motion.div>
        <motion.div variants={childVariants} className="blog-user">
            <div className="user-info">
                <p className="username">Username</p>
                <p className="title">title</p>
                
            </div>
            <div className="post-info">
                <span>Likes</span>
                <span>comments</span>
            </div>
        </motion.div>
      
    </motion.div>
  )
}

export default BlogCard
