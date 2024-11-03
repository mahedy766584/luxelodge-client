import { useState } from "react";
import Navbar from "../Components/dashboardContents/navbar/Navbar";
import Sidebar from "../Components/dashboardContents/sidebar/Sidebar";
import { Helmet } from "react-helmet-async";
import TopSidebar from "../Components/dashboardContents/sidebar/TopSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [openTop, setOpenTop] = useState(false);

    const openDrawerTop = () => setOpenTop(true);
    const closeDrawerTop = () => setOpenTop(false);


    return (
        <>
            <Helmet>
                <title>LuxeLodge | Dashboard</title>
            </Helmet>
            <div className="">
                <div className="relative flex h-full">
                    <div className="lg:block hidden">
                        <Sidebar
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                        />
                    </div>
                    <div className="flex flex-col relative w-full">
                        <TopSidebar
                            openDrawerTop={openDrawerTop}
                            closeDrawerTop={closeDrawerTop}
                            openTop={openTop}
                        />
                        <Navbar
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen}
                            openDrawerTop={openDrawerTop}
                        />
                        <div className="relative px-8 ">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;