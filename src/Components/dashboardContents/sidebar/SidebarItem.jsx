import { List, ListItem } from "@material-tailwind/react";
import { FaHome } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { HiLogout } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { MdBedroomParent } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import useAdmin from "../../../Hooks/useAdmin";
import { RiEditCircleFill } from "react-icons/ri";


const SidebarItem = () => {

    const { logOut } = useAuth();
    const [isAdmin] = useAdmin();
    // console.log(isAdmin);

    return (
        <>
            <div className="overflow-auto h-screen duration-700">
                {
                    isAdmin ? <List>
                        <ListItem className=" text-navyGray w-full">
                            <NavLink
                                to="/dashboard/addRoom"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                                }
                            >
                                <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:w-full hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><MdBedroomParent />Add Room</span>
                            </NavLink>
                        </ListItem>
                        <ListItem className=" text-navyGray">
                            <NavLink
                                to="/dashboard/allUser"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                                }
                            >
                                <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><FaUsers />All Users</span>
                            </NavLink>
                        </ListItem>
                        <ListItem className=" text-navyGray">
                            <NavLink
                                to="/dashboard/allBookings"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                                }
                            >
                                <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><FaCartFlatbed />Bookings</span>
                            </NavLink>
                        </ListItem>
                        <ListItem className=" text-navyGray">
                            <NavLink
                                to="/dashboard/manageRoom"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                                }
                            >
                                <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><RiEditCircleFill />Manage Room</span>
                            </NavLink>
                        </ListItem>
                    </List>
                        :
                        <List>
                            <ListItem className=" text-navyGray">
                                <NavLink
                                    to="/dashboard/bookings"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                                    }
                                >
                                    <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><FaCartFlatbed /> Booking</span>
                                </NavLink>
                            </ListItem>
                        </List>
                }
                <List>
                    <ListItem className=" text-navyGray">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                            }
                        >
                            <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><FaHome />Home</span>
                        </NavLink>
                    </ListItem>
                    <ListItem className=" text-navyGray" onClick={logOut}>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-navyGray w-full px-0 rounded flex text-silver justify-start items-center" : ""
                            }
                        >
                            <span className="flex items-center gap-2 w-full hover:bg-navyGray hover:text-silver text-xl px-5 py-1.5 rounded duration-700"><HiLogout />Sign Out</span>
                        </NavLink>
                    </ListItem>
                </List>
            </div>
        </>
    );
};

export default SidebarItem;