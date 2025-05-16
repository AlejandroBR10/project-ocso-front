import createManager from "@/actions/managers/create";
import { Button, Input } from "@heroui/react";
import SelectStore from "../[id]/_components/SelectStore";
import { Location } from "@/entities";

export default function FormCreateManager({stores} : {stores : Location[]}){

    return (
        <form className="flex flex-col gap-4" action={createManager}>
            <h1 className="text-4xl text-white font-bold">Crear Manager</h1>
            <Input type="text" name="managerFullName" placeholder="Alejandro" label="Nombre Completo"/>
            <Input type="text" name="managerSalary" placeholder="455453" label="Salario"/>
            <Input type="email" name="managerEmail" placeholder="alejandro@manager.com" label="Correo Electronico"/>
            <Input type="text" name="managerPhoneNumber" placeholder="443323453542" label="Numero Telefonico"/>
            <SelectStore stores={stores}/>
            <Button color="primary" type="submit">Subir datos</Button>
        </form>
    )
}