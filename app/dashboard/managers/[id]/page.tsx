import { API_URL } from "@/constants";
import { Manager } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { headers } from "next/headers";
import ManagerCard from "./_components/ManagerCard";

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
    
  <div>
  <ManagerCard manager={data}/>
  </div>
  );
}
