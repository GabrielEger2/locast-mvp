'use client'

import React, { useState } from 'react'

type Pessoa = 'PF' | 'PJ'

export default function ClientesPage() {
  const [tipo, setTipo] = useState<Pessoa>('PF')
  const [form, setForm] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.table({ tipo, ...form })
    alert('Cliente cadastrado (mock)')
  }

  const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input
      {...props}
      className="w-full border-b border-white/20 bg-transparent px-0.5 py-2 text-white placeholder-white/50 focus:border-[#2196F3] focus:outline-none"
    />
  )
  const Select = ({
    children,
    ...rest
  }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
    <select
      {...rest}
      className="w-full border-b border-white/20 bg-transparent px-0.5 py-2 text-white placeholder-white/50 focus:border-[#2196F3] focus:outline-none"
    >
      {children}
    </select>
  )

  return (
    <main className="min-h-screen bg-[#16222F] px-6 py-10 text-white">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="mb-8 text-2xl font-bold">Novo Cliente</h1>

        {/* Toggle PF | PJ */}
        <div className="mb-6 flex items-center gap-6 text-sm font-medium">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tipo"
              checked={tipo === 'PF'}
              onChange={() => setTipo('PF')}
              className="h-4 w-4 accent-[#2196F3]"
            />
            Pessoa Física
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="tipo"
              checked={tipo === 'PJ'}
              onChange={() => setTipo('PJ')}
              className="h-4 w-4 accent-[#2196F3]"
            />
            Pessoa Jurídica
          </label>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* --- Dados Principais --- */}
          <section className="grid gap-6 md:grid-cols-2">
            {tipo === 'PF' ? (
              <>
                <Input name="cpf" placeholder="* CPF" required />
                <Input name="nome" placeholder="* Nome" required />
                <Select name="genero" defaultValue="">
                  <option value="" disabled>
                    Gênero
                  </option>
                  <option value="NI">Não informado</option>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                </Select>
                <Input
                  type="date"
                  name="dataNascimento"
                  placeholder="Data de nascimento"
                />
              </>
            ) : (
              <>
                <Input name="cnpj" placeholder="* CNPJ" required />
                <Input name="nome" placeholder="* Nome" required />
                <Input
                  name="inscricaoEstadual"
                  placeholder="Inscrição Estadual"
                />
                {/* linha fake para alinhar grade */}
                <div />
              </>
            )}
            {/* Contato comum */}
            <Input name="telefone" placeholder="Telefone" />
            <Input name="celular" placeholder="Telefone Celular" />
            <Input
              name="email"
              placeholder="E‑mail"
              className="md:col-span-2"
            />
          </section>

          {/* --- Endereço --- */}
          <section>
            <h2 className="mb-4 text-lg font-semibold text-[#FFCC02]">
              Endereço
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Input name="cep" placeholder="* CEP" required />
              <Input name="logradouro" placeholder="* Logradouro" required />
              <Input name="numero" placeholder="* Número" required />
              <Input name="bairro" placeholder="* Bairro" required />
              <Input name="complemento" placeholder="Complemento" />
              <Input name="estado" placeholder="* Estado" required />
              <Input name="municipio" placeholder="* Município" required />
            </div>
          </section>

          {/* AÇÕES */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="rounded px-6 py-2 text-white/70 transition hover:text-white"
              onClick={() => alert('Cancelado')}
            >
              CANCELAR
            </button>
            <button
              type="submit"
              className="rounded bg-[#FFCC02] px-6 py-2 font-semibold text-[#16222F] transition hover:bg-yellow-400"
            >
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
