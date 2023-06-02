import React from 'react'
import './Portfolio.css';
import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '../../utils/motion';
import { staggerChildren } from '../../utils/motion';

const Portfolio = () => {
  return (
    <div>
      <motion.section
       initial= "hidden"
       whileInView="show"
       variants={staggerChildren}
       viewport={{once: false, amount: 0.25}}
       className="wrapper">
        <div className="contained">
        <div className="heading">
            <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className='heads'>
                <span className='tops'>
                  My Latest Works
                </span>
                <p className='para' style={{marginTop: "10px" }}>
                Perfect solution for digital experience
                </p>
            </motion.div>
            <motion.span
            variants={slideIn("right", "tween", 0.4, 1)}
            className='Exp'>Explore More Works</motion.span>
        </div>

         
        <div className="showCase">
              <motion.div
              variants={fadeIn("up", "tween", 0.5, 0.6)}
               class="portfolio-box">
        
          <img src="./showCase1.png" alt="" />
          <div class="portfolio-layer">
            <h4>Help Center Page</h4>
            <p>
              A beautiful functional responsive and user-friendly help center
              page built with jsx, css and react app.
            </p>
            <a href="https://help-center-site.vercel.app/"
             target='_blank' ><i class="bx bx-link-external" ></i ></a>
          </div>
          
        </motion.div>

        <motion.div
              variants={fadeIn("up", "tween", 0.7, 0.6)}
               class="portfolio-box">
        
          <img src="./showCase2.png" alt="" />
          <div class="portfolio-layer">
            <h4>Help Center Page</h4>
            <p>
              A beautiful functional responsive and user-friendly help center
              page built with jsx, css and react app.
            </p>
            <a href="https://help-center-site.vercel.app/"
              ><i class="bx bx-link-external"></i
            ></a>
          </div>
         
        </motion.div>

        <motion.div
              variants={fadeIn("up", "tween", 0.9, 0.6)}
               class="portfolio-box">
        
          <img src="./showCase3.png" alt="" />
          <div class="portfolio-layer">
            <h4>Help Center Page</h4>
            <p>
              A beautiful functional responsive and user-friendly help center
              page built with jsx, css and react app.
            </p>
            <a href="https://help-center-site.vercel.app/"
              ><i class="bx bx-link-external"></i
            ></a>
          </div>
          
        </motion.div>
        <motion.div
              variants={fadeIn("up", "tween", 1.1, 0.6)}
               class="portfolio-box">
        
          <img src="./showCase1.png" alt="" />
          <div class="portfolio-layer">
            <h4>Help Center Page</h4>
            <p>
              A beautiful functional responsive and user-friendly help center
              page built with jsx, css and react app.
            </p>
            <a href="https://help-center-site.vercel.app/"
             target='_blank' ><i class="bx bx-link-external" ></i ></a>
          </div>
          
        </motion.div>

        <motion.div
              variants={fadeIn("up", "tween", 1.3, 0.6)}
               class="portfolio-box">
        
          <img src="./showCase2.png" alt="" />
          <div class="portfolio-layer">
            <h4>Help Center Page</h4>
            <p>
              A beautiful functional responsive and user-friendly help center
              page built with jsx, css and react app.
            </p>
            <a href="https://help-center-site.vercel.app/"
              ><i class="bx bx-link-external"></i
            ></a>
          </div>
         
        </motion.div>

        <motion.div
              variants={fadeIn("up", "tween", 1.6, 0.6)}
               class="portfolio-box">
        
          <img src="./showCase3.png" alt="" />
          <div class="portfolio-layer">
            <h4>Help Center Page</h4>
            <p>
              A beautiful functional responsive and user-friendly help center
              page built with jsx, css and react app.
            </p>
            <a href="https://help-center-site.vercel.app/"
              ><i class="bx bx-link-external"></i
            ></a>
          </div>
          
        </motion.div>
            
           </div>

        </div>
      </motion.section>
    </div>
  )
}

export default Portfolio