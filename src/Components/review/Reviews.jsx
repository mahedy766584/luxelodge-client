import ReviewContent from "./ReviewContent";
import TitleSection from "../titleSection/TitleSection";

const Reviews = () => {
    return (
        <div>
            {/* review title and description component here */}
            <TitleSection
                textColor={'text-navyGray'}
                title={'What Our Guests Are Saying'}
                subTitle={'At Rest Nest, guest satisfaction is our top priority. Read through the reviews to see how guests rate their experiences, from comfortable rooms to exceptional hospitality.'}
            />
            {/* this is component */}
            <ReviewContent />
        </div>
    );
};

export default Reviews;