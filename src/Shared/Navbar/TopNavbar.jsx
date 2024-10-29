import { Avatar, Badge } from "@material-tailwind/react";
import Container from "../../Components/Container/Container";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const TopNavbar = () => {

    const { user} = useAuth();

    return (
        <div className="w-full bg-silver bg-opacity-100 border-b">
            <Container>
                <div className="flex justify-between items-center bg-silver">
                    <div>
                        <p
                            className="text-lg text-navyGray font-poppins flex items-center gap-2">
                            <AiTwotoneMail
                                size={25} />
                            {user?.email}
                        </p>
                    </div>
                    <Link to={'/'}>
                        <div className="flex items-center flex-row-reverse gap-4 bg-navyWhite bg-opacity-60 py-1 px-5 text-silver">
                            <Badge placement="top-end" overlap="circular" color="green" withBorder>
                                <Avatar
                                    src={user?.photoURL}
                                    alt="user"
                                />
                            </Badge>
                            <div>
                                <h1 className="text-base font-poppins text-white font-normal">My Account</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default TopNavbar;