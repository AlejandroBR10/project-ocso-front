"use client";

import registerEmployee from "@/actions/users/register-employee";
import { Employee } from "@/entities";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { generate } from "generate-password";

export default function FormCreateUserEmployee({employee}: {employee : Employee}){
    const [password, setPassword] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const {employeeId} = employee;
    const registerEmployeeById = registerEmployee.bind(null,employeeId);
    return (
        <form action={registerEmployeeById} className="py-10 flex flex-col gap-2">
            <h1 className="text-white text-xl font-bold text-center">Crear Usuario</h1>
            <Input name="userEmail" type="mail" label="Correo de Cuenta"/>
            <Input value={password} name="userPassword" type={visible ? "text" : "password"} label="Contraseña" endContent ={
                <Button type="button" onMouseUp={()=> setVisible(false)}  onMouseDown={()=> setVisible(true)}>
                    <LuEye size="40"/>
                </Button>
            }/>
            <Button color="danger" onPress={()=>{
                setPassword(generate({length : 10}))
            }}>
                Generar Constraseña
            </Button>
            <Button color="primary"  type="submit">Crear Usuario</Button>
        </form>
    )
}