"use client";

import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <div className="flex">
                <AdminSidebar />
                <div className="flex-1 p-8">
                    <AdminHeader />
                    <main className="mt-6">{children}</main>
                </div>
            </div>
        </div>
    );
}
