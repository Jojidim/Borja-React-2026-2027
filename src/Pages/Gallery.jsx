import Card from "../components/Card";

export default function Gallery({ pokemons }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Pokemon Gallery</h1>
      {pokemons.length === 0 ? (
        <p className="text-stone-500">No pokemons found. Click Create to add one.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}