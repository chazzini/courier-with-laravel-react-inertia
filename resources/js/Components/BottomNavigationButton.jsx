import { Link } from "@inertiajs/react";
import React from "react";

const BottomNavigationButton = ({ link, icon, isLink }) => {
    return isLink ? (
        <Link
            href={link}
            className="block text-2xl text-gray-700 transition-all duration-300 ease-in transform scale-75 hover:text-blue-800 hover:scale-100"
        >
            {icon}
        </Link>
    ) : (
        <button className="block text-2xl text-gray-700 transition-all duration-300 ease-in transform scale-75 hover:text-blue-800 hover:scale-100">
            {icon}
        </button>
    );
};

export default BottomNavigationButton;
