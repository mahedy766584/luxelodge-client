/* eslint-disable no-unused-vars */
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
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import uesAuth from "../../../Hooks/useAuth";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';


const CardSlider = ({ images, roomId }) => {

    // console.log(roomId)

    const { user } = uesAuth();
    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient();

    const { data: likes = [] } = useQuery({
        queryKey: ['likes', roomId],
        queryFn: async () => {
            const res = await axiosPublic.get(`/room/like/${roomId}`);
            return res.data.likes;
        }
    });


    // console.log(likes);

    const likeRoom = async (roomId) => {
        const res = await axiosPublic.post('/room/like', { userEmail: user.email, roomId })
        return res.data;
    };

    const { mutate, data } = useMutation({
        mutationFn: likeRoom,
        onSuccess: (data) => {
            // console.log('Like Added successful', data)

            queryClient.invalidateQueries(['likes', roomId])
        }
    })

    // console.log(data)

    const handleLike = (roomId) => {
        if (!roomId) {
            console.error("Room ID is undefined");
            return;
        }
        mutate(roomId);
    }

    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        images?.map((image, index) => <SwiperSlide key={index}>
                            <div className='relative'>
                                <img src={image} className='object-cover bg-cover bg-center bg-blend-overlay bg-no-repeat w-full h-[300px] rounded-t' />
                                <div className='absolute w-full h-full bg-black top-0 bg-opacity-20'>
                                    <div className='w-full flex items-center justify-end px-4 py-3'>
                                        <div className='flex items-center gap-3'>
                                            <span className="ml-2 text-white text-lg">{likes}</span>
                                            <button
                                                onClick={() => handleLike(roomId)}
                                                className='cursor-pointer hover:scale-150 duration-300 text-2xl text-white'>🤍</button>
                                        </div>
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