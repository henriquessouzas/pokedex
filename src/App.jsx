import { useState } from 'react'
import { getPokemons, getTypes } from './data/pokedex.js'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import Filters from './components/Filters.jsx'
import PokemonList from './components/PokemonList.jsx'
import './css/App.css'

// Dados estáticos carregados uma única vez fora do componente
const todosPokemons = getPokemons()
const tipos         = getTypes()

/**
 * App — componente raiz da Pokédex
 * Gerencia pesquisa e filtro de tipo; lista filtrada é estado derivado
 */
function App() {
  const [search, setSearch]           = useState('')       // texto digitado
  const [selectedType, setSelectedType] = useState('')     // "" = Todos

  // ─── Estado derivado ─────────────────────────────────────────────────────
  // O Pokémon aparece somente se satisfizer OS DOIS critérios ao mesmo tempo
  const pokemonsFiltrados = todosPokemons.filter((pokemon) => {
    // 1) Filtro de pesquisa: bate nome parcial (case-insensitive) ou ID exato
    const termo   = search.trim().toLowerCase()
    const batePesquisa =
      termo === '' ||
      pokemon.name.toLowerCase().includes(termo) ||
      String(pokemon.id) === termo

    // 2) Filtro de tipo: pelo menos um dos tipos do Pokémon deve corresponder
    const bateTipo =
      selectedType === '' ||
      pokemon.types.some((t) => t.name === selectedType)

    return batePesquisa && bateTipo
  })

  return (
    <>
      <Header />

      {/* Controles de busca e filtro */}
      <div className="app__search-wrapper">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Filters
        types={tipos}
        selectedType={selectedType}
        onSelectType={setSelectedType}
      />

      <PokemonList pokemons={pokemonsFiltrados} />
    </>
  )
}

export default App
