import './Header.css';
//import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import  {useState} from 'react';
import {  headerVariants} from '../../utils/motion'
import {BiMenu, BiPhoneCall} from 'react-icons/bi'
import useHeaderShadow from '../../hooks/useHeaderShadow'

import React from 'react'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()
  return (
    
        <motion.div className="section" 
         initial= "hidden"
         whileInView="show"
         variants={headerVariants}
         viewport={{once: false, amount: 0.25}}
         style={{boxShadow: headerShadow}}>
            <div className="container">
                <p className='logo'>Mofopefoluwa</p>

                <ul className='bigScreen'>
                    <li><a href='/'>
                        
                        Home
                       
                        </a></li>
                    <li><a href='/'>Experience</a></li>
                    <li><a href='/Skills'>Skills</a></li>
                    <li><a href='/Portfolio'>Portfolio</a></li>
                    <li className='num'><a href='/'>
                        <p>08154980688  <BiPhoneCall size={"25px"} className='icons'/></p>
                       
                        </a>
                    </li>
                </ul>
                
                <div className="menuIcon"
            onClick={() => setMenuOpened(!menuOpened)}>
                <BiMenu size={40} className='menus'/>
                { menuOpened && <Results />  }
                
            </div>
           
            </div>
            </motion.div>  
    
    
  )
}
const Results = () => (
   
        <ul className='response'>
     <li><a href='/'>Home</a></li>
                    <li><a href='/'>Experience</a></li>
                    <li><a href='/Skills'>Skills</a></li>
                    <li><a href='/Portfolio'>Portfolio</a></li>
                    <li className='num'><a href='/'>
                        <p>08154980688  <BiPhoneCall size={"25px"} className='icons'/></p>
                       
                        </a>
                    </li>
</ul>
    );


export default Header