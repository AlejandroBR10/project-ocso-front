'use server';

import { API_URL} from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function deleteLocation(formData: FormData){
    let locationId = formData.get("deleteValue");
    if(!locationId) return null;

     const response = await fetch(`${API_URL}/locations/${locationId}`, {
        method: "DELETE",
        headers: {
            ...authHeaders(), 

        }
    });
    
    revalidateTag("dashboard:locations");
    redirect(`/dashboard`);
        
    
}