"use client"; // Se estiver dentro da pasta `app`, use esse statement no topo do arquivo

import Card from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import RevenueChart from "@/components/RevenueChart/RevenueChart";
import { Circle } from "phosphor-react";


export default function Dashboard() {
    return (
        <div className="mb-28">
            <header className="border-b w-full border-black/20 py-8 mx-auto max-w-[90%]">
                <Header />
            </header>
            <div className="max-w-[90%] mx-auto">
                <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 text-3xl my-8">
                    <Card title="No Mês" subtitle="Total recebido" className="text-2xl font-semibold text-green-700 flex gap-x-1 items-center">
                        <p className="text-xl">R$</p>  {"4550,00"}
                    </Card>
                    <Card title="A receber" subtitle={"Outubro"} className="text-2xl font-semibold text-green-700 flex gap-x-1 items-center">
                        <p className="text-xl">R$</p> {"2500,00"}
                    </Card>
                    <Card title="Próximo" subtitle={"18 de outubro"} className="text-2xl font-semibold text-green-700 flex gap-x-1 items-center">
                        <p className="text-xl">R$</p> {"850,00"}
                    </Card>
                    <Card title="Imóveis" subtitle="Status" className="">
                        <div className="grid">
                            <div className="flex gap-x-3 items-center">
                                <Circle size={10} color="red" weight="fill" />
                                <span className="text-lg font-medium">{"1"} Disponível</span>
                            </div>
                            <div className="flex gap-x-3 items-center">
                                <Circle size={10} color="green" weight="fill" />
                                <span className="text-lg font-medium">{"3"} Ocupados</span>
                            </div>
                        </div>
                    </Card>
                    <Card title="Contratos" subtitle="A vencer em 30 dias" className="text-2xl font-semibold text-red-600">
                        0
                    </Card>
                    <Card title="Inadimplentes" subtitle="Outubro" className="text-red-600 text-2xl font-semibold">
                        0
                    </Card>
                </main>
            </div>
            <div className="max-w-[90%] mx-auto">
                <Card title="Receitas Mensais" subtitle="Faturamento" className="py-5 flex">
                    <RevenueChart />
                </Card>
            </div>
        </div>
    )
}