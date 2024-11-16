import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import React from "react";
import { useForm } from "@inertiajs/react";

const Branch = ({ branches }) => {
    const { data, setData, post, processing, delete: destroy } = useForm();

    const deleteBranch = (id) => {
        destroy("/branches/" + id);
    };

    return (
        <div className="w-full px-4 ">
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
                    {branches.map((e, index) => {
                        return (
                            <tr key={e.id}>
                                <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    {index + 1}
                                </td>
                                <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    {e.branch_code}
                                </td>
                                <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    {e.street}
                                </td>
                                <td className="p-4 pl-8 border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    {e.city}
                                </td>
                                <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    {e.state}
                                </td>
                                <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    {e.country}
                                </td>
                                <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    {e.phone}
                                </td>
                                <td className="p-4 pl-8 font-semibold border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    {e.email}
                                </td>
                                <td className="flex flex-row items-center justify-center gap-4 p-4 pl-8 border-b border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">
                                    <BiEditAlt className="text-2xl text-green-500" />
                                    <MdDeleteForever
                                        className="text-2xl text-red-500"
                                        onClick={() => deleteBranch(e.id)}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Branch;
