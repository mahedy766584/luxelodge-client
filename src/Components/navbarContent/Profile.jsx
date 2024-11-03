import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography } from "@material-tailwind/react";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings, IoMdHelpBuoy } from "react-icons/io";
import { MdInbox } from "react-icons/md";
import { PiSignOutLight } from "react-icons/pi";

const Profile = () => {

    const { user, logOut } = useAuth();

    return (
        <Menu>
            <MenuHandler>
                <Avatar
                    variant="circular"
                    alt={user.displayName}
                    className="cursor-pointer border-2 border-navyGray"
                    src={user.photoURL}
                />
            </MenuHandler>
            <MenuList className="bg-silver shadow-lg lg:-ml-16 text-navyGray">
                <MenuItem className="flex items-center gap-2">
                    <CgProfile className="text-xl text-navyGray" />
                    <Link to={'/dashboard'}>
                        <Typography variant="small" className="font-medium">
                            My Profile
                        </Typography>
                    </Link>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <IoIosSettings className="text-xl text-navyGray" />
                    <Typography variant="small" className="font-medium">
                        Edit Profile
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <MdInbox className="text-xl text-navyGray" />
                    <Typography variant="small" className="font-medium">
                        Inbox
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <IoMdHelpBuoy className="text-xl text-navyGray" />
                    <Typography variant="small" className="font-medium">
                        Help
                    </Typography>
                </MenuItem>
                <hr className="my-2 border-blue-gray-50" />
                <MenuItem onClick={logOut} className="flex items-center gap-2 ">
                    <PiSignOutLight className="text-xl text-navyGray" />
                    <Typography variant="small" className="font-medium">
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default Profile;