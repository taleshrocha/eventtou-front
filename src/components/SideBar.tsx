import Link from 'next/link'
import { useState } from "react"
import { GrTest } from "react-icons/gr"
import { AiOutlineMenu, AiOutlineMenuFold, AiFillHome } from "react-icons/ai"

interface LinkButtonProps {
  icon: JSX.Element,
  name: string,
  page: string
}


function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      className="group/item p-4 rounded-md w-full
      gap-2 text-xl text-neutral-100
      hover:bg-cyan-900 hover:bg-opacity-25"
      href={props.page}
    >
      <span
        className="flex gap-2
      transition group-hover/item:duration-500 group-hover/item:translate-x-2"
      >
        {props.icon}
        {props.name}
      </span>
    </Link>

  )
}

export function SideBar() {
  const [isMenu, setIsMenu] = useState(false)
  const [userStatus, setUserStatus] = useState(false)

  return (
    <div className="flex">

      {
        (isMenu) ?
          <div className="flex-none sticky top-0 w-1/6 h-screen
          transition hover:duration-1000 hover:bg-opacity-20 hover:bg-slate-800 rounded-tr-[2.4rem]">
            <button
              className="absolute left-0 m-4"
              onClick={() => setIsMenu(!isMenu)}
            >
              <AiOutlineMenuFold size={32} color="white" />
            </button>

            <div className="absolute right-0">
              <img
                className="rounded-full w-20 h-20"
                src="https://avatars.githubusercontent.com/u/61332391?s=400&u=28a10fb384e6fc71a6d5ae3cfa36600916b5ef53&v=4"
              />
            </div>

            <div className="grid grid-rows-6 p-2 mt-20">
              <LinkButton icon={<AiFillHome size={30} />} name="Events" page="/Events" />
              <LinkButton icon={<GrTest size={30} color={"white"} />} name="Test.tsx" page="/Test" />

              <Link href="/Home">this page!</Link>
            </div>

          </div>
          :
          <div className="flex-none sticky top-0 h-screen">
            <button
              className="m-4"
              onClick={() => setIsMenu(!isMenu)}
            >
              <AiOutlineMenu size={32} color="white" />
            </button>
          </div>
      }

      <button
        className="absolute z-20 m-4 top-0 right-0"
        onClick={() => setUserStatus(!userStatus)}
      >
        <img
          className="rounded-full w-12 h-12"
          src="https://avatars.githubusercontent.com/u/61332391?s=400&u=28a10fb384e6fc71a6d5ae3cfa36600916b5ef53&v=4"
        />
      </button>

      {
        (userStatus) ?
          <div className="absolute z-10 top-4 right-4 w-max h-max p-20 grid
          bg-cyan-900 rounded-md rounded-tr-[2rem]">
            <img
              className="place-self-center rounded-full w-20 h-20"
              src="https://avatars.githubusercontent.com/u/61332391?s=400&u=28a10fb384e6fc71a6d5ae3cfa36600916b5ef53&v=4"
            />
            <h1 className="">Tales H. Rocha</h1>
          </div>
          :
          <></>
      }

    </div>
  )
}
