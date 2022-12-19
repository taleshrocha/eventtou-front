import '../styles/main.css';
import { SearchBar } from '../components/SearchBar';

export function Test() {

  return (
    <div className="mx-auto flex flex-col items-center my-20 overflow-auto">

      <h1 className="text-xl text-neutral-100">Descubra o seu futuro</h1>
      <SearchBar />

    </div>
  )
}
