import { useLoaderData } from "react-router-dom";
import ButtonContents from "../../Components/buttonContent/ButtonContents";
import AroundTheHotel from "../../Components/aroundTheHotel/AroundTheHotel";
import { Helmet } from "react-helmet-async";
// import ImageRotate from "../../Components/imageRotate/ImageRotate";


const CardDetails = () => {

    const roomDetails = useLoaderData();
    console.log(roomDetails);

    return (
        <div>
            <Helmet>
                <title>LuxeLodge | Room Details</title>
            </Helmet>
            {/* top part */}

            {/* button content component here */}
            <ButtonContents roomDetails={roomDetails} />

            {/* around items here */}
            <AroundTheHotel />
        </div>
    );
};

export default CardDetails;