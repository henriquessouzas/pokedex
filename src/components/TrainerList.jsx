import TrainerCard from './TrainerCard.jsx'
import '../css/TrainerList.css'

/**
 * TrainerList — grade de cards de treinadores
 * Props:
 *   trainers : array de objetos treinador
 *   onSelect : função(pokemon) — repassada para cada TrainerCard
 */
function TrainerList({ trainers, onSelect }) {
  return (
    <main className="trainer-list">
      {trainers.map((trainer) => (
        <TrainerCard
          key={trainer.id}
          trainer={trainer}
          onSelect={onSelect}
        />
      ))}
    </main>
  )
}

export default TrainerList
