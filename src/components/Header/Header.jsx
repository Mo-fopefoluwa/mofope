import './Header.css';
import { motion } from 'framer-motion';
import  {useState} from 'react';
import React from 'react';
import {  headerVariants} from '../../utils/motion'
import {BiMenu, BiPhoneCall} from 'react-icons/bi'
import useHeaderShadow from '../../hooks/useHeaderShadow'



const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow();
   

    
   
     
    

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
                    <li><a href='#hero'>Home</a></li>
                    <li><a href='#experi'>Experience</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li className='num'><a href='tel:08123600539'>
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
};


const Results = () => (
   
   
        
    <ul className='response'>
 
            <li><a href='#hero'>Home</a></li>
            <li><a href='#experi'>Experience</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li className='num'><a href='/'>
                <p>08154980688  <BiPhoneCall size={"22px"} className='icons'/></p>
               
                </a>
            </li>
</ul>
   
   );

export default Header