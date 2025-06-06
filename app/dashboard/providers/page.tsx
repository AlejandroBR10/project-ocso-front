
import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProvidersCard from "./_components/ProvidersCard";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuPlus } from "react-icons/lu";
import CreateProvider from "./_components/CreateProvider";
import FormNewProvider from "./_components/FormNewProvider";


const ProvidersPage = async() => {
    const response = await fetch(`${API_URL}/providers` , {
        headers: {
            ...authHeaders(),
        },
        next: {
            tags: ["dashboard:providers"]
        }
    });
    const providers:Provider[] = await response.json();

    return (
        <div className=" flex flex-grow-0 flex-col items-end w-full px-10 pt-10 h-[90vh]">
          <CreateProvider>
            <FormNewProvider/>
          </CreateProvider>
        <div className="flex flex-wrap w-full py-20 flex-grow-0  gap-14">
            {providers.map((provider: Provider) => (
                <Link   key={provider.providerId} className ="hover:scale-110 transition-transform" href={{pathname : `/dashboard/providers/${provider.providerId}`}}>
                <ProvidersCard provider={provider}/>
                </Link>
            ))}
        </div>
        </div>
    )
}

export default  ProvidersPage;