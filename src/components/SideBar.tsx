import { useState } from "react"
import { List, CaretDoubleLeft } from 'phosphor-react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"


export function SideBar() {
  const [isMenu, setIsMenu] = useState(false)

  return (
    <>
      {
        (isMenu) ?
          <div className="relative w-1/4 h-screen bg-neutral-900 ">

            <button
              className="absolute right-0 m-4"
              onClick={() => setIsMenu(!isMenu)}
            >
              <CaretDoubleLeft size={32} weight="bold" color="white" />
            </button>

            <div className="flex-col">
              <img
                className="rounded-full w-16 h-16"
                src="https://avatars.githubusercontent.com/u/61332391?s=400&u=28a10fb384e6fc71a6d5ae3cfa36600916b5ef53&v=4"
              />
              <h1 className="size-xl text-neutral-100">Tales Rocha</h1>
            </div>


            <div className="">
              <button
                className="text-neutral-100 border-y-2 border-emerald-800 w-full"
              //onClick={}
              >
                Meus tickets
              </button>
            </div>

          </div>
          :
          <button className="absolute m-4" onClick={() => setIsMenu(!isMenu)}>
            <List size={32} weight="bold" color="white" />
          </button>
      }

    </>
  )
}

export default App
