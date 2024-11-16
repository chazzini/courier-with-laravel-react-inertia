import React from "react";
import BottomNavigation from "@/Layout/include/BottomNavigation";
import Header from "@/Layout/include/Header";
import SideNavigation from "@/Layout/include/SideNavigation";

const BackendLayout = ({ children }) => {
    return (
        <main className="overflow-hidden text-white bg-blue-800 h-lvh">
            <Header />
            <SideNavigation />
            {children}
            <BottomNavigation />
        </main>
    );
};

export default BackendLayout;
