import React from "react"
import './Services.css'
import Ui from "../../img/heartemoji.png";
import Programming from "../../img/heartemoji.png";
import Language from "../../img/heartemoji.png";
import Card from "../Card/Card";
import Resume from './sample.pdf'
import { themeContext } from "../../Context"
import { useContext } from "react"

const Services = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="services">

                <div className="knowledge">
                    <span style = {{color: darkMode? 'white': ''}}>My Several</span>
                    <span>Knowledge</span>
                    <spane>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    <br/>
                    quis nostrud exercitation ullamco laboris.
                    </spane>
                    <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                    </a>
                    <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
                </div>

            
                <div className="cards">
                    <div style={{left: '18rem'}}>
                        <Card
                            emoji=  {Ui}
                            heading = {'Design'}
                            detail = {"Lorem ipsum dolor Amet"}                            
                        />
                    </div>
                    <div style={{top:"12rem", left:"-1rem"}}>
                        <Card
                            emoji= {Programming}
                            heading= {"Programming"}
                            detail= {"Lorem ipsum dolor Amet"}
                        />
                    </div>
                    <div style={{top:"20rem", left:"16rem"}}>
                        <Card
                            emoji= {Language}
                            heading= {"Language"}
                            detail= {"Lorem ipsum dolor Amet"}
                        />
                    </div>
                    <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
                </div>
        </div>
    )
}

export default Services