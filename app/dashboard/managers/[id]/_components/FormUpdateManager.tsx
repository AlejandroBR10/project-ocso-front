import updateManager from "@/actions/managers/update";
import { Manager } from "@/entities";
import { Button, Input } from "@heroui/react";
import { Location } from "@/entities";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import SelectStore from "./SelectStore";

export  default async function FormUpdateManager({ manager }: { manager: Manager }) {
  const updateManagerWithId = updateManager.bind(null, manager.managerId);
  const responseStores = await fetch(`${API_URL}/locations` , {
    headers: {
      
      ...authHeaders()

    }
  })
  const stores = await responseStores.json()
  return (
    <form action={updateManagerWithId} className="bg-orange-400 rounded-md flex flex-col flex-grow-0 gap-2">
      <h1>Actualizar Manager</h1>
      <Input
      isRequired
      label = "Nombre completo"
        defaultValue={manager.managerFullName}
        placeholder="Marco Aurelio"
        name="managerFullName"
      />
      <Input
     isRequired
      label = "Correo electrónico"
        defaultValue={manager.managerEmail}
        placeholder="manager@ocso.com"
        name="managerEmail"
      />
      <Input
      isRequired
      label = "Salario"
        defaultValue={String(manager.managerSalary)}
        placeholder="124.122"
        name="managerSalary"
      />
      <Input
      isRequired
      label = "Número de teléfono"
        defaultValue={manager.managerPhoneNumber}
        placeholder="44234442"
        name="managerPhoneNumber"
      />
      <SelectStore stores={stores} defaultStore={manager?.location?.locationId} />
      <Button type="submit" color="primary">Actualizar</Button>
      
      
    </form>
  );
}
