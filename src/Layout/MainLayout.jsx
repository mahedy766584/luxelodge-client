import { Outlet } from "react-router-dom";
import NavbarMain from "../Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-silver">
            <div>
                <NavbarMain />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;