import { useState } from "react";
import Navbar from "../Components/dashboardContents/navbar/Navbar";
import Sidebar from "../Components/dashboardContents/sidebar/Sidebar";
import { Helmet } from "react-helmet-async";
import SmallSidebar from "../Components/dashboardContents/sidebar/SmallSidebar";

const DashboardLayout = () => {

    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);

    return (
        <>
            <Helmet>
                <title>LuxeLodge | Dashboard</title>
            </Helmet>
            <div className="">
                <div className="w-full h-full relative">
                    <Navbar openDrawer={openDrawer} />
                    <div className="flex relative">
                        <div>
                            <SmallSidebar />
                        </div>
                        <div className="relative">
                            <Sidebar open={open} setOpen={setOpen} />
                        </div>
                        <div className="w-full flex justify-center items-center relative">
                            Hello Dashboard
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;