'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

const actions = [
  { label: 'Cadastro de Clientes', href: '/cadastros/clientes' },
  { label: 'Cadastro de Funcionários', href: '/cadastros/funcionarios' },
  { label: 'Cadastro de equipamentos', href: '/cadastros/equipamentos' },
  { label: 'Ordens de Serviço/Faturar OS', href: '/PageCadastros' },//Ver odens de serviço, ter um filtro para criar, ter um filtro 
  //Ao inves de criar uma nova pagina de serviço na pagina (continua abaixo)
  // de ordens de serviço vai ter uma tag (continua abaixo)
  // "FATURAR" aonde pode ser clicado e leva para tela de faturamento da OS em especifico
  { label: 'Contas a Pagar/Receber.', href: '/financeiro/pagar-receber' },//abrir para colocar se é receita ou despesa
  { label: 'Gestão de Estoque', href: '/estoque/gerenciar' },//Cadastrar o estoque e valor gasto no estoque
]

export default function PaginaInicial() {
  const router = useRouter()

  useEffect(() => {
    // Verificar autenticação assim que a página carregar
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      if (!token) {
        router.replace('/')
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userEmail')
    router.replace('/')
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#16222F] p-6">
      <div className="w-full max-w-5xl">
        {/* Cabeçalho com botão de logout */}
        <header className="mb-10 flex justify-between items-center">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-white tracking-wide">
              Painel&nbsp;de&nbsp;Gestão&nbsp;Locast
            </h1>
            <p className="mt-2 text-gray-300">
              Selecione uma opção para começar
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-red-700 rounded hover:bg-red-800 transition"
          >
            Sair
          </button>
        </header>

        {/* Grid de ações */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center justify-between rounded-xl bg-white/95 p-6 shadow-lg
                         transition hover:bg-[#F09A00]/90 hover:text-white backdrop-blur-md"
            >
              <span className="text-lg font-semibold text-[#16222F] group-hover:text-white">
                {label}
              </span>
              <ArrowRight className="h-5 w-5 text-[#F09A00] transition group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
