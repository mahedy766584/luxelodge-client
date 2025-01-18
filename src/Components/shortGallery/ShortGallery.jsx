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
import Translate from "../translate/Translate";


const ShortGallery = () => {
    return (
        <Container>
            <div>
                <TitleSection
                    textColor={'text-navyGray'}
                    titleEnglish={'Gallery of RestNest Moments'}
                    titleBangla={'রেস্টনেস্ট মুহূর্তের গ্যালারি'}
                    titleArabic={'معرض لحظات ريست نيست'}
                    subTitleEnglish={'Discover the elegance of RestNest through our curated gallery. Each image highlights the beauty, luxury, and comfort that make every stay unforgettable. Explore the stunning rooms, serene landscapes, and exclusive experiences awaiting you at RestNest.'}
                    subTitleBangla={'আমাদের কিউরেটেড গ্যালারির মাধ্যমে RestNest-এর সৌন্দর্য আবিষ্কার করুন। প্রতিটি ছবি আমাদের হোটেলের মনোমুগ্ধকর রুম, নীরব প্রকৃতি, এবং এক্সক্লুসিভ অভিজ্ঞতা তুলে ধরে যা আপনার প্রতিটি অবস্থানকে স্মরণীয় করে তোলে। RestNest-এ অপেক্ষা করা বিস্ময়কর মুহূর্তগুলো ঘুরে দেখুন।'}
                    subTitleArabic={'اكتشف أناقة RestNest من خلال معرضنا المُنسق بعناية. تُبرز كل صورة جمال ورفاهية وراحة تجعل كل إقامة لا تُنسى. استكشف الغرف الرائعة، والمناظر الطبيعية الهادئة، والتجارب الحصرية التي تنتظرك في RestNest.'}
                />

                <div className="lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 relative lg:space-y-0 space-y-2">

                    <img src={aroundImg1} className="lg:col-span-3 lg:row-span-2 w-full lg:h-[500px] bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={aroundImg2} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={playArea} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={roomView1} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={roomView2} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <img src={breakImg} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                    <Link to={'/gallery'}>
                        <div className="relative rounded cursor-pointer">
                            <img src={roomView5} className="w-full h-full bg-cover bg-center bg-blend-overlay bg-no-repeat rounded" />
                            <div className="w-full h-full bg-black absolute top-0 hover:bg-opacity-70 duration-700 rounded bg-opacity-50 flex justify-center items-center">
                                <h1 className="text-silver lg:text-xl lg:px-0 px-1 font-poppins font-medium">
                                    <Translate en={'+See More Photo'} bn={'+আরো ছবি দেখুন'} ar={'+عرض المزيد من الصور'}/>
                                </h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ShortGallery;