'use client'

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
      <div className='flex flex-col items-center h-full w-full'>
        <Stats />
        <OrdemServico />
      </div>
    </PageLayout>
  )
}
