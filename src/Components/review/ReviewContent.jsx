import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Slider from "react-slick";

import Container from "../Container/Container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./review.css";

const ReviewContent = () => {

    const axiosPublic = useAxiosPublic();

    const { data: review = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data;
        }
    })

    const settings = {
        initialSlide: 0,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <Container>
            <div className="slider-container">
                <Slider {...settings}>
                    {
                        review?.map((review) => (
                            <div
                                key={review._id}
                                className="card relative w-full h-[360px] font-poppins bg-silver m-5 rounded-2xl overflow-hidden shadow-xl"
                            >
                                <div className="circle bg-navyGray flex justify-center relative">
                                    <div className="flex flex-col absolute top-0 items-center py-5">
                                        <div className="rounded-full border-[3px]">
                                            <img src={review?.image} alt={review?.name} className="rounded-full w-32 h-32" />
                                        </div>
                                        <h3 className="text-xl py-1 text-silver font-medium">{review.name}</h3>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="absolute text-navyGray top-56 text-center p-3 h-20">
                                        <p className="font-normal">{review?.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </Container>
    );
};

export default ReviewContent;