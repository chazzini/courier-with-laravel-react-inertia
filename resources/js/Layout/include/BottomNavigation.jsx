import { BiMenu } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { ImOffice } from "react-icons/im";
import { CgListTree } from "react-icons/cg";
import { RiHome5Fill } from "react-icons/ri";
import { Link } from "@inertiajs/react";
import BottomNavigationButton from "../../Components/BottomNavigationButton";

const BottomNavigation = () => {
    return (
        <div className="absolute bottom-0 w-full text-gray-600 ">
            <nav className="w-4/5 mx-auto bg-white border border-gray-300 rounded-t-lg shadow-sm sm:hidden">
                <ul className="flex flex-row items-center justify-between px-3 py-2">
                    <li>
                        <BottomNavigationButton link="/" icon={<BiMenu />} />
                    </li>
                    <li>
                        <BottomNavigationButton
                            link="/branches"
                            icon={<RiHome5Fill />}
                        />
                    </li>
                    <li>
                        <BottomNavigationButton link="/" icon={<ImOffice />} />
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
