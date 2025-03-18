import { nav } from "framer-motion/client";
import { BiHome } from "react-icons/bi";

export default function Sidebar(){
    return (
        <nav className="w-[10vw] h-[90vh] bg-orange-200 flex flex-col items-center py-20">
            <BiHome className="w-[10vh]"/>

        </nav>
    )
}