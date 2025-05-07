import createProduct from "@/actions/products/create";
import { API_URL } from "@/constants";
import { Provider } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { Button, Input } from "@heroui/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";

 
const ProductsPage = async () => {

    const responseProviders = await fetch(`${API_URL}/providers`,{
        headers : {
            ...authHeaders(),
        }
    });
    const providers: Provider[] = await responseProviders.json();
    return (
        <form className=" px-20 justify-center pt-10" action={createProduct}>
            <div className="flex flex-col p-10 bg-orange-600 rounded-md gap-6">
            <h1 className="text-2xl text-white font-bold">Crear Producto</h1>
            <Input label = "Nombre del producto" name = "productName"/>
            <Input label = "Precio" endContent = {<LuDollarSign size={20}/>}name = "price"/>
            <Input label = "Num. de Sellos" name = "countSeal"/>
            <SelectProvider providers={providers} />
            <Button type="submit" color="primary">Crear Producto</Button>
            </div>
        </form>
 
 
 
    );
};
export default ProductsPage;