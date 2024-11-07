/* eslint-disable react/prop-types */
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import "./details.css";
// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

const RoomDetailsSlider = ({ images }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='relative'>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="h-[440px] lg:w-full w-[350px] sm:w-[400px] md:w-full xl:w-full  relative z-10 rounded"
            >
                {/* slider images here */}
                {
                    images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative'>
                                <img src={image} className='w-full rounded lg:h-full h-[340px] bg-cover bg-center bg-blend-overlay bg-no-repeat' />
                                <div className='w-full h-full absolute top-0 bg-black bg-opacity-30 flex items-center justify-center bg-cover bg-center bg-blend-overlay bg-no-repeat'>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* Button or Image Slider on top */}
            <div
            className="absolute lg:bottom-4 bottom-8 hidden lg:flex lg:w-full w-[340px] mx-auto z-20"
            >
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper relative hidden  lg:w-96 w-full h-auto z-20 mx-auto lg:flex justify-center items-center"
                >
                    {/* slider image here */}
                    {
                        images?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} className='w-[200px] mx-auto hidden   h-[60px] bg-cover bg-center bg-blend-overlay bg-no-repeat lg:flex justify-center items-center' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default RoomDetailsSlider;