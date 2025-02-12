import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { Mês: "Jan", Receita: 2400 },
  { Mês: "Fev", Receita: 1000 },
  { Mês: "Mar", Receita: 1000 },
  { Mês: "Abr", Receita: 1400 },
  { Mês: "Mai", Receita: 1400 },
  { Mês: "Jun", Receita: 1000 },
  { Mês: "Jul", Receita: 1500 },
  { Mês: "Ago", Receita: 1500 },
  { Mês: "Set", Receita: 1300 },
  { Mês: "Out", Receita: 1500 },
  { Mês: "Nov", Receita: 2200 },
  { Mês: "Dez", Receita: 2500 },
];

export default function RevenueChart() {
  return (
    <div className="w-full h-[150px] lg:h-[400px] flex justify-center pr-10">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={revenueData} className="text-[10rem]">
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
          <XAxis dataKey="Mês" className="text-[5rem] lg:text-[10rem]" />
          <YAxis className="text-[4rem] lg:text-[9rem]"/>
          <Tooltip />
          <Bar dataKey="Receita" fill="#16a34a" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
