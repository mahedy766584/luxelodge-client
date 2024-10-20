/* eslint-disable no-unused-vars */
import './hero.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, } from 'swiper/modules'; // Autoplay মডিউল ইম্পোর্ট করুন
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


import Checking from '../../checking/Checking';

//hero background video;
// import video1 from "../../../assets/heroVideo/video8.mp4";
// import video2 from "../../../assets/heroVideo/video6.mp4";
import video3 from "../../../assets/heroVideo/video3.mp4";
import HeroContent from './HeroContent';



const Hero = () => {

    return (
        <div>
            <div className="video-slider-container z-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    effect={'fade'}
                    loop={false}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                >
                    {/* <SwiperSlide><HeroContent video={video1} /></SwiperSlide> */}
                    {/* <SwiperSlide><HeroContent video={video2} /></SwiperSlide> */}
                    <SwiperSlide><HeroContent video={video3} /></SwiperSlide>
                </Swiper>
            </div>
            {/* <Container> */}
            <div className='z-40 absolute lg:-bottom-20 -bottom-96 w-full mx-auto flex justify-center items-center'>
                <Checking />
            </div>
            {/* </Container> */}
        </div>
    );
};

export default Hero;