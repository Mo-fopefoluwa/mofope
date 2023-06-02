import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { WhatDoIHelp, projectExperience } from '../../utils/data';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';

const Services = () => {
  return (
    <div>
      <div className="sectionss">
        <motion.div
        variants={staggerContainer}
        initial= "hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="contain">
           <div className="leftSide">
           {projectExperience.map((exp, i) => {
                    return (
                    <motion.div
                    variants={fadeIn("right", "tween", (i+1)*0.2, 1)} className="exp" key={i}>
                          <div className='icos'  style={{background: exp.bg}} > 
                            <exp.icon size={30} color="#000" className='icon' />
                          </div>
                          <div className='side'>
                            <span className='texts'>
                                {exp.name} 
                               
                            </span>
                            <span className='secondaryTexts'>
                                 {exp.projects} {exp.time}
                                 </span>
                             </div>
                    </motion.div>
                
                );
             })} 

           </div>

        
           <motion.div
           variants={textVariant(0.5)}
           className="rightSide">
                <span className='primaryText'>How can I help?</span>

                {
                    WhatDoIHelp.map((paragraph, i) => {
                        return (
                            <span className='secondaryTextss' key={i}> {paragraph}</span>
                        )
                    })
                }

                {/* <div className="stats">
                   <div className="stat"> 
                   <span className='primaryText'>285+</span>
                   <span className='secondaryTextsss'>Projects Completed</span>
                    </div>
                   <div className="stat">
                   <span className='primaryText'>190+</span>
                   <span className='secondaryTextsss'>Happy Customers</span>
                   </div>
                </div> */}
           </motion.div>
           
        </motion.div>
   </div>
    </div>
  )
}

export default Services