'use client'

import Clientes from '@/components/home/Clientes'
import Contas from '@/components/home/Contas'
import Equipamentos from '@/components/home/Equipamentos'
import OrdemServico from '@/components/home/OrdemServico'
import Stats from '@/components/home/Stats'
import PageLayout from '@/components/layout/PageLayout'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  useEffect(() => {
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
    <PageLayout>
      <div className="flex flex-col items-center h-full w-full gap-8">
        <Stats />
        <OrdemServico />
        <Equipamentos />
        <Contas />
        <Clientes />
      </div>
    </PageLayout>
  )
}
