import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import RoomsCard from "../roomCard/RoomsCard";
import Container from "../Container/Container";
import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import TitleSection from "../titleSection/TitleSection";

const ShortRooms = () => {

    const axiosPublic = useAxiosPublic();

    const getRooms = async (currentPage, limit) => {
        const { data } = await axiosPublic.get(`rooms?page=${currentPage}&limit=${limit}`)
        return data;
    };

    const [currentPage, setCurrentPage] = useState(1);
    const limit = 4;

    const { data = [] } = useQuery({
        queryKey: ['rooms', currentPage],
        queryFn: () => getRooms(currentPage, limit)
    });

    const rooms = data?.rooms;
    const totalPages = data?.totalPage;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container>
            <div>
                {/* title section here */}
                <TitleSection title={'Escape to Comfort: Explore Our Luxurious Rooms'} subTitle={'"Indulge in ultimate comfort with our elegantly designed rooms, tailored to offer you a restful and memorable stay."'}/>

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
    );
};

export default ShortRooms;