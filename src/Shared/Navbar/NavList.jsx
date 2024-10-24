import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


const NavList = () => {
    return (
        <>
            <ul className="mb-4 mt-2 relative flex  text-navyGray flex-col font-poppins text-xl font-normal gap-2 lg:mb-0 lg:mt-0 lg:flex-row  lg:items-center lg:gap-6">
                <Typography
                    as="li"
                    color="blue-gray"
                    className="group relative font-poppins text-xl font-normal"
                >
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-[3px] border-redBg text-redBg lg:px-[4px]" : ""
                        }
                    >
                        Home
                        <span className="absolute left-0 bottom-0 w-full rounded-full h-[2px] bg-redBg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                </Typography>
                <Typography
                    as="li"
                    color="blue-gray"
                    className="group relative font-poppins text-xl font-normal"
                >
                    <NavLink
                        to="/rooms"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-[2px] border-redBg text-redBg px-[4px]" : ""
                        }
                    >
                        Rooms
                        <span className="absolute left-0 bottom-0 w-full rounded-full h-[2px] bg-redBg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                </Typography>
                <Typography
                    as="li"
                    color="blue-gray"
                    className="group relative font-poppins text-xl font-normal"
                >
                    <NavLink
                        to="/gallery"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-[2px] border-redBg text-redBg px-[4px]" : ""
                        }
                    >
                        Gallery
                        <span className="absolute left-0 bottom-0 w-full rounded-full h-[2px] bg-redBg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                </Typography>
                <Typography
                    as="li"
                    color="blue-gray"
                    className="group relative font-poppins text-xl font-normal"
                >
                    <NavLink
                        to="/contact"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-[2px] border-redBg text-redBg px-[4px]" : ""
                        }
                    >
                        Contact
                        <span className="absolute left-0 bottom-0 w-full rounded-full h-[2px] bg-redBg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                </Typography>
                <Typography
                    as="li"
                    color="blue-gray"
                    className="group relative font-poppins text-xl font-normal"
                >
                    <NavLink
                        to="/about"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "border-b-[2px] border-redBg text-redBg px-[4px]" : ""
                        }
                    >
                        About
                        <span className="absolute left-0 bottom-0 w-full rounded-full h-[2px] bg-redBg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </NavLink>
                </Typography>
            </ul>
        </>
    );
};

export default NavList;