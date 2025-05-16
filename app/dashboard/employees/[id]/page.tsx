import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Image } from "@heroui/react";
import FormUpdateEmployee from "./_components/FormUpdateEmployee";
import EmployeeDataCard from "./_components/EmployeeDataCard";
import DeleteEmployee from "./_components/DeleteEmployee";
import { LuUser } from "react-icons/lu";
import CreateUser from "./_components/CreateUser";


export default async function EmployeePage({params} : {params : {id : string}}) {
    const responseEmployee = await  fetch(`${API_URL}/employees/${params.id}`,{
        headers: {
            ...authHeaders()
        }
})
const employee :Employee = await responseEmployee.json();
return(
    <div className="w-full h-[90vh] flex flex-row items-center justify-center">
       <EmployeeDataCard employee={employee}/>
        <FormUpdateEmployee employee={employee}/>
    </div>
)
;}
