'use server';

import { API_URL, TOKEN_NAME } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";


export default async function deleteManager(managerId : string ,formData  :FormData){
   const response =  await fetch(`${API_URL}/locations/${managerId}`, {
        method: "DELETE",
       body: JSON.stringify(location),
        headers: {
            
           ...authHeaders() 
        }
    });
    
    console.log(response.status);

        revalidateTag("dashboard:managers");
        
    
}


