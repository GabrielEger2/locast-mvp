// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  FaBook,
  FaBoxOpen,
  FaChartLine,
  FaChartPie,
  FaCoins,
  FaFileCircleMinus,
  FaFileCirclePlus,
  FaFlask,
  FaTableList,
  FaTruck,
  FaUser,
  FaUserTie,
} from 'react-icons/fa6'

import CollapsibleOption from './CollapsibleOption'

import ThemeToggle from './ThemeToggle'

export default function SideBar() {
  return (
    <nav className="w-[300px] fixed top-0 left-0 h-screen z-50 p-4 bg-base-200">
      <div className="flex h-full flex-col w-full">
        <TitleSection />
        <div className="space-y-1 px-2">
          <Option Icon={FaUser} title="Clientes" href="/clientes" />
          <Option Icon={FaUserTie} title="Funcionarios" href="/funcionarios" />
          <CollapsibleOption
            Icon={FaBoxOpen}
            title="Equipamentos"
            baseHref="/equipamentos"
            subOptions={[
              {
                title: 'Controle Estoque',
                href: '/equipamentos',
                icon: FaBook,
              },
              { title: 'Frota', href: '/equipamentos/frota', icon: FaTruck },
              {
                title: 'Insumos',
                href: '/equipamentos/insumos',
                icon: FaFlask,
              },
            ]}
          />
          <Option
            Icon={FaTableList}
            title="Ordens de Serviço"
            href="/ordem-servicos"
          />
          <CollapsibleOption
            Icon={FaCoins}
            title="Financeiro"
            baseHref="/financeiro"
            subOptions={[
              {
                title: 'Relatório Financeiro',
                href: '/financeiro',
                icon: FaChartLine,
              },
              {
                title: 'Contas a Receber',
                href: '/financeiro/contas-receber',
                icon: FaFileCirclePlus,
              },
              {
                title: 'Contas a Pagar',
                href: '/financeiro/contas-pagar',
                icon: FaFileCircleMinus,
              },
            ]}
          />
          <Option Icon={FaChartPie} title="Relatórios" href="/relatorios" />
        </div>
      </div>
    </nav>
  )
}

const Option = ({ Icon, title, href }) => {
  const pathname = usePathname()
  const isActive = pathname === href.toLowerCase()

  return (
    <Link href={href}>
      <button
        className={`btn btn-ghost btn-lg w-full justify-start ${
          isActive && 'btn-active'
        }`}
      >
        <div className="grid h-full mr-2 place-content-center text-lg">
          <Icon />
        </div>
        <span className="text-xs font-medium">{title}</span>
      </button>
    </Link>
  )
}

const TitleSection = () => {
  return (
    <div className="mb-2 pb-2 px-2 pt-1">
      <div className="flex items-center justify-between rounded-md transition-colors">
        <div className="flex items-center gap-2">
          <Link href="/home" className="btn btn-ghost text-xl">
            <Image
              src="https://static.wixstatic.com/media/a5c95c_7ac329ac7b444b18a6f8272f91153823~mv2.png"
              alt="Locast Guindastes"
              className="mr-2 h-10 w-10"
              width={40}
              height={40}
            />
            Locast
          </Link>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
