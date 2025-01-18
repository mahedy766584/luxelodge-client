import { useState } from "react";
import Upload from "../imageUploadSystem/Upload";
import { useForm } from "react-hook-form";
import { CiCirclePlus } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddRoomFrom = () => {

    const [isImage, setIsImage] = useState("");
    const [facilities, setFacilities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const uploadImagesToImgBB = async (images) => {
        const uploadedImageUrls = [];

        for (const image of images) {
            const formData = new FormData;
            formData.append('image', image);

            try {
                const response = await axiosPublic.post(image_hosting_api, formData, {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                });
                uploadedImageUrls.push(response.data.data.url)
            } catch (error) {
                console.log(error.message);
                toast.error(error.message);
            }
        }
        return uploadedImageUrls;
    }

    const onSubmit = async (data) => {

        setIsLoading(true)

        const imagesUrls = await uploadImagesToImgBB(isImage);

        const roomInfo = {
            title: data.title,
            roomNumber: data.roomNumber,
            bathroom: data.bathroom,
            beds: data.beds,
            guests: data.guests,
            review: data.reviews,
            description: data.description,
            images: imagesUrls,
            facilities: facilities,
            pricePerNight: data.price,
        }

        // console.log(roomInfo);

        try {

            const response = await axiosSecure.post('/rooms/addRoom', roomInfo);

            if (response.status === 200) {
                toast.success(`${data.title} is added with successfully`)
                reset();
                setIsImage("");
                setFacilities([]);
                setIsLoading(false);
            }

        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }

    };


    const handleAddFacilities = (facility) => {
        if (facility && facilities.length < 6) {
            setFacilities([...facilities, facility])
            reset({ facilityInput: "" })
        } else if (facilities.length >= 6) {
            toast.error('You have to add maximum six facility')
        }
    }

    const handleDeleteFacility = (index) => {
        const updateFacilities = facilities.filter((facility, i) => i !== index);
        setFacilities(updateFacilities)
    }


    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="font-poppins text-navyGray space-y-4">
                <div className="flex items-center gap-6">
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Title<sup>★</sup>
                        </p>
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Guest Length<sup>★</sup>
                        </p>
                        <input
                            {...register("guests", { required: true })}
                            type="number"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Bed Length<sup>★</sup>
                        </p>
                        <input
                            {...register("beds", { required: true })}
                            type="number"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                    <div className="flex items-center gap-6 w-full">
                        <div className="w-full">
                            <p className="text-xl font-normal">
                                Price<sup>★</sup>
                            </p>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-xl font-normal">
                                Room Number<sup>★</sup>
                            </p>
                            <input
                                {...register("roomNumber", { required: true })}
                                type="number"
                                className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Reviews<sup>★</sup>
                        </p>
                        <select
                            {...register("reviews", { required: true })}
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        >
                            <option value={4.5}>4.5</option>
                            <option value={5.5}>5.5</option>
                            <option value={4.8}>4.8</option>
                            <option value={4.3}>4.3</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <p className="text-xl font-normal">
                            Bathroom Length<sup>★</sup>
                        </p>
                        <input
                            {...register("bathroom", { required: true })}
                            type="number"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                    </div>
                </div>
                <div className="w-full relative">
                    <p className="text-xl font-normal">
                        Facilities<sup>★</sup>
                    </p>
                    <div className="flex justify-center items-center">
                        <input
                            {...register("facilityInput")}
                            type="text"
                            className="border border-navyGray border-opacity-60 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                        />
                        <button
                            onClick={() => handleAddFacilities(document.querySelector("input[name='facilityInput']").value)}
                            type="submit"
                            className="absolute right-3 font-poppins font-medium bg-navyGray text-silver p-1 rounded-full">
                            <CiCirclePlus size={25} />
                        </button>
                    </div>
                    <div>
                        <ul className="flex gap-4 items-center py-4 overflow-auto">
                            {
                                facilities.map((facility, index) => (
                                    <li className="bg-silver text-navyGray px-2 py-1 rounded flex justify-center items-center gap-3" key={index}>
                                        {facility}
                                        <button
                                            onClick={() => handleDeleteFacility(index)}
                                        >
                                            <TiDelete size={25} />
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-xl font-normal">
                        Description<sup>★</sup>
                    </p>
                    <textarea
                        {...register("description", { required: true })}
                        type="text"
                        className="border border-navyGray border-opacity-60 h-32 w-full py-2 text-lg font-poppins text-navyGray outline-none rounded bg-transparent px-4"
                    />
                </div>
                <div className="w-full">
                    {/* this is the component for images upload system */}
                    <Upload isImage={isImage} setIsImage={setIsImage} />
                </div>
                <div className="w-full mt-10">
                    <button
                        // onClick={() => setIsLoading(!isLoading)}
                        type="submit"
                        className="w-full bg-navyGray hover:shadow-lg text-silver mt-7 py-3 font-medium font-poppins rounded-md flex justify-center items-center
                    ">
                        {
                            isLoading ? <span className="font-poppins text-xl animate-spin">
                                <AiOutlineLoading3Quarters />
                            </span>
                                :
                                'Add Room'
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRoomFrom;