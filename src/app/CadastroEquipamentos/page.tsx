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

export default function EquipamentosPage() {
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
    setEq(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.table(eq)
    alert('Equipamento salvo! (mock)')
  }

  const resetForm = () =>
    setEq({ tipo: '', marca: '', modelo: '', ano: '', placa: '' })

  /* ----------------------------- classes base ----------------------------- */
  const inputCls =
    'w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2196F3]'
  const selectCls =
    'w-full rounded-md bg-[#1E293B] text-white px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#2196F3]'

  return (
    <div className="min-h-screen bg-[#16222F] px-4 py-10 text-sm leading-relaxed text-white">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-4xl space-y-10"
      >
        <h1 className="text-center text-3xl font-bold text-white">
          Novo Equipamento
        </h1>

        {/* DADOS GERAIS */}
        <fieldset className="space-y-6">
          <legend className="text-lg font-semibold text-[#2196F3]">
            Dados Gerais
          </legend>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Tipo */}
            <div>
              <label className="mb-1 block text-sm">* Tipo</label>
              <select
                name="tipo"
                value={eq.tipo}
                onChange={handleChange}
                required
                className={selectCls}
              >
                <option value="" className="bg-[#1E293B]">
                  Selecione
                </option>
                {tipoOptions.map(t => (
                  <option key={t} value={t} className="bg-[#1E293B]">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Marca */}
            <div>
              <label className="mb-1 block text-sm">* Marca</label>
              <input
                name="marca"
                placeholder="Liebherr, Grove…"
                value={eq.marca}
                onChange={handleChange}
                required
                className={inputCls}
              />
            </div>

            {/* Modelo */}
            <div>
              <label className="mb-1 block text-sm">* Modelo</label>
              <input
                name="modelo"
                placeholder="LTM 11200‑9.1"
                value={eq.modelo}
                onChange={handleChange}
                required
                className={inputCls}
              />
            </div>

            {/* Ano */}
            <div>
              <label className="mb-1 block text-sm">Ano</label>
              <input
                name="ano"
                type="number"
                placeholder="2024"
                value={eq.ano}
                onChange={handleChange}
                className={inputCls}
              />
            </div>

            {/* Placa/Nº Série */}
            <div>
              <label className="mb-1 block text-sm">Placa / Nº Série</label>
              <input
                name="placa"
                placeholder="ABC‑1A23 / SN‑XYZ"
                value={eq.placa}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
          </div>
        </fieldset>

        {/* AÇÕES */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            className="rounded-md bg-white/10 px-6 py-2 font-semibold text-gray-300 hover:bg-white/20"
            onClick={resetForm}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-[#FFCC02] px-6 py-2 font-semibold text-[#16222F] hover:bg-yellow-400"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}