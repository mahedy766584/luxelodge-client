import TitleSection from "../titleSection/TitleSection";
import ReviewContent from "./ReviewContent";

const Reviews = () => {
    return (
        <div>
            {/* review title and description component here */}
            <TitleSection title={'What Our Guests Are Saying'} subTitle={'At LuxeLodge, guest satisfaction is our top priority. Read through the reviews to see how guests rate their experiences, from comfortable rooms to exceptional hospitality.'} />
            {/* this is component */}
            <ReviewContent/>
        </div>
    );
};

export default Reviews;