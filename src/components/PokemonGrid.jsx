import PokemonCard from "./PokemonCard";

function PokemonGrid({ pokemons, favorites, toggleFavorite }) {
  return (
    <div className="grid">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isFavorite={favorites.includes(pokemon.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default PokemonGrid;
