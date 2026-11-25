import { createBrowserRouter, Navigate, Outlet } from "react-router";
import Header from "../components/Header";
import Gallery from "../pages/Gallery";
import PokemonDetail from "../pages/PokemonDetail";

function Layout({ pokemons, onOpenModal }) {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans">
      <Header onOpenModal={onOpenModal} />
      <main className="max-w-4xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

export function createAppRouter({ pokemons, onOpenModal }) {
  return createBrowserRouter([
    {
      element: <Layout pokemons={pokemons} onOpenModal={onOpenModal} />,
      children: [
        {
          path: "/",
          element: <Gallery pokemons={pokemons} />,
        },
        {
          path: "/pokemon/:id",
          element: <PokemonDetail pokemons={pokemons} />,
        },
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ]);
}