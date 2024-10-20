/* eslint-disable react/prop-types */
import { CiDollar } from "react-icons/ci";
import { FaBath, FaUsers } from "react-icons/fa";
import { LiaBedSolid } from "react-icons/lia";


const RoomsItems = ({guests, beds, pricePerNight, bathroom}) => {
    return (
        <div className="grid lg:grid-cols-4 grid-cols-2 lg:py-4 lg:mb-0 mb-10">
            <div className="flex flex-col space-y-1 items-center font-poppins font-normal p-5 justify-center text-navyGray">
                <FaUsers size={40} />
                <h1 className="uppercase tracking-widest">{guests} Guests</h1>
            </div>
            <div className="flex flex-col space-y-2 items-center font-poppins font-normal p-5 justify-center text-navyGray">
                <LiaBedSolid size={40} />
                <h1 className="uppercase tracking-widest">{beds} {beds === "1" ? 'Bed' : "Beds"}</h1>
            </div>
            <div className="flex flex-col space-y-2 items-center font-poppins font-normal p-5 justify-center text-navyGray">
                <CiDollar size={40} />
                <h1 className="uppercase tracking-widest">${pricePerNight}/Per Night</h1>
            </div>
            <div className="flex flex-col space-y-2 items-center font-poppins font-normal p-5 justify-center text-navyGray">
                <FaBath size={40} />
                <h1 className="uppercase tracking-widest">{bathroom} Bathroom</h1>
            </div>
        </div>
    );
};

export default RoomsItems;