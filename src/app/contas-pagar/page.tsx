'use client'
import PageLayout from '@/components/layout/PageLayout'
import { useState } from 'react'
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
  const filtros = [
    'Hoje',
    'Ontem',
    'Neste mês',
    'No mês passado',
    'No próximo mês',
    'A vencer',
    'Atrasadas',
  ]
  const [filtroAtivo, setFiltroAtivo] = useState(0)

  const registros: Registro[] = [
    {
      id: '1',
      data: '2025-06-01',
      entidade: 'OFICINA MECÂNICA PESADA LTDA',
      descricao: 'Manutenção Guindaste Liebherr LTM 1200',
      valor: -4800,
      parcela: '2/5',
      tipo: 'Pagar',
      recebido: false,
    },
    {
      id: '2',
      data: '2025-06-01',
      entidade: 'POSTO DIESEL MASTER',
      descricao: 'Abastecimento frota - NF 2453',
      valor: -12500,
      parcela: '4/4',
      tipo: 'Pagar',
      recebido: true,
    },
    {
      id: '3',
      data: '2025-06-01',
      entidade: 'SEGUROS PROTEÇÃO TOTAL',
      descricao: 'Seguro anual guindastes',
      valor: -8300,
      parcela: '4/4',
      tipo: 'Pagar',
      recebido: true,
    },
    {
      id: '4',
      data: '2025-06-01',
      entidade: 'FOLHA DE PAGAMENTO',
      descricao: 'Salários Operadores',
      valor: -15000,
      parcela: '1/1',
      tipo: 'Pagar',
      recebido: true,
    },
    {
      id: '5',
      data: '2025-06-01',
      entidade: 'PNEUS GIGANTE LTDA',
      descricao: 'Troca pneus caminhão munck',
      valor: -6220,
      parcela: '1/1',
      tipo: 'Pagar',
      recebido: true,
    },
  ]

  const totalReceber = registros
    .filter((r) => r.tipo === 'Receber' && !r.recebido)
    .reduce((acc, r) => acc + r.valor, 0)
  const totalRecebido = registros
    .filter((r) => r.tipo === 'Receber' && r.recebido)
    .reduce((acc, r) => acc + r.valor, 0)
  const totalPagar = 0
  const totalPago = 0

  const CardResumo = ({ label, valor }: { label: string; valor: number }) => (
    <div className="rounded-xl border-t-4 border-[#FFCC02] bg-white p-4 shadow">
      <p className="text-sm font-medium text-[#1E293B]">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-[#1E293B]">
        {valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </div>
  )

  const LinhaRegistro = ({ data }: { data: Registro }) => (
    <li className="flex gap-4 border-b border-white/10 px-4 py-3 last:border-none">
      <span
        className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
          data.recebido
            ? 'bg-green-500'
            : data.tipo === 'Pagar'
              ? 'bg-red-500'
              : 'bg-gray-400'
        }`}
      />

      <div className="flex-1 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-2">
          <strong className="truncate text-white/90">{data.entidade}</strong>
          <span className="rounded bg-white/10 px-1 text-[10px] tracking-wide text-white/60">
            Parcela {data.parcela}
          </span>
        </div>
        <p className="text-white/70">
          {data.valor > 0 ? '+' : ''}
          {data.valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}{' '}
          de {data.descricao}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4 text-xs font-semibold text-[#2196F3]">
        {data.tipo === 'Receber' && !data.recebido && (
          <button className="hover:underline">RECEBER</button>
        )}
        {data.tipo === 'Pagar' && !data.recebido && (
          <button className="hover:underline">PAGAR</button>
        )}
        {data.recebido && <button className="hover:underline">ESTORNAR</button>}
        <button className="hover:underline">EDITAR</button>
        <button className="hover:underline">MAIS ▾</button>
      </div>
    </li>
  )

  return (
    <PageLayout>
      <section className="mx-auto w-full max-w-6xl px-4 pt-8">
        <div className="flex flex-wrap items-center gap-2">
          {filtros.map((f, i) => (
            <button
              key={f}
              onClick={() => setFiltroAtivo(i)}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                i === filtroAtivo
                  ? 'bg-[#2196F3] text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardResumo label="A pagar" valor={-4800} />
          <CardResumo label="Pago" valor={totalPago} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-8">
        <div className="rounded-xl bg-white/5 shadow-md">
          <h2 className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-[#FFCC02]">
            Vencimentos
          </h2>
          <ul>
            {registros.map((r) => (
              <LinhaRegistro key={r.id} data={r} />
            ))}
          </ul>
        </div>
      </section>

      <button
        title="Novo Lançamento"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFCC02] text-3xl font-bold text-[#16222F] shadow-lg transition hover:scale-105"
      >
        +
      </button>
    </PageLayout>
  )
}

export default ContasPagar
