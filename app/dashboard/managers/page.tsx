import { API_URL } from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ManagerCard from "./_components/ManagerCards";
import ModalGeneric from "../_components/ModalGeneric";
import FormCreateManager from "./_components/FormCreateManager";
import { LuPlus } from "react-icons/lu";


const ManagersPage = async () => {
  
   const responseStores = await fetch(`${API_URL}/locations`,{
    headers : {
        ...authHeaders(),
    }
   })

   const stores: Location[] = await responseStores.json();
 
    return (
             <ModalGeneric icon={<LuPlus size="20"/>}>
                <FormCreateManager stores={stores}/>
             </ModalGeneric>
    );
}

export default ManagersPage;