function PokemonCard({ pokemon, isFavorite, toggleFavorite }) {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className="card">
      <img src={imgUrl} alt={pokemon.name} />

      <h3>{pokemon.name}</h3>

      <p>Type: {pokemon.type}</p>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>

      <button onClick={() => toggleFavorite(pokemon.id)}>
        {isFavorite ? "❤️ Favorite" : "🤍 Add Favorite"}
      </button>
    </div>
  );
}

export default PokemonCard;
