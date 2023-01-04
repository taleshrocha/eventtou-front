import Link from 'next/link'

export function NavBar() {
  return (
    <div className='bg-cyan-700 w-screen h-12'>
      <Link className='bg-white w-max h-8 mx-2' href='/'>
        Home
      </Link>
      <Link className='bg-white w-max h-8 mx-2' href='Test'>
        Test
      </Link>
    </div>
  )
}
