import { useQuery } from "@tanstack/react-query"
import translateText from "../api/translateApi";

const useTranslatedRooms = (rooms, language) =>{
    return useQuery({
        queryKey: ['translatedRooms', rooms, language],
        queryFn: async () =>{
            if(!rooms || rooms.length === 0) return [];

            const translatedData = await Promise.all(
                rooms.map(async (room) => ({
                    ...room,
                    title: await translateText(room.title, language),
                    beds: `${room.beds} ${await translateText("Bed", language)}`,
                    guests: `${room.guests} ${await translateText("Guest", language)}`,
                    bathroom: `${room.bathroom} ${await translateText("Bathroom", language)}`,
                }))
            )
            return translatedData;

        }
    })
}

export default useTranslatedRooms;