'use client'

import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'

interface ServiceOrder {
  clientName: string
  cnpj: string
  operator: string
  address: string
  issueDate: Date | undefined
  expectedEndDate: Date | undefined
  generalDescription: string
  equipment: string
  hours: number | null
  hourlyRate: number | null
  totalValue: number | null
  observations: string
}

const CriarOrdemServico: React.FC = () => {
  const [serviceOrder, setServiceOrder] = useState<ServiceOrder>({
    clientName: '',
    cnpj: '',
    operator: 'Tico do Esporte',
    address: '',
    issueDate: new Date(),
    expectedEndDate: new Date(),
    generalDescription: '',
    equipment: '',
    hours: null,
    hourlyRate: null,
    totalValue: null,
    observations: '',
  })

  const equipmentOptions = [
    'Liebherr – LTM 11200-9.1',
    'Grove – GMK 6400-1',
    'Terex/Demag – AC 1000-9',
    'Tadano – GR 1600XL-2',
  ]

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
        const rate =
          name === 'hourlyRate' ? Number(value) : Number(prev.hourlyRate)
        next.totalValue = hours * rate
        next[name as 'hours' | 'hourlyRate'] = Number(value)
      }
      return next
    })
  }

  return (
    <div className="mx-auto w-full p-4">
      <div className="space-y-4">
        <section>
          <h2 className="mb-4 text-lg font-semibold text-primary">
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
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="cnpj"
              placeholder="CNPJ *"
              value={serviceOrder.cnpj}
              onChange={handleInputChange}
              required
              className="input input-bordered w-full"
            />
            <select
              name="operator"
              value={serviceOrder.operator}
              onChange={handleInputChange}
              required
              className="select select-bordered w-full"
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
              className="input input-bordered w-full"
            />
            <button
              popoverTarget="rdp-popover"
              className="input input-border w-full"
              style={{ anchorName: '--rdp' } as React.CSSProperties}
            >
              Data de Emissão *
            </button>
            <div
              popover="auto"
              id="rdp-popover"
              className="dropdown"
              style={{ positionAnchor: '--rdp' } as React.CSSProperties}
            >
              <DayPicker className="react-day-picker w-full" mode="single" />
            </div>
            <button
              popoverTarget="rdp-popover2"
              className="input input-border w-full"
              style={{ anchorName: '--rdp2' } as React.CSSProperties}
            >
              {serviceOrder.issueDate
                ? serviceOrder.issueDate.toLocaleDateString('pt-BR')
                : 'Data de Emissão *'}
            </button>
            <div
              popover="auto"
              id="rdp-popover2"
              className="dropdown"
              style={{ positionAnchor: '--rdp2' } as React.CSSProperties}
            >
              <DayPicker className="react-day-picker w-full" mode="single" />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-primary">
            2. Equipamentos e Serviços
          </h2>
          <div className="space-y-4">
            <div className="w-full">
              <select
                name="equipment"
                value={serviceOrder.equipment}
                onChange={handleInputChange}
                required
                className="select select-bordered w-full"
              >
                <option value="">Selecione o equipamento</option>
                {equipmentOptions.map((eq) => (
                  <option key={eq} value={eq}>
                    {eq}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <input
                  type="number"
                  name="hours"
                  placeholder="Quantidade de Horas"
                  value={serviceOrder.hours || ''}
                  onChange={handleInputChange}
                  min={0}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="hourlyRate"
                  placeholder="Valor por Hora (R$)"
                  value={serviceOrder.hourlyRate || ''}
                  onChange={handleInputChange}
                  min={0}
                  required
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="totalValue"
                  value={`R$ ${serviceOrder.totalValue ? serviceOrder.totalValue?.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '0,00'}`}
                  placeholder="Valor Total (R$)"
                  readOnly
                  className="input input-bordered w-full bg-base-content text-base-300"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-primary">
            3. Observações
          </h2>
          <textarea
            name="observations"
            placeholder="Ajuda, instruções ou informações adicionais"
            value={serviceOrder.observations}
            onChange={handleInputChange}
            rows={3}
            className="textarea textarea-bordered w-full"
          />
        </section>

        <div className="text-right">
          <button
            className="btn btn-primary"
            onClick={() => {
              alert('Ordem de Serviço criada com sucesso!')
            }}
          >
            Criar Ordem de Serviço
          </button>
        </div>
      </div>
    </div>
  )
}

export default CriarOrdemServico
