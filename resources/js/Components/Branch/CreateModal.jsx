import { AiOutlineCloseSquare } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkDone } from "react-icons/io5";
import { useForm } from "@inertiajs/react";
import Input from "../Input";

const CreateModal = ({
    isOpen,
    setIsOpen,
    action,
    data,
    errors,
    setData,
    title,
    processing,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        action();
    };

    return (
        <>
            {isOpen && (
                <div className=" absolute w-full h-full top-0 right-0 bg-black bg-opacity-90 flex justify-center items-center">
                    <div className="bg-white border rounded-lg  w-5/6 md:w-2/6 mx-auto align-middle h-4/5 overflow-y-scroll">
                        <div className="bg-slate-100 text-black px-10  py-4 w-full rounded-t-lg text-sm flex justify-between items-center">
                            <span className="text-lg font-medium">{title}</span>{" "}
                            <AiOutlineCloseSquare
                                className="text-slate-900 text-xl cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                        <form
                            className="w-full max-w-lg py-4 px-10"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <Input
                                        label="Street"
                                        error={errors.street}
                                        value={data.street}
                                        change={(e) =>
                                            setData("street", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <Input
                                        label="City"
                                        error={errors.city}
                                        value={data.city}
                                        change={(e) =>
                                            setData("city", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <Input
                                        label="State"
                                        error={errors.state}
                                        value={data.state}
                                        change={(e) =>
                                            setData("state", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <Input
                                        label="Country"
                                        error={errors.country}
                                        value={data.country}
                                        change={(e) =>
                                            setData("country", e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <Input
                                        label="Email"
                                        error={errors.email}
                                        value={data.email}
                                        change={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        type="email"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <Input
                                        label="Phone"
                                        error={errors.phone}
                                        value={data.phone}
                                        change={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <Input
                                        label="Zip_code"
                                        error={errors.zip_code}
                                        value={data.zip_code}
                                        change={(e) =>
                                            setData("zip_code", e.target.value)
                                        }
                                        type="zip_code"
                                    />
                                </div>
                            </div>
                            <button
                                className="py-2 px-4 hover:bg-black bg-slate-800 text-white rounded-md transition-all duration-300 ease-in"
                                type="submit"
                                disabled={processing}
                            >
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateModal;
