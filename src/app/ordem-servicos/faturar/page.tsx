'use client'
import PageLayout from '@/components/layout/PageLayout'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { BiArrowFromRight } from 'react-icons/bi'

interface OSResumo {
  id: string
  clientName: string
  totalValue: number
  issueDate: string
}

interface InvoiceForm {
  paymentMethod: '' | 'Boleto' | 'Cartão' | 'Pix' | 'Permuta' | 'TED/DOC'
  installments: number
  dueDates: string[]
  bankAccount: string
  invoiceNumber: string
}

const addDays = (base: Date, days: number) => {
  const d = new Date(base)
  d.setDate(d.getDate() + days)
  return d.toISOString().slice(0, 10)
}

export default function GerarFatura() {
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

  useEffect(() => {
    if (form.paymentMethod === 'Boleto') {
      const parcelas = Array.from({ length: form.installments }, (_, i) =>
        addDays(
          new Date(os.issueDate),
          form.paymentMethod === 'Boleto' ? 30 * i : i * 30,
        ),
      )
      setForm((prev) => ({ ...prev, dueDates: parcelas }))
    } else {
      setForm((prev) => ({ ...prev, installments: 1, dueDates: [] }))
    }
  }, [form.paymentMethod, form.installments, os.issueDate])

  const totalPorParcela = useMemo(() => {
    if (form.paymentMethod === 'Boleto' && form.installments > 0) {
      return (os.totalValue / form.installments).toFixed(2)
    }
    return os.totalValue.toFixed(2)
  }, [form.paymentMethod, form.installments, os.totalValue])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: name === 'installments' ? Number(value) : value,
    }))
  }

  const handleGenerate = () => {
    console.table({ os, ...form })
    alert('Fatura/Nota gerada!')
  }

  return (
    <PageLayout>
      <div className="mt-8 mb-6">
        <Link href="/ordem-servicos" className="btn btn-ghost items-center">
          <BiArrowFromRight size={24} />
          <h2 className="ml-2 text-xl font-semibold">OS‑2025‑001</h2>
        </Link>
        <div className="card mt-12">
          <h1 className="mb-6 text-center text-3xl font-bold">
            Gerar Fatura / Nota Fiscal
          </h1>

          <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-primary">
              OS Resumo
            </h2>
            <div className="space-y-1">
              <p>
                <span className="font-medium">Número OS:</span> {os.id}
              </p>
              <p>
                <span className="font-medium">Cliente:</span> {os.clientName}
              </p>
              <p>
                <span className="font-medium">Data Emissão:</span>{' '}
                {os.issueDate}
              </p>
              <p>
                <span className="font-medium">Valor Total:</span> R$
                {os.totalValue.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </section>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleGenerate()
            }}
            className="space-y-8"
          >
            <section>
              <h2 className="mb-4 text-lg font-semibold text-primary">
                1. Forma de Pagamento
              </h2>
              <div className="grid gap-4 md:grid-cols-2 ">
                <select
                  name="paymentMethod"
                  value={form.paymentMethod}
                  onChange={handleChange}
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Selecione</option>
                  <option value="Boleto">Boleto</option>
                  <option value="Cartão">Cartão</option>
                  <option value="Pix">Pix</option>
                  <option value="Permuta">Permuta</option>
                  <option value="TED/DOC">TED/DOC</option>
                </select>

                {form.paymentMethod === 'Boleto' && (
                  <input
                    type="number"
                    name="installments"
                    placeholder="Nº parcelas"
                    max={12}
                    value={form.installments}
                    onChange={handleChange}
                    required
                    className="input input-bordered w-full"
                  />
                )}
              </div>

              {form.paymentMethod === 'Boleto' && form.dueDates.length > 0 && (
                <div className="mt-4 card border border-base-300 p-4">
                  <p className="mb-2 font-medium">
                    Vencimentos (R$ {totalPorParcela} cada):
                  </p>
                  <ul className="list-disc pl-5">
                    {form.dueDates.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div>
                <h2 className="mb-2 text-lg font-semibold text-primary">
                  2. Conta Bancária
                </h2>
                <input
                  type="text"
                  name="bankAccount"
                  placeholder="Banco / Agência / Conta *"
                  value={form.bankAccount}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <h2 className="mb-2 text-lg font-semibold text-primary">
                  3. Nº Fatura / NF
                </h2>
                <input
                  type="text"
                  name="invoiceNumber"
                  placeholder="Número da Fatura ou Nota Fiscal *"
                  value={form.invoiceNumber}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                />
              </div>
            </section>

            <div className="text-right space-x-4">
              <button type="submit" className="btn btn-secondary">
                Gerar PDF
              </button>
              <button type="submit" className="btn btn-primary">
                Faturar
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
