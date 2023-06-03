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
                <h4>&copy; copyright•2023</h4>
                <p>Ibadan/ Lagos, Nigeria</p>

             </motion.div>
               <motion.div class="social-media">
          <a href="https://github.com/Mo-fopefoluwa/">
            <i class="bx bxl-github"></i>
          </a>
          <a href="https://linkedin.com/in/mofopefoluwa-faokunla-61abb622a/"
            ><i class='bx bxl-linkedin'></i></a>
          <a href="https://instagram.com/Mofope_foluwa/"
            ><i class='bx bxl-instagram-alt' ></i></a>
          <a href="https://twitter.com/Mofopefoluwa__/"
            ><i class='bx bxl-twitter' ></i></a>
        </motion.div>
                
        </div>
      </motion.div>
   </section>
    </div>
  )
}

export default Footer