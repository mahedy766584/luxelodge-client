import RoomsCard from "../roomCard/RoomsCard";
import Container from "../Container/Container";
import TitleSection from "../titleSection/TitleSection";
import Button from "../../Components/button/Button";
import { Link } from "react-router-dom";
import MainLoading from "../mainLoading/MainLoading";
import Translate from "../../Components/translate/Translate";
import useRooms from "../../Hooks/useRooms";
import useTranslate from "../../Hooks/useTranslate";
import useTranslatedRooms from "../../Hooks/useTranslatedRooms";

const ShortRooms = () => {

    const [rooms, isLoading] = useRooms();
    const { language } = useTranslate();

    const { data: translatedRooms, isFetching } = useTranslatedRooms(rooms, language);


    if (isLoading || isFetching) {
        return <MainLoading />
    }

    // console.log(translatedRooms)

    return (
        <Container>
            <div>
                {/* title section here */}
                <TitleSection
                    textColor={'text-navyGray'}
                    titleEnglish={'Escape to Comfort: Explore Our Luxurious Rooms'}
                    titleBangla={'আমাদের বিলাসবহুল কক্ষসমূহ অন্বেষণ করুন'}
                    titleArabic={'اهرب إلى الراحة: استكشف غرفنا الفاخرة'}
                    subTitleEnglish={'"Indulge in ultimate comfort with our elegantly designed rooms, tailored to offer you a restful and memorable stay."'}
                    subTitleBangla={'আমাদের সুন্দরভাবে ডিজাইন করা কক্ষগুলোর মাধ্যমে চরম আরাম উপভোগ করুন, যা আপনাকে একটি শান্তিপূর্ণ এবং স্মরণীয় থাকার অভিজ্ঞতা প্রদান করতে তৈরি।"'}
                    subTitleArabic={'"استمتع بأقصى درجات الراحة مع غرفنا المصممة بأناقة، والتي تم تصميمها لتوفير إقامة مريحة ولا تُنسى."'}
                />

                {/* hotel room card */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    {
                        translatedRooms?.map((room) => <RoomsCard key={room._id} room={room} />).slice(0, 4)
                    }
                </div>
                <div className="flex justify-center items-center mt-5">
                    <Link to={'/rooms'}>
                        <Button
                            background={'bg-white'}
                            border={'border'}
                            borderColor={'border-redBg'}
                            bounce_animate={'animate-none'}>
                            <Translate en={'See All Room'} bn={'সমস্ত রুম দেখুন'} ar={'عرض جميع الغرف'} />
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ShortRooms;