/* eslint-disable react/prop-types */
import ImageRotate from "../Components/imageRotate/ImageRotate";

const UseTopContent = ({ bgTop, title, subTitle }) => {
    return (
        <div>
            {/* top part */}
            <div className="relative">
                <div className="lg:mt-[75px] w-full h-[500px] relative">

                    {/* image 360 degree rotation here */}
                    <ImageRotate rotateImg={bgTop} />

                    <div className="absolute w-full h-full top-0 bg-black bg-opacity-60 flex items-center justify-center">
                        <div className="text-center py-7 space-y-3 lg:px-0 px-5">
                            <h1 className="font-kanit lg:w-2/4 mx-auto text-4xl font-medium text-silver">{title}</h1>
                            <p className="font-poppins text-silver text-xl lg:w-4/6 mx-auto italic">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseTopContent;