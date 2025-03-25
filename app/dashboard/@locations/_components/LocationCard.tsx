import { API_URL, TOKEN_NAME } from "@/constants";
import { Location } from "@/entities";
import { Card , CardHeader ,CardBody, Divider} from "@heroui/react";
import axios from "axios";
import { cookies } from "next/headers";
import Link from "next/link";
export default async function LocationCard({store} :{store: string | string [] | undefined}){
    if(!store)return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const {data} = await axios.get<Location>(`${API_URL}/locations/${store}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <Card>
            <CardHeader>
            <b className="w-full text-2xl">{data.locationName}</b>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-col w-full items-center">
            <p className="w-full">Manager: <Link href={{pathname: `/dashboard/managers`}}><b>{data.manager?.managerFullName}</b></Link></p>
            <p className="w-full">Direccion: <b>{data.locationAddress}</b> </p>
            <iframe className="border-2 border-orange-800 rounded-md my-2"
             width="300"
            height="200"
             loading="lazy"
             src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBGqziK-QTSTDtk1Ay2tJIOzdGpfR4aHz0
                  &q=${data.locationLatLng[0]}, ${data.locationLatLng[1]}`}>
                    </iframe>
            </CardBody>
        </Card>
    )
}