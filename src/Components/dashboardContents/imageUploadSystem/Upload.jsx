/* eslint-disable react/prop-types */
import { useRef } from "react";
import uploadIcon from "../../../assets/uploadIcon/photo.png"
import { toast } from "react-toastify";

const Upload = ({ isImage, setIsImage }) => {

    const inputRef = useRef(null);

    const handleImageClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);

        if (isImage.length + files.length <= 6) {
            setIsImage((prevImage) => [...prevImage, ...files])
        }else{
            toast.error('You can upload a maximum of six images.')
        }
    }

    return (
        <div onClick={handleImageClick} className="w-full cursor-pointer outline-navyGray flex flex-col justify-center items-center outline-dashed  py-6 mt-10 rounded-md h-[200px] relative overflow-hidden">
            <div className="lg:flex overflow-x-auto gap-5 relative">
                {
                    isImage.length > 0 ?
                        (
                            isImage.map((image, index) => (
                                <div className="w-[200px] h-[200px] flex gap-5  overflow-x-auto"
                                    key={index}>
                                    <img
                                        src={URL.createObjectURL(image)}
                                        className="w-[200px] object-cover h-[200px] bg-cover bg-no-repeat bg-blend-overlay bg-center rounded" />
                                </div>
                            ))

                        )
                        :
                        (<div className="flex flex-col justify-center items-center cursor-pointer">
                            <h1 className="text-navyGray font-poppins text-xl font-medium">Add Room Image</h1>
                            <img src={uploadIcon} className="w-32 h-32" />
                        </div>)
                }
                <input multiple className="hidden" type="file" ref={inputRef} onChange={handleImageChange} />
            </div>
        </div>
    );
};

export default Upload;