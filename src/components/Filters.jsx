function Filters({ types, setSelectedType }) {
  return (
    <div className="filters">
      <button onClick={() => setSelectedType("All")}>All</button>

      {types.map((type) => (
        <button key={type} onClick={() => setSelectedType(type)}>
          {type}
        </button>
      ))}
    </div>
  );
}

export default Filters;
