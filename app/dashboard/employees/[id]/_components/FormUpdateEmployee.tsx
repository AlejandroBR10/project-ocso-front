import updateEmployee from "@/actions/employees/update";
import { Employee } from "@/entities";
import { Button, Input } from "@heroui/react";
import SelectLocation from "../../_components/SelectLocation";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";

export default async  function FormUpdateEmployee({employee} : {employee: Employee}){
    const {employeeId} = employee;
    const updateEmployeeById = updateEmployee.bind(null,employeeId);
    const responseLocation = await fetch(`${API_URL}/locations`,{
        headers : {
            ...authHeaders(),
        }
    });
    const locations = await responseLocation.json();
    return(
        <form  action={updateEmployeeById} className="flex flex-col gap-2 p-8 bg-orange-600 h-fit rounded-md m-2">
            <Input  label="Nombre"  name="employeeName" defaultValue={employee.employeeName}/>
            <Input label="Apellidos" name="employeeLastName" defaultValue={employee.employeeLastName}/>
            <Input label="Correo Electronico"  name="employeeEmail" defaultValue={employee.employeeEmail}/>
            <Input  label="Numero Telefonico" name="employeePhoneNumber" defaultValue={employee.employeePhoneNumber}/>
            <Input label="Foto" name="employeePhoto" type="file" defaultValue={employee.employeePhoto}/>
            <SelectLocation stores={locations} defaultStore={employee.location?.locationId}/>
            <Button type="submit" color="primary" variant="shadow">Actualizar Datos</Button>
        </form>
    )
}