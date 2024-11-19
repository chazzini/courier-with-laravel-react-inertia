import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { useForm } from "@inertiajs/react";
import ConfirmationDialog from "../Components/ConfirmationDialog";
import CreateModal from "../Components/Branch/Modal";
import axios from "axios";

const Branch = ({ branches }) => {
    const {
        data,
        setData,
        post,
        get,
        processing,
        errors,
        reset,
        put,
        delete: destroy,
    } = useForm({
        street: "",
        state: "",
        phone: "",
        email: "",
        city: "",
        country: "",
        zip_code: "",
    });

    const [isOpen, setIsOpen] = useState(false);
    const [toggleModal, setToggleModal] = useState(false);
    const [toggleModalEdit, setToggleModalEdit] = useState(false);
    const [targetBranch, setTargetBranch] = useState({ id: "", street: "" });

    const handleDeleteBranch = (id, street) => {
        setTargetBranch({ id: id, street: street });
        setIsOpen(true);
    };

    const handleEditBranch = async (id, street) => {
        setTargetBranch({ id: id, street: street });
        setToggleModalEdit(true);

        try {
            // Fetch branch details using Inertia's `get` method

            axios.get(`/branches/${id}`).then((data) => {
                const branch = data.data.branch;
                console.log(branch);

                // Set the fetched data data into the form
                setData({
                    street: branch.street ?? "",
                    state: branch.state ?? "",
                    phone: branch.phone ?? "",
                    email: branch.email ?? "",
                    city: branch.city ?? "",
                    country: branch.country ?? "",
                    zip_code: branch.zip_code ?? "",
                });
            });
        } catch (error) {
            console.error("Error fetching branch details:", error);
        }
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
    const updateBranch = () => {
        put("/branches/" + targetBranch.id, {
            onSuccess: () => {
                reset();
                setToggleModalEdit(false);
            },
        });
    };

    return (
        <div className="w-full px-4">
            <button
                className="px-4 py-2 text-white transition-all duration-300 ease-in rounded-md hover:bg-black bg-slate-800"
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
                        <th className="p-4 pl-8 font-medium text-left border-b  bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200">
                            City
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b  bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200">
                            State
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b  bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200">
                            Country
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b  bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200">
                            Phone
                        </th>
                        <th className="p-4 pl-8 font-medium text-left border-b  bg-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200">
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
                                    <td className="p-4 pl-8 border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.street}
                                    </td>
                                    <td className="p-4 pl-8 border-b  border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.city}
                                    </td>
                                    <td className="p-4 pl-8 border-b  border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.state}
                                    </td>
                                    <td className="p-4 pl-8 border-b  border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.country}
                                    </td>
                                    <td className="p-4 pl-8 border-b  border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.phone}
                                    </td>
                                    <td className="p-4 pl-8 border-b  border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        {e.email}
                                    </td>
                                    <td className="flex flex-row items-center justify-center gap-4 p-4 pl-8 border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                        <BiEditAlt
                                            className="text-2xl text-green-500"
                                            onClick={() => {
                                                handleEditBranch(
                                                    e.id,
                                                    e.street
                                                );
                                            }}
                                        />
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
            <CreateModal
                isOpen={toggleModalEdit}
                setIsOpen={setToggleModalEdit}
                data={data}
                setData={setData}
                errors={errors}
                title="Edit branch"
                action={updateBranch}
                processing={processing}
            />
        </div>
    );
};

export default Branch;
