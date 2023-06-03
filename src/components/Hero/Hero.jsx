import React from 'react';
import { motion } from 'framer-motion';
// import {Background} from './splash.png'
import './Hero.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { fadeIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
const myStyles = {
  fontSize: '1.4rem',
  fontWeight: 600,
  marginLeft:'10rem',
  width:'30%',
  '@media (max-width: 980px)' :{
    width:'100%',
    marginLeft:'0rem',
  }

  }


  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer","React js Developer","I build beautiful and responsive websites",], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: " "
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <div className="sections">
        <motion.div 
         initial= "hidden"
         whileInView="show"
         variants={staggerContainer}
         viewport={{once: false, amount: 0.25}}
          className="containers">
          <div className="upperElement">
          <motion.span
          variants={fadeIn("right", "tween", 0.2, 1)}
             className='primaryText'>
            Hey There, <br/> I'm Mofopefoluwa.
            </motion.span>
            <motion.span  ref={el}
             variants={fadeIn("left", "tween", 0.4, 1)}
             className='el' >
            
            </motion.span>
          </div>
          <motion.div
           variants={fadeIn("up", "tween", 0.3, 1)}
          className="person" style={{ backgroundImage: "url('/splash.png')"}}>
            <img src="me.png" alt="" />

          </motion.div>
          <a href="/" className="email">fopefaokunla@gmail.com</a>
          <div className="lowerElement">
            <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="experience">
            <div className="primaryText">2</div>
                <div className='secondaryText'>
                    <div>
                        Years
                    </div>
                    <div>
                        Experience
                    </div>
                </div>
            </motion.div>
            <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
             className="certificate">
            <img src='../certificate.png' alt='logo' />
                {/* <span>
                    Certified Professional
                </span> */}
                    <span>
                        Frontend Developer
                   </span>
                 
            </motion.div>
          </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Hero