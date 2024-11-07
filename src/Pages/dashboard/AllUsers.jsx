import { Card, Tooltip, Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa"
import { MdOutlineDeleteSweep } from "react-icons/md";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


const AllUsers = () => {


    const axiosSecure = useAxiosSecure();

    const { data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleteUser = (id, name) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/user/${id}`)
                if (res.data.acknowledged) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${name} has been deleted.`,
                        icon: "success"
                    });
                }
            }
        });
    }

    const handleMakeAdmin = async (id, name) => {
        // console.log(id, name);
        const res = await axiosSecure.patch(`/users/admin/${id}`);
        if (res.data.modifiedCount) {
            refetch();
            toast.success(`${name} is Admin Now!`)
        }
    }


    const TABLE_HEAD = ["Name", "Email", "Role", "Remove"];

    return (
        <div>
            <section className="w-full bg-white">
                <div className="p-6 text-center">
                    <Typography variant="lead" className="font-bold text-navyGray text-2xl">
                        Our members and roles
                    </Typography>
                    <Typography className="mb-4 font-normal text-navyGray font-poppins text-xl mt-3 md:w-full">
                        Overview of the key personnel involved in our project and their
                        geographical distribution.
                    </Typography>
                </div>
                <Card className="h-full w-full overflow-scroll border border-gray-300 px-6">
                    <table className="w-full table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold leading-none"
                                        >
                                            {head || 'N/A'}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(({ name, email, _id, role }, index) => {
                                const isLast = index === data.length - 1;
                                const classes = isLast ? "py-4" : "py-4 border-b border-gray-300";

                                return (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold"
                                            >
                                                {name || "N/A"}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                className="font-normal text-gray-600"
                                            >
                                                {email || "N/A"}
                                            </Typography>
                                        </td>
                                        <td className={`${classes}`}>
                                            {
                                                role === 'admin' ? <p
                                                    className="text-xl font-normal font-poppins text-navyGray"
                                                >Admin</p>
                                                    :
                                                    <Tooltip
                                                        animate={{
                                                            mount: { scale: 1, y: 0 },
                                                            unmount: { scale: 0, y: 25 },
                                                        }}
                                                        content="Make Admin" placement="left">
                                                        <div
                                                            onClick={() => handleMakeAdmin(_id, name)}
                                                            className="bg-navyGray text-silver flex justify-center items-center w-10 h-10 rounded-full cursor-pointer">
                                                            <FaUser size={20} />
                                                        </div>
                                                    </Tooltip>
                                            }

                                        </td>
                                        <td className={`${classes}`}>
                                            <Tooltip
                                                animate={{
                                                    mount: { scale: 1, y: 0 },
                                                    unmount: { scale: 0, y: 25 },
                                                }}
                                                content="Delete" placement="left">
                                                <div
                                                    onClick={() => handleDeleteUser(_id, name)}
                                                    className="bg-navyGray text-silver flex justify-center items-center w-10 h-10 rounded-full cursor-pointer">
                                                    <MdOutlineDeleteSweep size={20} />
                                                </div>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </section>
        </div>
    );
};

export default AllUsers;