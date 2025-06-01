'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  useEffect(() => {
    localStorage.removeItem('token')

    const savedEmail = localStorage.getItem('userEmail')
    if (savedEmail) {
      setEmail(savedEmail)
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      if (email === 'teste@locast.com' && password === '123') {
        if (rememberMe) {
          localStorage.setItem('userEmail', email)
        } else {
          localStorage.removeItem('userEmail')
        }

        localStorage.setItem('token', 'mock-jwt-token')
        router.replace('/home')
      } else {
        setError('Email ou senha incorretos')
      }
    } catch (err) {
      setError('Erro ao fazer login')
      console.error('Erro no login:', err)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md px-6 py-8 flex flex-col items-center">
        <a
          href="/"
          className="mb-6 flex items-center text-2xl font-semibold text-white"
        >
          <Image
            src="https://static.wixstatic.com/media/a5c95c_7ac329ac7b444b18a6f8272f91153823~mv2.png"
            alt="Locast Guindastes"
            className="mr-2 h-10 w-10"
            width={40}
            height={40}
          />
          Locast Guindastes
        </a>

        {/* Card de login */}
        <div className="w-full rounded-xl bg-white/95 p-8 shadow-lg backdrop-blur-md">
          <h1 className="mb-6 text-2xl font-bold tracking-wide text-[#16222F]">
            Acesse sua conta
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Exibe mensagem de erro, se houver */}
            {error && (
              <div className="mb-4 rounded bg-red-100 px-4 py-2 text-sm text-red-700">
                {error}
              </div>
            )}
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#16222F]"
              >
                E‑mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@empresa.com"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-[#F09A00] focus:ring-[#F09A00]"
              />
            </div>

            {/* Senha */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#16222F]"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-[#F09A00] focus:ring-[#F09A00]"
              />
            </div>

            {/* Lembrar / Esqueceu */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#16222F]/80">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#F09A00] shadow-sm focus:ring-[#F09A00]"
                />
                Lembrar-me
              </label>
              <a
                href="#"
                className="font-medium text-[#F09A00] hover:underline"
              >
                Esqueceu a senha?
              </a>
            </div>

            {/* Botão Entrar */}
            <button
              type="submit"
              className="w-full rounded-lg bg-[#F09A00] px-5 py-2.5 text-white transition hover:bg-[#d88b00] focus:outline-none focus:ring-4 focus:ring-[#F09A00]/30"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
