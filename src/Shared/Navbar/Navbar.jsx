import React, { useEffect, useState } from "react";
import { Navbar, Collapse, Typography,  IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
import NavbarSecondSlide from "./NavbarSecondSlide";
import Logo from "../../Components/Logo/Logo";

import './navbar.css'
import NavList from "./NavList";
// import TopNavbar from "./TopNavbar";

const NavbarMain = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div className={` bg-silver z-50 fixed top-0 w-full left-0   rounded-none border-none   shadow-none ${isScrolled ? 'hidden' : 'visible'}`}>
                    {/* <TopNavbar/> */}
                <Navbar className={`rounded-none border-none bg-silver py-0 lg:px-32`}>
                    <div className="flex items-center justify-between  text-blue-gray-9008">
                        <Typography
                            as="a"
                            href="/"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            <Logo />
                        </Typography>
                        <div className="mr-4 hidden lg:block">
                            {/* nav list here */}
                            <NavList />
                        </div>
                        <div className="hidden flex-wrap items-center gap-2 lg:flex">
                            <div>
                                <button className="btn btn4">Booking</button>
                            </div>
                        </div>
                        <IconButton
                            variant="text"
                            className="lg:hidden"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                            )}
                        </IconButton>
                    </div>
                    <Collapse open={openNav}>
                        <NavList />
                        <div className="flex w-full flex-nowrap items-center gap-x-4 lg:hidden">
                            <div>
                                <button className="btn btn4">Booking</button>
                            </div>
                        </div>
                    </Collapse>
                </Navbar>
            </div>

            <div
                className={`fixed top-0 lg:px-0 lg:py-0 rounded-none border-none  left-0 w-full text-white z-50 transition-transform duration-500 ease-in-out ${isScrolled ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {/* when scroll website this navbar slide from top site */}
                <NavbarSecondSlide />
            </div>
        </>

    );
}

export default NavbarMain;