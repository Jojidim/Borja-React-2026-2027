import { Link } from "react-router";
import Button from "./Button";

export default function Header({ onOpenModal }) {
  return (
    <header className="bg-white border-b border-stone-200 px-6 py-4 flex justify-between items-center shadow-xs">
      <Link to="/" className="font-bold text-xl text-stone-800">Pokedex</Link>
      <Button variant="positive" onClick={onOpenModal}>Create</Button>
    </header>
  );
}