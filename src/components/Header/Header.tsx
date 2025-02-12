'use client'
import { usePathname } from "next/navigation";

export default function Header({ }) {

    const pathname = usePathname();

    const getPageName = () => {
        if (pathname === '/dashboard') {
            return 'Dashboard';
        } else if (pathname === '/finances') {
            return 'Finanças';
        } else if (pathname === '/propertys') {
            return 'Imóveis';
        } else if (pathname === '/settings') {
            return 'Configurações';
        } else {
            return 'error';
        }
    };

    return (
        <header className="text-3xl font-semibold">
            {getPageName()}
        </header>
    );
}
