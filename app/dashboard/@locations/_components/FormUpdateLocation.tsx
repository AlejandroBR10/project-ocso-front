import { Button, Input } from "@heroui/react";

import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Manager, Location } from "@/entities";
import { object } from "framer-motion/client";
import { updateLocation } from "@/actions/locations/update";
export  default async function FormUpdateLocation({store}:{ store: string | string[] | undefined}){
    if(!store || store === undefined || typeof store === "object") return null;
    const updateWithStoreId = updateLocation.bind(null,store);
  
    console.log("API Request:", `${API_URL}/managers`);

    const responseManagers = await fetch(`${API_URL}/managers`, {
        method: "GET",
        headers: {
           ...authHeaders(), 

        },
        next : {
           tags: ["dashboard:managers"]
        }
    });
    const dataManagers : Manager[] = await responseManagers.json();

    const responseLocation = await fetch(`${API_URL}/locations` , {
        method: "GET",
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:locations"],
        }
    });
  
    const dataLocations : Location[] = await responseLocation.json();

    let foundLocation = dataLocations.find((location)=>location.locationId === +store);
    let foundManager = dataManagers.find((manager)=> manager.managerId === foundLocation?.manager?.managerId)
    return (
    <form action={updateWithStoreId} className="bg-orange-400 py-2 px-10 flex flex-col gap-6 w-full rounded-lg">
        <h1 className="text-3xl text-white text-center">Crear Tienda</h1>
        <Input  required = {true} defaultValue= {foundLocation?.locationName} label="Nombre" placeholder="Ocso Juriquiya" name="locationName"/>
        <Input required = {true} defaultValue= {foundLocation?.locationAddress} label="Direccion" placeholder="Av de la Luz S/N" name="locationAddress"/>
        <Input required = {true} defaultValue= {foundLocation?.locationLatLng[0].toString()} label="Latitud"  placeholder= "-120" name="locationLat"/>
        <Input  required = {true} defaultValue= {foundLocation?.locationLatLng[1].toString()} label="Longitud" placeholder="20" name="locationLng"/>
        <SelectManager  defaultManager = {foundManager?.managerId} managers={dataManagers} locations={dataLocations}/>    
        
        <Button type="submit" color="primary">Actualizar</Button>
    </form>
    );
}   