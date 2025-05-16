'use server';

import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { user } from "@heroui/theme";
import { revalidateTag } from "next/cache";

export default async function updateUser(userId : string , formData  :FormData){
    let data : any = {};
    data.userEmail = formData.get("userEmail") ? formData.get("userEmail") : undefined;
    data.userPassword  = formData.get("userPassword") ? formData.get("userPassword") : undefined;


    const response = await fetch(`${API_URL}/auth/user/${userId}`,{
        method : "PATCH",
        headers : {
            ...authHeaders(),
            "Content-type" : "application/json",
        },
        body : JSON.stringify(data),
        
    })

    console.log( await response.json());
    if(response.status == 200){
    //revalidateTag(`dashboard:employees:${userId}`);

    }
}