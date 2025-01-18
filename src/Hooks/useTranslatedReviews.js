import { useQuery } from "@tanstack/react-query"
import translateText from "../api/translateApi";

const useTranslatedReview = (review, language) =>{
    return useQuery({
        queryKey: ['translatedReview', review, language],
        queryFn: async () =>{
            const translatedReviewData = await Promise.all(
                review.map(async (data) => ({
                    ...data,
                    name: await translateText(data.name, language),
                    description: await translateText(data.description, language)
                }))
            )
            return translatedReviewData;
        }
    })
}

export default useTranslatedReview;