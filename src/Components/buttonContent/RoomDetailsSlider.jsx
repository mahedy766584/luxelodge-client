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
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                className="h-[480px] w-full relative z-10"
            >
                {/* slider images here */}
                {
                    images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative'>
                                <img src={image?.url} className='w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat' />
                                <div className='w-full h-full absolute top-0 bg-black bg-opacity-20'>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* Button or Image Slider on top */}
            <div className="absolute bottom-4 w-full mx-auto z-20">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper relative w-96 h-auto z-20"
                >
                    {/* slider image here */}
                    {
                        images?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image?.url} className='w-[200px] h-[60px] bg-cover bg-center bg-blend-overlay bg-no-repeat' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div >
    );
};

export default RoomDetailsSlider;