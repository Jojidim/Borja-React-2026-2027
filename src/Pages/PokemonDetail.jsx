import { useParams, Link } from "react-router";
import Avatar from "../components/Avatar";
import TypeBadge from "../components/TypeBadge";

export default function PokemonDetail({ pokemons }) {
  const { id } = useParams();
  const pokemon = pokemons.find((p) => String(p.id) === String(id));

  if (!pokemon) {
    return (
      <div>
        <p className="text-red-600 mb-4">Pokemon not found.</p>
        <Link to="/" className="text-stone-800 underline text-sm">Back to Gallery</Link>
      </div>
    );
  }

  const typesList = pokemon.types || (pokemon.type ? [pokemon.type] : []);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
      <div className="flex items-center gap-4 mb-6">
        <Avatar src={pokemon.avatar} alt={pokemon.name} variant="rounded" />
        <div>
          <h1 className="text-2xl font-bold">{pokemon.name}</h1>
          <div className="mt-2 flex flex-wrap gap-1">
            {typesList.map((t) => (
              <TypeBadge key={t} type={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-semibold text-stone-400 uppercase mb-1">Description</h3>
        <p className="text-stone-700 bg-stone-50 p-3 rounded border border-stone-100">{pokemon.description || "No description provided."}</p>
      </div>

      <Link to="/" className="inline-block text-sm text-stone-800 underline">← Back to Gallery</Link>
    </div>
  );
}