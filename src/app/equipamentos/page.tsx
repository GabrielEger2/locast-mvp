'use client'

import EquipamentoModal from '@/components/equipamentos/EquipamentoModal'
import PageLayout from '@/components/layout/PageLayout'
import { useState } from 'react'
import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

const fakeData = [
  {
    id: 1,
    placa: 'ABC-1234',
    tipo: 'Caminhão',
    modelo: 'Volvo FH',
    ano: 2020,
  },
  {
    id: 2,
    placa: 'XYZ-5678',
    tipo: 'Guindaste',
    modelo: 'Liebherr LTM 1090',
    ano: 2019,
  },
  {
    id: 3,
    placa: 'LMN-9101',
    tipo: 'Caminhão‑Munck',
    modelo: 'Mercedes-Benz Atego',
    ano: 2021,
  },
  {
    id: 4,
    placa: 'OPQ-1122',
    tipo: 'Plataforma Elevatória',
    modelo: 'JLG 450AJ',
    ano: 2022,
  },
  {
    id: 5,
    placa: 'RST-3344',
    tipo: 'Caminhão',
    modelo: 'Scania R 450',
    ano: 2021,
  },
  {
    id: 6,
    placa: 'UVW-5566',
    tipo: 'Guindaste',
    modelo: 'Terex AC 100/4L',
    ano: 2020,
  },
  {
    id: 7,
    placa: 'XYZ-7788',
    tipo: 'Caminhão‑Munck',
    modelo: 'Iveco Eurocargo',
    ano: 2019,
  },
  {
    id: 8,
    placa: 'ABC-9900',
    tipo: 'Plataforma Elevatória',
    modelo: 'Haulotte HA16PX',
    ano: 2021,
  },
  {
    id: 9,
    placa: 'DEF-2233',
    tipo: 'Caminhão',
    modelo: 'Iveco Stralis',
    ano: 2020,
  },
  {
    id: 10,
    placa: 'RST-3344',
    tipo: 'Caminhão',
    modelo: 'Scania R 450',
    ano: 2021,
  },
]

const Equipamentos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <PageLayout>
      <div className="mt-8 mb-6 flex items-end justify-between">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">Equipamentos</h2>
          <p>Gerencie seus equipamentos</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary"
        >
          Novo Equipamento
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
                <th>Placa/Nº Série</th>
                <th>Tipo</th>
                <th>Modelo</th>
                <th>Ano</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((order) => (
                <tr className="hover:bg-base-300 cursor-pointer" key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.placa}</td>
                  <td>{order.tipo}</td>
                  <td>{order.modelo}</td>
                  <td>{order.ano}</td>
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

export default Equipamentos
