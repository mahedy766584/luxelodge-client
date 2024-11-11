/* eslint-disable react/prop-types */
import ImageRotate from "../Components/imageRotate/ImageRotate";
import TitleSection from "../Components/titleSection/TitleSection";

const UseTopContent = ({ bgTop, title, subTitle }) => {
    return (
        <div>
            {/* top part */}
            <div className="relative">
                <div className="lg:mt-[70px] w-full h-[500px] relative">

                    {/* image 360 degree rotation here */}
                    <ImageRotate rotateImg={bgTop} />

                    <div className="absolute w-full h-full top-0 bg-black bg-opacity-60 flex items-center justify-center">
                        <div className="text-center py-7 space-y-3 lg:px-0 px-5">
                            <TitleSection title={title} subTitle={subTitle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseTopContent;