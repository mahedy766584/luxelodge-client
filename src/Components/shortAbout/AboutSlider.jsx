// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative, Autoplay } from 'swiper/modules';

import "./about.css";

import image1 from "../../assets/aboutImage/image1.jpg";
import image2 from "../../assets/aboutImage/image2.jpg";
import image3 from "../../assets/aboutImage/image3.jpg";
import image4 from "../../assets/aboutImage/image4.jpg";
import image5 from "../../assets/aboutImage/image5.jpg";
import image6 from "../../assets/aboutImage/image6.jpg";
import image7 from "../../assets/aboutImage/image7.jpg";
import image8 from "../../assets/aboutImage/image8.jpg";

const AboutSlider = () => {
    return (
        <>
            <Swiper style={{ width: '520px', height: '560px', borderRadius: '10px' }}
                grabCursor={true}
                effect={'creative'}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                    },
                }}
                modules={[EffectCreative, Autoplay]}
                className="mySwiper2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-64 md:h-72 lg:h-80 xl:h-96"
            >
                <SwiperSlide>
                    <div className='w-full h-full relative'>
                        <img className='w-full rounded-md h-full object-cover' src={image1} />
                        <div className='bg-black w-full h-full absolute top-0 bg-opacity-30'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative'>
                        <img className='w-full rounded-md h-full object-cover' src={image2} />
                        <div className='bg-silver w-full h-full absolute top-0 bg-opacity-30'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative'>
                        <img className='w-full rounded-md h-full object-cover' src={image3} />
                        <div className='bg-black w-full h-full absolute top-0 bg-opacity-30'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative'>
                        <img className='w-full rounded-md h-full object-cover' src={image4} />
                        <div className='bg-black w-full h-full absolute top-0 bg-opacity-30'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative'>
                        <img className='w-full rounded-md h-full object-cover' src={image5} />
                        <div className='bg-black w-full h-full absolute top-0 bg-opacity-30'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative'>
                        <img className='w-full rounded-md h-full object-cover' src={image6} />
                        <div className='bg-black w-full h-full absolute top-0 bg-opacity-30'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative'>
                        <img className='w-full rounded-md h-full object-cover' src={image7} />
                        <div className='bg-black w-full h-full absolute top-0 bg-opacity-30'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-full relative'>
                        <img className='w-full rounded-md h-full object-cover' src={image8} />
                        <div className='bg-black w-full h-full absolute top-0 bg-opacity-30'></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default AboutSlider;