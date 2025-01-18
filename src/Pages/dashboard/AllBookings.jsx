import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import BookingsTable from "../../Components/dashboardContents/bookings/BookingsTable";

const AllBookings = () => {

    const axiosSecure = useAxiosSecure();

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookings');
            return res.data;
        }
    })

    // console.log(bookings);

    return (
        <div>
            <BookingsTable bookings={bookings}/>
        </div>
    );
};

export default AllBookings;