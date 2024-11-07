/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./slider.css";
// import required modules
import { EffectFade,  Pagination} from 'swiper/modules';


const CardSlider = ({ images }) => {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    // autoplay={{
                    //     delay: 4500,
                    //     disableOnInteraction: false,
                    // }}
                    modules={[EffectFade,  Pagination ]}
                    className="mySwiper"
                >
                    {
                        images?.map((image, index) => <SwiperSlide key={index}>
                            <div className='relative'>
                                <img src={image} className='object-cover bg-cover bg-center bg-blend-overlay bg-no-repeat w-full h-[300px]' />
                                <div className='absolute w-full h-full bg-black top-0 bg-opacity-20'>
                                    <div className='w-full flex items-center justify-between px-4 py-3'>
                                        <button className='cursor-default bg-silver px-2 py-1 bg-opacity-60 rounded font-poppins font-medium text-redBg'>{image.name}</button>
                                        <button className='cursor-pointer hover:scale-150 duration-300 text-2xl text-white'>🤍</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default CardSlider;