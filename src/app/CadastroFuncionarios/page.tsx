'use client'

import React, { useState } from 'react'


interface Funcionario {
  nome: string
  cpf: string
  pis: string
  rg: string
  ctps: string
  cnh: string
}

export default function FuncionariosPage() {
  const [func, setFunc] = useState<Funcionario>({
    nome: '',
    cpf: '',
    pis: '',
    rg: '',
    ctps: '',
    cnh: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = e.target
    setFunc(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.table(func)
    alert('Funcionário salvo! (mock)')
  }

  const resetForm = () =>
    setFunc({ nome: '', cpf: '', pis: '', rg: '', ctps: '', cnh: '' })

  /* ----------- classes base (mesmas do EquipamentosPage) ----------- */
  const inputCls =
    'w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2196F3]'

  return (
    <div className="min-h-screen bg-[#16222F] px-4 py-10 text-sm leading-relaxed text-white">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-4xl space-y-10"
      >
        <h1 className="text-center text-3xl font-bold text-white">
          Novo Funcionário
        </h1>

        {/* DADOS PESSOAIS */}
        <fieldset className="space-y-6">
          <legend className="text-lg font-semibold text-[#2196F3]">
            Dados Pessoais
          </legend>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Nome */}
            <div className="md:col-span-2">
              <label className="mb-1 block text-sm">* Nome Completo</label>
              <input
                name="nome"
                value={func.nome}
                onChange={handleChange}
                required
                className={inputCls}
              />
            </div>

            {/* CPF */}
            <div>
              <label className="mb-1 block text-sm">* CPF</label>
              <input
                name="cpf"
                placeholder="000.000.000-00"
                value={func.cpf}
                onChange={handleChange}
                required
                className={inputCls}
              />
            </div>

            {/* PIS/PASEP */}
            <div>
              <label className="mb-1 block text-sm">* PIS / PASEP</label>
              <input
                name="pis"
                placeholder="123.45678.90-1"
                value={func.pis}
                onChange={handleChange}
                required
                className={inputCls}
              />
            </div>
          </div>
        </fieldset>

        {/* DOCUMENTOS */}
        <fieldset className="space-y-6">
          <legend className="text-lg font-semibold text-[#2196F3]">
            Documentos
          </legend>
          <div className="grid gap-6 md:grid-cols-2">
            {/* RG */}
            <div>
              <label className="mb-1 block text-sm">RG</label>
              <input
                name="rg"
                placeholder="Número do RG"
                value={func.rg}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
            {/* CTPS */}
            <div>
              <label className="mb-1 block text-sm">CTPS</label>
              <input
                name="ctps"
                placeholder="Número da CTPS"
                value={func.ctps}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
            {/* CNH */}
            <div>
              <label className="mb-1 block text-sm">CNH (opcional)</label>
              <input
                name="cnh"
                placeholder="Número da CNH"
                value={func.cnh}
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
