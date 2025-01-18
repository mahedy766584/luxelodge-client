import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";

import Container from "../Container/Container";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./review.css";
import NextArrow from "../customArrowForSliding/NextArrow";
import PrevArrow from "../customArrowForSliding/PrevArrow";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useTranslate from "../../Hooks/useTranslate";
import useTranslatedReview from "../../Hooks/useTranslatedReviews";
import MainLoading from "../mainLoading/MainLoading";

const ReviewContent = () => {

    const axiosPublic = useAxiosPublic();
    const { language } = useTranslate();

    const { data: review = [] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            return res.data;
        }
    })

    const { data: translatedReview, isLoading } = useTranslatedReview(review, language);

    if (isLoading) {
        return <MainLoading />
    }

    const settings = {
        initialSlide: 0,
        // infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

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
                    // arrows: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // arrows: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // arrows: false,
                    arrows: true,
                }
            }
        ]
    };

    return (
        <Container>
            <div className="slider-container relative mt-8">
                <Slider {...settings}>
                    {
                        translatedReview?.map((review) => (
                            <div
                                key={review._id}
                                className="card relative w-full lg:h-[230px] h-96 font-poppins bg-white m-5 rounded-2xl overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            >
                                <div className="flex flex-col justify-center space-y-2.5 p-4 items-center lg:w-full">
                                    <div className="rounded-full border-[3px] w-20 h-20">
                                        <img src={review?.image} alt={review?.name} className="rounded-full w-20 h-20" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg font-semibold">{review?.name}</p>
                                        <p className="text-lg font-normal">{review?.description}</p>
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