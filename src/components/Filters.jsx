function Filters({ types, setSelectedType, showFavorites, setShowFavorites }) {
  return (
    <div className="filters">
      <button onClick={() => setSelectedType("All")}>All</button>

      {types.map((type) => (
        <button key={type} onClick={() => setSelectedType(type)}>
          {type}
        </button>
      ))}

      <button onClick={() => setShowFavorites(!showFavorites)}>
        {showFavorites ? "Show All" : "Show Favorites"}
      </button>
    </div>
  );
}

export default Filters;
