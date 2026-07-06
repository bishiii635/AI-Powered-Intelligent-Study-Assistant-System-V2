"use client";

import React from "react";
import Link from "next/link";
import { LayoutDashboard, Users, FileText, Activity, Settings } from "lucide-react";

const items = [
    { id: 'overview', label: 'Overview', href: '/admin', icon: LayoutDashboard },
    { id: 'users', label: 'Users', href: '/admin?tab=users', icon: Users },
    { id: 'content', label: 'Content', href: '/admin?tab=content', icon: FileText },
    { id: 'analytics', label: 'Analytics', href: '/admin?tab=analytics', icon: Activity },
    { id: 'settings', label: 'System', href: '/admin?tab=settings', icon: Settings },
];

export default function AdminSidebar() {
    return (
        <aside className="hidden lg:block w-72 h-screen border-r bg-card/40 p-6">
            <div className="mb-8">
                <h3 className="text-xl font-bold">Admin</h3>
                <p className="text-xs text-muted-foreground">Control Center</p>
            </div>
            <nav className="space-y-2">
                {items.map((it) => (
                    <Link key={it.id} href={it.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted">
                        <it.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{it.label}</span>
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
