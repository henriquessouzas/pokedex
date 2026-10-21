import { useState } from 'react'
import { getPokemons, getTypes } from './data/pokedex.js'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import Filters from './components/Filters.jsx'
import PokemonList from './components/PokemonList.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'
import './css/App.css'

// Dados estáticos carregados uma única vez fora do componente
const todosPokemons = getPokemons()
const tipos         = getTypes()

/**
 * App — componente raiz da Pokédex
 * Gerencia pesquisa, filtro de tipo e o Pokémon selecionado para o modal
 */
function App() {
  const [search, setSearch]               = useState('')   // texto da busca
  const [selectedType, setSelectedType]   = useState('')   // "" = Todos
  const [selectedPokemon, setSelectedPokemon] = useState(null) // modal

  // ─── Estado derivado ─────────────────────────────────────────────────────
  const pokemonsFiltrados = todosPokemons.filter((pokemon) => {
    // 1) Pesquisa por nome (parcial, case-insensitive) ou ID exato
    const termo = search.trim().toLowerCase()
    const batePesquisa =
      termo === '' ||
      pokemon.name.toLowerCase().includes(termo) ||
      String(pokemon.id) === termo

    // 2) Filtro de tipo: qualquer tipo do Pokémon deve corresponder
    const bateTipo =
      selectedType === '' ||
      pokemon.types.some((t) => t.name === selectedType)

    return batePesquisa && bateTipo
  })

  return (
    <>
      <Header />

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

      {/* onSelect abre o modal definindo o Pokémon selecionado */}
      <PokemonList
        pokemons={pokemonsFiltrados}
        onSelect={(pokemon) => setSelectedPokemon(pokemon)}
      />

      {/* Modal renderizado apenas quando há um Pokémon selecionado */}
      {selectedPokemon && (
        <PokemonDetails
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </>
  )
}

export default App
