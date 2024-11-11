/* eslint-disable react/prop-types */

const TitleSection = ({title, subTitle}) => {
    return (
        <div className="text-center py-7 space-y-3 lg:px-0 px-5 ">
            <h1 className="font-kanit lg:w-2/4 mx-auto text-4xl font-medium text-navyGray">{title}</h1>
            <p className="font-poppins text-navyGray text-xl lg:w-4/6 mx-auto italic">{subTitle}</p>
        </div>
    );
};

export default TitleSection;