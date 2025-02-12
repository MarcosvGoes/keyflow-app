import type { Metadata } from "next";
import { Merriweather, Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ['300', '400', '700', '900']
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Keyflow",
  description: "Gerencie seu aluguel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} ${merriweather.className} antialiased`}>
        <Navbar />
        <div className="lg:ml-80">
        {children}
        </div>
      </body>
    </html>
  );
}
