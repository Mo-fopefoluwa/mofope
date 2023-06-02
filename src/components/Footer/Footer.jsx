import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren} from '../../utils/motion'

const Footer = () => {
  return (
    <div>
         <section
   className="wrappers">
      <motion.div
       variants={staggerChildren}
       initial= "hidden"
       whileInView="show"
       viewport={{once: false, amount: 0.25}}
      className="containered">
        <motion.div
        variants={fadeIn("left", "tween", 0.7, 0.6)}
         className="leftside">
            <span className='headss'>Let's make something
                 amazing together.</span>
            <span className='toes'>Start by <a href='mailto:fopefaokunla@gmail.com'>saying hi</a></span>
        </motion.div>
        <div className="rightside">
             <motion.div
             variants={fadeIn("up", "tween", 0.7, 0.6)} className="topsss">
                <h4>Information</h4>
                <p>145 New York, FL 5467, USA</p>

             </motion.div>
             {/* <motion.ul className='navi'
             variants={fadeIn("up", "tween", 0.7, 0.6)}>
                <li><a>Services</a></li>
                <li><a>Works</a></li>
                <li><a>Notes</a></li>
                <li><a>Experience</a></li>
                </motion.ul> */}
        </div>
      </motion.div>
   </section>
    </div>
  )
}

export default Footer