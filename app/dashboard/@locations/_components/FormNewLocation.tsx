import { Input } from "@heroui/react";
import { createLocation } from "@/actions/locations/create";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import SelectManager from "./SelectManager";
export  default async function FormNewLocation(){
    const token = cookies().get(TOKEN_NAME)?.value;
    console.log("API Request:", `${API_URL}/managers`);

    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`    

        }
    });
    const responseLocation = await axios.get(`${API_URL}/locations` , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });


    return (
    <form action={createLocation}>
        <Input label="Nombre" placeholder="Ocso Juriquiya" name="locationName"/>
        <Input label="Direccion" placeholder="Av de la Luz S/N" name="locationAddress"/>
        <Input label="Latitud"  placeholder= "-120" name="locationLat"/>
        <Input label="Longitud" placeholder="20" name="locationLng"/>
        <SelectManager managers={responseManagers.data} locations={responseLocation.data}/>    
        <button>Subir</button>
    </form>
    );
}   