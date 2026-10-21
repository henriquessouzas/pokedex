import '../css/SearchBar.css'

/**
 * SearchBar — input controlado para pesquisa de Pokémon
 * Props:
 *   value    : string — valor atual do campo (controlado pelo pai)
 *   onChange : função — chamada a cada tecla digitada
 */
function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      {/* Ícone de lupa decorativo */}
      <span className="search-bar__icon" aria-hidden="true">🔍</span>
      <input
        className="search-bar__input"
        type="search"
        placeholder="Pesquisar Pokémon..."
        value={value}
        onChange={onChange}
        aria-label="Pesquisar Pokémon por nome ou número"
      />
    </div>
  )
}

export default SearchBar
