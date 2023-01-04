import { HiMagnifyingGlass } from 'react-icons/hi'
import data from "../assets/MOCK_DATA.json"
import { useState } from "react"

export function SearchBar() {
  const [query, setQuery] = useState("")

  return (
    <div className="absolute z-10 mb-4 rounded-lg bg-neutral-800 px-auto py-auto overflow-hidden">
      <div className="relative">
        <input
          className="text-neutral-100 bg-neutral-800 hover:bg-neutral-900 px-16 py-2"
          placeholder="Busque um evento"
          onChange={event => setQuery(event.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <HiMagnifyingGlass size={25} color="white" />
        </div>
      </div>

      {
        data.filter(post => {
          if (query === '')
            return ''
          else if (post.first_name.toLowerCase().includes(query.toLowerCase()))
            return post
        }).map((post, index) => (
          <div className="text-neutral-100 w-full pl-2 flex-row" key={index}>
            <p>{post.first_name} {post.last_name}</p>
          </div>
        ))
      }
    </div>
  )
}
