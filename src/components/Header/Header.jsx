import './Header.css';
import { motion } from 'framer-motion';
import  {useState} from 'react';
import {getMenuStyles,  headerVariants} from '../../utils/motion'
import {BiMenu, BiPhoneCall} from 'react-icons/bi'
import useHeaderShadow from '../../hooks/useHeaderShadow'

import React from 'react'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()
  return (
    <div
   >
        <motion.div className="section" 
         initial= "hidden"
         whileInView="show"
         variants={headerVariants}
         viewport={{once: false, amount: 0.25}}
         style={{boxShadow: headerShadow}}>
            <div className="container">
                <p className='logo'>Mofopefoluwa</p>

                <ul style={getMenuStyles(menuOpened)}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Experience</a></li>
                    <li><a href='/'>Skills</a></li>
                    <li><a href='/'>Portfolio</a></li>
                    <li className='num'><a href='/'>
                        <p>08154980688  <BiPhoneCall size={"25px"} /></p>
                       
                        </a>
                    </li>
                </ul>
                <div className="menuIcon"
            onClick={() =>setMenuOpened ((prev)=>!prev)}>
                <BiMenu size={30} />
            </div>
            </div>
            </motion.div>  
        </div>
    
  )
}

export default Header