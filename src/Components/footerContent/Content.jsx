/* eslint-disable react/no-unescaped-entities */

import Logo from "../../Components/Logo/Logo";
import Container from "../Container/Container";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


const Content = () => {
    return (
        <>
            <Container>
                <div className="font-poppins lg:flex lg:justify-between justify-center text-center lg:text-start  items-start relative">
                    <div className="flex  flex-col lg:justify-start lg:items-start items-center">
                        <Logo />
                        <div className="h-48">
                            <p className="font-normal text-lg text-navyWhite w-[400px]">"Discover LuxeLodge – your gateway to exceptional hotel experiences. Stay with us and enjoy premium service, comfort, and unforgettable stays."</p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 lg:mt-5">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-medium text-navyGray">Contact With Us</h1>
                            <p className="text-sm text-navyGray text-opacity-65 tracking-wider">SOCIAL MEDIA CHANNELS</p>
                        </div>
                        <div className="h-48 w-full  space-x-10 text-navyGray">
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaFacebook size={30} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaTwitter size={30} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaInstagram size={30} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaYoutube size={30} /></button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 lg:mt-5">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-medium text-navyGray">Phone Support</h1>
                            <p className="text-sm text-navyGray text-opacity-65 tracking-widest">24 HOURS A DAY</p>
                        </div>
                        <div className="h-48">
                            <p className="font-normal text-xl text-navyWhite">
                                +009999788783 <br />
                                +009999788783
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Content;