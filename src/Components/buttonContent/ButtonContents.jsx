/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Container from "../Container/Container";
import RoomDetailsSlider from "./RoomDetailsSlider";
import { Rating } from "@material-tailwind/react";
import RoomsItems from "./RoomsItems";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { DateRange } from "react-date-range";
import { useState } from "react";

import "./details.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import BookingModal from "./BookingModal";

const ButtonContents = ({ roomDetails }) => {

    const { _id, title, roomNumber, pricePerNight, isAvailable, review, description, facilities, images, bathroom, beds, guests } = roomDetails || {};

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })

    const handleDates = (range) => {
        // console.log(range);
        setDates(range.selection)
    }

    const formDate = (date) => {
        return date.toLocaleDateString('em-BD', {
            day: 'numeric',
            month: 'short',
            weekday: 'long',
            year: '2-digit',
        })
    }

    return (
        <Container>
            <div className="mt-20">
                {/* title here */}
                <div className="py-5 space-y-4 text-center lg:text-start">
                    <h1 className="text-4xl font-kanit font-normal text-navyGray">{title}</h1>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                        <p className="text-navyGray text-xl font-poppins font-medium">Hotel Room</p> <Rating value={parseInt(review)} readonly ratedColor="gray" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 gap-10">
                    <div className="col-span-3">
                        {/* room details page slider component here */}
                        <RoomDetailsSlider images={images} isAvailable={isAvailable} />
                        {/* room items here */}
                        <RoomsItems guests={guests} pricePerNight={pricePerNight} bathroom={bathroom} beds={beds} />
                        <div className="space-y-3 mb-10">
                            <h1 className="text-4xl font-normal text-center lg:text-start font-poppins text-navyGray">Description</h1>
                            <p className="font-poppins font-normal text-xl lg:px-0 px-5 text-navyGray text-justify">{description}</p>
                        </div>
                        <div className="lg:hidden flex px-5">
                            {/* button component here */}
                        </div>
                    </div>
                    <div className="lg:col-span-1 lg:px-0 px-6 relative flex flex-col justify-start">
                        <div className="w">
                            <DateRange
                                rangeColors={['#A4181B']}
                                ranges={[dates]}
                                onChange={handleDates}
                                minDate={new Date()}
                                className="custom-date-range"
                            />
                            <div className="">
                                {/* booking now modal */}
                                <BookingModal
                                    roomDetails={roomDetails}
                                    startDates={formDate(dates.startDate)}
                                    endDates={formDate(dates.endDate)}
                                />
                            </div>
                        </div>
                        <div className="mt-16">
                            <h1 className="text-4xl font-normal font-poppins text-navyGray">Our Facilities</h1>
                            <div className="w-1/3 mt-3 h-0.5 bg-navyGray"></div>
                            <div className="mt-6 space-y-4">
                                {
                                    facilities?.map((facility, index) => (
                                        <span key={index}
                                            className="flex items-center gap-2 lg:text-start text-center lg:text-xl text-navyGray font-poppins"
                                        >
                                            <IoMdCheckmarkCircleOutline />
                                            <p>{facility}</p>
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    );
};

export default ButtonContents;