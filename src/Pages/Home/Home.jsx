// import Button from "../../Components/button/Button";
import Reviews from "../../Components/review/Reviews";
import ShortAbout from "../../Components/shortAbout/ShortAbout";
import ShortOffer from "../../Components/shortOffers/ShortOffer";
import ShortRooms from "../../Components/shortRooms/ShortRooms";
import ShortGallery from "../../Components/shortGallery/ShortGallery";
import { Helmet } from "react-helmet-async";
import HeroContent from "../../Components/Heros/HeroHome/HeroContent";

const Home = () => {
    return (
        <>
            <Helmet>
                <title> LuxeLodge | Home</title>
            </Helmet>
            <div className="space-y-32">
                <HeroContent />
                <ShortAbout />
                <ShortOffer />
                <ShortRooms />
                <Reviews />
                <ShortGallery />
            </div>
        </>
    );
};

export default Home;