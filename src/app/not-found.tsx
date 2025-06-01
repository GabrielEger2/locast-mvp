import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 h-screen">
        <div className="">
          <div className="text-5xl font-dark font-bold">Em desenvolvimento</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            Esta página ainda está sendo desenvolvida
          </p>
          <p className="mb-8">
            Não se preocupe, todo está sendo feito o mais rapido possivel
          </p>
          <Link href="/home" className="btn btn-primary">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  )
}
