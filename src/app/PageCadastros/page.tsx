'use client'
import React, { useState, useMemo } from 'react'
import {
  Edit,
  Trash2,
  DollarSign,
  FileText,
  MoreVertical,
  Search,
} from 'lucide-react'
import { useRouter } from 'next/navigation'

const menuItems = [
  { icon: Edit, label: 'Editar', color: 'text-gray-900' },
  { icon: DollarSign, label: 'Faturar', color: 'text-gray-900' },
  { icon: FileText, label: 'Exportar PDF', color: 'text-gray-900' },
  { icon: Trash2, label: 'Excluir', color: 'text-red-600' },
]

const ActionMenu: React.FC = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleAction = (label: string) => {
    setOpen(false)
    switch (label) {
      case 'Faturar':
        router.push('/FaturarOs')
        break
      // Add other cases here for different actions
      default:
        break
    }
  }

  return (
    <div className="relative">
      {/* Botão que abre/fecha o dropdown */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full"
      >
        <MoreVertical className="w-5 h-5" />
      </button>

      {/* Dropdown — renderizado somente quando `open` estiver true */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10 animate-fade-in">
          <div className="py-1">
            {menuItems.map(({ icon: Icon, label, color }, idx) => (
              <button
                key={idx}
                className={`${color} group flex w-full items-center px-4 py-2 text-sm hover:bg-[#F09A00] hover:text-white transition-colors`}
                onClick={() => handleAction(label)}
              >
                <Icon className="mr-2 h-5 w-5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/******************************
 * MOCK DE ORDENS DE SERVIÇO  *
 ******************************/

interface OrdemServico {
  id: number
  order: string
  client: string
  value: number // valor numérico em Reais
  valueFormatted: string // string já formatada para exibição
  status: 'Aberto' | 'Fechado'
}

const ORDERS: OrdemServico[] = [
  {
    id: 1,
    order: '17903',
    client: 'MRV',
    value: 50000,
    valueFormatted: 'R$ 50.000,00',
    status: 'Aberto',
  },
  {
    id: 2,
    order: '22904',
    client: 'ALZ',
    value: 100000,
    valueFormatted: 'R$ 100.000,00',
    status: 'Fechado',
  },
]

/********************
 * COMPONENTE PÁGINA *
 ********************/
export default function OrdensdeServico() {
  const router = useRouter()
  const [filterKey, setFilterKey] = useState<'order' | 'client' | 'value'>('order')
  const [filterText, setFilterText] = useState('')

  // filtragem memoizada para performance
  const filteredOrders = useMemo(() => {
    if (!filterText.trim()) return ORDERS

    return ORDERS.filter((o) => {
      switch (filterKey) {
        case 'order':
          return o.order.includes(filterText)
        case 'client':
          return o.client.toLowerCase().includes(filterText.toLowerCase())
        case 'value':
          // remove caracteres não numéricos para comparação mais livre
          const numericFilter = filterText.replace(/\D/g, '')
          return o.value.toString().includes(numericFilter)
        default:
          return true
      }
    })
  }, [filterKey, filterText])

  // Adicione a função de navegação
  const handleNewOrder = () => {
    router.push('/CriarOs')
  }

  return (
    <div className="min-h-screen bg-[#16222F] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Ordens de Serviço</h1>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-gray-300">Gerencie suas ordens de serviço</p>
            <button
              onClick={handleNewOrder}
              className="bg-[#F09A00] hover:bg-[#F09A00]/80 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Nova Ordem
            </button>
          </div>
        </header>

        <section className="mb-6 flex flex-wrap items-center gap-2">
          <select
            value={filterKey}
            onChange={(e) => setFilterKey(e.target.value as 'order' | 'client' | 'value')}
            className="border border-gray-300 rounded-md p-2 text-sm bg-white focus:ring-[#F09A00] focus:border-[#F09A00]"
          >
            <option value="order">Ordem de Serviço</option>
            <option value="client">Cliente</option>
            <option value="value">Valor</option>
          </select>

          <div className="relative">
            <input
              type="text"
              placeholder="Filtrar..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="border border-gray-300 rounded-md p-2 pl-8 text-sm w-60 focus:ring-[#F09A00] focus:border-[#F09A00]"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {filterText && (
            <button
              onClick={() => setFilterText('')}
              className="text-xs text-gray-300 hover:text-white underline"
            >
              Limpar filtro
            </button>
          )}
        </section>

        {/* Tabela */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">#</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Ordem de Serviço</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Cliente</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Valor</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((o) => (
                  <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm">{o.id}</td>
                    <td className="px-6 py-4 text-sm">{o.order}</td>
                    <td className="px-6 py-4 text-sm">{o.client}</td>
                    <td className="px-6 py-4 text-sm">{o.valueFormatted}</td>
                    <td className="px-6 py-4 text-sm">
                      {o.status === 'Aberto' ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Aberto
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                          Fechado
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <ActionMenu />
                    </td>
                  </tr>
                ))}

                {/* Caso nenhum resultado seja encontrado */}
                {filteredOrders.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500 text-sm">
                      Nenhuma ordem encontrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}