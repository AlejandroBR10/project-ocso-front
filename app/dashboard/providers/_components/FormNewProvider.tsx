import createProvider from "@/actions/providers/create";

import { Button, Input } from "@heroui/react";

export default async function FormNewProvider(){
    return (
        <form action={createProvider} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white font-semibold  text-center">Crear Provedor</h1>
            <Input isRequired label="Nombre Completo" placeholder="Sabritas INC" name="providerName"/>
            <Input isRequired label="Correo electronico:"  placeholder= "sabritas@gmail.com" name="providerEmail"/>
            <Input isRequired label="Telefono:" placeholder="442234313" name="providerPhoneNumber"/>
 
            <Button type="submit" color="primary">Subir</Button>
        </form>
        );
}