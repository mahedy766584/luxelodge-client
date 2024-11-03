import useAuth from "../../Hooks/useAuth";
import "../../Components/dashboardContents/sidebar/sidebar.css";
import ProfileForm from "./ProfileForm";

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className="lg:flex gap-8 space-y-10 lg:space-y-0 mb-5 lg:justify-center  lg:items-center">
            {/* profile box */}
            <div className="profile-container">
                <div className="top-content">
                    <div className="image-container">
                        <h1 className="pr-text">Your Profile</h1>
                        <img src={user?.photoURL} alt={user?.displayName} className="image" />
                    </div>
                </div>
                <div className="bottom-content">
                    <h1>Name: {user?.displayName}</h1>
                    <h1>Email: <span className="text-base font-normal">{user?.email}</span></h1>
                    <h1>Email: <span className="text-base font-normal">https://i.ibb.co/QPTz5b4/27.jpg</span></h1>
                </div>
            </div>
            {/* update box */}
            <div className="profile-container">
                <h1 className="up-title text-center text-navyGray text-3xl font-poppins font-medium mt-8">Update Profile</h1>
                {/* this is update profile component */}
                <ProfileForm />
            </div>
        </div>
    );
};

export default Profile;