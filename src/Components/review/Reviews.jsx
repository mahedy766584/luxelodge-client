import ReviewContent from "./ReviewContent";
import TitleSection from "../titleSection/TitleSection";

const Reviews = () => {
    return (
        <div>
            {/* review title and description component here */}
            <TitleSection
                textColor={'text-gray-600'}
                titleEnglish={'What Our Guests Are Saying'}
                titleBangla={'আমাদের অতিথিরা যা বলছেন'}
                titleArabic={'ماذا يقول ضيوفنا'}
                subTitleEnglish={'At LuxeLodge, guest satisfaction is our top priority. Read through the reviews to see how guests rate their experiences, from comfortable rooms to exceptional hospitality.'}
                subTitleBangla={'RestNest-এ অতিথিদের সন্তুষ্টিই আমাদের প্রধান অগ্রাধিকার। রিভিউগুলো পড়ুন এবং দেখুন কীভাবে অতিথিরা তাদের অভিজ্ঞতা মূল্যায়ন করেছেন, আরামদায়ক কক্ষ থেকে শুরু করে চমৎকার আতিথেয়তা পর্যন্ত।'}
                subTitleArabic={'في RestNest، رضا الضيوف هو أولويتنا القصوى. اقرأ التقييمات لترى كيف يقيّم الضيوف تجربتهم، بدءًا من الغرف المريحة وصولاً إلى الضيافة الاستثنائية.'}
            />
            {/* this is component */}
            <ReviewContent />
        </div>
    );
};

export default Reviews;