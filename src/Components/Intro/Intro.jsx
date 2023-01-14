import React from "react"
import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector2.png';
import Me from '../../img/me.png';
import Crown from '../../img/crown.png';
import Thumbup from '../../img/thumbup.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context"
import { useContext } from "react"
import  {motion} from 'framer-motion'

const Intro = () => {
    const transition = {duration : 3, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
       <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style = {{color: darkMode? 'white': ''}}>Hy! I Am</span>
                <span>Reza Brembo</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</span>
            </div>
            <button className="button i-button">About Me</button>
            <div className="i-icons">
                <img src={Github} alt=""/>
                <img src={Linkedin} alt=""/>
                <img src={Instagram} alt=""/>
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt=""/>
            <motion.img 
             initial={{left:'50%'}}
             whileInView={{left:'20%'}}
             transition={transition}
             src={Me} alt=""/>
            <div style={{top: '-7%', left:'64%'}}>
                <FloatingDiv image={Crown} txt1='Lorem Ipsum' txt2='Dolor Amet'/>
            </div>
            <div style={{top: '20rem', left: '0rem'}}>
                <FloatingDiv image={Thumbup} txt1='Lorem Ipsum' txt2='Dolor Amet'/>
            </div>
            <div className='blur' style={{background: '#C1F5FF'}}>
            </div>
            <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-2rem'}}>
            </div>
        </div>
       </div>
    )
}

export default Intro