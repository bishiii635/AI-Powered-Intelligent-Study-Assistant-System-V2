"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";
import { useCurrentUser } from "@/lib/use-current-user";

export default function AdminHeader() {
    const { displayName } = useCurrentUser();

    return (
        <header className="flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-bold">Control Center</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {displayName}</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                    <Input placeholder="Search users, content..." className="w-80" />
                </div>
                <Button variant="outline" className="rounded-xl">
                    <Download className="mr-2 h-4 w-4" /> Export
                </Button>
            </div>
        </header>
    );
}
