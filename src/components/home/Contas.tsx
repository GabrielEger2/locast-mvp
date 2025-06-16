'use client'

import { BiLinkExternal } from 'react-icons/bi'
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts'

const mesesLabels = (() => {
  const meses = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]
  const hoje = new Date()
  const labels: string[] = []
  for (let i = 11; i >= 0; i--) {
    const dt = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1)
    labels.push(meses[dt.getMonth()])
  }
  return labels
})()

/* — Dados fake para pagar / receber — */
const data = mesesLabels.map((mes) => ({
  mes,
  pagar: Math.floor(Math.random() * 20_000 + 5_000),
  receber: Math.floor(Math.random() * 30_000 + 8_000),
}))

const Contas = () => {
  return (
    <div className="w-full bg-base-100 p-4 card shadow border border-base-200">
      <div className="flex justify-between px-6 py-4">
        <h2 className="font-semibold">
          Contas a Pagar e Receber (Últimos 12 Meses)
        </h2>
        <button className="btn btn-ghost">
          <BiLinkExternal size={20} />
        </button>
      </div>
      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} width={60} />
          <Legend
            verticalAlign="top"
            align="right"
            wrapperStyle={{ paddingBottom: 10 }}
            iconType="circle"
          />

          <Line
            name="Contas a Pagar"
            dataKey="pagar"
            stroke="#ef4444"
            strokeWidth={3}
            type="monotone"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Line
            name="Contas a Receber"
            dataKey="receber"
            stroke="#10b981"
            strokeWidth={3}
            type="monotone"
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              borderColor: '#334155',
              color: '#fff',
            }}
            labelStyle={{ color: '#ccc' }}
            itemStyle={{ color: '#facc15' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Contas
