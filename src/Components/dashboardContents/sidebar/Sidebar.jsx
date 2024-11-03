/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card, Typography, Alert } from "@material-tailwind/react";
import { CubeTransparentIcon } from "@heroicons/react/24/outline";
import Logo from "../../../Components/Logo/Logo";
import { CiSearch } from "react-icons/ci";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";


const Sidebar = ({ sidebarOpen }) => {

    const [openAlert, setOpenAlert] = useState(true);
    // [calc(100vh-2rem)]
    return (
        <div>
            <Card
                className={`h-[1200px] w-full max-w-[22rem] px-2 duration-700
            ${sidebarOpen ? "lg:w-full lg:max-w-[20rem] duration-700 lg:flex" : "lg:-ml-96 duration-700"} py-4 shadow-none bg-silver rounded-none`}>
                <div className="mb-2 flex items-center gap-4 justify-center relative">
                    {
                        sidebarOpen && <Link to={'/dashboard'}><Logo /></Link>
                    }
                </div>
                <div className="flex items-center border w-full px-4 border-navyGray border-opacity-50 rounded-md lg:hidden">
                    <input
                        placeholder="Search"
                        type="search"
                        className="w-full bg-transparent text-navyGray text-lg font-poppins py-1 outline-none border-none px-2" />
                    <CiSearch />
                </div>
                <hr className="my-2 border-blue-gray-50" />
                {/* sidebar list items component here */}
                <SidebarItem sidebarOpen={sidebarOpen} />
                {/* <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
                    <CubeTransparentIcon className="mb-4 h-12 w-12" />
                    <Typography variant="h6" className="mb-1">
                        Upgrade to PRO
                    </Typography>
                    <Typography variant="small" className="font-normal opacity-80">
                        Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                        and premium.
                    </Typography>
                    <div className="mt-4 flex gap-3">
                        <Typography
                            as="a"
                            href="#"
                            variant="small"
                            className="font-medium opacity-80"
                            onClick={() => setOpenAlert(false)}
                        >
                            Dismiss
                        </Typography>
                        <Typography as="a" href="#" variant="small" className="font-medium">
                            Upgrade Now
                        </Typography>
                    </div>
                </Alert> */}
            </Card>
        </div>
    );
};

export default Sidebar;