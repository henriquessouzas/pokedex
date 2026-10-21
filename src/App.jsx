import { useState } from 'react'
import { getPokemons } from './data/pokedex.js'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import PokemonList from './components/PokemonList.jsx'
import './css/App.css'

// Lista completa carregada uma única vez (dado estático)
const todosPokemons = getPokemons()

/**
 * App — componente raiz da Pokédex
 * Gerencia o estado de pesquisa e calcula a lista filtrada
 */
function App() {
  // Estado do campo de pesquisa
  const [search, setSearch] = useState('')

  // Lista filtrada — estado derivado, sem useState extra
  // Filtra por nome (parcial, case-insensitive) ou por ID exato
  const pokemonsFiltrados = todosPokemons.filter((pokemon) => {
    const termo = search.trim().toLowerCase()
    if (termo === '') return true // sem filtro → mostra tudo

    const bateNome = pokemon.name.toLowerCase().includes(termo)
    const bateId   = String(pokemon.id) === termo

    return bateNome || bateId
  })

  return (
    <>
      <Header />
      {/* Barra de pesquisa centralizada abaixo do header */}
      <div className="app__search-wrapper">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <PokemonList pokemons={pokemonsFiltrados} />
    </>
  )
}

export default App
