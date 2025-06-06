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
  
  export default function ModalGeneric({children, icon}: {children: ReactNode,icon : ReactNode}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
      <div>
        <Button color="primary" onPress={onOpen}>{icon}</Button>
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
  