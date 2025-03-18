"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface   NavItemProps {
    icon: JSX.Element
    path: string
}

const NavItem= ({icon, path}: NavItemProps)=>{
    const pathName = usePathname();
    return (
        <>

        <Link href={path} className={pathName=== path ? "bg-orange-400 w-full flex justify-center transition-colors" : ""}>
        {icon}
        </Link>
        </>
    )
}   
export default NavItem;