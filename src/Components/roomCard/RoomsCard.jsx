/* eslint-disable react/prop-types */
import { Card, CardHeader, Typography, CardBody } from "@material-tailwind/react";
import CardSlider from "./cardSlider/CardSlider";
import { FaRegStar } from "react-icons/fa";
import { LiaBedSolid } from "react-icons/lia";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaBath } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const RoomsCard = ({ room }) => {

    // console.log(Object.keys(room).join(","));

    const { _id, title,  pricePerNight,  review,  images, bathroom, beds, guests } = room || {};

    return (
        <Card className=" overflow-hidden shadow-[0px_2px_33px_8px_rgba(204,204,204,0.32)]">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <CardSlider images={images} />
            </CardHeader>
            <CardBody className="space-y-4 rounded-t-lg">
                <div className="flex items-center gap-4">
                    <Typography className="text-navyGray font-kanit lg:text-[26px] tracking-wider" variant="h4">
                        {title}
                    </Typography>
                    <button className="flex items-center cursor-default gap-1 bg-yellow-100 text-[#FF5733] px-4 py-1 rounded-full font-bold">
                        <FaRegStar className="font-bold" /> {review.averageRating}
                    </button>
                </div>
                <Typography className="text-navyGray lg:text-[24px] tracking-wider font-poppins" variant="h4">
                    ${pricePerNight} <span className="font-medium text-gray-500 text-base">/night</span>
                </Typography>
                <div className="flex relative flex-wrap items-center gap-6">
                    <button className="flex bg-gray-100 items-center cursor-default gap-1 px-2 py-1 rounded-md font-normal text-gray-500 text-[18px]">
                        <LiaBedSolid className="font-bold" /> {beds} {beds === "1" ? 'Bed' : "Beds"}
                    </button>
                    <button className="flex bg-gray-100 items-center cursor-default gap-1 px-2 py-1 rounded-md font-normal text-gray-500 text-[18px]">
                        <PiUsersThreeFill className="font-bold" /> {guests} Guests
                    </button>
                    <button className="flex bg-gray-100 items-center cursor-default gap-1 px-2 py-1 rounded-md font-normal text-gray-500 text-[18px]">
                        <FaBath className="font-bold" /> {bathroom} Bathroom
                    </button>
                </div>
                <Link to={`/cartDetails/${_id}`}>
                    <button
                        className="relative lg:text-start overflow-hidden mb-6 font-medium border-2 border-redBg py-2 px-4 bg-silver hover:text-silver duration-300 top-6 text-navyGray  group">
                        <span className="relative z-10 flex items-center justify-center  uppercase">Full Info  <IoIosArrowForward className="font-bold" /></span>
                        <div className="absolute inset-0 bg-redBg transition-all duration-500 ease-out group-hover:translate-x-0 origin-center left-[50%] right-[50%] group-hover:left-0 group-hover:right-0 "></div>
                    </button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default RoomsCard;