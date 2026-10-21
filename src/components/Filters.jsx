import typeColors from '../data/typeColors.js'
import '../css/Filters.css'

/**
 * Filters — barra de botões para filtrar por tipo
 * Props:
 *   types        : string[] — lista de tipos (ex: ["Bug", "Fire", ...])
 *   selectedType : string   — tipo atualmente selecionado, ou "" para Todos
 *   onSelectType : função   — chamada com o nome do tipo clicado (ou "" para Todos)
 */
function Filters({ types, selectedType, onSelectType }) {
  return (
    <div className="filters" role="group" aria-label="Filtrar por tipo">
      {/* Botão "Todos" — limpa o filtro de tipo */}
      <button
        className={`filters__btn filters__btn--all ${selectedType === '' ? 'filters__btn--active' : ''}`}
        onClick={() => onSelectType('')}
      >
        Todos
      </button>

      {/* Um botão por tipo, com a cor do tipo como fundo quando selecionado */}
      {types.map((tipo) => {
        const ativo = selectedType === tipo
        return (
          <button
            key={tipo}
            className={`filters__btn ${ativo ? 'filters__btn--active' : ''}`}
            onClick={() => onSelectType(tipo)}
            style={ativo ? { backgroundColor: typeColors[tipo] ?? '#999', borderColor: typeColors[tipo] ?? '#999' } : {}}
          >
            {tipo}
          </button>
        )
      })}
    </div>
  )
}

export default Filters
