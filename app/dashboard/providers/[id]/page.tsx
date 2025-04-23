import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import ProvidersCard from "../_components/ProvidersCard"
import { Product, Provider } from "@/entities";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";

export default async function ProvidersPage({params} : {params:{id:string}}){
    const provider:Provider = await (await fetch(`${API_URL}/providers/${params.id}` , {
        method: 'GET',
        headers :{
            "Content-Type": "application/json",
            ...authHeaders()
        }
    })).json()
    return (
       <div className="flex flex-grow-0 flex-col pl-10 gap-10 h-[90vh] pt-10">
        <ProvidersCard provider={provider}/>
        <div className="h-1 bg-orange-900 w-[85vw]"/>
        <div className="flex flex-wrap gap-10">
        {
        provider.products.map((product: Product)=>(
            <Link href={{pathname:`/dashboard/products/${product.productId  }`}} key={product.productId}
            className="hover:scale-110 transition-all"
            >
             <ProductCard product={product}/>
             </Link>  
             ))}
       </div> 
       </div>
    );
}