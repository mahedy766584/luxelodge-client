import { useLoaderData } from "react-router-dom";
import bgTop from "../../assets/aroundImg/around5.jpg";
import ButtonContents from "../../Components/buttonContent/ButtonContents";
import AroundTheHotel from "../../Components/aroundTheHotel/AroundTheHotel";
import UseTopContent from "../../Hooks/UseTopContent";
// import ImageRotate from "../../Components/imageRotate/ImageRotate";


const CardDetails = () => {

    const roomDetails = useLoaderData();

    return (
        <div>
            {/* top part */}
            <UseTopContent bgTop={bgTop} title={'Luxurious Rooms & Suites: Your Perfect Stay Awaits'} subTitle={"Discover our range of exquisitely designed rooms and suites, each tailored to provide unparalleled comfort and style. Whether you're seeking a cozy room for a weekend getaway or a spacious suite for an extended stay, LuxeLodge offers the perfect blend of elegance and convenience. Enjoy stunning views, modern amenities, and personalized services that make every stay unforgettable. Explore our room options and find the perfect space to relax and rejuvenate."}/>

            {/* button content component here */}
            <ButtonContents roomDetails={roomDetails} />

            {/* around items here */}
            <AroundTheHotel />
        </div>
    );
};

export default CardDetails;