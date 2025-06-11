'use client'

import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'

type Pessoa = 'PF' | 'PJ'

const CriarCliente: React.FC = () => {
  const [tipo, setTipo] = useState<Pessoa>('PF')

  return (
    <div className="mx-auto w-full p-4">
      <div className="mb-6 flex items-center gap-6 text-sm font-medium">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tipo"
            checked={tipo === 'PF'}
            onChange={() => setTipo('PF')}
            className="radio radio-primary"
          />
          Pessoa Física
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="tipo"
            checked={tipo === 'PJ'}
            onChange={() => setTipo('PJ')}
            className="radio radio-primary"
          />
          Pessoa Jurídica
        </label>
      </div>

      <div className="space-y-12">
        <section className="grid gap-4 md:grid-cols-2">
          {tipo === 'PF' ? (
            <>
              <input type="text" placeholder="* CPF" className="input w-full" />
              <input
                type="text"
                placeholder="* Nome"
                className="input w-full"
              />
              <select name="genero" className="select w-full">
                <option selected disabled>
                  Gênero
                </option>
                <option value="NI">Não informado</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </select>
              <button
                popoverTarget="rdp-popover2"
                className="input input-border w-full"
                style={{ anchorName: '--rdp2' } as React.CSSProperties}
              >
                Data de Nascimento *
              </button>
              <div
                popover="auto"
                id="rdp-popover2"
                className="dropdown"
                style={{ positionAnchor: '--rdp2' } as React.CSSProperties}
              >
                <DayPicker className="react-day-picker w-full" mode="single" />
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="* CNPJ"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="* Nome"
                className="input w-full"
              />
              <input
                type="text"
                placeholder="* Inscricao Estadual"
                className="input w-full"
              />

              <div />
            </>
          )}
          <input type="text" placeholder="Telefone" className="input w-full" />
          <input
            type="text"
            placeholder="Telefone Celular"
            className="input w-full"
          />
          <input type="text" placeholder="E-mail" className="input w-full" />
        </section>

        <section>
          <h2 className="mb-4 text-lg font-semibold text-primary">Endereço</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <input type="text" placeholder="* CEP" className="input w-full" />{' '}
            <input
              type="text"
              placeholder="* Logradouro"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="* Numero"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="* Bairro"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="Complemento"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="* Estado"
              className="input w-full"
            />
            <input
              type="text"
              placeholder="* Municipio"
              className="input w-full"
            />
          </div>
        </section>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => alert('Cancelado')}
          >
            CANCELAR
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => alert('Cliente criado com sucesso!')}
          >
            SALVAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default CriarCliente
