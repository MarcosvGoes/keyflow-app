'use client'
import { DollarSign, House, LayoutDashboard, LogOut, Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed shadow-[0px_-5px_5px_0px_#00000024] bottom-0 bg-white py-4 z-50 lg:left-0 w-full lg:h-full lg:w-80 lg:flex lg:flex-col">
            <div className="lg:max-w-[80%] mx-auto items-center gap-x-5 mb-5 hidden lg:flex">
                <Image src="https://github.com/marcosvgoes.png" width={40} height={40} alt="logo" className="rounded-full" />
                <div className="">
                    <span className="text-xl font-semibold">Marcos Goes</span>
                    <p className="text-base">Propietário</p>
                </div>
            </div>
            <hr className="py-5 max-w-[80%] mx-auto hidden lg:flex" />
            <ul className="flex justify-around max-w-[80%] mx-auto lg:flex-col lg:gap-10">
                <Link href="/dashboard">
                    <li className={`flex flex-col items-center gap-2 lg:gap-5 lg:flex-row ${pathname === '/dashboard' ? "text-blue-600" : ""}`}><LayoutDashboard /><span className="font-semibold text-xs lg:text-2xl">Dashboard</span></li>
                </Link>
                <Link href="/finances">
                    <li className={`flex flex-col items-center gap-2 lg:gap-5 lg:flex-row ${pathname === '/finances' ? "text-blue-600" : ""}`}><DollarSign /><span className="font-semibold text-xs lg:text-2xl">Finanças</span></li>
                </Link>
                <Link href="/propertys">
                    <li className={`flex flex-col items-center gap-2 lg:gap-5 lg:flex-row ${pathname === '/propertys' ? "text-blue-600" : ""}`}><House /><span className="font-semibold text-xs lg:text-2xl">Imóveis</span></li>
                </Link>
                <Link href="/settings">
                    <li className={`flex flex-col items-center gap-2 lg:gap-5 lg:flex-row ${pathname === '/settings' ? "text-blue-600" : ""}`}><Ellipsis /><span className="font-semibold text-xs lg:text-2xl">Mais</span></li>
                </Link>
            </ul>
            <Link href="#" className="mt-auto mb-10">
                <li className="items-center max-w-[80%] mx-auto hidden lg:flex gap-5"><LogOut /><p className="text-2xl font-semibold text-red-600">Sair</p></li>
            </Link>
        </nav>
    )
}