import offersVideo1 from "../../assets/heroVideo/video3.mp4";
import Container from "../Container/Container"
import OffersContent from "./OffersContent";

const ShortOffer = () => {
    return (
        <>
            <div className="relative w-full h-[1300px] lg:h-screen">
                <video className="w-full h-full object-cover" src={offersVideo1} autoPlay muted loop></video>
                <div className="absolute w-full h-full top-0 bg-black bg-opacity-80 flex justify-center items-center">
                    <Container>
                        {/* offers content component here */}
                        <OffersContent />
                    </Container>
                </div>
            </div>
        </>
    );
};

export default ShortOffer;