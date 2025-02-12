import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import { ArrowBigRight, ChevronsRight, HomeIcon } from "lucide-react";

export default function Finances() {
    return (
        <div className="mb-28">
            <header className="border-b w-full border-black/20 py-8 mx-auto max-w-[90%]">
                <Header />
            </header>
            <div className="max-w-[90%] mx-auto grid grid-cols-2 my-8 gap-5">
                <Card title="No Mês" subtitle="Total recebido" className="text-2xl font-semibold text-green-700 flex gap-x-1 items-center">
                    <p className="text-xl">R$</p>  {"4550,00"}
                </Card>
                <Card title="Próximo" subtitle={"18 de outubro"} className="text-2xl font-semibold text-green-700 flex gap-x-1 items-center">
                    <p className="text-xl">R$</p> {"850,00"}
                </Card>
            </div>
            <div className="max-w-[90%] mx-auto">
                <Card title="Extrato" subtitle="" className="">
                    <div className="grid">
                        <span className="text-copy-secondary mb-1 text-base">22 de Julho de 2024</span>
                        <ul className="grid gap-y-3">
                            <li className="flex justify-between items-center">
                                <div className="flex items-center gap-x-2">
                                    <HomeIcon size={28} className="bg-transparent border-border border rounded-md text-copy-primary p-1" />
                                    <section className="leading-none">
                                        <h1 className="items-center text-xl flex gap-x-2">Contrato <p className="font-medium text-lg">#29023</p></h1>
                                        <h2 className="text-sm font-medium text-copy-primary">Luiz Inacio da Silva</h2>
                                    </section>
                                </div>
                                <div className="grid">
                                    <span className="text-lg lg:text-base font-semibold text-green-700 flex gap-x-1 items-center"><p className="text-sm">R$</p> 850,00</span>
                                    <span className="text-xs font-medium text-end text-copy-secondary">08:59</span>
                                </div>
                            </li>
                            <li className="flex justify-between items-center">
                                <div className="flex items-center gap-x-2">
                                    <HomeIcon size={28} className="bg-transparent border-border border rounded-md text-copy-primary p-1" />
                                    <section className="leading-none">
                                        <h1 className="items-center text-xl flex gap-x-2">Contrato <p className="font-medium text-lg">#29023</p></h1>
                                        <h2 className="text-xs font-medium text-copy-primary">Edgar Alan Poe</h2>
                                    </section>
                                </div>
                                <div className="grid">
                                    <span className="text-lg lg:text-base font-semibold text-green-700 flex gap-x-1 items-center"><p className="text-sm">R$</p> 1250,00</span>
                                    <span className="text-xs font-medium text-end text-copy-secondary">18:25</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="grid mt-4">
                        <span className="text-copy-secondary mb-1 text-base">18 de Julho de 2024</span>
                        <ul className="grid gap-y-3">
                            <li className="flex justify-between items-center">
                                <div className="flex items-center gap-x-2">
                                    <HomeIcon size={28} className="bg-transparent border-border border rounded-md text-copy-primary p-1" />
                                    <section className="leading-none">
                                        <h1 className="items-center text-xl flex gap-x-2">Contrato <p className="font-medium text-lg">#29023</p></h1>
                                        <h2 className="text-sm font-medium text-copy-primary">Guilherme Costa</h2>
                                    </section>
                                </div>
                                <div className="grid">
                                    <span className="text-lg lg:text-base font-semibold text-green-700 flex gap-x-1 items-center"><p className="text-sm">R$</p> 1020,00</span>
                                    <span className="text-xs font-medium text-end text-copy-secondary">10:10</span>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <span className="flex items-center justify-between w-full font-semibold text-xl text-[#4d6bbe] mt-4 bg-black/5 py-2 px-5 rounded-xl">Exibir extrato completo<ChevronsRight size={20} className="text-lg" /></span>
                </Card>
            </div>
        </div>
    )
}