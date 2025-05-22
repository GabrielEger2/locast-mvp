'use client'
export default function CadastroOS() {  
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#16222F]">
      <div className="w-full max-w-2xl px-6 py-10">

        {/* Cabeçalho --------------------------------------------------- */}
        <h1 className="mb-8 text-center text-3xl font-bold tracking-wide text-white">
          Cadastre&nbsp;sua&nbsp;empresa
        </h1>

        {/* Card -------------------------------------------------------- */}
        <div className="rounded-xl bg-white/95 p-8 shadow-lg backdrop-blur-md">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: enviar dados ao backend
            }}
          >
            {/* Linha 1: Razão social + Nome fantasia ------------------ */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="razaoSocial"
                  className="mb-2 block text-sm font-medium text-[#16222F]"
                >
                  Razão&nbsp;Social
                </label>
                <input
                  id="razaoSocial"
                  name="razaoSocial"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-[#F09A00] focus:ring-[#F09A00]"
                />
              </div>

              <div>
                <label
                  htmlFor="nomeFantasia"
                  className="mb-2 block text-sm font-medium text-[#16222F]"
                >
                  Nome&nbsp;Fantasia
                </label>
                <input
                  id="nomeFantasia"
                  name="nomeFantasia"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-[#F09A00] focus:ring-[#F09A00]"
                />
              </div>
            </div>

            {/* Linha 2: CNPJ + Telefone -------------------------------- */}
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="cnpj"
                  className="mb-2 block text-sm font-medium text-[#16222F]"
                >
                  CNPJ
                </label>
                <input
                  id="cnpj"
                  name="cnpj"
                  placeholder="00.000.000/0000-00"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-[#F09A00] focus:ring-[#F09A00]"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="mb-2 block text-sm font-medium text-[#16222F]"
                >
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 0000-0000"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-[#F09A00] focus:ring-[#F09A00]"
                />
              </div>
            </div>

            {/* Linha 3: E-mail corporativo ----------------------------- */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#16222F]"
              >
                E-mail&nbsp;corporativo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="contato@empresa.com"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-[#F09A00] focus:ring-[#F09A00]"
              />
            </div>

            {/* Linha 4: Endereço -------------------------------------- */}
            <div>
              <label
                htmlFor="endereco"
                className="mb-2 block text-sm font-medium text-[#16222F]"
              >
                Endereço&nbsp;completo
              </label>
              <input
                id="endereco"
                name="endereco"
                placeholder="Rua, nº, Bairro, Cidade – UF"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-[#F09A00] focus:ring-[#F09A00]"
              />
            </div>

            {/* Termos --------------------------------------------------- */}
            <label className="flex items-center gap-2 text-sm text-[#16222F]/80">
              <input
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 text-[#F09A00] shadow-sm focus:ring-[#F09A00]"
              />
              Confirmo que li e aceito os&nbsp;
              <a
                href="#"
                className="text-[#F09A00] hover:underline"
                target="_blank"
              >
                Termos&nbsp;de&nbsp;Serviço
              </a>
              .
            </label>

            {/* Botão enviar ------------------------------------------- */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#F09A00] px-5 py-2.5 text-white transition hover:bg-[#d88b00] focus:outline-none focus:ring-4 focus:ring-[#F09A00]/30"
            >
              Cadastrar empresa
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
