import deleteLocation from "@/actions/locations/delete";

import { Button } from "@heroui/react";


export default async function DeleteLocationButton({store}: {store: string | string[] | undefined}){
    if(!store) return null;
    return (
        <form action={deleteLocation}>
            <Button type="submit" name = "deleteValue" value = {store} color="danger">Borrar Tienda</Button>
        </form>
    )
    


}