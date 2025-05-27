'use client'

export default function OrdensdeServiço() {
  return (
    <div className="min-h-screen bg-[#16222F] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Ordens de Serviço</h1>
          <div className="flex justify-between items-center">
            <p className="text-gray-300">Gerencie suas ordens de serviço</p>
            <button className="bg-[#F09A00] hover:bg-[#F09A00]/80 text-white px-4 py-2 rounded-lg transition-colors">
              Nova Ordem
            </button>
          </div>
        </div>

        {/* Tabela com container */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">#</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Nome</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Cargo</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Empresa</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Localização</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Último Login</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Cor Favorita</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-600">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm">1</td>
                  <td className="px-6 py-4 text-sm">Cy Ganderton</td>
                  <td className="px-6 py-4 text-sm">Quality Control Specialist</td>
                  <td className="px-6 py-4 text-sm">Littel, Schaden and Vandervort</td>
                  <td className="px-6 py-4 text-sm">Canada</td>
                  <td className="px-6 py-4 text-sm">12/16/2020</td>
                  <td className="px-6 py-4 text-sm">Blue</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">Editar</button>
                    <button className="text-red-600 hover:text-red-800">Excluir</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm">20</td>
                  <td className="px-6 py-4 text-sm">Lorelei Blackstone</td>
                  <td className="px-6 py-4 text-sm">Data Coordiator</td>
                  <td className="px-6 py-4 text-sm">Witting, Kutch and Greenfelder</td>
                  <td className="px-6 py-4 text-sm">Kazakhstan</td>
                  <td className="px-6 py-4 text-sm">6/3/2020</td>
                  <td className="px-6 py-4 text-sm">Red</td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">Editar</button>
                    <button className="text-red-600 hover:text-red-800">Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
