/* eslint-disable no-unused-vars */
import { Card, Typography, Checkbox, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import ImageRotate from "../../Components/imageRotate/ImageRotate";
import background from "../../assets/aroundImg/around2.jpg";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { toast } from 'react-toastify';
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SignUp = () => {

    const axiosPublic = useAxiosPublic();
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, reset, errors } = useForm({
        defaultValues: { email: "Emil", password: "password" }
    });
    const { createUser, googleLoginUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // console.log(data)
            const res = await createUser(data.email, data.password)
            updateUserProfile(data.name)
            reset()
            navigate('/');
            toast.success('Sign Up with Successful...');

            const userInfo = { name: data.name, email: data.email, role: 'user' }
            const result = await axiosPublic.post('/users', userInfo);
            console.log('user saved in database ----->>', result.data.message);

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    };

    const handleGoogleLogin = () => {
        googleLoginUser()
            .then(async (result) => {
                if (result?.user) {
                    navigate('/')
                    toast.success('Sign In Successful')

                    const userInfo = { name: result.user.displayName, email: result.user.email, role: 'user' }
                    const res = await axiosPublic.post('/users', userInfo)
                    console.log('user saved in database ----->>', res.data.message);

                }
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div>
            <Helmet>
                <title> LuxeLodge | Sign Up </title>
            </Helmet>
            <div>
                <div className="relative">
                    <div className="w-full h-screen relative">

                        {/* image 360 degree rotation here */}
                        <ImageRotate rotateImg={background} />

                        <div className="absolute w-full h-full top-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <Card shadow={false} className="lg:px-10 px-4 backdrop-blur-sm bg-white/20 py-2 rounded-lg shadow-lg">
                                <Typography variant="h4" className="text-center text-silver font-poppins">
                                    Sign Up
                                </Typography>
                                <Typography className="mt-1 font-normal text-center text-silver font-poppins">
                                    Nice to meet you! Enter your details to register.
                                </Typography>
                                <div className="w-full py-2 mt-5 space-y-3">
                                    <button onClick={handleGoogleLogin}
                                        className="flex items-center text-silver font-poppins border w-full justify-center py-2.5 rounded-md text-lg cursor-pointer gap-2">
                                        <FcGoogle size={25} /> Sign Up With Google
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <div className="w-full h-[1px] bg-silver"></div>
                                        <p className="text-lg text-silver font-poppins">Or</p>
                                        <div className="w-full h-[1px] bg-silver"></div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-1 flex flex-col gap-4">
                                        <Typography variant="h6" className="-mb-3 text-silver">
                                            Your Name
                                        </Typography>
                                        <input
                                            {...register("name", { required: true })}
                                            type="text"
                                            className="bg-transparent border border-silver py-2.5 text-silver text-lg px-4 rounded outline-none"
                                            placeholder="Name"
                                        />
                                        <Typography variant="h6" className="-mb-3 text-silver">
                                            Your Email
                                        </Typography>
                                        <input
                                            {...register("email", { required: true })}
                                            type="email"
                                            className="bg-transparent border border-silver py-2.5 text-silver text-lg px-4 rounded outline-none"
                                        />
                                        <Typography variant="h6" className="-mb-3 text-silver">
                                            Your Password
                                        </Typography>
                                        <div className="w-full flex items-center relative">
                                            <input
                                                type={showPass ? "text" : "password"}
                                                {...register("password", {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                })}
                                                className="bg-transparent border border-silver py-2.5 text-silver text-lg px-4 rounded outline-none w-full"
                                            />
                                            <p
                                                onClick={() => (setShowPass(!showPass))}
                                                className="text-silver absolute right-4 cursor-pointer">
                                                <span className="text-lg">{showPass ? <AiTwotoneEye className="text-silver" /> : <AiTwotoneEyeInvisible className="text-silver" />}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <Checkbox
                                        label={
                                            <Typography
                                                variant="small"
                                                color="gray"
                                                className="flex items-center font-normal text-silver"
                                            >
                                                I agree the
                                                <Link
                                                    to={'/'}
                                                    className="font-medium  text-silver"
                                                >
                                                    &nbsp;Terms and Conditions
                                                </Link>
                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5" }}
                                    />
                                    <Button className="mt-6 py-4 bg-silver text-navyGray" fullWidth type="submit">
                                        sign up
                                    </Button>
                                    <Typography className="mt-4 text-center font-normal text-silver font-poppins">
                                        Already have an account?{" "}
                                        <Link to={'/signIn'} className="font-medium text-silver">
                                            Sign In
                                        </Link>
                                    </Typography>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp;