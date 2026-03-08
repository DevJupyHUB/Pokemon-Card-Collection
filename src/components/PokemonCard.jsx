import { typeColor } from "../data";

function PokemonCard({ pokemon, isFavorite, toggleFavorite }) {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

  return (
    <div className="card">
      <div className="card-header">{pokemon.name}</div>

      <div>
        <img src={imgUrl} alt={pokemon.name} />
      </div>

      <div
        className="type-badge"
        style={{ backgroundColor: typeColor[pokemon.type] }}
      >
        {pokemon.type}
      </div>

      <p>
        HP: {pokemon.hp} | Attack: {pokemon.attack}
      </p>

      <div className="favorite-bar" onClick={() => toggleFavorite(pokemon.id)}>
        {isFavorite ? "❤️ Favorite" : "🤍 Add Favorite"}
      </div>
    </div>
  );
}

export default PokemonCard;
