import { useState } from "react";
import { pokemons, typeColor } from "./data";
import PokemonGrid from "./components/PokemonGrid";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  const [selectedType, setSelectedType] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const types = [...new Set(pokemons.map((p) => p.type))];

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  let filtered = pokemons;

  if (selectedType !== "All") {
    filtered = filtered.filter((p) => p.type === selectedType);
  }

  return (
    <div>
      <h1 className="title">Pokémon Explorer</h1>

      <Filters types={types} setSelectedType={setSelectedType} />

      <PokemonGrid
        pokemons={filtered}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;
