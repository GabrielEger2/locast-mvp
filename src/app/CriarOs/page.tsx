// app/(qualquer)/page.tsx
'use client'
import React, { useState } from 'react'

/*************************************************************
 * Página "Criar OS" — estilizada com classes Tailwind para   *
 * seguir a identidade (dark‑blue #16222F + laranja #F09A00)  *
 * parecida com a landing da Locast.                          *
 *************************************************************/

interface ServiceOrder {
  clientName: string
  cnpj: string
  operator: string
  address: string
  issueDate: string
  expectedEndDate: string
  generalDescription: string
  equipment: string
  hours: number
  hourlyRate: number
  totalValue: number
  observations: string
}

export default function CriarOs() {
  const [serviceOrder, setServiceOrder] = useState<ServiceOrder>({
    clientName: '',
    cnpj: '',
    operator: 'Tico do Esporte',
    address: '',
    issueDate: new Date().toISOString().split('T')[0],
    expectedEndDate: '',
    generalDescription: '',
    equipment: '',
    hours: 0,
    hourlyRate: 0,
    totalValue: 0,
    observations: '',
  })

  const equipmentOptions = [
    'Liebherr – LTM 11200-9.1',
    'Grove – GMK 6400-1',
    'Terex/Demag – AC 1000-9',
    'Tadano – GR 1600XL-2',
  ]

  // Atualiza estado + recalcula total
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target
    setServiceOrder((prev) => {
      const next = { ...prev, [name]: value }
      if (name === 'hours' || name === 'hourlyRate') {
        const hours = name === 'hours' ? Number(value) : Number(prev.hours)
        const rate = name === 'hourlyRate' ? Number(value) : Number(prev.hourlyRate)
        next.totalValue = hours * rate
        next[name as 'hours' | 'hourlyRate'] = Number(value)
      }
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO enviar para a API/backend
    console.table(serviceOrder)
    alert('Ordem de Serviço cadastrada!')
  }

  return (
    <div className="min-h-screen bg-[#16222F] px-4 py-8 text-sm md:text-base">
      <div className="mx-auto w-full max-w-4xl rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#16222F]">
          Criar Ordem de Serviço
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-10 [&_input]:border [&_input]:rounded-md [&_input]:px-3 [&_input]:py-2 [&_input:focus]:outline-none [&_input:focus]:ring-2 [&_input:focus]:ring-[#F09A00] [&_select]:border [&_select]:rounded-md [&_select]:px-3 [&_select]:py-2 [&_select:focus]:outline-none [&_select:focus]:ring-2 [&_select:focus]:ring-[#F09A00] [&_textarea]:border [&_textarea]:rounded-md [&_textarea]:px-3 [&_textarea]:py-2 [&_textarea:focus]:outline-none [&_textarea:focus]:ring-2 [&_textarea:focus]:ring-[#F09A00]"
        >
          {/* 1. Cabeçalho OS */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#F09A00]">
              1. Cadastro Geral
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="clientName"
                placeholder="Nome do Cliente *"
                value={serviceOrder.clientName}
                onChange={handleInputChange}
                maxLength={100}
                required
              />
              <input
                type="text"
                name="cnpj"
                placeholder="CNPJ *"
                value={serviceOrder.cnpj}
                onChange={handleInputChange}
                required
              />
              <select
                name="operator"
                value={serviceOrder.operator}
                onChange={handleInputChange}
                required
              >
                <option value="Tico do Esporte">Tico do Esporte</option>
              </select>
              <input
                type="text"
                name="address"
                placeholder="Endereço *"
                value={serviceOrder.address}
                onChange={handleInputChange}
                required
              />
              <input
                type="date"
                name="issueDate"
                value={serviceOrder.issueDate}
                readOnly
              />
              <input
                type="date"
                name="expectedEndDate"
                value={serviceOrder.expectedEndDate}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="generalDescription"
                placeholder="Descrição Geral *"
                value={serviceOrder.generalDescription}
                onChange={handleInputChange}
                maxLength={200}
                className="md:col-span-2"
                required
              />
            </div>
          </section>

          {/* 2. Equipamentos e Serviços */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#F09A00]">
              2. Equipamentos e Serviços
            </h2>
            <div className="space-y-4">
              {/* Seleção de equipamento */}
              <div className="w-full">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Equipamento
                </label>
                <select
                  name="equipment"
                  value={serviceOrder.equipment}
                  onChange={handleInputChange}
                  required
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F09A00]"
                >
                  <option value="">Selecione o equipamento</option>
                  {equipmentOptions.map((eq) => (
                    <option key={eq} value={eq}>
                      {eq}
                    </option>
                  ))}
                </select>
              </div>

              {/* Grid de valores */}
              <div className="grid gap-6 md:grid-cols-3">
                {/* Horas */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Quantidade de Horas
                  </label>
                  <input
                    type="number"
                    name="hours"
                    placeholder="0"
                    value={serviceOrder.hours}
                    onChange={handleInputChange}
                    min={0}
                    required
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F09A00]"
                  />
                </div>

                {/* Valor por hora */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Valor por Hora (R$)
                  </label>
                  <input
                    type="number"
                    name="hourlyRate"
                    placeholder="0,00"
                    value={serviceOrder.hourlyRate}
                    onChange={handleInputChange}
                    min={0}
                    required
                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F09A00]"
                  />
                </div>

                {/* Valor Total */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Valor Total (R$)
                  </label>
                  <input
                    type="text"
                    name="totalValue"
                    value={`R$ ${serviceOrder.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
                    readOnly
                    className="w-full bg-gray-50 border rounded-md px-3 py-2 text-gray-700 font-medium"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 3. Observações */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#F09A00]">
              3. Observações
            </h2>
            <textarea
              name="observations"
              placeholder="Observações"
              value={serviceOrder.observations}
              onChange={handleInputChange}
              rows={3}
              className="w-full"
            />
          </section>

          {/* Botão Submeter */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#F09A00] px-6 py-3 font-semibold text-white transition hover:bg-orange-600 rounded-md"
            >
              Criar OS
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
