import { BiLinkExternal } from 'react-icons/bi'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'

const fakeData = [
  {
    id: 1,
    ordemServico: 'OS-001',
    cliente: 'Cliente A',
    valor: 1000.0,
    status: 'Aberta',
  },
  {
    id: 2,
    ordemServico: 'OS-002',
    cliente: 'Cliente B',
    valor: 500.0,
    status: 'Fechada',
  },
  {
    id: 3,
    ordemServico: 'OS-003',
    cliente: 'Cliente C',
    valor: 750.0,
    status: 'Recusada',
  },
  {
    id: 4,
    ordemServico: 'OS-004',
    cliente: 'Cliente D',
    valor: 1200.0,
    status: 'Fechada',
  },
  {
    id: 5,
    ordemServico: 'OS-005',
    cliente: 'Cliente E',
    valor: 300.0,
    status: 'Aberta',
  },
  {
    id: 6,
    ordemServico: 'OS-006',
    cliente: 'Cliente F',
    valor: 900.0,
    status: 'Fechada',
  },
  {
    id: 7,
    ordemServico: 'OS-007',
    cliente: 'Cliente G',
    valor: 400.0,
    status: 'Aberta',
  },
  {
    id: 8,
    ordemServico: 'OS-008',
    cliente: 'Cliente H',
    valor: 1100.0,
    status: 'Recusada',
  },
  {
    id: 9,
    ordemServico: 'OS-009',
    cliente: 'Cliente I',
    valor: 1300.0,
    status: 'Fechada',
  },
  {
    id: 10,
    ordemServico: 'OS-010',
    cliente: 'Cliente J',
    valor: 350.0,
    status: 'Aberta',
  },
]

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

const osPorMes = meses.map((mes) => ({
  mes,
  quantidade: Math.floor(Math.random() * 10 + 5),
}))

const OrdemServico = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start w-full mt-10 gap-6">
      <div className="w-full lg:w-1/2 border border-base-200 shadow card">
        <div className="flex justify-between px-6 py-4">
          <h2 className="font-semibold">Últimas Ordens de Serviço:</h2>
          <button className="btn btn-ghost">
            <BiLinkExternal size={20} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th />
                <th>Ordem de Serviço</th>
                <th>Cliente</th>
                <th>Valor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((order) => (
                <tr className="hover:bg-base-300 cursor-pointer" key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.ordemServico}</td>
                  <td>{order.cliente}</td>
                  <td>R$ {order.valor.toFixed(2)}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.status === 'Aberta'
                          ? 'badge-success'
                          : order.status === 'Fechada'
                            ? 'badge-error'
                            : 'badge-warning'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-full w-full lg:w-1/2 card shadow border border-base-200 p-4">
        <h2 className="text-lg font-semibold mb-4">
          Ordens de Serviço nos Últimos 12 Meses
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={osPorMes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                borderColor: '#334155',
                color: '#fff',
              }}
              labelStyle={{ color: '#ccc' }}
              itemStyle={{ color: '#facc15' }}
            />
            <Line
              type="monotone"
              dataKey="quantidade"
              stroke="#F09A00"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default OrdemServico
