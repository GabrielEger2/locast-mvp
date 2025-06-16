import {
  Area,
  AreaChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const pieData = [
  { name: 'Caminhão', value: 18 },
  { name: 'Guindaste', value: 9 },
  { name: 'Caminhão-Munck', value: 7 },
  { name: 'Plataforma Elevatória', value: 12 },
]
const pieColors = ['#0d9488', '#6366f1', '#a855f7', '#facc15'] // teal, indigo, violet, amber

const meses = [
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
]
const estoqueMes = meses.map((m) => ({
  mes: m,
  qtd: Math.floor(Math.random() * 25 + 10),
}))

const anos = [2016, 2018, 2020, 2021, 2022, 2023, 2024]
const porAno = anos.map((y) => ({
  ano: y,
  qtd: Math.floor(Math.random() * 15 + 5),
}))

const tooltipStyle = {
  backgroundColor: '#1e293b',
  border: '1px solid #334155',
  borderRadius: 8,
  color: '#fff',
  fontSize: 12,
}

const Equipamentos = () => {
  const totalEstoque = estoqueMes.reduce((s, v) => s + v.qtd, 0)

  return (
    <div className="grid gap-6 md:grid-cols-3 w-full">
      <div className="card shadow border border-base-200 p-6 bg-base-100">
        <h3 className="font-semibold mb-4">Fontes do Estoque</h3>
        <div className="flex items-center">
          <ResponsiveContainer width="60%" height={180}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                innerRadius="60%"
                outerRadius="100%"
                stroke="none"
              >
                {pieData.map((_, i) => (
                  <Cell key={i} fill={pieColors[i]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <ul className="ml-4 space-y-1 text-sm">
            {pieData.map((d, i) => (
              <li key={d.name} className="flex items-center">
                <span
                  className="inline-block w-3 h-3 rounded-full mr-2"
                  style={{ background: pieColors[i] }}
                />
                {d.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card shadow border border-base-200 bg-base-100">
        <div className="p-6">
          <h3 className="font-semibold mb-1">Veículos em estoque (12 meses)</h3>
          <p className="text-sm mb-4">{totalEstoque} veículos em estoque</p>
        </div>

        <ResponsiveContainer width="100%" height={180}>
          <AreaChart
            data={estoqueMes}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="estoqueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Tooltip contentStyle={tooltipStyle} />
            <Area
              type="monotone"
              dataKey="qtd"
              stroke="#14b8a6"
              fill="url(#estoqueGradient)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="card shadow border border-base-200 bg-base-100">
        <div className="p-6">
          <h3 className="font-semibold mb-1">Veículos por ano de fabricação</h3>
          <h3 className="text-sm mb-4">
            2016 a 2024 ({porAno.reduce((s, v) => s + v.qtd, 0)} veículos)
          </h3>
        </div>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart
            data={porAno}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="anoGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a855f7" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#a855f7" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Tooltip contentStyle={tooltipStyle} />
            <Area
              type="monotone"
              dataKey="qtd"
              stroke="#a855f7"
              fill="url(#anoGradient)"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Equipamentos
