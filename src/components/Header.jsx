import '../css/Header.css'

/**
 * Header — cabeçalho fixo da Pokédex com título
 */
function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Ícone de pokébola em SVG simples */}
        <span className="header__icon" aria-hidden="true">⬤</span>
        <h1 className="header__title">Pokédex</h1>
      </div>
    </header>
  )
}

export default Header
