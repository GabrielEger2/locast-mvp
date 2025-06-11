'use client'

import React, { useState } from 'react'

const tipoOptions = [
  'Caminhão',
  'Guindaste',
  'Caminhão‑Munck',
  'Plataforma Elevatória',
]

interface Equipamento {
  tipo: string
  marca: string
  modelo: string
  ano: string
  placa: string
}

const CriarEquipamento: React.FC = () => {
  const [eq, setEq] = useState<Equipamento>({
    tipo: '',
    marca: '',
    modelo: '',
    ano: '',
    placa: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setEq((prev) => ({ ...prev, [name]: value }))
  }

  const resetForm = () =>
    setEq({ tipo: '', marca: '', modelo: '', ano: '', placa: '' })

  return (
    <div className="mx-auto w-full p-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-primary mb-4">Dados Gerais</h1>
        <div className="grid md:grid-cols-2 space-x-6">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Tipo *</legend>
            <select name="tipo" className="select w-full">
              <option value="" disabled selected>
                Selecione
              </option>
              {tipoOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Marca *</legend>
            <input type="text" className="input w-full" placeholder="Marca" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Modelo *</legend>
            <input type="text" className="input w-full" placeholder="Modelo" />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Ano *</legend>
            <input
              type="number"
              className="input w-full"
              placeholder="Ano"
              value={2024}
            />
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Placa / Nº Série *</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Placa / Nº Série"
            />
          </fieldset>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button type="button" className="btn btn-ghost" onClick={resetForm}>
          Cancelar
        </button>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </div>
    </div>
  )
}

export default CriarEquipamento
