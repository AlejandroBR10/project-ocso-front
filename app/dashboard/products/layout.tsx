import { API_URL } from "@/constants";
import { Product, Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import FilteredCards from "./_components/FilteredCards";
import { ReactNode } from "react";

const LayoutProduct = async ({children} : {children:ReactNode}) => {
    const responseProducts = await  fetch(`${API_URL}/products`, {
     headers : {
        ...authHeaders()
     },
     next : {
        tags : ["dashboard:products"]
     }
    });
    const products: Product[] = await responseProducts.json();
    const responseProvider = await fetch(`${API_URL}/providers`, {
        headers : {
            ...authHeaders()
        },
        next : {
            tags : ["dashboard:providers"]
        }
    })
    const providers : Provider = await responseProvider.json();
    return (
        <div className="h-[90vh] w-full flex flex-row">
            <div className="w-3/12">
            <FilteredCards products={products} providers={providers}/>
            </div>
            <div className="w-9/12">
                {children}
            </div>
        </div>
    )
}
export default LayoutProduct;