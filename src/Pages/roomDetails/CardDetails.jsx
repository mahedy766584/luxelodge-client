import { useLoaderData } from "react-router-dom";
import bgTop from "../../assets/aroundImg/around5.jpg";
import ButtonContents from "../../Components/buttonContent/ButtonContents";
import Container from "../../Components/Container/Container";
import AroundTheHotel from "../../Components/aroundTheHotel/AroundTheHotel";
import ImageRotate from "../../Components/imageRotate/ImageRotate";


const CardDetails = () => {

    const roomDetails = useLoaderData();

    return (
        <div>
            {/* top part */}
            <div className="relative">
                <div className="lg:mt-[75px] w-full h-[500px] relative">

                    {/* image 360 degree rotation here */}
                    <ImageRotate rotateImg={bgTop} />

                    <div className="absolute w-full h-full top-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="lg:text-5xl font-poppins  font-semibold text-silver animate-bounce duration-700">Welcome to (User Name)</h1>
                    </div>
                </div>
            </div>

            {/* button content component here */}
            <ButtonContents roomDetails={roomDetails} />

            {/* around items here */}
            <Container>
                <AroundTheHotel />
            </Container>
        </div>
    );
};

export default CardDetails;