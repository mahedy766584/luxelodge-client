import { Card,  Button, Typography } from "@material-tailwind/react";
import useAuth from "../../Hooks/useAuth";

const ProfileForm = () => {
    const { user } = useAuth();
    return (
        <div>
            <Card color="transparent" shadow={false}>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <input
                            defaultValue={user?.displayName}
                            type="text"
                            className="bg-transparent border border-navyGray py-2.5 text-navyGray text-lg px-4 rounded outline-none"
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Photo
                        </Typography>
                        <input
                            defaultValue={'https://i.ibb.co/QPTz5b4/27.jpg'}
                            type="text"
                            className="bg-transparent border border-navyGray py-2.5 text-navyGray text-lg px-4 rounded outline-none"
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Email
                        </Typography>
                        <input
                            defaultValue={user?.email}
                            type="email"
                            className="bg-transparent border border-navyGray py-2.5 text-navyGray text-lg px-4 rounded outline-none"
                        />
                    </div>
                    <Button className="mt-6 bg-navyGray" fullWidth>
                        Update
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default ProfileForm;