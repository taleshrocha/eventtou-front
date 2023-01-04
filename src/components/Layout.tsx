import { NavBar } from '../components/NavBar'

export default function Layout({ children }: any) {
  return (
    <main className='bg-slate-300 h-screen w-screen'>
      <NavBar />
      {children}
    </main>
  )
}
