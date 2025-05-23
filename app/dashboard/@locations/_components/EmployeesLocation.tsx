
import { API_URL, TOKEN_NAME } from "@/constants";
import { Employee } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card , CardBody, CardHeader, Divider} from "@heroui/react";
import Link from "next/link";


export default async function EmployeesLocation({ store }: { store: string | string[] | undefined}) {

    console.log("Store value:", store);
    console.log("API Request:", `${API_URL}/employees/location/${store}`);
const response = await fetch(`${API_URL}/employees/location/${store}`,{
              method: 'GET',
                headers: {
                    ...authHeaders(), 
                },
                next: {
                  tags: ["dashboard:locations:employees"]
                }
            });
            const data: Employee[] = await response.json()
    return data?.map((employee: Employee) => {
      const fullName = employee.employeeName +" " + employee.employeeLastName;
        return (
        <Card className="mx-10 my-10">
          <CardHeader>
            <Link href={{pathname:`/dashboard/employees/${employee.employeeId}`}} className="underline">
            <p className="w-full">Nombre: <b>{fullName}</b></p>
            </Link>
          <p className="w-full">Nombre: <b>{fullName}</b></p>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
            <p className="w-full">Telefono: <b>{employee.employeePhoneNumber}</b></p>
          </CardBody>
          </Card>)
            });
      
    
}


