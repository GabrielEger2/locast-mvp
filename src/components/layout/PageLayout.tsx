import Footer from './Footer'
import Navbar from './Navbar'
import SideBar from './Sidebar'

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="w-full ml-[300px]">
        <Navbar />
        <main className="flex justify-center min-h-screen px-10">
          <section className="w-full mb-10">{children}</section>
        </main>
        <Footer />
      </div>
    </div>
  )
}
