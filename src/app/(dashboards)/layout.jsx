"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const DashboardLayout = ({ children }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Overview", href: "/user-dashboard/overview" },
        { name: "Add Products", href: "/user-dashboard/addProducts" },
    ];

    
    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    // Loading বা session না থাকলে UI show না করা
    if (status === "loading" || !session) return <div className="flex justify-center items-center h-64">
        <div className="h-10 w-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>;
    </div>

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-blue-50 to-blue-100">
            {/* Mobile Navbar */}
            <div className="md:hidden bg-blue-400 flex items-center justify-between p-4 shadow-md">
                <Link href='/'>
                    <div className="flex justify-center items-center gap-2">
                        <img className="w-12 h-12 rounded-full" src="/my-store.webp" alt="" />
                        <span className="text-2xl font-bold text-blue-600">MyStore</span>
                    </div>
                </Link>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white text-2xl"
                >
                    <HiMenu />
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`
          bg-blue-200 p-6 rounded-r-2xl shadow-lg
          md:w-64 w-60 md:block ${isOpen ? "block" : "hidden"}
        `}
            >
                <Link href='/'>
                    <div className="flex justify-center items-center gap-2">
                        <img className="w-12 h-12 rounded-full" src="/my-store.webp" alt="" />
                        <span className="text-2xl font-bold text-blue-600">MyStore</span>
                    </div>
                </Link>

                <ul className="space-y-4 mt-5">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`block p-3 rounded-lg font-medium transition-all text-center md:text-left ${isActive
                                        ? "bg-blue-500 text-white shadow-lg"
                                        : "hover:bg-blue-500 hover:text-white"
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6">
                <div className="flex flex-col">{children}</div>
            </main>
        </div>
    );
};

export default DashboardLayout;
