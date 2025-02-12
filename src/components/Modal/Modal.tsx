import { ReactNode } from "react";
import Card from "../Card/Card";

interface ModalProps {
    children: ReactNode,
    modalTitle: string,
}

export default function Modal({ children, modalTitle }: ModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50" />

            <section className="relative w-full max-w-[80%] max-h-[90vh] bg-white rounded-lg shadow-lg overflow-auto">
                <Card title={modalTitle} isModal>
                    {children}
                </Card>
            </section>
        </div>
    );
}
