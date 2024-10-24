// import Button from "../../Components/button/Button";
import Hero from "../../Components/Heros/HeroHome/Hero";
import Reviews from "../../Components/review/Reviews";
import ShortAbout from "../../Components/shortAbout/ShortAbout";
import ShortOffer from "../../Components/shortOffers/ShortOffer";
import ShortRooms from "../../Components/shortRooms/ShortRooms";
import ShortGallery from "../../Components/shortGallery/ShortGallery";

const Home = () => {
    return (
        <>
            <div className="space-y-32">
                <Hero />
                <ShortAbout />
                <ShortOffer />
                <ShortRooms />
                <Reviews/>
                <ShortGallery/>
            </div>
        </>
    );
};

export default Home;