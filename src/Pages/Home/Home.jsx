// import Button from "../../Components/button/Button";
import Hero from "../../Components/Heros/HeroHome/Hero";
import ShortAbout from "../../Components/shortAbout/ShortAbout";
import ShortOffer from "../../Components/shortOffers/ShortOffer";
import ShortRooms from "../../Components/shortRooms/ShortRooms";

const Home = () => {
    return (
        <>
            <div className="space-y-36">
                <Hero />
                <ShortAbout />
                <ShortOffer />
                <ShortRooms/>
            </div>
        </>
    );
};

export default Home;