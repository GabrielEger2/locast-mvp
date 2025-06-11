'use client'

export default function CriarFuncionario() {
  return (
    <div className="mx-auto w-full p-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-primary mb-4">Funcionário</h1>
        <div className="grid md:grid-cols-2 space-x-6">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Nome Completo *</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Nome Completo"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">CPF *</legend>
            <input type="text" className="input w-full" placeholder="CPF" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">PIS / PASEP *</legend>
            <input
              type="text"
              className="input w-[95%]"
              placeholder="PIS / PASEP"
            />
          </fieldset>
        </div>
      </div>
      <div className="space-y-2 mt-10">
        <h1 className="text-2xl font-bold text-primary mb-4">Documentos</h1>
        <div className="grid md:grid-cols-2 space-x-6">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">RG *</legend>
            <input type="text" className="input w-full" placeholder="RG" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">CTPS *</legend>
            <input type="text" className="input w-full" placeholder="CTPS" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">CNH</legend>
            <input type="text" className="input w-[95%]" placeholder="CNH " />
          </fieldset>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button className="btn btn-ghost">Cancelar</button>
        <button className="btn btn-primary">Salvar</button>
      </div>
    </div>
  )
}
