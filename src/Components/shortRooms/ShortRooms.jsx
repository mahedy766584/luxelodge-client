import RoomsCard from "../roomCard/RoomsCard";
import Container from "../Container/Container";
import TitleSection from "../titleSection/TitleSection";
import Button from "../../Components/button/Button";
import { Link } from "react-router-dom";
import MainLoading from "../mainLoading/MainLoading";
import useRooms from "../../Hooks/useRooms";
import Translate from "../translate/Translate";

const ShortRooms = () => {

    const [rooms, isLoading] = useRooms();



    if (isLoading) {
        return <MainLoading />
    }

    return (
        <Container>
            <div>
                {/* title section here */}
                <TitleSection
                    textColor={'text-navyGray'}
                    title={'Escape to Comfort: Explore Our Luxurious Rooms'}
                    subTitle={'"Indulge in ultimate comfort with our elegantly designed rooms, tailored to offer you a restful and memorable stay."'}
                />

                {/* hotel room card */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    {
                        rooms?.map((room) => <RoomsCard key={room._id} room={room} />).slice(0, 4)
                    }
                </div>
                <div className="flex justify-center items-center mt-5">
                    <Link to={'/rooms'}>
                        <Button
                            background={'bg-white'}
                            border={'border'}
                            borderColor={'border-redBg'}
                            bounce_animate={'animate-none'}>
                            <Translate text={'See All Room'}/>
                        </Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ShortRooms;