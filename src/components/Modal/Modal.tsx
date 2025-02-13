import { ReactNode } from "react";
import Card from "../Card/Card";
import { X } from "lucide-react";

interface ModalProps {
    children: ReactNode;
    modalTitle: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ children, modalTitle, isOpen, setIsOpen }: ModalProps) {
    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50" />
            <section className="relative w-full max-w-[90%] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-auto">
                <Card title={modalTitle}>
                    <button onClick={closeModal} className="absolute top-3 right-3 text-red-500">
                        <X size={18} strokeWidth={4} />
                    </button>
                    {children}
                </Card>
            </section>
        </div>
    );
}
