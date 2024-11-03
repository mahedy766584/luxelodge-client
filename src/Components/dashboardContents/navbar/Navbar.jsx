/* eslint-disable react/prop-types */
import DarkMode from "../../../Components/darkModeSystem/DarkMode";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

const Navbar = ({ sidebarOpen, setSidebarOpen, openDrawerTop }) => {

    return (
        <div className="h-16 px-6 flex items-center lg:justify-end justify-between dark:bg-slate-900 w-full">
            <div className="cursor-pointer hidden bg-silver absolute left-0 px-2 lg:flex justify-center items-center rounded-r-full">
                {
                    sidebarOpen === false ?
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className=" text-navyGray">
                            <IoIosArrowRoundForward size={35} />
                        </button>
                        :
                        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-navyGray">
                            <IoIosArrowRoundBack size={35} />
                        </button>
                }
            </div>
            <div className="cursor-pointer lg:hidden block">
                <button onClick={openDrawerTop}>
                    <FaBars size={35} className="text-silver" />
                </button>
            </div>
            <div className="flex items-center gap-5">
                <div className="lg:flex hidden items-center border w-full px-4 border-navyGray border-opacity-50 rounded-md group:">
                    <input
                        placeholder="Search"
                        type="search"
                        className="w-full bg-transparent text-navyGray text-lg font-poppins py-1 outline-none border-none px-2" />
                    <CiSearch />
                </div>
                {/* this is component for dark mode system */}
                <DarkMode />
            </div>
        </div>
    );
};

export default Navbar;