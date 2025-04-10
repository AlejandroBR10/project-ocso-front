'use server';

import { API_URL, TOKEN_NAME } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";


export default async function updateManager(managerId : string ,formData  :FormData){
   const response =  await fetch(`${API_URL}/locations/${managerId}`, {
        method: "PATCH",
       body: JSON.stringify(location),
        headers: {
            
           ...authHeaders() 
        }
    });
    
    console.log(response.status);
    if(response.status === 200){
        revalidateTag("dashboard:managers");
        revalidateTag(`dashboard:managers:${managerId}`);
    }
        
       
    
}


