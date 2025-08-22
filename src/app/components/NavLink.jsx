"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const baseClass = "hover:text-blue-600 transition-colors";
  const activeClass = "text-blue-600 font-semibold border-b-2";
  const inactiveClass = "text-gray-700";

  const classes =
    pathname === href ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
