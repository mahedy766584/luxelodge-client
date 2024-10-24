/* eslint-disable react/prop-types */

const ThirdPart = ({ title, description, image3 }) => {
    return (
        <div className="lg:flex items-center justify-between gap-10 space-y-8">
            <div className="flex-1 space-y-6 lg:px-0 px-4 lg:text-start text-center">
                <div className="flex flex-col relative">
                    <h1 className="font-kanit text-4xl font-medium text-navyGray">{title}</h1>
                    <div className="w-[200px] mx-auto lg:mx-0 h-0.5 bg-navyGray mt-2"></div>
                </div>
                <p className="text-xl font-poppins font-normal text-navyGray text-justify">{description}</p>
            </div>
            <div>
                <img src={image3} className="lg:w-[600px] bg-cover bg-center bg-blend-overlay bg-no-repeat rounded-md" />
            </div>
        </div>
    );
};

export default ThirdPart;