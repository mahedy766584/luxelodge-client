/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import DarkMode from "../../../Components/darkModeSystem/DarkMode"

const Navbar = ({ openDrawer }) => {

    return (
        <div className="bg-silver h-16 px-6 flex items-center justify-between dark:bg-slate-900">
            <Button onClick={openDrawer} className="p-0 bg-transparent">
                <TbLayoutSidebarRightCollapse size={35} className="text-navyGray" />
            </Button>
            <div>
                {/* this is component for dark mode system */}
                <DarkMode />
            </div>
        </div>
    );
};

export default Navbar;