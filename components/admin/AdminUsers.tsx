"use client";

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const mockUsers = [
    { id: 1, name: "Student 01", email: "student01@demo.edu", status: "Active", plan: "Pro", joined: "2 mins ago" },
    { id: 2, name: "Student 02", email: "student02@demo.edu", status: "Inactive", plan: "Free", joined: "1 hour ago" },
    { id: 3, name: "Student 03", email: "student03@demo.edu", status: "Active", plan: "Pro", joined: "3 hours ago" },
];

export default function AdminUsers() {
    return (
        <div className="mt-6 bg-card/30 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">User Management</h3>
                <Button variant="ghost">Invite User</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockUsers.map((u) => (
                        <TableRow key={u.id}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>{u.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium">{u.name}</div>
                                        <div className="text-xs text-muted-foreground">{u.email}</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>{u.status}</TableCell>
                            <TableCell>{u.plan}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{u.joined}</TableCell>
                            <TableCell><Button variant="ghost">Manage</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
