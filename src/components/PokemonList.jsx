import PokemonCard from './PokemonCard.jsx'
import '../css/PokemonList.css'

/**
 * PokemonList — renderiza a grade com todos os cards
 * Props:
 *   pokemons: array de objetos Pokémon
 */
function PokemonList({ pokemons }) {
  // Exibe mensagem caso o array esteja vazio (ex: filtro sem resultado)
  if (pokemons.length === 0) {
    return <p className="pokemon-list__empty">Nenhum Pokémon encontrado.</p>
  }

  return (
    <main className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </main>
  )
}

export default PokemonList
