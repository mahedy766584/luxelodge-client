import { Card, Button, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const ProfileForm = () => {

    const { user, updateRecoverProfile } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    // profile update buy using this way
    const onSubmit = async (data) => {
        console.log(data)
        const res = await updateRecoverProfile(data.displayName, data.photoURL, data.email)
        if (res.success) {
            toast.success('Profile Successfully Updated')
            window.location.reload();
        } else {
            console.error("আপডেট করতে সমস্যা:", res.error);
            toast.error(res.error)
        }
        reset();
    };

    return (
        <div>
            <Card color="transparent" shadow={false}>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <input
                            {...register("displayName", { required: true })}
                            defaultValue={user?.displayName}
                            type="text"
                            className="bg-transparent border border-navyGray py-2.5 text-navyGray text-lg px-4 rounded outline-none"
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Photo
                        </Typography>
                        <input
                            {...register("photoURL", { required: true })}
                            defaultValue={user?.photoURL}
                            type="text"
                            className="bg-transparent border border-navyGray py-2.5 text-navyGray text-lg px-4 rounded outline-none"
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Email
                        </Typography>
                        <input
                            {...register("email", { required: true })}
                            defaultValue={user?.email}
                            type="email"
                            className="bg-transparent border border-navyGray py-2.5 text-navyGray text-lg px-4 rounded outline-none"
                        />
                    </div>
                    <Button type="submit" className="mt-6 bg-navyGray" fullWidth>
                        Update
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default ProfileForm;