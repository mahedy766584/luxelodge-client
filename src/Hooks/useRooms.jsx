import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRooms = () => {

    const axiosPublic = useAxiosPublic();

    const { data: rooms=[], isLoading } = useQuery({
        queryKey: ['rooms'],
        queryFn: async () => {
            const response = await axiosPublic.get('rooms')
            return response.data;
        }
    })
    return [rooms.rooms, isLoading]
};

export default useRooms;