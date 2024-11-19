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
                <div className="absolute top-0 right-0 flex items-center justify-center w-full h-full bg-black  bg-opacity-90">
                    <div className="w-5/6 mx-auto overflow-y-scroll align-middle bg-white border rounded-lg md:w-2/6 h-4/5">
                        <div className="flex items-center justify-between w-full px-10 py-4 text-sm text-black rounded-t-lg bg-slate-100">
                            <span className="text-lg font-medium">{title}</span>{" "}
                            <AiOutlineCloseSquare
                                className="text-xl cursor-pointer text-slate-900"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>
                        <form
                            className="w-full max-w-lg px-10 py-4"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-wrap mb-6 -mx-3">
                                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                                    <Input
                                        label="Street"
                                        error={errors.street}
                                        value={data.street}
                                        change={(e) =>
                                            setData("street", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-full px-3 md:w-1/2">
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
                            <div className="flex flex-wrap mb-6 -mx-3">
                                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                                    <Input
                                        label="State"
                                        error={errors.state}
                                        value={data.state}
                                        change={(e) =>
                                            setData("state", e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-full px-3 md:w-1/2">
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

                            <div className="flex flex-wrap mb-6 -mx-3">
                                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
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
                                <div className="w-full px-3 md:w-1/2">
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
                            <div className="flex flex-wrap mb-6 -mx-3">
                                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
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
                                className="px-4 py-2 text-white transition-all duration-300 ease-in rounded-md hover:bg-black bg-slate-800"
                                type="submit"
                                disabled={processing}
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateModal;
