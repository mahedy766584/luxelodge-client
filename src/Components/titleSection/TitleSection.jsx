/* eslint-disable react/prop-types */
import Translate from "../translate/Translate";

const TitleSection = ({
    title,
    subTitle,
    textColor,
}) => {
    return (
        <div className="text-center py-7 space-y-3 lg:px-0 px-5 ">
            <h1 className={`font-kanit lg:w-2/4 mx-auto text-4xl font-medium ${textColor}`}>
                <Translate text={title} />
            </h1>
            <p className={`font-poppins ${textColor} text-xl lg:w-4/6 mx-auto italic`}>
                <Translate text={subTitle} />
            </p>
        </div>
    );
};

export default TitleSection;