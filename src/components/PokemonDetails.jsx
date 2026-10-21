import { useEffect } from 'react'
import typeColors from '../data/typeColors.js'
import '../css/PokemonDetails.css'

// Formata o ID para o padrão #001
function formatId(id) {
  return '#' + String(id).padStart(3, '0')
}

// Definição dos stats com rótulo e valor máximo (base máx canônica = 255)
const STAT_MAX = 255
const STAT_LABELS = [
  { key: 'hp',             label: 'HP' },
  { key: 'attack',         label: 'Attack' },
  { key: 'defense',        label: 'Defense' },
  { key: 'specialAttack',  label: 'Sp. Atk' },
  { key: 'specialDefense', label: 'Sp. Def' },
  { key: 'speed',          label: 'Speed' },
]

/**
 * PokemonDetails — modal com detalhes completos do Pokémon
 * Props:
 *   pokemon : objeto com id, name, types[] e stats{}
 *   onClose : função chamada para fechar o modal
 */
function PokemonDetails({ pokemon, onClose }) {
  const { id, name, types, stats } = pokemon

  // Cor principal: primeiro tipo do Pokémon
  const corPrincipal = typeColors[types[0].name] ?? '#999'

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    // Cleanup: remove o listener quando o modal desmonta
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Impede que clique dentro do modal propague para o overlay
  function handleModalClick(e) {
    e.stopPropagation()
  }

  return (
    // Overlay escuro — clicar fora fecha o modal
    <div className="details-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Detalhes de ${name}`}>
      <div className="details-modal" onClick={handleModalClick}>

        {/* Cabeçalho colorido com a cor do tipo principal */}
        <div className="details-modal__header" style={{ backgroundColor: corPrincipal }}>
          <button
            className="details-modal__close"
            onClick={onClose}
            aria-label="Fechar detalhes"
          >
            ✕
          </button>
          <span className="details-modal__id">{formatId(id)}</span>
          <h2 className="details-modal__name">{name}</h2>

          {/* Badges de tipo */}
          <div className="details-modal__types">
            {types.map((tipo) => (
              <span key={tipo.id} className="details-modal__badge">
                {tipo.name}
              </span>
            ))}
          </div>
        </div>

        {/* Imagem grande — sprite oficial */}
        <div className="details-modal__image-wrapper">
          <img
            className="details-modal__image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
            onError={(e) => {
              e.currentTarget.onerror = null
              // Fallback para o sprite padrão se o artwork não existir
              e.currentTarget.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            }}
          />
        </div>

        {/* Barras de progresso dos stats */}
        <div className="details-modal__stats">
          <h3 className="details-modal__stats-title">Base Stats</h3>
          {STAT_LABELS.map(({ key, label }) => {
            const valor = stats[key]
            const porcentagem = Math.round((valor / STAT_MAX) * 100)
            return (
              <div key={key} className="stat-bar">
                <span className="stat-bar__label">{label}</span>
                <span className="stat-bar__value">{valor}</span>
                <div className="stat-bar__track">
                  <div
                    className="stat-bar__fill"
                    style={{
                      width: `${porcentagem}%`,
                      backgroundColor: corPrincipal,
                    }}
                    role="progressbar"
                    aria-valuenow={valor}
                    aria-valuemin={0}
                    aria-valuemax={STAT_MAX}
                  />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default PokemonDetails
