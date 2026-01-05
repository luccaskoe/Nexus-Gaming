import { X, Trash } from "lucide-react";
import { useFavorites } from "./context/FavoritesContext";

export default function FavoritesSidebar({ isOpen, onClose }) {
  const { favorites, removeFavorite } = useFavorites();

  if (!isOpen) return null;

  return (

  <section id="FavoritesSidebar">
    <aside className="fixed top-0 right-0 w-96 h-full bg-[#111318] z-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Favoritos</h2>
        <button onClick={onClose} className="cursor-pointer text-zinc-400 hover:text-white"><X /></button>
      </div>

      {favorites.length === 0 && (
        <p className="text-zinc-400">Nenhum favorito adicionado.</p>
      )}

      <div className="space-y-4">
        {favorites.map(item => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-[#0f1115] p-3 rounded-lg"
          >
            <img
              src={item.image}
              className="h-14 w-14 object-contain"
            />

            <div className="flex-1">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-blue-400 text-sm">
                R$ {item.price.toFixed(2)}
              </p>
            </div>

            <button onClick={() => removeFavorite(item.id)}>
              <Trash size={18} className="text-red-400 cursor-pointer" />
            </button>
          </div>
        ))}
      </div>
    </aside>
  </section>


  );
}