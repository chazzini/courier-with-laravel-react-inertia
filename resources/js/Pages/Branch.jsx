import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { useForm } from "@inertiajs/react";
import ConfirmationDialog from "../Components/ConfirmationDialog";
import CreateModal from "../Components/Branch/CreateModal";

const Branch = ({ branches }) => {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        delete: destroy,
    } = useForm({
        street: "",
        state: "",
        phone: "",
        email: "",
        city: "warri",
        country: "",
        zip_code: "",
    });

    const [isOpen, setIsOpen] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [targetBranch, setTargetBranch] = useState({ id: "", street: "" });

    const handleDeleteBranch = (id, street) => {
        setTargetBranch({ id: id, street: street });
        setIsOpen(true);
    };

    const deleteBranch = () => {
        if (targetBranch) {
            destroy("/branches/" + targetBranch.id);
        }
        setIsOpen(false);
    };

    const cancelDeleteBranch = () => {
        setTargetBranch(0);
        setIsOpen(false);
    };

    const createBranch = () => {
        post("/branches", {
            onSuccess: () => {
                reset();
                setToggleModal(false);
            },
        });
    };

    return (
        <div className="w-full px-4">
            <button
                className="py-2 px-4 hover:bg-black bg-slate-800 text-white rounded-md transition-all duration-300 ease-in"
                onClick={() => setToggleModal(true)}
            >
                Add Branch
            </button>
            <table className="w-full text-sm border-collapse table-auto ">
                <thead className="">
                    <tr>
                        <th className="p-4 pl-8 font-medium text-left border-b rounded-tl-lg bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 ">
                            #
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 ">
                            Branch Code
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 ">
                            Street
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 ">
                            City
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 ">
                            State
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 ">
                            Country
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 ">
                            Phone
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 ">
                            Email
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b rounded-tr-lg bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                    {branches.length ? (
                        branches.map((e, index) => {
                            return (
                                <tr key={e.id}>
                                    <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {index + 1}
                                    </td>
                                    <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.branch_code}
                                    </td>
                                    <td className="p-4 pl-8  border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.street}
                                    </td>
                                    <td className="p-4 pl-8 border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.city}
                                    </td>
                                    <td className="p-4 pl-8  border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.state}
                                    </td>
                                    <td className="p-4 pl-8  border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.country}
                                    </td>
                                    <td className="p-4 pl-8  border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.phone}
                                    </td>
                                    <td className="p-4 pl-8  border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.email}
                                    </td>
                                    <td className="flex flex-row items-center justify-center gap-4 p-4 pl-8 border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        <BiEditAlt className="text-2xl text-green-500" />
                                        <MdDeleteForever
                                            className="text-2xl text-red-500"
                                            onClick={() => {
                                                handleDeleteBranch(
                                                    e.id,
                                                    e.street
                                                );
                                            }}
                                        />
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td
                                colSpan="9"
                                className="p-4 pl-8 text-center border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                            >
                                {" "}
                                No branch available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <ConfirmationDialog
                message={`Are you sure you want to delete this branch <strong>"${targetBranch.street}" </strong>`}
                isOpen={isOpen}
                yesAction={deleteBranch}
                noAction={cancelDeleteBranch}
            />
            <CreateModal
                isOpen={toggleModal}
                setIsOpen={setToggleModal}
                data={data}
                setData={setData}
                errors={errors}
                title="Create new branch"
                action={createBranch}
                processing={processing}
            />
        </div>
    );
};

export default Branch;
