import { BiMenu } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { ImOffice } from "react-icons/im";
import { CgListTree } from "react-icons/cg";
import { RiHome5Fill } from "react-icons/ri";
import { Link } from "@inertiajs/react";
import BottomNavigationButton from "../../Components/BottomNavigationButton";

const BottomNavigation = ({ openMenu }) => {
    return (
        <div className="absolute bottom-0 w-full text-gray-600 ">
            <nav className="w-4/5 mx-auto bg-white border border-gray-300 rounded-t-lg shadow-sm md:hidden">
                <ul className="flex flex-row items-center justify-between px-3 py-2">
                    <li>
                        <button
                            onClick={openMenu}
                            className="block text-2xl text-gray-700 transition-all duration-300 ease-in transform scale-75 hover:text-blue-800 hover:scale-100"
                        >
                            <BiMenu />
                        </button>
                    </li>
                    <li>
                        <BottomNavigationButton
                            link="/"
                            icon={<RiHome5Fill />}
                        />
                    </li>
                    <li>
                        <BottomNavigationButton
                            link="/branches"
                            icon={<ImOffice />}
                        />
                    </li>
                    <li>
                        <BottomNavigationButton
                            link="/packages"
                            icon={<FiPackage />}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BottomNavigation;
