import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import RoomsCard from "../../Components/roomCard/RoomsCard";
import Container from "../../Components/Container/Container";
import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import AroundTheHotel from "../../Components/aroundTheHotel/AroundTheHotel";
import { Helmet } from "react-helmet-async";
import MainLoading from "../../Components/mainLoading/MainLoading";
import translateText from "../../api/translateApi";
import useTranslate from "../../Hooks/useTranslate";

const Rooms = () => {

    const axiosPublic = useAxiosPublic();

    const { language } = useTranslate();

    const [currentPage, setCurrentPage] = useState(1);
    const limit = 4;



    const translateRoomData = async (rooms, language) => {
        return await Promise.all(
            rooms.map(async (room) => ({
                ...room,
                title: await translateText(room.title, language),
                description: await translateText(room.description, language),
                beds: `${room.beds} ${await translateText("Bed", language)}`,
                guests: `${room.guests} ${await translateText("Guest", language)}`,
                bathroom: `${room.bathroom} ${await translateText("Bathroom", language)}`,
            }))
        );
    };

    const getRoomsWithTranslation = async (currentPage, limit, language) => {
        const { data } = await axiosPublic.get(`rooms?page=${currentPage}&limit=${limit}`);
        const translatedRooms = await translateRoomData(data.rooms, language);
        return {
            ...data,
            rooms: translatedRooms,
        };
    };

    const { data = { items: [] }, isLoading } = useQuery({
        queryKey: ['rooms', currentPage, language], // ভাষা সংযোজন
        queryFn: () => getRoomsWithTranslation(currentPage, limit, language),
    });


    const rooms = data?.rooms;
    console.log(rooms)
    const totalPages = data?.totalPage;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (isLoading) {
        return <MainLoading />
    }

    return (
        <>
            <Helmet>
                <title>RestNest | Rooms</title>
            </Helmet>
            <div className="">
                {/* page off rooms here buy using use top content */}
                <Container>
                    <div className="mt-32">
                        {/* hotel room card */}
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                            {
                                rooms?.map((room) => <RoomsCard key={room._id} room={room} />)
                            }
                        </div>

                        {/* pagination system included */}
                        <div className="py-6 w-full flex justify-center items-center">
                            <div className="flex items-center gap-2 text-center font-kanit text-white">
                                {
                                    [...Array(totalPages).keys()].map((pageNumber) => (
                                        <IconButton
                                            key={pageNumber + 1}
                                            onClick={() => paginate(pageNumber + 1)}
                                            className={`${currentPage === pageNumber + 1 ? "bg-navyGray text-silver" : "bg-silver text-navyGray"}`}
                                        >
                                            {pageNumber + 1}
                                        </IconButton>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </Container>
                <div>
                    <AroundTheHotel />
                </div>
            </div>
        </>
    );
};

export default Rooms;