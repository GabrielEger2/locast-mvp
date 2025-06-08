'use client'

import FuncionarioModal from '@/components/funcionarios/FuncionarioModal'
import { useState } from 'react'
import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

const fakeData = [
  {
    id: 1,
    nome: 'Joao Pessoa',
    CPF: '123.456.789-00',
    RG: '12.345.678-9',
    CNH: '12345678900',
  },
  {
    id: 2,
    nome: 'Mauro Silva',
    CPF: '987.654.321-00',
    RG: '98.765.432-1',
  },
  {
    id: 3,
    nome: 'Maria Silva',
    CPF: '111.222.333-44',
    RG: '11.222.333-4',
  },
  {
    id: 4,
    nome: 'Renato dos Santos',
    CPF: '555.666.777-88',
    RG: '55.666.777-8',
    CNH: '55566677788',
  },
  {
    id: 5,
    nome: 'Lucas Oliveira',
    CPF: '444.333.222-11',
    RG: '44.333.222-1',
  },
  {
    id: 6,
    nome: 'Joao Pessoa',
    CPF: '123.456.789-00',
    RG: '12.345.678-9',
    CNH: '12345678900',
  },
  {
    id: 7,
    nome: 'Mauro Silva',
    CPF: '987.654.321-00',
    RG: '98.765.432-1',
  },
  {
    id: 8,
    nome: 'Maria Silva',
    CPF: '111.222.333-44',
    RG: '11.222.333-4',
  },
  {
    id: 9,
    nome: 'Renato dos Santos',
    CPF: '555.666.777-88',
    RG: '55.666.777-8',
    CNH: '55566677788',
  },
  {
    id: 10,
    nome: 'Lucas Oliveira',
    CPF: '444.333.222-11',
    RG: '44.333.222-1',
  },
]

const Funcionarios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <div className="mt-8 mb-6 flex items-end justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Funcionarios</h2>
          <p>Gerencie seus funcionarios</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary"
        >
          Novo Funcionario
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
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
                <th>CNH</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((order) => (
                <tr className="hover:bg-base-300 cursor-pointer" key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.nome}</td>
                  <td>{order.CPF}</td>
                  <td>{order.RG}</td>
                  <td>{order.CNH || 'N/A'}</td>
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
      <FuncionarioModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </>
  )
}

export default Funcionarios
