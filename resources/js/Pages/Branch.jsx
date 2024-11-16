import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import React from "react";
const Branch = ({ branches }) => {
    return (
        <>
            <table>
                <thead>
                    <th>Branch Code</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Country</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {branches.map((e) => {
                        return (
                            <tr>
                                <td>{e.branch_code}</td>
                                <td>{e.street}</td>
                                <td>{e.city}</td>
                                <td>{e.state}</td>
                                <td>{e.country}</td>
                                <td>{e.phone}</td>
                                <td>{e.email}</td>
                                <td>
                                    <BiEditAlt />
                                    <MdDeleteForever />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Branch;
