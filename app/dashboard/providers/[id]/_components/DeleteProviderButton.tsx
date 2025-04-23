import deleteProvider from "@/actions/providers/delete"
import { Button } from "@heroui/react";
import { form } from "@heroui/theme";

export default function DeleteProviderButton({providerId} : {providerId : string}){
    const deleteProviderWithId = deleteProvider.bind(null,providerId);
    return (
        <form action={deleteProviderWithId} className="flex">
            <Button className="w-full" type="submit" color="danger">Estoy Seguro</Button>
        </form>
    )
}