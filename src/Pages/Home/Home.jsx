// import Button from "../../Components/button/Button";
import Reviews from "../../Components/review/Reviews";
import ShortRooms from "../../Components/shortRooms/ShortRooms";
import ShortGallery from "../../Components/shortGallery/ShortGallery";
import { Helmet } from "react-helmet-async";
import HeroContent from "../../Components/Heros/HeroHome/HeroContent";
import About from "../../Components/aboutHome/About";

const Home = () => {
    return (
        <>
            <Helmet>
                <title> RestNest | Home</title>
            </Helmet>
            <div className="space-y-32">
                <HeroContent />
                <div className="">
                    <About />
                </div>
                <ShortRooms />
                <Reviews />
                <ShortGallery />
            </div>
        </>
    );
};

export default Home;