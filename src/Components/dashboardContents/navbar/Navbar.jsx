/* eslint-disable react/prop-types */
import DarkMode from "../../../Components/darkModeSystem/DarkMode";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBars4 } from "react-icons/hi2";
import Logo from "../../Logo/Logo";

const Navbar = ({ openDrawer }) => {

    return (
        <div className="h-16 px-6 flex items-center justify-between dark:bg-slate-900 w-full">
            <div className="flex items-center gap-2">
                <button
                    onClick={openDrawer}
                    className="bg-transparent p-1 hover:bg-opacity-40 duration-500 rounded-full text-navyGray shadow-none hover:bg-navyGray">
                    <HiOutlineBars4 size={35} />
                </button>
                <Logo />
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