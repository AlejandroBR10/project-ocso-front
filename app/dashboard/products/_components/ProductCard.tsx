import { Product } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="max-w-[350px] mb-10">
      <CardHeader>{product.productName}</CardHeader>
      <Divider />
      <CardBody>
        <p>
          Nombre del Producto:<b>{product.productName}</b>
        </p>
        <p>
          Precio:<b>{product.price}</b>
        </p>
        <p>
          Numero de Sellos:<b>{product.countSeal}</b>
        </p>
        <p>
          Proveedor:{" "}
          <Link
            className="font-bold underline"
            href={`/dashboard/providers/${product.provider.providerId}`}
          >
            {product.provider.providerName}
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}
