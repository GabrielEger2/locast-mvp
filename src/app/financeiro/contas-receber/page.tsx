'use client'
import Filtros from '@/components/financeiro/Filtros'
import StatsReceber from '@/components/financeiro/StatsReceber'
import PageLayout from '@/components/layout/PageLayout'
import { BiFilterAlt, BiSearchAlt } from 'react-icons/bi'

interface Registro {
  id: string
  data: string
  entidade: string
  descricao: string
  valor: number
  parcela: string
  tipo: 'Receber' | 'Pagar'
  recebido: boolean
}

const ContasPagar = () => {
  const registros: Registro[] = [
    {
      id: '1',
      data: '2025-06-01',
      entidade: 'PRELLOG PRE‑FABRICADOS LTDA',
      descricao: 'Documento 9688',
      valor: 480,
      parcela: '2/5',
      tipo: 'Receber',
      recebido: false,
    },
    {
      id: '2',
      data: '2025-06-01',
      entidade: 'PRELLOG PRE‑FABRICADOS LTDA',
      descricao: 'Documento 9688',
      valor: 1000,
      parcela: '4/4',
      tipo: 'Receber',
      recebido: false,
    },
    {
      id: '3',
      data: '2025-06-01',
      entidade: 'PRELLOG PRE‑FABRICADOS LTDA',
      descricao: 'Documento 9688',
      valor: 300,
      parcela: '4/4',
      tipo: 'Receber',
      recebido: false,
    },
    {
      id: '4',
      data: '2025-06-01',
      entidade: 'PRELLOG PRE‑FABRICADOS LTDA',
      descricao: 'Documento 9688',
      valor: 3000,
      parcela: '2/4',
      tipo: 'Receber',
      recebido: false,
    },
    {
      id: '5',
      data: '2025-06-01',
      entidade: 'PLASC ‑ PLÁSTICOS SANTA CATARINA LTDA',
      descricao: 'Documento 5387',
      valor: 3220,
      parcela: '1/1',
      tipo: 'Receber',
      recebido: true,
    },
    {
      id: '6',
      data: '2025-06-06',
      entidade: 'PRELLOG PRE‑FABRICADOS LTDA',
      descricao: 'Documento 9648',
      valor: 4280,
      parcela: '1/5',
      tipo: 'Receber',
      recebido: false,
    },
    {
      id: '7',
      data: '2025-06-01',
      entidade: 'PRELLOG PRE-FABRICADOS LTDA',
      descricao: 'Documento 9688',
      valor: 1000,
      parcela: '4/4',
      tipo: 'Receber',
      recebido: false,
    },
    {
      id: '8',
      data: '2025-06-01',
      entidade: 'PRELLOG PRE-FABRICADOS LTDA',
      descricao: 'Documento 9688',
      valor: 300,
      parcela: '4/4',
      tipo: 'Receber',
      recebido: false,
    },
    {
      id: '9',
      data: '2025-06-01',
      entidade: 'PRELLOG PRE-FABRICADOS LTDA',
      descricao: 'Documento 9688',
      valor: 3000,
      parcela: '2/4',
      tipo: 'Receber',
      recebido: false,
    },
    {
      id: '10',
      data: '2025-06-01',
      entidade: 'PLASC - PLÁSTICOS SANTA CATARINA LTDA',
      descricao: 'Documento 5387',
      valor: 3220,
      parcela: '1/1',
      tipo: 'Receber',
      recebido: true,
    },
  ]

  return (
    <PageLayout>
      <div className="mt-8 mb-6 flex flex-col w-full">
        <Filtros />
        <StatsReceber />
        <div className="mt-6 card shadow-lg p-6 border border-base-200">
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
            <button className="btn btn-primary">Novo Registro</button>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Registro</th>
                  <th>Data</th>
                  <th>Valor</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {registros.map((registro) => (
                  <tr
                    className="hover:bg-base-300 cursor-pointer"
                    key={registro.id}
                  >
                    <td className="flex justify-center items-center mt-2 w-16">
                      <div className="form-control">
                        <label className="label cursor-pointer">
                          <input
                            type="checkbox"
                            checked={registro.recebido}
                            className="checkbox checkbox-primary"
                          />
                        </label>
                      </div>
                    </td>
                    <td className="flex-1 text-xs sm:text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <strong className="truncate">
                          {registro.entidade}
                        </strong>
                        <span className="badge badge-sm">
                          Parcela {registro.parcela}
                        </span>
                      </div>
                      <p>
                        {registro.valor > 0 ? '+' : ''}
                        {registro.valor.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}{' '}
                        de {registro.descricao}
                      </p>
                    </td>
                    <td>
                      {new Date(registro.data).toLocaleDateString('pt-BR')}
                    </td>
                    <td>
                      {registro.valor.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </td>
                    <td className="flex gap-4 link link-primary justify-end mr-4">
                      {registro.tipo === 'Receber' && !registro.recebido && (
                        <button className="hover:underline">RECEBER</button>
                      )}
                      {registro.tipo === 'Pagar' && !registro.recebido && (
                        <button className="hover:underline">PAGAR</button>
                      )}
                      {registro.recebido && (
                        <button className="hover:underline">ESTORNAR</button>
                      )}
                      <button className="hover:underline">EDITAR</button>
                      <button className="hover:underline">MAIS ▾</button>
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
      </div>
    </PageLayout>
  )
}

export default ContasPagar
