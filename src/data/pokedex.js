// Importa os dados brutos da Pokédex
import data from './pokedex-data.json'

/**
 * Retorna a lista completa de Pokémon.
 * Cada item tem: id, name, stats { hp, attack, defense,
 * specialAttack, specialDefense, speed }, types [{ id, name }]
 *
 * @returns {Array} lista de 151 Pokémon
 */
export function getPokemons() {
  return data.pokemon
}

/**
 * Retorna a lista completa de treinadores.
 * Cada item tem: id, name, badges (número de insígnias),
 * pokemonIds (array de ids dos Pokémon que o treinador possui)
 *
 * @returns {Array} lista de treinadores
 */
export function getTrainers() {
  return data.trainers
}

/**
 * Retorna a lista de nomes de tipos únicos, em ordem alfabética.
 * Os tipos estão na chave raiz "types" do JSON: [{ id, name }]
 *
 * @returns {Array<string>} ex: ["Bug", "Dark", "Dragon", ...]
 */
export function getTypes() {
  return data.types
    .map((tipo) => tipo.name)   // pega só o nome
    .sort()                      // ordena alfabeticamente
}
