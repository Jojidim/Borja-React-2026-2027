import { useEffect, useState, useMemo } from "react";
import { RouterProvider } from "react-router";
import { loadData, saveData } from "./api/storage";
import { createAppRouter } from "./routes/router";
import Modal from "./components/Modal";
import Form from "./components/Form";

const DEFAULT_POKEMONS = [
  { id: 1, name: "Bulbasaur", description: "A strange seed was planted on its back at birth.", avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", types: ["Grass", "Flying"] },
  { id: 4, name: "Charmander", description: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.", avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", types: ["Fire"] },
  { id: 7, name: "Squirtle", description: "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.", avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", types: ["Water"] }
];

export default function App() {
  const [pokemons, setPokemons] = useState(() => loadData("pokemons", DEFAULT_POKEMONS));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    saveData("pokemons", pokemons);
  }, [pokemons]);

  const handleAddPokemon = (newPokemon) => {
    setPokemons([newPokemon, ...pokemons]);
    setIsModalOpen(false);
  };

  const router = useMemo(() => {
    return createAppRouter({
      pokemons,
      onOpenModal: () => setIsModalOpen(true),
    });
  }, [pokemons]);

  return (
    <>
      <RouterProvider router={router} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form onSubmit={handleAddPokemon} onCancel={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}