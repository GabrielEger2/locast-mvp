'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const actions = [
  { label: 'Clientes', href: '/clientes' },
  { label: 'Cadastro de Funcionários', href: '/CadastroFuncionarios' },
  { label: 'Cadastro de equipamentos', href: '/CadastroEquipamentos' },
  { label: 'Ordens de Serviço/Faturar OS', href: '/ordem-servicos' },
  { label: 'Contas a Pagar/Receber.', href: '/ContasPagarReceber' },
  { label: 'Gestão de Estoque', href: '/GestaoEstoque' },
]

export default function Home() {
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
    <section className="min-h-screen flex items-center justify-center p-6">
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
