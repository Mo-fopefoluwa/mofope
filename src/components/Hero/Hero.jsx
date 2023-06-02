import React from 'react';
import { motion } from 'framer-motion';
// import {Background} from './splash.png'
import './Hero.css';
import { fadeIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
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
            <motion.span
             variants={fadeIn("left", "tween", 0.4, 1)}
             className='secondaryTexts'>
            I design beautiful simple <br />
             things, And I love what i do
            </motion.span>
          </div>
          <motion.div
           variants={fadeIn("up", "tween", 0.3, 1)}
          className="person" style={{ backgroundImage: "url('/splash.png')"}}>
            <img src="../person.png" alt="" />

          </motion.div>
          <a href="/" className="email">fopefaokunla@gmail.com</a>
          <div className="lowerElement">
            <motion.div 
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="experience">
            <div className="primaryText">3</div>
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
                <span>
                    Certified Professional
                </span>
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