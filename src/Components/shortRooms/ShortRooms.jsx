import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import RoomsCard from "../roomCard/RoomsCard";
import Container from "../Container/Container";
import TitleSection from "../titleSection/TitleSection";
import LoadingAnimate from "../loding/LoadingAnimate";
import Button from "../../Components/button/Button";
import { Link } from "react-router-dom";

const ShortRooms = () => {

    const axiosPublic = useAxiosPublic();

    const { data: rooms = [], isLoading } = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            const res = await axiosPublic.get('rooms')
            return res.data;
        }
    });


    if (isLoading) {
        return <LoadingAnimate />
    }

    return (
        <Container>
            <div>
                {/* title section here */}
                <TitleSection title={'Escape to Comfort: Explore Our Luxurious Rooms'} subTitle={'"Indulge in ultimate comfort with our elegantly designed rooms, tailored to offer you a restful and memorable stay."'} />

                {/* hotel room card */}
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    {
                        rooms?.rooms?.map((room) => <RoomsCard key={room._id} room={room} />).slice(0, 4)
                    }
                </div>
                <div className="flex justify-center items-center">
                    <Link to={'/rooms'}>
                        <Button>See All Room</Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ShortRooms;