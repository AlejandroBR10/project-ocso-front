import createEmployee from "@/actions/employees/create";
import { API_URL } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";
import SelectLocation from "./SelectLocation";

export default async  function FormCreateEmployee(){
    const responseLocation = await fetch(`${API_URL}/locations`,{
        headers :{
            ...authHeaders()
        }
    })

    const locations = await responseLocation.json();
    return(
        <form  action={createEmployee} className="flex flex-col gap-2 p-8 bg-orange-600 h-fit rounded-md m-2">
            <Input isRequired={true} label="Nombre"  name="employeeName" placeholder="Alejandro"/>
            <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Balderas"/>
            <Input isRequired={true} label="Correo Electronico"  name="employeeEmail" placeholder="alebalderas@gmail.com"/>
            <Input isRequired={true} label="Numero Telefonico" name="employeePhoneNumber" placeholder="4427765439"/>
            <Input isRequired={false} label="Foto" name="employeePhoto" type="file" />
            <SelectLocation stores={locations}/>
            <Button type="submit" color="primary" variant="shadow">Crear empleado</Button>
        </form>
    )
}
