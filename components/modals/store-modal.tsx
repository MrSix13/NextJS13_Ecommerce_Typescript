"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";


export const StoreModal = () => {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Create Store"
            description="Add a new Store to manage products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Feature Create Store Form
        </Modal>
    )
}