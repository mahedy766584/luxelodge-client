import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
import { useState } from "react";
import Logo from "../../Components/Logo/Logo";
import NavList from "./NavList";


const NavbarSecondSlide = () => {

    const [openNav, setOpenNav] = useState(false);

    return (
        <div className={``}>
            <Navbar className={`lg:px-40 py-0 text-black rounded-none border-none bg-opacity-100  bg-silver  transition-all duration-700`}>
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="/"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <Logo />
                    </Typography>
                    <div className="mr-4 hidden lg:block">
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
    );
};

export default NavbarSecondSlide;