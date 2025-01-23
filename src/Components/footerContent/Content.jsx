import Logo from "../../Components/Logo/Logo";
import Container from "../Container/Container";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Translate from "../translate/Translate";


const Content = () => {
    return (
        <>
            <Container>
                <div className="font-poppins pt-14 lg:flex lg:justify-between justify-center text-center lg:text-start  items-start relative">
                    <div className="flex  flex-col lg:justify-start lg:items-start items-center">
                        <Logo />
                        <div className="h-48">
                            <p className="font-normal text-lg text-navyWhite lg:w-[400px]">
                                <Translate text={'"Discover Rest Nest – your gateway to exceptional hotel experiences. Stay with us and enjoy premium service, comfort, and unforgettable stays."'}/>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 lg:mt-5">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-medium text-navyGray">
                                <Translate text={'Contact With Us'}/>
                            </h1>
                            <p className="text-sm text-navyGray text-opacity-65 tracking-wider">
                                <Translate text={'SOCIAL MEDIA CHANNELS'}/>
                            </p>
                        </div>
                        <div className="h-48 w-full  space-x-10 text-navyGray">
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaFacebook size={25} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaTwitter size={25} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaInstagram size={25} /></button>
                            <button className="hover:text-redBg duration-500 hover:scale-110"><FaYoutube size={25} /></button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6 lg:mt-5">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-medium text-navyGray">
                                <Translate text={'Phone Support'}/>
                            </h1>
                            <p className="text-sm text-navyGray text-opacity-65 tracking-widest">
                                <Translate text={'24 HOURS A DAY'}/>
                            </p>
                        </div>
                        <div className="h-48">
                            <p className="font-normal text-xl text-navyWhite">
                                <Translate text={'+009999788783 '}/><br />
                                <Translate text={'+009999788783 '}/>
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Content;