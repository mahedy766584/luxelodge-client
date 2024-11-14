import useAuth from "../../Hooks/useAuth";
import "../../Components/dashboardContents/sidebar/sidebar.css";
import ProfileForm from "./ProfileForm";

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className="lg:flex gap-8 lg:mt-8 md:px-8 space-y-10 lg:space-y-0 w-full mb-5 lg:justify-center  lg:items-center">
            {/* profile box */}
            <div className="profile-container w-full p-2">
                <div className="top-content w-full">
                    <div className="image-container">
                        <h1 className="pr-text">Your Profile</h1>
                        <img src={user?.photoURL} alt={user?.displayName} className="image" />
                    </div>
                </div>
                <div className="bottom-content overflow-hidden w-full">
                    <h1>Name: {user?.displayName}</h1>
                    <h1>Email: <span className="text-base font-normal">{user?.email}</span></h1>
                </div>
            </div>
            {/* update box */}
            <div className="profile-container w-full">
                <h1 className="up-title text-center text-navyGray text-3xl font-poppins shadow-none font-medium mt-8">Update Profile</h1>
                {/* this is update profile component */}
                <ProfileForm />
            </div>
        </div>
    );
};

export default Profile;