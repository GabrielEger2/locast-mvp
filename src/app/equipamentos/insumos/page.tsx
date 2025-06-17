'use client'

import EquipamentoModal from '@/components/equipamentos/EquipamentoModal'
import PageLayout from '@/components/layout/PageLayout'
import { useState } from 'react'
import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

const fakeData = [
  {
    id: 1,
    descricao: 'Bateria 200Ah',
    tipo: 'Bateria',
    estado: 'Novo',
    valor: 'R$ 1.200,00',
  },
  {
    id: 2,
    descricao: 'Guincho Elétrico 5T',
    tipo: 'Guincho',
    estado: 'Usado',
    valor: 'R$ 3.500,00',
  },
  {
    id: 3,
    descricao: 'Escada Telescópica 10m',
    tipo: 'Escada',
    estado: 'Estragado',
    valor: 'R$ 800,00',
  },
  {
    id: 4,
    descricao: 'Ferramentas Manuais Diversas',
    tipo: 'Ferramentas',
    estado: 'Usado',
    valor: 'R$ 600,00',
  },
  {
    id: 5,
    descricao: 'Kit de Sinalização de Trânsito',
    tipo: 'Sinalização',
    estado: 'Novo',
    valor: 'R$ 150,00',
  },
  {
    id: 6,
    descricao: 'Caixa de Ferramentas Completa',
    tipo: 'Ferramentas',
    estado: 'Estragado',
    valor: 'R$ 400,00',
  },
  {
    id: 7,
    descricao: 'Extintor de Incêndio 10kg',
    tipo: 'Segurança',
    estado: 'Novo',
    valor: 'R$ 200,00',
  },
  {
    id: 8,
    descricao: 'Conjunto de Mangueiras Hidráulicas',
    tipo: 'Mangueiras',
    estado: 'Estragado',
    valor: 'R$ 1.000,00',
  },
  {
    id: 9,
    descricao: 'Gerador Portátil 5kVA',
    tipo: 'Gerador',
    estado: 'Novo',
    valor: 'R$ 2.500,00',
  },
  {
    id: 10,
    descricao: 'Conjunto de Chaves de Fenda e Philips',
    tipo: 'Ferramentas',
    estado: 'Usado',
    valor: 'R$ 100,00',
  },
]

const Insumos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <PageLayout>
      <div className="mt-8 mb-6 flex items-end justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Insumos - Equipamentos</h2>
          <p>Gerencie seus Insumos</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary"
        >
          Novo Insumo
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
                  <a>Nome</a>
                </li>
                <li>
                  <a>Data de Criação</a>
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
          <table className="table">
            <thead>
              <tr>
                <th />
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Estado</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((order) => (
                <tr className="hover:bg-base-300 cursor-pointer" key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.descricao}</td>
                  <td>{order.tipo}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.estado === 'Novo'
                          ? 'badge-success'
                          : order.estado === 'Usado'
                            ? 'badge-warning'
                            : 'badge-error'
                      }`}
                    >
                      {order.estado}
                    </span>
                  </td>
                  <td>{order.valor}</td>
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
      <EquipamentoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </PageLayout>
  )
}

export default Insumos
