import React from "react";
import BottomNavigation from "@/Layout/include/BottomNavigation";
import Header from "@/Layout/include/Header";
import SideNavigation from "@/Layout/include/SideNavigation";

const BackendLayout = ({ children }) => {
    return (
        <main className="relative overflow-hidden h-lvh">
            <Header />
            <SideNavigation />
            {children}
            <BottomNavigation />
        </main>
    );
};

export default BackendLayout;
