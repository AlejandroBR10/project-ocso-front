'use server';

import { API_URL, TOKEN_NAME } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export default async function createEmployee(formData  :FormData){

    formData.delete("$ACTION_REF_0");
    formData.delete("$ACTION_0:1");
    formData.delete("$ACTION_0:0")

   const response =  await fetch(`${API_URL}/employees`, {
        method: "POST",
       body: formData,
        headers: {
           ...authHeaders() 
        }
    });
    
   const data = await response.json();
   console.log(data);
  
    if(response.status === 201){
       revalidateTag("dashboard:employees");
        redirect("/dashboard/employees");
        
    }
        
       
    
}


