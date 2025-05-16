'use server';

import { API_URL, TOKEN_NAME } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export default async function updateEmployee(employeeId : string ,formData  :FormData){


    const cleanData = new FormData();
   
    for (const [key, value] of Array.from(formData.entries())) {
   if(!key.startsWith("$")){
        cleanData.append(key,value);
   }
   
}

   const response =  await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "PATCH",
       body: cleanData,
        headers: {
            
           ...authHeaders() 
        }
    });
    
   const data = await response.json();
   console.log("Data:",data);
  
    if(response.status === 200){
        revalidateTag("dashboard:employees");
       /* revalidateTag(`dashboard:employees:${employeeId}`);
        redirect("/dashboard/employees");*/
        
    }
        
       
    
}


