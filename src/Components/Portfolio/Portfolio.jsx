import React from "react"
import './Portfolio.css'
import Sidebar1 from "../../img/slide1.png";
import Sidebar2 from "../../img/slide2.png";
import Sidebar3 from "../../img/slide3.png";
import Sidebar4 from "../../img/slide4.png";
import "swiper/css"
import {Swiper, SwiperSlide} from "swiper/react";
import { themeContext } from "../../Context"
import { useContext } from "react"

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return(
        <div className="portfolio">
            <span style = {{color: darkMode? 'white': ''}}>Recent Project</span>
            <span>Portfolio</span>

            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sidebar2} alt=""/>
                </SwiperSlide>{" "}
                <SwiperSlide>
                    <img src={Sidebar3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sidebar4} alt=""/>
                </SwiperSlide>
            </Swiper>
         </div>
    );
};

export default Portfolio;