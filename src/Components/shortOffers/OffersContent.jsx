/* eslint-disable react/no-unescaped-entities */

import towelImage from "../../assets/offersVido/pngwing.com (7).png"
import Button from "../button/Button";
import { Link } from "react-router-dom";

const OffersContent = () => {
    return (
        <div className="lg:flex items-center justify-between  gap-20 flex-row-reverse space-y-20 lg:mt-0  mt-28">
            {/* text content here */}
            <div className="relative">
                <div className="relative flex">
                    <div className="absolute bg-silver rounded-full w-80 h-80 flex justify-center items-center z-0 animate-bounce duration-700 -top-28 lg:top-0">
                        <h1 className="text-8xl font-extrabold text-redBg font-kanit">50%</h1>
                    </div>
                    <div className="z-10">
                        <img src={towelImage} className="lg:w-[600px] z-30" />
                    </div>
                </div>
            </div>
            {/* offers content here */}
            <div className="text-silver flex flex-col items-start lg:text-start text-justify lg:px-0 px-4 flex-1  space-y-4">
                <h1 className="font-kanit text-4xl font-medium">Exclusive Offers Just for You</h1>
                <p className="font-poppins text-xl font-normal">
                    "From romantic getaways to family fun packages, enjoy exclusive deals like 50% off weekend stays, free kids' breakfast, spa discounts, and more! Don't miss out on our limited-time offers—book now and make the most of your stay at LuxeLodge."
                </p>
                <p className="font-poppins text-xl font-normal">
                    This general title and description can give visitors a quick overview of the offers without going into specifics, enticing them to explore further. You can link this to your dedicated Offers page for more details on each promotion.
                </p>
                <div className="flex">
                    <Link to={'/rooms'}>
                        <Button>Discover Our Offers</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OffersContent;