import { useState } from "react";
import Navbar from "../Components/dashboardContents/navbar/Navbar";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/dashboardContents/sidebar/Sidebar";

const DashboardLayout = () => {

    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);


    return (
        <>
            <Helmet>
                <title>LuxeLodge | Dashboard</title>
            </Helmet>
            <div className="flex flex-col">
                <div className="relative flex flex-col ">
                    <div className=" ">
                        <Navbar openDrawer={openDrawer}
                        />
                    </div>
                    <div className="flex relative w-full">
                        <div>
                            <div className="">
                                <Sidebar
                                    open={open}
                                    setOpen={setOpen}
                                    openDrawer={openDrawer}
                                    closeDrawer={closeDrawer}
                                />
                            </div>
                        </div>
                        <div className="relative flex justify-center mx-auto items-center px-8 ">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;