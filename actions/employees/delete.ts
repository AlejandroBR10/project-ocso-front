'use server';

import { API_URL} from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteEmployee(employeeId: string ,formData: FormData){

    formData.delete("$ACTION_REF_0");
    formData.delete("$ACTION_0:1");
    formData.delete("$ACTION_0:0")
     const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders(), 

        }
    });
    
    if(response.status == 200){
revalidateTag("dashboard:employees");
    redirect(`/dashboard/employees`);
    }
        
        
    
}