import { Link } from "@inertiajs/react";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const SideNavigationLink = ({ link, icon, text }) => {
    return (
        <li className="hover:bg-blue-950 py-4 px-4  transition-all duration-300 ease-in">
            <Link
                href={link}
                className="flex flex-row gap-4 hover:text-white justify-between items-center w-full text-slate-200"
            >
                <span className="flex flex-row gap-4  justify-start items-center">
                    {icon} {text}
                </span>{" "}
                <AiOutlineRight />
            </Link>
        </li>
    );
};

export default SideNavigationLink;
