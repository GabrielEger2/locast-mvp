'use client'

import ClienteModal from '@/components/clientes/ClienteModal'
import PageLayout from '@/components/layout/PageLayout'
import { useState } from 'react'
import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

const fakeData = [
  {
    id: 1,
    imagem: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    cliente: 'Joao Pessoa',
    tipo: 'Pessoa Física',
    status: 'Ativo',
    pedidos: 432,
    valorTotal: 'R$ 1.200,00',
    dataCriacao: '01/01/2023',
  },
  {
    id: 2,
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mbnptZj2hA1aJtdvKARSwgQhsGm-fHXu5Q&s',
    cliente: 'Invictus Locadora Ltda',
    tipo: 'Pessoa Jurídica',
    status: 'Inativo',
    pedidos: 150,
    valorTotal: 'R$ 3.500,00',
    dataCriacao: '15/02/2023',
  },
  {
    id: 3,
    cliente: 'Maria Silva',
    tipo: 'Pessoa Física',
    status: 'Ativo',
    pedidos: 200,
    valorTotal: 'R$ 2.000,00',
    dataCriacao: '10/03/2023',
  },
  {
    id: 4,
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuMH4HrtjpBUq_k6Cnm_OtN7rjCaN6YjGTw&s',
    cliente: 'Renato dos Santos',
    tipo: 'Pessoa Física',
    status: 'Inativo',
    pedidos: 100,
    valorTotal: 'R$ 1.500,00',
    dataCriacao: '05/02/2023',
  },
  {
    id: 5,
    cliente: 'Tech Solutions Ltda',
    tipo: 'Pessoa Jurídica',
    status: 'Ativo',
    pedidos: 300,
    valorTotal: 'R$ 5.000,00',
    dataCriacao: '20/04/2023',
  },
  {
    id: 6,
    imagem: 'https://img.daisyui.com/images/profile/demo/2@94.webp',
    cliente: 'Joao Pessoa',
    tipo: 'Pessoa Física',
    status: 'Ativo',
    pedidos: 432,
    valorTotal: 'R$ 1.200,00',
    dataCriacao: '01/01/2023',
  },
  {
    id: 7,
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mbnptZj2hA1aJtdvKARSwgQhsGm-fHXu5Q&s',
    cliente: 'Invictus Locadora Ltda',
    tipo: 'Pessoa Jurídica',
    status: 'Inativo',
    pedidos: 150,
    valorTotal: 'R$ 3.500,00',
    dataCriacao: '15/02/2023',
  },
  {
    id: 8,
    cliente: 'Maria Silva',
    tipo: 'Pessoa Física',
    status: 'Ativo',
    pedidos: 200,
    valorTotal: 'R$ 2.000,00',
    dataCriacao: '10/03/2023',
  },
  {
    id: 9,
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxuMH4HrtjpBUq_k6Cnm_OtN7rjCaN6YjGTw&s',
    cliente: 'Renato dos Santos',
    tipo: 'Pessoa Física',
    status: 'Inativo',
    pedidos: 100,
    valorTotal: 'R$ 1.500,00',
    dataCriacao: '05/02/2023',
  },
  {
    id: 10,
    cliente: 'Tech Solutions Ltda',
    tipo: 'Pessoa Jurídica',
    status: 'Ativo',
    pedidos: 300,
    valorTotal: 'R$ 5.000,00',
    dataCriacao: '20/04/2023',
  },
]

const Clientes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <PageLayout>
      <div className="mt-8 mb-6 flex items-end justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Clientes</h2>
          <p>Gerencie seus clientes</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary"
        >
          Novo Cliente
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
                <th>Cliente</th>
                <th>Status</th>
                <th>Pedidos</th>
                <th>Valor Total</th>
                <th>Data de Criação</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((cliente) => (
                <tr
                  className="hover:bg-base-300 cursor-pointer"
                  key={cliente.id}
                >
                  <th>{cliente.id}</th>
                  <td>
                    <div className="flex items-start gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                          {cliente.imagem ? (
                            <img src={cliente.imagem} alt={cliente.cliente} />
                          ) : (
                            <img
                              src="https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1906669723.jpg"
                              alt="Default Avatar"
                            />
                          )}
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="font-bold">{cliente.cliente}</div>
                        <div className="text-sm opacity-50">{cliente.tipo}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        cliente.status === 'Ativo'
                          ? 'badge-success'
                          : 'badge-error'
                      }`}
                    >
                      {cliente.status}
                    </span>
                  </td>
                  <td>{cliente.pedidos}</td>
                  <td>{cliente.valorTotal}</td>
                  <td>{cliente.dataCriacao}</td>
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
      <ClienteModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </PageLayout>
  )
}

export default Clientes
