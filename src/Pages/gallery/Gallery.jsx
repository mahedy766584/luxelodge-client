import TitleSection from "../../Components/titleSection/TitleSection";
// import around images
import aroundImg1 from "../../assets/galleryImages/around1.jpg";
import aroundImg2 from "../../assets/galleryImages/around2.jpg";
import aroundImg3 from "../../assets/galleryImages/around3.jpg";
import aroundImg4 from "../../assets/galleryImages/around4.jpg";
import aroundImg5 from "../../assets/galleryImages/around5.jpg";
// room view
import roomImg1 from "../../assets/galleryImages/roomView1.jpg";
import roomImg2 from "../../assets/galleryImages/roomView2.jpg";
import roomImg3 from "../../assets/galleryImages/roomView3.jpg";
import roomImg4 from "../../assets/galleryImages/roomView4.jpg";
import roomImg5 from "../../assets/galleryImages/roomView5.jpg";
// play area
import playImg1 from "../../assets/galleryImages/playArea1.jpg";
import playImg2 from "../../assets/galleryImages/playArea2.jpg";
// bed area
import bedImg1 from "../../assets/galleryImages/bedArea.jpg";
// break image;
import breakImg from "../../assets/galleryImages/breakImage.jpg";
import Container from "../../Components/Container/Container";
import { Helmet } from "react-helmet-async";


const Gallery = () => {
    return (
        <>
        <Helmet>
            <title>LuxeLodge | Gallery</title>
        </Helmet>
            <div className="mt-32">
                <Container>
                    <TitleSection title={'Gallery of LuxeLodge Moments'} subTitle={'Discover the elegance of LuxeLodge through our curated gallery. Each image highlights the beauty, luxury, and comfort that make every stay unforgettable. Explore the stunning rooms, serene landscapes, and exclusive experiences awaiting you at LuxeLodge.'} />
                    <div className="grid lg:grid-cols-3 gap-4">
                        {/* around images */}
                        <img src={aroundImg1}
                            className="bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full row-span-2 lg:col-span-1 col-span-4 rounded"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={aroundImg2}
                            className="bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full col-span-2 row-span-2 rounded"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={aroundImg3}
                            className="bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full rounded"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={aroundImg4}
                            className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={aroundImg5}
                            className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        {/* room view */}
                        <img src={roomImg1} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={roomImg2} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full col-span-2 row-span-2"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={roomImg3} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={roomImg4} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={roomImg5} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        {/* play area */}
                        <img src={playImg1} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        <img src={playImg2} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        {/* bed area */}
                        <img src={bedImg1} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                        {/* break image */}
                        <img src={breakImg} className="rounded bg-cover bg-no-repeat bg-blend-overlay bg-center h-full w-full"
                            loading="lazy"
                            width={'400'}
                            height={'400'}
                        />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Gallery;