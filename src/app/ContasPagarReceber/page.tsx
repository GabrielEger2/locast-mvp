// app/contas/page.tsx
'use client'
import React, { useState } from 'react'

/*******************************************************************
 * CONTAS A PAGAR E RECEBER — LAYOUT LOC‍AST (SEM CABEÇALHO)       *
 *  • Fundo navy #16222F cobrindo toda a viewport                   *
 *  • Cartões de resumo com highlight amarelo‑locast #FFCC02        *
 *  • Chips de filtro no padrão azul‑locast #2196F3 / cinza         *
 *  • Lista de vencimentos em bloco semi‑transparente               *
 *******************************************************************/

interface Registro {
  id: string
  data: string // yyyy‑mm‑dd
  entidade: string
  descricao: string
  valor: number
  parcela: string
  tipo: 'Receber' | 'Pagar'
  recebido: boolean
}

export default function ContasPage() {
  /* ----------------------------- MOCK DATA ----------------------------- */
  const filtros = [
    'Hoje',
    'Ontem',
    'Neste mês',
    'No mês passado',
    'No próximo mês',
    'A vencer',
    'Atrasadas (920)',
  ]
  const [filtroAtivo, setFiltroAtivo] = useState(0)

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
  ]

  /* ---------------------------- CÁLCULOS ---------------------------- */
  const totalReceber = registros
    .filter(r => r.tipo === 'Receber' && !r.recebido)
    .reduce((acc, r) => acc + r.valor, 0)
  const totalRecebido = registros
    .filter(r => r.tipo === 'Receber' && r.recebido)
    .reduce((acc, r) => acc + r.valor, 0)
  const totalPagar = 0
  const totalPago = 0

  /* ------------------------ COMPONENTES UI ------------------------ */
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
      {/* Indicador de status */}
      <span
        className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
          data.recebido
            ? 'bg-green-500'
            : data.tipo === 'Pagar'
            ? 'bg-red-500'
            : 'bg-gray-400'
        }`}
      />

      {/* Texto */}
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
          de "{data.descricao}"
        </p>
      </div>

      {/* Ações */}
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

  /* ------------------------------- UI ------------------------------- */
  return (
    <main className="min-h-screen bg-[#16222F] pb-24 text-white">
      {/* FILTROS ----------------------------------------------------- */}
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

      {/* RESUMOS ----------------------------------------------------- */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <CardResumo label="A receber" valor={totalReceber} />
          <CardResumo label="Recebido" valor={totalRecebido} />
          <CardResumo label="A pagar" valor={totalPagar} />
          <CardResumo label="Pago" valor={totalPago} />
        </div>
      </section>

      {/* LISTA ------------------------------------------------------- */}
      <section className="mx-auto w-full max-w-6xl px-4 pt-8">
        <div className="rounded-xl bg-white/5 shadow-md">
          <h2 className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-[#FFCC02]">
            Vencimentos
          </h2>
          <ul>
            {registros.map(r => (
              <LinhaRegistro key={r.id} data={r} />
            ))}
          </ul>
        </div>
      </section>

      {/* FAB --------------------------------------------------------- */}
      <button
        title="Novo Lançamento"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFCC02] text-3xl font-bold text-[#16222F] shadow-lg transition hover:scale-105"
      >
        +
      </button>
    </main>
  )
}
