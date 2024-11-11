/* eslint-disable react/no-unescaped-entities */
import Container from "../../Components/Container/Container";
import { NavLink } from "react-router-dom";


import "./about.css";
import AboutSlider from "./AboutSlider";

const ShortAbout = () => {
    return (
        <div>
            <Container>
                <div className="lg:flex relative lg:gap-10 dark:text-silver items-center lg:mt-52 md:mt-52 mt-[460px]">
                    {/* about slider here */}
                    <div className="flex-1 relative">
                        <AboutSlider />
                    </div>

                    {/* content here */}
                    <div className="flex-1 space-y-5 lg:mt-0 mt-10 lg:text-start text-justify lg:px-0 px-5 relative">
                        <div className="lg:text-start text-center">
                            <h1 className="lg:text-5xl text-4xl flex items-center gap-2 font-semibold font-kanit text-redBg text-">
                                <span className="text-navyGray dark:text-silver">
                                    About
                                </span>
                                LuxeLodge
                            </h1>
                        </div>
                        <p className="text-xl font-poppins text-navyGray dark:text-silver font-normal">
                            <span className="text-redBg font-medium">LuxeLodge</span> is a premium hotel situated in the heart of the city, offering a seamless blend of luxury, comfort, and modern elegance. With our prime location, we provide our guests with easy access to nearby landmarks, cultural attractions, and business hubs, making LuxeLodge the perfect destination for both leisure and business travelers.
                        </p>
                        <div className="space-y-4">
                            <h1 className="text-navyGray font-semibold text-3xl dark:text-silver">Our Mission</h1>
                            <p className="text-xl font-poppins text-navyGray dark:text-silver font-normal">
                                At LuxeLodge, our mission is to offer a world-class hospitality experience that combines superior service, modern amenities, and a welcoming environment. We strive to exceed our guests' expectations by creating a memorable and comfortable stay, every time.
                            </p>
                        </div>
                        <div>
                            <NavLink to={'/about'}>
                                <button
                                    className="relative lg:text-start overflow-hidden mb-6 font-medium border-2 border-redBg py-3 px-10 bg-silver hover:text-silver duration-300 top-6 text-navyGray  group">
                                    <span className="relative z-10 uppercase">See More About</span>
                                    <div className="absolute inset-0 bg-redBg transition-all duration-500 ease-out group-hover:translate-x-0 origin-center left-[50%] right-[50%] group-hover:left-0 group-hover:right-0 "></div>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ShortAbout;