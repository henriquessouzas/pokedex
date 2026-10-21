import { getPokemonsByIds } from '../data/pokedex.js'
import '../css/TrainerCard.css'

/**
 * TrainerCard — exibe informações de um treinador e sua equipe
 * Props:
 *   trainer  : objeto com id, name, badges, pokemonIds[]
 *   onSelect : função(pokemon) — abre o PokemonDetails ao clicar na miniatura
 */
function TrainerCard({ trainer, onSelect }) {
  const { name, badges, pokemonIds } = trainer

  // Resolve os IDs em objetos Pokémon completos
  const equipe = getPokemonsByIds(pokemonIds)

  return (
    <div className="trainer-card">
      {/* Avatar genérico com a inicial do nome */}
      <div className="trainer-card__avatar" aria-hidden="true">
        {name.charAt(0)}
      </div>

      <div className="trainer-card__info">
        <h2 className="trainer-card__name">{name}</h2>

        {/* Insígnias: um ícone de medalha por badge conquistada */}
        <div className="trainer-card__badges" aria-label={`${badges} insígnias`}>
          {Array.from({ length: badges }).map((_, i) => (
            <span key={i} className="trainer-card__badge-icon" aria-hidden="true">
              🏅
            </span>
          ))}
        </div>
      </div>

      {/* Equipe: miniaturas clicáveis de cada Pokémon */}
      <div className="trainer-card__team">
        {equipe.map((pokemon) => (
          <button
            key={pokemon.id}
            className="trainer-card__pokemon"
            onClick={() => onSelect(pokemon)}
            title={pokemon.name}
            aria-label={`Ver detalhes de ${pokemon.name}`}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = 'https://placehold.co/48x48?text=?'
              }}
            />
            <span className="trainer-card__pokemon-name">{pokemon.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TrainerCard
