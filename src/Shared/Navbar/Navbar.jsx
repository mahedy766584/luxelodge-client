import { useEffect, useState } from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
import Logo from "../../Components/Logo/Logo";
import NavList from "./NavList";
import useAuth from "../../Hooks/useAuth";

import './navbar.css';
import { Link } from "react-router-dom";
import DarkMode from "../../Components/darkModeSystem/DarkMode";
import Profile from "../../Components/navbarContent/Profile";

const NavbarMain = () => {
    const [openNav, setOpenNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const { user, logOut } = useAuth();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > 600) {
                setIsScrolled(true);  // 6০০ পিক্সেলের বেশি স্ক্রোল করলে ন্যাভবার দেখাবে।
                setIsHidden(false); //যখন setIsHidden(false) হবে, তখন বোঝায় যে ন্যাভবারটি লুকানো নয়, বরং দৃশ্যমান থাকবে।
            } else if (window.scrollY > lastScrollY) {
                setIsHidden(true);  // স্ক্রোল করা শুরু করলে ন্যাভবার লুকিয়ে যাবে।
            } else {
                setIsHidden(false);  // স্ক্রোল করা বন্ধ করলে ন্যাভবার আবার দেখাবে।
            }
            lastScrollY = window.scrollY; //optional
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full z-50  transition-transform duration-1000 ease-in-out 
                    ${isHidden ? '-translate-y-full' : 'translate-y-0'} 
                    ${isScrolled ? 'bg-silver' : 'bg-transparent'} `}
            >
                <Navbar className={`rounded-none border-none bg-silver dark:bg-slate-900 bg-opacity-100 py-2 lg:px-40 font-poppins`}>
                    <div className="flex items-center justify-between  text-blue-gray-9008">
                        <Typography
                            as="a"
                            href="/"
                            className="mr-4 cursor-pointer py-1.5 font-medium"
                        >
                            <Logo />
                        </Typography>
                        <div className="mr-4 hidden lg:block">
                            {/* nav list component here */}
                            <NavList />
                        </div>
                        <div className="hidden flex-wrap items-center gap-2 lg:flex">
                            {/* this is component for dark mode system */}
                            <DarkMode />
                            {user ?
                            // this is profile drop down component
                                <Profile />
                                :
                                <div>
                                    <Link to={'/signIn'}>
                                        <button className="btn btn4">Sign In</button>
                                    </Link>
                                </div>
                            }
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
                        <div className="flex w-full flex-nowrap py-6 items-center justify-center gap-x-4 lg:hidden">
                            {user ?
                                <div onClick={logOut} className="cursor-pointer">
                                    <button className="btn btn4">Sign Out</button>
                                </div>
                                :
                                <div>
                                    <button className="btn btn4">Booking</button>
                                </div>
                            }
                        </div>
                    </Collapse>
                </Navbar>
            </div>
        </>

    );
}

export default NavbarMain;