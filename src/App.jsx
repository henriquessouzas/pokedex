import { getPokemons } from './data/pokedex.js'
import Header from './components/Header.jsx'
import PokemonList from './components/PokemonList.jsx'

// Carrega os dados uma única vez fora do componente
// (o JSON é estático, não precisa de useState aqui)
const pokemons = getPokemons()

/**
 * App — componente raiz da Pokédex
 */
function App() {
  return (
    <>
      <Header />
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default App
