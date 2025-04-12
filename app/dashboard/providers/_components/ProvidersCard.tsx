import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function ProvidersCard({ provider }: { provider: Provider }) {
  return (
    <Card>
      <CardHeader>{provider.providerName}</CardHeader>
      <Divider />
      <CardBody>
        <p>
          Correo Electronico: 
        </p>
        <b>{provider.providerEmail}</b>
        <p>
          Telefono:
        </p>
        <b>{provider.providerPhoneNumber}</b>
        { 
        (provider.products.length !== 0) ? (
          <p>
            Tiene <b>{provider.products.length}</b> producto{provider.products.length > 1 ? "s" : " "}
          </p>
        ) : (
          <p>No tiene productos</p>
        )}
      </CardBody>
    </Card>
  );
}
