import { useState } from "react"

const Rooms = () => {
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        setImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(images);
    }

    return (
        <div className="h-screen">
            <div className="mt-[75px] text-5xl text-redBg">
                <h1>Rooms</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type="file" multiple onChange={handleFileChange} />
                        <button type="submit">Upload</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Rooms;