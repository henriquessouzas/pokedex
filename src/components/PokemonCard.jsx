import typeColors from '../data/typeColors.js'
import '../css/PokemonCard.css'

// Formata o ID para o padrão #001, #025, #151
function formatId(id) {
  return '#' + String(id).padStart(3, '0')
}

/**
 * PokemonCard — exibe as informações de um único Pokémon
 * Props:
 *   pokemon: objeto com id, name, types[] e stats{}
 */
function PokemonCard({ pokemon }) {
  const { id, name, types, stats } = pokemon

  return (
    <div className="pokemon-card">
      {/* Cabeçalho: número e nome */}
      <div className="pokemon-card__header">
        <span className="pokemon-card__id">{formatId(id)}</span>
        <h2 className="pokemon-card__name">{name}</h2>
      </div>

      {/* Imagem placeholder — será substituída no commit 5 */}
      <div className="pokemon-card__image-wrapper">
        <img
          className="pokemon-card__image"
          src="https://placehold.co/96x96?text=?"
          alt={name}
        />
      </div>

      {/* Badges de tipo, cada uma com a cor do tipo */}
      <div className="pokemon-card__types">
        {types.map((tipo) => (
          <span
            key={tipo.id}
            className="pokemon-card__badge"
            style={{ backgroundColor: typeColors[tipo.name] ?? '#999' }}
          >
            {tipo.name}
          </span>
        ))}
      </div>

      {/* Tabela de stats */}
      <ul className="pokemon-card__stats">
        <li><span className="stat-label">HP</span>             <span className="stat-value">{stats.hp}</span></li>
        <li><span className="stat-label">Attack</span>         <span className="stat-value">{stats.attack}</span></li>
        <li><span className="stat-label">Defense</span>        <span className="stat-value">{stats.defense}</span></li>
        <li><span className="stat-label">Sp. Attack</span>     <span className="stat-value">{stats.specialAttack}</span></li>
        <li><span className="stat-label">Sp. Defense</span>    <span className="stat-value">{stats.specialDefense}</span></li>
        <li><span className="stat-label">Speed</span>          <span className="stat-value">{stats.speed}</span></li>
      </ul>
    </div>
  )
}

export default PokemonCard
