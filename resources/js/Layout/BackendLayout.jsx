import React, { useState } from "react";
import BottomNavigation from "@/Layout/include/BottomNavigation";
import Header from "@/Layout/include/Header";
import SideNavigation from "@/Layout/include/SideNavigation";
import { usePage } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BackendLayout = ({ children }) => {
    const { flash } = usePage().props;

    if (flash.success) {
        toast.success(flash.success);
    }

    if (flash.error) {
        toast.error(flash.error);
    }
    if (flash.info) {
        toast.info(flash.info);
    }

    const [sidebarToggle, setSidebarToggle] = useState("false");

    return (
        <div className="relative overflow-hidden h-lvh w-full">
            <div className="w-full flex flex-row">
                <SideNavigation toggle={sidebarToggle} />
                <div className="w-10/12">
                    <Header />
                    <main className="mt-4">{children}</main>
                </div>
            </div>

            <BottomNavigation
                openMenu={() => {
                    console.log("here");
                    setSidebarToggle((prev) => {
                        return !prev;
                    });
                }}
            />
            <ToastContainer />
        </div>
    );
};

export default BackendLayout;
