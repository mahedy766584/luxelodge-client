import { useLoaderData } from "react-router-dom";
import bgTop from "../../assets/roomDtailsImg/roomDetailBg1.jpg"
import ButtonContents from "../../Components/buttonContent/ButtonContents";

const CardDetails = () => {

    const roomDetails = useLoaderData();

    return (
        <div>
            {/* top part */}
            <div className="relative">
                <img src={bgTop} className="bg-cover bg-no-repeat bg-center bg-blend-overlay h-[600px] w-full" />
                <div className="absolute w-full h-full bg-black top-0 bg-opacity-40">

                </div>
            </div>

            {/* button content component here */}
            <ButtonContents  roomDetails={roomDetails}/>
        </div>
    );
};

export default CardDetails;