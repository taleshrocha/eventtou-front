import './styles/main.css';
import { Home } from "./routes/Home"
import { Test } from "./routes/Test"
import { useState } from "react"
import { List, CaretDoubleLeft } from 'phosphor-react'
import { GrTest } from "react-icons/gr"
import { AiFillHome } from "react-icons/ai"
import {
  Routes,
  Route,
  Link
} from "react-router-dom"

interface LinkButtonProps {
  icon: JSX.Element,
  name: string,
  route: string
}

function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      className="flex gap-2 justify-start p-4 text-neutral-100 w-full hover:bg-cyan-900 rounded-md text-xl"
      to={props.route}
    >
      {props.icon} {props.name}
    </Link>

  )
}

function App() {
  const [isMenu, setIsMenu] = useState(false)

  return (
    <div className="relative flex">

      {
        (isMenu) ?
          <div className="flex-none relative w-1/6 absolute:h-screen bg-auto">
            <button
              className="absolute left-0 m-4"
              onClick={() => setIsMenu(!isMenu)}
            >
              <CaretDoubleLeft size={32} weight="bold" color="white" />
            </button>

            <div className="absolute right-0">
              <img
                className="rounded-full w-20 h-20"
                src="https://avatars.githubusercontent.com/u/61332391?s=400&u=28a10fb384e6fc71a6d5ae3cfa36600916b5ef53&v=4"
              />
            </div>

            <div className="grid grid-rows-6 p-2 mt-20">
              <LinkButton icon={<AiFillHome size={30} />} name="Home" route="/" />
              <LinkButton icon={<GrTest size={30} color={"white"} />} name="Test" route="/test" />
            </div>

          </div>
          :
          <button
            className="absolute m-4"
            onClick={() => setIsMenu(!isMenu)}
          >
            <List size={32} weight="bold" color="white" />
          </button>
      }

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Test />} path="/test" />
      </Routes>

    </div>
  )
}

export default App
