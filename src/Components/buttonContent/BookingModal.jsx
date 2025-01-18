/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Typography } from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import BtComponent from "../button/Button";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BookingModal = ({ roomDetails, startDates, endDates }) => {

    const { _id, title, roomNumber, pricePerNight, isAvailable, review, description, facilities, images, bathroom, beds, guests } = roomDetails || {};

    const [open, setOpen] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const handleOpen = () => setOpen(!open);
    const { register, handleSubmit, watch } = useForm()

    const calculateToTotalPrice = useCallback(() => {
        const startDate = new Date(startDates);
        const endDate = new Date(endDates);

        const timeDiff = endDate - startDate;
        const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const calculatedToTotalPrice = totalDays * pricePerNight;
        setTotalPrice(calculatedToTotalPrice);
    }, [endDates, pricePerNight, startDates])

    useEffect(() => {
        if (startDates && endDates) {
            calculateToTotalPrice();
        }
    }, [startDates, endDates, calculateToTotalPrice]);

    // confirm is disabled this way;
    const fromAndTo = watch("fromAndTo");
    const room = watch("roomNumber");
    const name = watch("name");
    const email = watch("email");
    const phone = watch("number");
    // Check if any field is empty
    const isDisabled = !fromAndTo || !room || !name || !email || !phone;


    const onSubmit = async (data) => {

        if (totalPrice > 0) {
            const bookingInfo = {
                fromToDates: data.fromAndTo,
                roomNumber: data.roomNumber,
                userName: data.name,
                userEmail: data.email,
                totalPrice: totalPrice,
                roomTitle: title,
                pricePerNight: pricePerNight,
                roomId: _id,
                phoneNumber: data.numberInput,
            }

            try {
                const response = await axiosSecure.post('/booking', bookingInfo);
                console.log(response);
                if (response.data?.acknowledged) {
                    toast.success('Booking Successful 👍')
                    window.location.reload();
                }
            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }

        } else {
            toast.error('Please Select Booking Dates')
        }

    }


    return (
        <>
            <div>
                <div onClick={handleOpen} className="mt-7 flex justify-center">
                    <BtComponent
                        bounce_animate={'animate-none'}
                        border={'border'}
                        borderColor={'border-redBg'}
                        >
                        Book Now
                    </BtComponent>
                </div>
                <Dialog
                    size="sm"
                    open={open}
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader className="flex items-center gap-2 text-navyGray ">
                        <span className="text-redBg">Welcome</span>to {user?.displayName}
                    </DialogHeader>
                    <div className="py-0 px-4">
                        <p className="text-base font-lato font-medium text-navyGray">Price per Night: ${pricePerNight} × Total Price: ${totalPrice}</p>
                    </div>
                    <DialogBody className="">

                        <form onSubmit={handleSubmit(onSubmit)} className="mb-2">
                            <div className="flex flex-col gap-6">
                                <Typography className="-mb-5 text-navyGray font-medium text-xl font-lato ">
                                    From-To
                                </Typography>
                                <input
                                    {...register("fromAndTo", { required: true })}
                                    defaultValue={`${startDates} - ${endDates}`}
                                    readOnly
                                    className="outline-none px-4 border border-navyGray rounded py-2 border-opacity-50 focus:border-2"
                                />
                            </div>
                            <div className="flex mt-4 flex-col gap-6">
                                <Typography className="-mb-5 text-navyGray font-medium text-xl font-lato ">
                                    Room Number
                                </Typography>
                                <input
                                    {...register("roomNumber", { required: true })}
                                    defaultValue={roomNumber}
                                    readOnly
                                    className="outline-none px-4 border border-navyGray rounded py-2 border-opacity-50 focus:border-2"
                                />
                            </div>
                            <div className=" mt-4 flex flex-col gap-6">
                                <Typography className="-mb-5 text-navyGray font-medium text-xl font-lato ">
                                    Your Name
                                </Typography>
                                <input
                                    {...register("name", { required: true })}
                                    defaultValue={user?.displayName}
                                    className="outline-none px-4 border border-navyGray rounded py-2 border-opacity-50 focus:border-2"
                                />
                            </div>
                            <div className=" mt-4 flex flex-col gap-6">
                                <Typography className="-mb-5 text-navyGray font-medium text-xl font-lato ">
                                    Email
                                </Typography>
                                <input
                                    {...register("email", { required: true })}
                                    defaultValue={user?.email}
                                    className="outline-none px-4 border border-navyGray rounded py-2 border-opacity-50 focus:border-2"
                                />
                            </div>
                            <div className=" mt-4 flex flex-col gap-6">
                                <Typography className="-mb-5 text-navyGray font-medium text-xl font-lato ">
                                    Phone Number
                                </Typography>
                                <input
                                    {...register("number", { required: true })}
                                    type="number"
                                    className="outline-none px-4 border border-navyGray rounded py-2 border-opacity-50 focus:border-2"
                                />
                            </div>
                            <DialogFooter>
                                <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                >
                                    <span>Cancel</span>
                                </Button>
                                <Button
                                    variant="gradient"
                                    type="submit"
                                    className="bg-navyGray"
                                    disabled={isDisabled}
                                    onClick={handleOpen}>
                                    <span>Confirm</span>
                                </Button>
                            </DialogFooter>
                        </form>

                    </DialogBody>
                </Dialog>
            </div>
        </>
    );
};

export default BookingModal;