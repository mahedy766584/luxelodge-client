import Container from "../Container/Container";
import { Link } from "react-router-dom";

import aroundImg1 from "../../assets/galleryImages/around2.jpg";
import aroundImg2 from "../../assets/galleryImages/around3.jpg";
import roomView1 from "../../assets/galleryImages/roomView1.jpg";
import roomView2 from "../../assets/galleryImages/roomView2.jpg";
import roomView5 from "../../assets/galleryImages/roomView5.jpg";
import playArea from "../../assets/galleryImages/playArea1.jpg";
import breakImg from "../../assets/galleryImages/breakImage.jpg";
import TitleSection from "../titleSection/TitleSection";


const ShortGallery = () => {
    return (
        <Container>
            <div>
                <TitleSection title={'Gallery of LuxeLodge Moments'} subTitle={'Discover the elegance of LuxeLodge through our curated gallery. Each image highlights the beauty, luxury, and comfort that make every stay unforgettable. Explore the stunning rooms, serene landscapes, and exclusive experiences awaiting you at LuxeLodge.'} />
                <div className="lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 relative space-y-3">
                    <img src={aroundImg1} className="lg:col-span-3 lg:row-span-2 w-full lg:h-[500px] bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={aroundImg2} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={playArea} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={roomView1} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={roomView2} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={breakImg} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <Link to={'/gallery'}>
                        <div className="relative rounded cursor-pointer mt-3">
                            <img src={roomView5} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                            <div className="w-full h-full bg-black absolute top-0 hover:bg-opacity-70 duration-700 rounded bg-opacity-50 flex justify-center items-center">
                                <h1 className="text-silver lg:text-xl lg:px-0 px-1 font-poppins font-medium">+See More Photo</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ShortGallery;