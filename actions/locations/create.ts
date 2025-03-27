'use server';

import { API_URL, TOKEN_NAME } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";

export async function createLocation(formData  :FormData){
    let location : any = {};
    let locationLatLng = [0,0];
    for(const key of formData.keys()){
        const value = formData.get(key);
        if(value){
            if(key === "locationLat"){
                locationLatLng[0] = +value;
            }else if(key === "locationLng"){
                locationLatLng[1] = +value;
            }else {
                location[key] = value;
            }
        }
        //location.locationName === location[key]
        //Sabiendo que estamos pasando las llaves en los parametros

    }
    location.locationLatLng = locationLatLng;
    //console.log(location);
   const response =  await fetch(`${API_URL}/locations`, {
        method: "POST",
       body: JSON.stringify(location),
        headers: {
           ...authHeaders()
        }
    });
    if(response.status === 2001) revalidateTag("dashboard:locations");

    }
