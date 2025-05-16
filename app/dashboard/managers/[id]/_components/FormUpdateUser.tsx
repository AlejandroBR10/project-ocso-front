"use client";
import updateUser from "@/actions/users/update-user";
import { Employee, User } from "@/entities";
import { Button, Input } from "@heroui/react";
import { generate } from "generate-password";
import { useState } from "react";
import { LuEye } from "react-icons/lu";

export default function FormUpdateUser({user}: {user : User}){

    const [password, setPassword] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const {userId} = user;
    const updateUserById = updateUser.bind(null,userId);
    return (
        <form action={updateUserById} className="py-10 flex flex-col gap-2">
            <h1 className="text-white text-xl font-bold text-center">Actualizar Manager</h1>
            <Input name="userEmail"  defaultValue={user.userEmail}  type="mail" label="Correo de Cuenta" />
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
            <Button  color = "primary" type="submit">Actualizar Manager</Button>
        </form>
    )
}