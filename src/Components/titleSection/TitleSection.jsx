/* eslint-disable react/prop-types */
import Translate from "../translate/Translate";

const TitleSection = ({
    title,
    subTitle,
    textColor,
    titleEnglish,
    titleBangla,
    titleArabic,
    subTitleArabic,
    subTitleBangla,
    subTitleEnglish
}) => {
    return (
        <div className="text-center py-7 space-y-3 lg:px-0 px-5 ">
            <h1 className={`font-kanit lg:w-2/4 mx-auto text-4xl font-medium ${textColor}`}>
                {title}
                <Translate en={titleEnglish} bn={titleBangla} ar={titleArabic} />
            </h1>
            <p className={`font-poppins ${textColor} text-xl lg:w-4/6 mx-auto italic`}>
                {subTitle}
                <Translate en={subTitleEnglish} bn={subTitleBangla} ar={subTitleArabic} />
            </p>
        </div>
    );
};

export default TitleSection;