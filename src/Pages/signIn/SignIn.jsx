import { Button, Card, Checkbox, Typography } from "@material-tailwind/react";
import ImageRotate from "../../Components/imageRotate/ImageRotate";
import background from "../../assets/aroundImg/around2.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignIn = () => {

    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, reset } = useForm({
        defaultValues: { email: "emil", password: "password" }
    });
    const { loginWithUser, googleLoginUser } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const res = await loginWithUser(data.email, data.password)
            console.log(res);
            navigate(from, { replace: true });
            reset();
        } catch (error) {
            console.log(error);
        } finally {
            toast.success('Login Successful');
        }
    }

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
                <title>LuxeLodge | Sign In</title>
            </Helmet>
            <div>
                <div className="relative">
                    <div className="w-full h-screen relative">

                        {/* image 360 degree rotation here */}
                        <ImageRotate rotateImg={background} />

                        <div className="absolute w-full h-full top-0 bg-black bg-opacity-60 flex items-center justify-center">
                            <Card shadow={false} className="lg:px-10 px-4 backdrop-blur-sm bg-white/20 py-3 rounded-lg shadow-lg">
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
                                                {...register("password", {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                })}
                                                {...register("password", { required: true })}
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
                                                Remember Me
                                            </Typography>
                                        }
                                        containerProps={{ className: "-ml-2.5" }}
                                    />
                                    <Button className="mt-6 py-4 bg-silver text-navyGray" fullWidth type="submit">
                                        sign up
                                    </Button>
                                    <Typography className="mt-4 text-center font-normal text-silver font-poppins">
                                        Already have an account?{" "}
                                        <Link to={'/signUp'} className="font-medium text-silver">
                                            Sign Up
                                        </Link>
                                    </Typography>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;