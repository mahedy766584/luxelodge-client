/* eslint-disable react/prop-types */
import { List } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { MdBedroomParent } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";


const SidebarItem = ({ sidebarOpen }) => {

    const { logOut } = useAuth();

    return (
        <>
            {
                sidebarOpen &&
                <div className="overflow-auto h-screen duration-700">
                    <List className=" text-navyGray">
                        <NavLink
                            to="/dashboard/bookings"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                            }
                        >
                            <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><FaCartFlatbed /> Booking</span>
                        </NavLink>
                    </List>
                    <List className=" text-navyGray">
                        <NavLink
                            to="/dashboard/addRoom"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                            }
                        >
                            <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><MdBedroomParent />Add Room</span>
                        </NavLink>
                    </List>
                    <List className=" text-navyGray">
                        <NavLink
                            to="/dashboard/allUser"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                            }
                        >
                            <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><FaUsers />All Users</span>
                        </NavLink>
                    </List>
                    <List className=" text-navyGray">
                        <NavLink
                            to="/dashboard/allBookings"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                            }
                        >
                            <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><FaCartFlatbed />Bookings</span>
                        </NavLink>
                    </List>
                    <List className=" text-navyGray">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                            }
                        >
                            <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><FaHome />Home</span>
                        </NavLink>
                    </List>
                    <List className=" text-navyGray" onClick={logOut}>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                            }
                        >
                            <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><HiLogout />Sign Out</span>
                        </NavLink>
                    </List>
                </div>
            }
        </>
    );
};

export default SidebarItem;