import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { headers } from "next/headers";
import ManagerCard from "./_components/ManagerCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";

export default async function ManagerPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(`${API_URL}/managers/${params.id}`, {
    method: "GET",
    headers: {
      ...authHeaders(),
    },
    next :{
        tags : [`dashboard:managers:${params.id}` , `dashboard:managers`]
    }
  });
  const data: Manager = await response.json();
  console.log(data);

  return (
    
  <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
  <ManagerCard manager={data}/>
  <div className="bg-white shadow-medium rounded-md px-10 py-2">
  <DeleteManagerButton managerId={data.managerId}/>
  </div>
  </div>
  );
}
