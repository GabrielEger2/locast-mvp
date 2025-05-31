// app/faturamento/page.tsx
'use client'
import React, { useEffect, useMemo, useState } from 'react'

/*************************************************************
 * Página "Gerar Fatura / Nota Fiscal" ‑ estilo Locast        *
 * ‑ Tailwind (dark‑blue #16222F + laranja #F09A00).           *
 *************************************************************/

// --- Tipagens ----------------------------------------------
interface OSResumo {
  id: string
  clientName: string
  totalValue: number
  issueDate: string // yyyy‑mm‑dd
}

interface InvoiceForm {
  paymentMethod: 'Boleto' | 'Cartão' | ''
  installments: number // apenas para boleto
  dueDates: string[]   // calculadas
  bankAccount: string
  invoiceNumber: string
}

// --- Funções utilitárias -----------------------------------
const addDays = (base: Date, days: number) => {
  const d = new Date(base)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10) // yyyy‑mm‑dd
}

export default function GerarFatura() {
  // ✅ Pré‑carregar OS (viria de rota ou contexto). Mock aqui ↓
  const os: OSResumo = {
    id: 'OS‑2025‑001',
    clientName: 'Cliente Exemplo LTDA',
    totalValue: 12500.0,
    issueDate: new Date().toISOString().slice(0, 10),
  }

  const [form, setForm] = useState<InvoiceForm>({
    paymentMethod: '',
    installments: 1,
    dueDates: [],
    bankAccount: '',
    invoiceNumber: '',
  })

  // 🚀 Recalcula vencimentos sempre que muda método ou parcelas
  useEffect(() => {
    if (form.paymentMethod === 'Boleto') {
      const parcelas = Array.from({ length: form.installments }, (_, i) =>
        addDays(new Date(os.issueDate), 30 * i),
      )
      setForm(prev => ({ ...prev, dueDates: parcelas }))
    } else {
      setForm(prev => ({ ...prev, installments: 1, dueDates: [] }))
    }
  }, [form.paymentMethod, form.installments, os.issueDate])

  const totalPorParcela = useMemo(() => {
    if (form.paymentMethod === 'Boleto' && form.installments > 0)
      return (os.totalValue / form.installments).toFixed(2)
    return os.totalValue.toFixed(2)
  }, [form.paymentMethod, form.installments, os.totalValue])

  // --- Handlers --------------------------------------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: name === 'installments' ? Number(value) : value,
    }))
  }

  const handleGenerate = () => {
    // TODO: chamar API para gerar fatura + retornar PDF
    console.table({ os, ...form })
    alert('Fatura/Nota gerada! (mock)')
  }

  // --- Render ----------------------------------------------
  return (
    <div className="min-h-screen bg-[#16222F] px-4 py-8 text-sm md:text-base">
      <div className="mx-auto w-full max-w-3xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#16222F]">
          Gerar Fatura / Nota Fiscal
        </h1>

        {/* Resumo da OS */}
        <section className="mb-8 rounded-lg bg-white/70 p-4 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-[#F09A00]">
            OS Resumo
          </h2>
          <div className="space-y-1 text-[#16222F]">
            <p>
              <span className="font-medium">Número OS:</span> {os.id}
            </p>
            <p>
              <span className="font-medium">Cliente:</span> {os.clientName}
            </p>
            <p>
              <span className="font-medium">Data Emissão:</span> {os.issueDate}
            </p>
            <p>
              <span className="font-medium">Valor Total:</span> R$ 
              {os.totalValue.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
        </section>

        {/* Formulário de Fatura */}
        <form
          onSubmit={e => {
            e.preventDefault()
            handleGenerate()
          }}
          className="space-y-8 [&_input]:border [&_input]:rounded-md [&_input]:px-3 [&_input]:py-2 [&_input:focus]:outline-none [&_input:focus]:ring-2 [&_input:focus]:ring-[#F09A00] [&_select]:border [&_select]:rounded-md [&_select]:px-3 [&_select]:py-2 [&_select:focus]:outline-none [&_select:focus]:ring-2 [&_select:focus]:ring-[#F09A00]"
        >
          {/* Forma de Pagamento */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#F09A00]">
              1. Forma de Pagamento
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="Boleto">Boleto</option>
                <option value="Cartão">Cartão</option>
              </select>

              {/* Parcela & vencimentos (somente boleto) */}
              {form.paymentMethod === 'Boleto' && (
                <input
                  type="number"
                  name="installments"
                  placeholder="Nº parcelas"
                  min={1}
                  max={12}
                  value={form.installments}
                  onChange={handleChange}
                  required
                />
              )}
            </div>

            {form.paymentMethod === 'Boleto' && form.dueDates.length > 0 && (
              <div className="mt-4 rounded-md border p-3 text-xs text-[#16222F]">
                <p className="mb-2 font-medium">
                  Vencimentos (R$ {totalPorParcela} cada):
                </p>
                <ul className="list-disc pl-5">
                  {form.dueDates.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Dados Bancários & Nº Fatura */}
          <section className="grid gap-4 md:grid-cols-2">
            <div>
              <h2 className="mb-2 text-lg font-semibold text-[#F09A00]">
                2. Conta Bancária
              </h2>
              <input
                type="text"
                name="bankAccount"
                placeholder="Banco / Agência / Conta *"
                value={form.bankAccount}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <h2 className="mb-2 text-lg font-semibold text-[#F09A00]">
                3. Nº Fatura / NF
              </h2>
              <input
                type="text"
                name="invoiceNumber"
                placeholder="Número da Fatura ou Nota Fiscal *"
                value={form.invoiceNumber}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* Botão */}
          <div className="text-right">
            <button
              type="submit"
              className="rounded-md bg-[#F09A00] px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Gerar PDF
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#F09A00] px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Faturar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
