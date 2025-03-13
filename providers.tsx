import {HeroUIProvider} from "@heroui/react";
console.log(HeroUIProvider); 

export default function Providers({
    children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return <HeroUIProvider>{children}</HeroUIProvider>;
    
}