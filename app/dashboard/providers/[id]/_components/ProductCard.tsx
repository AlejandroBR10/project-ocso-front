import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function ProductCard({product} : {product : Product}){
    return (
        <Card className="max-w-[350px]">
            <CardHeader>
            {product.productName}    
            </CardHeader>
            <Divider/>
            <CardBody>
                <p>Nombre del Producto:<b>{product.productName}</b></p>
                <p>Precio del Producto:<b>{product.price}</b></p>
            </CardBody>
        </Card>
    )
}