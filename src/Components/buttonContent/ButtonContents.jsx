/* eslint-disable react/prop-types */
import Container from "../Container/Container";
import RoomDetailsSlider from "./RoomDetailsSlider";

const ButtonContents = ({ roomDetails }) => {

    const { _id, title, roomNumber, type, pricePerNight, isAvailable, maxGuests, checkInDate, checkOutDate, review, description, facilities, images, bathroom, beds, guests } = roomDetails || {};

    return (
        <Container>
            <div className="grid grid-cols-4 mt-20">
                {/* title here */}
                <div className="col-span-3 mb-20">
                    <div>
                        <h1 className="">{title}</h1>
                    </div>
                    {/* room details page slider component here */}
                    <RoomDetailsSlider images={images} />
                </div>
                <div className="col-span-1">
                    hell
                </div>
            </div>
        </Container>
    );
};

export default ButtonContents;