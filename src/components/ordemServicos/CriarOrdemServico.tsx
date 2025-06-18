'use client'

import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'

interface Equipment {
  type: string
  chargeType: 'hour' | 'daily'
  quantity: number
  rate: number
  total: number
}

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
  equipments: Equipment[]
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
    equipments: [],
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

  const handleAddEquipment = () => {
    setServiceOrder((prev) => ({
      ...prev,
      equipments: [
        ...prev.equipments,
        { type: '', chargeType: 'hour', quantity: 0, rate: 0, total: 0 },
      ],
    }))
  }

  const handleRemoveEquipment = (index: number) => {
    setServiceOrder((prev) => ({
      ...prev,
      equipments: prev.equipments.filter((_, i) => i !== index),
    }))
  }

  const handleEquipmentChange = (
    index: number,
    field: string,
    value: string,
  ) => {
    setServiceOrder((prev) => {
      const newEquipments = [...prev.equipments]
      newEquipments[index] = {
        ...newEquipments[index],
        [field]: value,
      }

      // Recalcula o total
      if (field === 'quantity' || field === 'rate') {
        newEquipments[index].total =
          Number(newEquipments[index].quantity) *
          Number(newEquipments[index].rate)
      }

      return {
        ...prev,
        equipments: newEquipments,
      }
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
          <button
            type="button"
            onClick={() => handleAddEquipment()}
            className="btn btn-secondary mb-4"
          >
            + Adicionar Equipamento
          </button>

          <div className="space-y-6">
            {serviceOrder.equipments.map((equipment, index) => (
              <div
                key={index}
                className="rounded-lg border border-base-300 p-4"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-medium">Equipamento {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveEquipment(index)}
                    className="btn btn-ghost btn-sm text-error"
                  >
                    Remover
                  </button>
                </div>
                <div className="mb-4">
                  <select
                    name={`equipments.${index}.type`}
                    value={equipment.type}
                    onChange={(e) =>
                      handleEquipmentChange(index, 'type', e.target.value)
                    }
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
                <div className="mb-4">
                  <div className="flex gap-4">
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name={`equipments.${index}.chargeType`}
                        value="hour"
                        checked={equipment.chargeType === 'hour'}
                        onChange={(e) =>
                          handleEquipmentChange(
                            index,
                            'chargeType',
                            e.target.value,
                          )
                        }
                        className="radio"
                      />
                      <span className="label-text ml-2">Por Hora</span>
                    </label>
                    <label className="label cursor-pointer">
                      <input
                        type="radio"
                        name={`equipments.${index}.chargeType`}
                        value="daily"
                        checked={equipment.chargeType === 'daily'}
                        onChange={(e) =>
                          handleEquipmentChange(
                            index,
                            'chargeType',
                            e.target.value,
                          )
                        }
                        className="radio"
                      />
                      <span className="label-text ml-2">Por Diária</span>
                    </label>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <input
                      type="number"
                      name={`equipments.${index}.quantity`}
                      placeholder={`Quantidade de ${equipment.chargeType === 'hour' ? 'Horas' : 'Diárias'}`}
                      value={equipment.quantity || ''}
                      onChange={(e) =>
                        handleEquipmentChange(index, 'quantity', e.target.value)
                      }
                      min={0}
                      required
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name={`equipments.${index}.rate`}
                      placeholder={`Valor por ${equipment.chargeType === 'hour' ? 'Hora' : 'Diária'} (R$)`}
                      value={equipment.rate || ''}
                      onChange={(e) =>
                        handleEquipmentChange(index, 'rate', e.target.value)
                      }
                      min={0}
                      required
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name={`equipments.${index}.total`}
                      value={`R$ ${equipment.total ? equipment.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '0,00'}`}
                      placeholder="Valor Total (R$)"
                      readOnly
                      className="input input-bordered w-full bg-base-content text-base-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-primary">
            3. Observações e Total
          </h2>
          <div className="mb-4">
            <textarea
              name="observations"
              placeholder="Ajuda, instruções ou informações adicionais"
              value={serviceOrder.observations}
              onChange={handleInputChange}
              rows={3}
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div className="flex justify-end items-center gap-4">
            <span className="text-lg font-semibold">Total Geral:</span>
            <div className="text-xl font-bold text-primary">
              {`R$ ${serviceOrder.equipments
                .reduce((acc, curr) => acc + (curr.total || 0), 0)
                .toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            </div>
          </div>
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
