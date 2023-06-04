import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../../utils/motion';

const Skills = () => {
  return (
    <div>
        <motion.section
         initial= "hidden"
         whileInView="show"
         variants={staggerChildren}
         viewport={{once: false, amount: 0.25}}
        class="services">
           <a className="anchor" id="skills"></a>
      <motion.h2 class="headingss">My <span>Skills</span></motion.h2>
      <div class="services-container">
       
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.6)}
        class="cards">
          <div class="percent">
            <svg class="tml">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="num">
              <h2>90 <span>%</span></h2>
            </div>
            <h2 class="texttt">HTML</h2>
          </div>
        </motion.div>
        <motion.div
         variants={fadeIn("up", "tween", 0.7, 1)}
        class="cards">
          <div class="percent">
            <svg class="ss">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="num">
              <h2>85 <span>%</span></h2>
            </div>
            <h2 class="texttt">CSS</h2>
          </div>
        </motion.div>
        <motion.div
         variants={fadeIn("up", "tween", 0.9, 0.6)}
        class="cards">
          <div class="percent">
            <svg class="jas">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="num">
              <h2>70 <span>%</span></h2>
            </div>
            <h2 class="texttt">JavaScript</h2>
          </div>
        </motion.div>
        <motion.div
         variants={fadeIn("up", "tween", 1.1, 0.6)}
        class="cards">
          <div class="percent">
            <svg class="gits">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="num">
              <h2>40 <span>%</span></h2>
            </div>
            <h2 class="texttt">PhP</h2>
          </div>
        </motion.div>
        <motion.div
         variants={fadeIn("up", "tween", 1.3, 0.6)}
        class="cards">
          <div class="percent">
            <svg class="rcts">
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="num">
              <h2>65 <span>%</span></h2>
            </div>
            <h2 class="texttt">React</h2>
          </div>
        </motion.div>
      </div>
    </motion.section>
    </div>
  )
}

export default Skills