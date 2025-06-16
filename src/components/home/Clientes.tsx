'use client'

import { useMemo } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

// — Dados fake (valor em número)
const fakeClients = [
  { id: 1, nome: 'João Pessoa', pedidos: 432, valor: 12000.0 },
  { id: 2, nome: 'Invictus Locadora Ltda', pedidos: 150, valor: 35000.0 },
  { id: 3, nome: 'Maria Silva', pedidos: 200, valor: 20000.0 },
  { id: 4, nome: 'Renato dos Santos', pedidos: 100, valor: 15000.0 },
  { id: 5, nome: 'Tech Solutions Ltda', pedidos: 300, valor: 50000.0 },
  { id: 6, nome: 'ABC Transportes', pedidos: 220, valor: 27000.0 },
  { id: 7, nome: 'Logística Rápida', pedidos: 180, valor: 24000.0 },
  { id: 8, nome: 'Construtora Alfa', pedidos: 95, valor: 18000.0 },
  { id: 9, nome: 'Grupo Beta', pedidos: 130, valor: 21000.0 },
  { id: 10, nome: 'Delta Empreendimentos', pedidos: 75, valor: 16000.0 },
  { id: 11, nome: 'Cliente Z', pedidos: 50, valor: 8000.0 },
  { id: 12, nome: 'Cliente Y', pedidos: 60, valor: 9000.0 },
]

// estilo do tooltip escuro
const tooltipStyle = {
  backgroundColor: '#1e293b',
  border: '1px solid #334155',
  borderRadius: 8,
  color: '#fff',
  fontSize: 12,
}

const Clientes = () => {
  const top10 = useMemo(() => {
    return fakeClients
      .slice()
      .sort((a, b) => b.valor - a.valor)
      .slice(0, 10)
  }, [])

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      <div className="w-full lg:w-1/2 card shadow border border-base-200 overflow-x-auto">
        <div className="flex justify-between px-6 py-4">
          <h2 className="font-semibold">Top 10 Clientes por Valor Total</h2>
          <button className="btn btn-ghost">
            <BiLinkExternal size={20} />
          </button>
        </div>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th />
              <th>Cliente</th>
              <th>Pedidos</th>
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {top10.map((c, idx) => (
              <tr key={c.id} className="hover:bg-base-300 cursor-pointer">
                <td>{idx + 1}</td>
                <td>{c.nome}</td>
                <td>{c.pedidos}</td>
                <td>
                  {c.valor.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full lg:w-1/2 card shadow border border-base-200 overflow-x-auto">
        <div className="px-6 py-4">
          <h2 className="font-semibold">Gráfico de Clientes por Valor Total</h2>
        </div>
        <ResponsiveContainer width="100%">
          <BarChart
            data={top10}
            layout="vertical"
            margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          >
            <CartesianGrid
              stroke="#e5e7eb"
              strokeDasharray="4 2"
              vertical={false}
            />
            <XAxis type="number" hide />
            <YAxis
              type="category"
              dataKey="nome"
              width={120}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#e5e7eb',
                fontSize: 14,
                fontFamily: 'inherit',
              }}
              style={{ fontSize: 14 }}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Bar
              dataKey="valor"
              fill="#F09A00"
              barSize={35}
              radius={[0, 10, 10, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Clientes
