/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Container from "../Container/Container";
import RoomDetailsSlider from "./RoomDetailsSlider";
import { Rating } from "@material-tailwind/react";
import RoomsItems from "./RoomsItems";
import { IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from "../button/Button";

const ButtonContents = ({ roomDetails }) => {

    const { _id, title, roomNumber, pricePerNight, isAvailable, review, description, facilities, images, bathroom, beds, guests } = roomDetails || {};

    return (
        <Container>
            <div className="mt-20">
                {/* title here */}
                <div className="py-5 space-y-4 text-center lg:text-start">
                    <h1 className="text-4xl font-kanit font-normal text-navyGray">{title}</h1>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                        <p className="text-navyGray text-xl font-poppins font-medium">Hotel Room</p> <Rating value={parseInt(review.averageRating)} readonly ratedColor="gray" />
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
                            <Button>Book Now</Button>
                        </div>
                    </div>
                    <div className="lg:col-span-1 lg:px-0 px-6 relative">
                        <h1 className="text-4xl font-normal font-poppins text-navyGray">Our Facilities</h1>
                        <div className="w-1/3 mt-3 h-0.5 bg-navyGray"></div>
                        <div className="mt-6 space-y-4">
                            {
                                facilities?.map((facility, index) => (
                                    <span key={index}
                                        className="flex items-center gap-2 lg:text-start text-center lg:text-xl text-navyGray font-poppins"
                                    >
                                        <IoMdCheckmarkCircleOutline />
                                        <p>{facility.name}</p>
                                    </span>
                                ))
                            }
                        </div>
                        <div className="w-full lg:mt-12 my-10 lg:flex hidden">
                            {/* button component here */}
                            <Button>Book Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ButtonContents;