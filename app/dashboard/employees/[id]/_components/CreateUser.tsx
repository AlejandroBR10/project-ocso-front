'use client';
import {
    Modal,
    ModalContent,
    ModalBody,
    Button,
    useDisclosure,
    Image
  } from "@heroui/react";
import { ReactNode } from "react";
import { LuPencil, LuPlus } from "react-icons/lu";
  
  export default function CreateUser({children,icon,photo}: {children: ReactNode, icon : ReactNode, photo : string | undefined}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <div>
        <Image src = {photo} onClick={onOpen} className="object-cover" isZoomed classNames={{img : "size-60"}}/>
        <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {() => (
              <>
              
                <ModalBody>
                  {children}
                </ModalBody>
            
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  }
  