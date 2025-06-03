'use client'

import OrdemServicoModal from '@/components/ordemServicos/OrdemServicoModal'
import Link from 'next/link'
import { useState } from 'react'
import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

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
    valor: 450.0,
    status: 'Recusada',
  },
  {
    id: 7,
    ordemServico: 'OS-007',
    cliente: 'Cliente G',
    valor: 600.0,
    status: 'Aberta',
  },
  {
    id: 8,
    ordemServico: 'OS-008',
    cliente: 'Cliente H',
    valor: 800.0,
    status: 'Aberta',
  },
  {
    id: 9,
    ordemServico: 'OS-009',
    cliente: 'Cliente I',
    valor: 950.0,
    status: 'Aberta',
  },
  {
    id: 10,
    ordemServico: 'OS-010',
    cliente: 'Cliente J',
    valor: 1100.0,
    status: 'Recusada',
  },
]

const OrdemServicos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="mt-8 mb-6 flex items-end justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Ordens de Serviço</h2>
          <p className="">Gerencie suas ordens de serviço</p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Nova Ordem
        </button>
      </div>
      <div className="mt-10 card shadow-lg p-6 border border-base-200">
        <div className="mb-6 flex items-center">
          <div className="flex-1">
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn m-1">
                <BiFilterAlt className="mr-2" size={20} />
                Ordem
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Cliente</a>
                </li>
                <li>
                  <a>Valor</a>
                </li>
              </ul>
            </div>
            <label className="input">
              <BiSearchAlt className="opacity-50" size={20} />
              <input type="search" required placeholder="Filtro" />
            </label>
          </div>
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
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((order) => (
                <tr key={order.id}>
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
                  <td>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">
                        ...
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                      >
                        <li>
                          <a>Editar</a>
                        </li>
                        <li>
                          <Link href={`/ordem-servicos/faturar`}>Faturar</Link>
                        </li>
                        <li>
                          <a>Excluir</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="join mt-4 flex justify-center">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Página 1</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
      <OrdemServicoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  )
}

export default OrdemServicos
