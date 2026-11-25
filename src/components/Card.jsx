import { Link } from "react-router";
import Avatar from "./Avatar";
import TypeBadge from "./TypeBadge";

export default function Card({ pokemon }) {
  const typesList = pokemon.types || (pokemon.type ? [pokemon.type] : []);

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
      <Avatar src={pokemon.avatar} alt={pokemon.name} variant="frame" />
      <div>
        <h3 className="font-bold text-stone-800 text-lg">{pokemon.name}</h3>
        <div className="mt-1 flex flex-wrap gap-1">
          {typesList.map((t) => (
            <TypeBadge key={t} type={t} />
          ))}
        </div>
      </div>
    </Link>
  );
}