import { Children } from "react";
import ManagerCard from "./_components/ManagerCard";

export default function LayoutManagers({children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <>
        <div className="w-4/12 h-[90vh] max-h-[90vh] overflow-hidden overflow-y-auto" >
            <ManagerCard/>
        </div>
        <div>
            {children}
        </div>
        </>
    )
}