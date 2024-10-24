/* eslint-disable react/prop-types */
import { FaCircle } from 'react-icons/fa6';

const SecondPart = ({image2, title, aboutData}) => {
    return (
        <div className="lg:flex lg:flex-row flex flex-col-reverse items-start justify-between gap-10 space-y-8 lg:space-y-0">
            <div>
                <img src={image2} className="lg:w-[600px] h-[800px] bg-cover bg-center bg-blend-overlay bg-no-repeat rounded-md" />
            </div>
            <div className="flex-1 space-y-6  lg:px-0 px-4 lg:text-start text-center">
                <div className="flex flex-col relative">
                    <h1 className="font-kanit text-4xl font-medium text-navyGray">{title}</h1>
                    <div className="w-[200px] mx-auto lg:mx-0 h-0.5 bg-navyGray mt-2"></div>
                </div>
                {
                    aboutData?.WhyChooseLuxeLodge?.items.map((item, index) => (
                        <div key={index} className="font-poppins font-medium text-navyGray">
                            <span className="flex items-center gap-2"><FaCircle size={8} /> <span className="text-xl">
                                {item?.title}:
                            </span> </span>
                            <p className="ml-4 text-navyWhite text-start text-lg font-normal">{item?.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SecondPart;