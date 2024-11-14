/* eslint-disable react/prop-types */
import { Drawer, IconButton } from "@material-tailwind/react";
import { Fragment } from "react";
import SidebarItem from "./SidebarItem";
import Logo from "../../Logo/Logo";


const NewSidebar = ({ open, closeDrawer }) => {
    return (
        <div>
            <Fragment>
                <Drawer open={open} onClose={closeDrawer}>
                    <div className="mb-2 flex items-center justify-between p-4">
                        <Logo />
                        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </IconButton>
                    </div>
                    {/* this is component for sidebar item */}
                    <SidebarItem />
                </Drawer>
            </Fragment>
        </div>
    );
};

export default NewSidebar;