import '../css/Header.css'

// Definição das abas disponíveis
const ABAS = [
  { id: 'pokedex',     label: 'Pokédex' },
  { id: 'treinadores', label: 'Treinadores' },
]

/**
 * Header — cabeçalho fixo com título e abas de navegação
 * Props:
 *   view       : string — aba ativa ("pokedex" | "treinadores")
 *   onChangeView : função(id) — muda a aba ativa
 */
function Header({ view, onChangeView }) {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Ícone + título */}
        <span className="header__icon" aria-hidden="true">⬤</span>
        <h1 className="header__title">Pokédex</h1>

        {/* Abas de navegação */}
        <nav className="header__nav" aria-label="Navegação principal">
          {ABAS.map((aba) => (
            <button
              key={aba.id}
              className={`header__tab ${view === aba.id ? 'header__tab--active' : ''}`}
              onClick={() => onChangeView(aba.id)}
              aria-current={view === aba.id ? 'page' : undefined}
            >
              {aba.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
