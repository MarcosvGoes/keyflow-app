import { X } from "lucide-react"
import { ReactNode } from "react"

interface CardProps {
    children: ReactNode,
    title?: string,
    subtitle?: string,
    className?: string,
    home?: boolean,
    isModal?: boolean,
}

export default function Card({ children, title, subtitle, className, home, isModal }: CardProps) {
    return (
        <section className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-xl gap-y-5 grid">
            <div className="">
                <h1 className={`font-medium text-2xl leading-5 flex items-center justify-between ${home ? 'text-lg font-semibold' : ''}`}>{title} {isModal ? <X size={16} strokeWidth={4} color="#F44336"/> : ""}</h1>
                <h2 className="text-base">{subtitle}</h2>
            </div>
            <span className={className}>{children}</span>
        </section>
    )
}