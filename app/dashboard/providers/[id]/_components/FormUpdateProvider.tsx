import updateProvider from "@/actions/providers/update";
import { Provider } from "@/entities";
import { Button, Input } from "@heroui/react";


export default function FormUpdateProvider({provider} : {provider : Provider}){
    const {providerId} = provider;
    const updateProviderWithId = updateProvider.bind(null,providerId)
    return (
        
        <form action={updateProviderWithId} className="bg-orange-200 flex flex-wrap gap-4 flex-grow-0 rounded-md px-10 py-10 mr-20 items-center justify-center">
        
        <Input className="max-w-[250px]" defaultValue={provider.providerName} isRequired label="Nombre" placeholder="Sabritas INC" name="providerName"/>
        <Input className="max-w-[250px]" defaultValue={provider.providerEmail} isRequired label="Correo electronico:"  placeholder= "sabritas@gmail.com" name="providerEmail"/>
        <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} isRequired label="Telefono:" placeholder="442234313" name="providerPhoneNumber"/>
    
        <Button type="submit" color="primary">Actualizar</Button>
    </form>
    )
}