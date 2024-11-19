import { BiLogOut } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { Link, usePage } from "@inertiajs/react";
import SideNavigationLink from "../../Components/SideNavigationLink";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useRoute } from "../../../../vendor/tightenco/ziggy";

const SideNavigation = ({ toggle }) => {
    const { logo } = usePage().props;

    const route = useRoute();

    return (
        <div
            className={`max-h-svh  bg-blue-800 h-screen   md:w-2/12  md:block w-4/12 ${
                toggle ? "block" : "hidden"
            } transition-all duration-300 ease-in`}
        >
            <div className="w-full">
                <div className="w-full flex justify-center items-center py-4">
                    <Link href="/">
                        <img src={`/images/${logo}`} className="w-28 h-auto" />
                    </Link>
                </div>
                <ul>
                    <SideNavigationLink
                        active={route().current("branches.index")}
                        link={route("branches.index")}
                        icon={<MdDashboard />}
                        text="Dashboard"
                    />
                    <SideNavigationLink
                        active={route().current("branches.index")}
                        link={route("branches.index")}
                        icon={<HiBuildingOffice2 />}
                        text="Branch"
                    />
                    <SideNavigationLink
                        link="/packages"
                        icon={<FiPackage />}
                        text="Parcel"
                    />
                    <SideNavigationLink
                        link="/logout"
                        icon={<BiLogOut />}
                        text="Log out"
                    />
                </ul>
            </div>
        </div>
    );
};

export default SideNavigation;
