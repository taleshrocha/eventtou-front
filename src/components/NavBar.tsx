import Link from 'next/link'
import { TbTicket } from 'react-icons/tb'

export function NavBar() {
  return (
    <div className='flex bg-cyan-700 w-screen h-12'>
      <Link className='flex' href='/'>
        <p>eventt </p>
        <TbTicket />
        <p>u </p>
      </Link>
      <Link className='bg-white w-max h-8 mx-2' href='/'>
        Home
      </Link>
      <Link className='bg-white w-max h-8 mx-2' href='Test'>
        Test
      </Link>
    </div>
  )
}
