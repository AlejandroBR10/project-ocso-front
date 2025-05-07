import updateProduct from "@/actions/products/update";
import { Product, Provider } from "@/entities";
import { Button, Input } from "@heroui/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "./DeleteProduct";
import { LuChartNetwork, LuCheck } from "react-icons/lu";

export default function UpdateProduct({product, providers} : {product:Product, providers:Provider[]}){
    const {productId} = product;
    const updateProductById = updateProduct.bind(null,productId);
    return (
   
        <form action={updateProductById} className="p-10 flex flex-col gap-2">
            <Input name = "productName" label = "Nombre del Product" defaultValue={product.productName}/>
            <Input name="price" label = "Precio" defaultValue={String(product.price)}/>
            <Input name = "countSeal" label = "Num. de Sellos" defaultValue={String(product.countSeal)}/>
            <SelectProvider providers={providers} defaultProvider={product.provider.providerId} ></SelectProvider>
            <div className="flex flex-row  flex-grow-0">
            <Button type="submit" color="primary"><LuCheck size={20}/></Button>
            </div>
            
        </form>
      
    );
}