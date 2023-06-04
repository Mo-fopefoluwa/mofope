import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, textVariant2, zoomIn } from '../../utils/motion';
import { workExp } from '../../utils/data';


const Experience = () => {
  return (
    <div>
        <section>
        <motion.div
         initial= "hidden"
         whileInView="show"
         variants={staggerChildren}
         viewport={{once: false, amount: 0.25}}
         className="contains">
             <a className="anchor" id="experi"></a>
            <span className='primaryTextss'> My Work Experience</span>

            <div className="experiences">
                {
                    workExp.map((exp, i) => {
                        return (
                            <motion.div
                            variants={textVariant2}
                            className="exps" key={i}>
                                <div className="post">
                                    <h1>{exp.place}</h1>
                                    <p>{exp.tenure}</p>
                                </div>
                                <div className="role">
                                    <h1>{exp.role}</h1>
                                    <p>{exp.detail}</p>
                                </div>
                            </motion.div>
                        )
                    })
                }
               <motion.div variants={zoomIn(1, 1)} className="progressbar">
                 <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className="line"></motion.div>
                     <div className='cover'> <div className="circle" style={{background:"#286F6C"}}></div> </div>
                     <div className='cover'> <div className="circle" style={{background:"#F2704E"}}></div> </div>
                     <div className='cover'> <div className="circle" style={{background:"#EEC048"}}></div> </div>
                  </motion.div>
               </div>
           
        </motion.div>
        </section>
    </div>
  )
}

export default Experience