import React from "react";
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

    return (
        <main className="relative overflow-hidden h-lvh">
            <Header />
            <SideNavigation />
            {children}
            <BottomNavigation />
            <ToastContainer />
        </main>
    );
};

export default BackendLayout;
