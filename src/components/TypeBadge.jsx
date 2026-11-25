export default function TypeBadge({ type }) {
  let badgeColor = "bg-stone-200 text-stone-800";

  switch (type) {
    case "Grass":
      badgeColor = "bg-emerald-100 text-emerald-800";
      break;
    case "Water":
      badgeColor = "bg-blue-100 text-blue-800";
      break;
    case "Fire":
      badgeColor = "bg-red-100 text-red-800";
      break;
    case "Rock":
      badgeColor = "bg-stone-200 text-stone-700";
      break;
    case "Flying":
      badgeColor = "bg-fuchsia-100 text-fuchsia-800";
      break;
    default:
      break;
  }

  return <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor}`}>{type}</span>;
}