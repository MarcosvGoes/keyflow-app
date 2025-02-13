'use client'

import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import { Landmark, LockKeyhole, LogOut, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export default function Settings() {

    const [user, setUser] = useState({
        name: 'Marcos Vinicios Goes',
        cpf: 14716584739,
        birth: '12/12/2212',
    })

    const handleBirthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = event.target.value.replace(/\D/g, "");

        if (rawValue.length > 8) return;

        let formattedDate = rawValue
            .replace(/^(\d{2})(\d)/, "$1/$2")
            .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");

        setUser(prevUser => ({
            ...prevUser,
            birth: formattedDate
        }));
    };


    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        setUser(prevUser => ({
            ...prevUser,
            name: newName,

        }));
    };

    function formatCPF(cpf: number) {
        let str = String(cpf).replace(/\D/g, "");

        if (str.length !== 11) {
            throw new Error("O CPF deve ter exatamente 11 dígitos");
        }

        let formattedCPF = `${str.slice(0, 3)}.XXX.XXX-${str.slice(-2)}`;

        return formattedCPF;
    }

    const [activeModal, setActiveModal] = useState<string | null>(null);

    const openModal = (modalName: string) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        <div className="mb-28">
            <header className="border-b w-full border-black/20 py-8 mx-auto max-w-[90%]">
                <Header />
            </header>
            <div className="max-w-[90%] mx-auto my-8">
                <Card>
                    <div className="flex justify-around items-center pb-5">
                        <Image src={"https://github.com/marcosvgoes.png"} width={50} height={50} alt="user photo" className="rounded-full" />
                        <div className="font-semibold grid">
                            <span className="text-xl">Propietário</span>
                            <span className="text-2xl ">{user.name}</span>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="max-w-[90%] mx-auto my-8">
                <Card className="rounded-lg bg-background-secondary text-6xl font-medium">
                    {/* Profile modal */}
                    <div>
                        <li className="items-center justify-between mx-4 flex pb-6 border-black/20 border-b" onClick={() => openModal("profile")}>
                            <div className="flex items-center gap-x-5 text-2xl cursor-pointer">
                                <User size={16} /> Perfil
                            </div>
                            <span className="text-3xl">&#8250;</span>
                        </li>
                        {activeModal === "profile" && (
                            <Modal isOpen={true} setIsOpen={closeModal} modalTitle="Perfil">
                                <form action="" className="grid gap-5">
                                    <div className="grid">
                                        <label htmlFor="name" className="text-xl ml-1 mb-1">Nome</label>
                                        <input type="text" id="name" className="text-xl border rounded-md py-2 px-4 focus:border-blue-500 focus:border-2 focus:outline-none" onChange={handleNameChange} value={user.name} />
                                    </div>
                                    <div className="grid">
                                        <label htmlFor="cpf" className="text-xl ml-1 mb-1">CPF</label>
                                        <input readOnly maxLength={11} id="cpf" className="text-xl border rounded-md py-2 px-4 focus:border-blue-500 focus:border-2 focus:outline-none" value={formatCPF(user.cpf)} />
                                    </div>

                                    <div className="grid">
                                        <label htmlFor="birth" className="text-xl ml-1 mb-1">Data de Nascimento</label>
                                        <input id="cpf" type="birth" className="text-xl border rounded-md py-2 px-4 focus:border-blue-500 focus:border-2 focus:outline-none" value={user.birth} onChange={handleBirthChange} />
                                    </div>
                                    <div className="grid">
                                        <label htmlFor="birth" className="text-xl ml-1 mb-1">Sexo</label>
                                        <select className="py-5" id="gender">
                                            <option value="male">Masculino</option>
                                            <option value="female">Feminino</option>
                                            <option value="other">Outro</option>
                                            <option value="any">Prefiro não dizer</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-5">
                                        <button className="text-xl border py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg" type="submit">Salvar</button>
                                        <button className="text-xl border py-3 text-white bg-red-500 hover:bg-red-600 rounded-lg">Cancelar</button>
                                    </div>
                                </form>
                            </Modal>
                        )}
                    </div>

                    {/* Security modal */}
                    <div>
                        <li className="items-center justify-between mx-4 flex py-6 border-black/20 border-b" onClick={() => openModal("security")}>
                            <div className="flex items-center gap-x-5 text-2xl cursor-pointer">
                                <LockKeyhole size={16} />Segurança
                            </div>
                            <span className="text-3xl">&#8250;</span>
                        </li>
                        {activeModal === "security" && (
                            <Modal isOpen={true} setIsOpen={closeModal} modalTitle="Segurança">
                                Conteúdo do modal de Segurança
                            </Modal>
                        )}
                    </div>

                    {/* Payments modal */}
                    <div>
                        <li className="items-center justify-between mx-4 flex py-6 border-black/20 border-b" onClick={() => openModal("payments")}>
                            <div className="flex items-center gap-x-5 text-2xl cursor-pointer">
                                <Landmark size={16} />Dados de Pagamento
                            </div>
                            <span className="text-3xl">&#8250;</span>
                        </li>
                        {activeModal === "payments" && (
                            <Modal isOpen={true} setIsOpen={closeModal} modalTitle="Dados de Pagamento">
                                Conteúdo do modal de Segurança
                            </Modal>
                        )}
                    </div>

                    <div>
                        <li className="items-center justify-between mx-4 flex py-6 text-red-500">
                            <div className="flex items-center gap-x-5 text-2xl cursor-pointer">
                                <LogOut size={16} />Sair
                            </div>
                            <span className="text-3xl">&#8250;</span>
                        </li>
                    </div>
                </Card>
            </div>
        </div>
    )
}
