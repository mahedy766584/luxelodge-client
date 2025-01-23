/* eslint-disable react/prop-types */
import CardSlider from "./cardSlider/CardSlider";
import { FaRegStar } from "react-icons/fa";
import { LiaBedSolid } from "react-icons/lia";
import { PiUsersThreeFill } from "react-icons/pi";
import { FaBath } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./card.css";
import Translate from "../translate/Translate";


const RoomsCard = ({ room }) => {

    const { _id, title, review, images, bathroom, beds, guests } = room || {};

    return (
        <div className="card_main_box">
            <CardSlider images={images} roomId={_id} />
            <div className="card-body">
                <div className="lg:flex items-center justify-start">
                    <h2 className="card-title font-poppins text-navyGray"><Translate text={title} /></h2>
                    <button className="card_star">
                        <FaRegStar className="font-bold" /> <Translate text={""} number={review}/>
                    </button>
                </div>
                <div className="flex relative flex-wrap items-center gap-3">
                    <button className="card_icons">
                        <LiaBedSolid className="font-bold" /> <Translate text={'Beds'} number={beds} />
                        {/* {beds === "1" ? 'Bed' : "Beds"} */}
                    </button>
                    <button className="card_icons">
                        <PiUsersThreeFill className="font-bold" /><Translate text={'Guest'} number={guests} />
                    </button>
                    <button className="card_icons">
                        <FaBath className="font-bold" /> <Translate text={'Bathroom'} number={bathroom} />
                    </button>
                    <Link to={`/cartDetails/${_id}`}>
                        <button
                            className="relative overflow-hidden font-medium border  py-1 px-2 bg-gray-100 hover:text-silver duration-300 text-navyGray  group">
                            <span className="relative z-10 flex items-center justify-center  uppercase">
                                <Translate text={'Full Info'} />
                                <IoIosArrowForward className="font-bold" /></span>
                            <div className="absolute inset-0 bg-redBg transition-all duration-500 ease-out group-hover:translate-x-0 origin-center left-[50%] right-[50%] group-hover:left-0 group-hover:right-0 "></div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomsCard;