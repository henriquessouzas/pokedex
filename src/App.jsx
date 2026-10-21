import { useState } from 'react'
import { getPokemons, getTypes, getTrainers } from './data/pokedex.js'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import Filters from './components/Filters.jsx'
import PokemonList from './components/PokemonList.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'
import TrainerList from './components/TrainerList.jsx'
import './css/App.css'

// Dados estáticos carregados uma única vez fora do componente
const todosPokemons = getPokemons()
const tipos         = getTypes()
const treinadores   = getTrainers()

/**
 * App — componente raiz da Pokédex
 * Gerencia: aba ativa, pesquisa, filtro de tipo e modal de detalhes
 */
function App() {
  const [view, setView]                     = useState('pokedex')   // aba ativa
  const [search, setSearch]                 = useState('')
  const [selectedType, setSelectedType]     = useState('')
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  // ─── Estado derivado: lista filtrada (só usada na aba Pokédex) ────────────
  const pokemonsFiltrados = todosPokemons.filter((pokemon) => {
    const termo = search.trim().toLowerCase()
    const batePesquisa =
      termo === '' ||
      pokemon.name.toLowerCase().includes(termo) ||
      String(pokemon.id) === termo

    const bateTipo =
      selectedType === '' ||
      pokemon.types.some((t) => t.name === selectedType)

    return batePesquisa && bateTipo
  })

  // Abre o modal de detalhes (compartilhado entre as duas abas)
  function abrirDetalhes(pokemon) {
    setSelectedPokemon(pokemon)
  }

  return (
    <>
      {/* Header recebe a view e o handler de troca de aba */}
      <Header view={view} onChangeView={setView} />

      {/* ── Aba Pokédex ── */}
      {view === 'pokedex' && (
        <>
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

          <PokemonList
            pokemons={pokemonsFiltrados}
            onSelect={abrirDetalhes}
          />
        </>
      )}

      {/* ── Aba Treinadores ── */}
      {view === 'treinadores' && (
        <TrainerList
          trainers={treinadores}
          onSelect={abrirDetalhes}
        />
      )}

      {/* Modal compartilhado — abre em qualquer aba */}
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
