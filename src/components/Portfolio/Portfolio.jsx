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
        <a className="anchor" id="portfolio"></a>
            <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className='heads'>
                <span className='tops'>
                  My Latest Works
                </span>
                <p className='para' style={{marginTop: "10px" }}>
                Please click on the cards for more info
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
        
          <img src="./showCases.jpg" alt="" />
          <div class="portfolio-layer">
            <h4>Help Center Page</h4>
            <p>
              A beautiful functional responsive and user-friendly help center
              page built with jsx, css and react app.
            </p>
            <a href="https://help-center-site.vercel.app/"
             target='_blank' rel="noreferrer" ><i class="bx bx-link-external" ></i ></a>
          </div>
          
        </motion.div>

        <motion.div
              variants={fadeIn("up", "tween", 0.7, 0.6)}
               class="portfolio-box">
        
          <img src="./showCases.jpg" alt="" />
          <div class="portfolio-layer">
            <h4>Company website</h4>
            <p>
            For this project, I built a company website using HTML5, JS and
              Tailwind CSS.i used a mobile-first approach to ensure that the
              website is fully responsive and optimized for different screen
              sizes. The website features a modern and clean design.
            </p>
            <a href="https://careers-neon.vercel.app/"
              target='_blank' rel="noreferrer"><i class="bx bx-link-external"></i
            ></a>
          </div>
         
        </motion.div>

        <motion.div
              variants={fadeIn("up", "tween", 0.9, 0.6)}
               class="portfolio-box">
        
          <img src="./showCases.jpg" alt="" />
          <div class="portfolio-layer">
            <h4>Landing page</h4>
            <p>
            A colorful responsive landing page built with HTML, CSS and
              JavaScript.
            </p>
            <a href="https://sunny-side-project.vercel.app/"
              target='_blank' rel="noreferrer"><i class="bx bx-link-external"></i
            ></a>
          </div>
          
        </motion.div>
        <motion.div
              variants={fadeIn("up", "tween", 1.1, 0.6)}
               class="portfolio-box">
        
          <img src="./showCases.jpg" alt="" />
          <div class="portfolio-layer">
            <h4>Weather App</h4>
            <p>
            A simple weather app built with Xml, Tailwind CSS, React JS ad
              OpenWeatherApp API
            </p>
            <a href="https://fops-weather-app.vercel.app/"
             target='_blank' rel="noreferrer" ><i class="bx bx-link-external" ></i ></a>
          </div>
          
        </motion.div>

        <motion.div
              variants={fadeIn("up", "tween", 1.3, 0.6)}
               class="portfolio-box">
        
          <img src="./showCases.jpg" alt="" />
          <div class="portfolio-layer">
            <h4>To-Do App</h4>
            <p>
            This is project was built using React js, Tailwind css and Xml.
              This is a To- do app to help with day-to-day activities and
              organizations.
            </p>
            <a href="https://fops-to-do.vercel.app/"
              target='_blank' rel="noreferrer"><i class="bx bx-link-external"></i
            ></a>
          </div>
         
        </motion.div>

        {/* <motion.div
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
              target='_blank'><i class="bx bx-link-external"></i
            ></a>
          </div>
          
        </motion.div> */}
            
           </div>

        </div>
      </motion.section>
    </div>
  )
}

export default Portfolio