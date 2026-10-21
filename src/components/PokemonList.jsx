import PokemonCard from './PokemonCard.jsx'
import '../css/PokemonList.css'

/**
 * PokemonList — renderiza a grade com todos os cards
 * Props:
 *   pokemons : array de objetos Pokémon
 *   onSelect : função chamada com o Pokémon clicado (abre o modal)
 */
function PokemonList({ pokemons, onSelect }) {
  // Exibe mensagem amigável quando nenhum Pokémon bate com a pesquisa
  if (pokemons.length === 0) {
    return (
      <div className="pokemon-list__empty">
        <span className="pokemon-list__empty-icon" aria-hidden="true">😵</span>
        <p className="pokemon-list__empty-title">Nenhum Pokémon encontrado</p>
        <p className="pokemon-list__empty-hint">
          Tente pesquisar por outro nome ou número.
        </p>
      </div>
    )
  }

  return (
    <main className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} onSelect={onSelect} />
      ))}
    </main>
  )
}

export default PokemonList
