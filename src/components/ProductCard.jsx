import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "./context/CartContext";
import { useFavorites } from "./context/FavoritesContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(product.id);

  function toggleFavorite() {
    favorite ? removeFavorite(product.id) : addFavorite(product);
  }


  return (

    <div className="bg-zinc-900 rounded-2xl p-4 relative flex flex-col">

      {/* FAVORITO */}

      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 cursor-pointer"
      >
        <Heart
          size={22}
          className={`transition ${
            favorite ? "fill-red-500 text-red-500" : "text-zinc-400 cursor-pointer"
          }`}
        />
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-contain mb-4"
      />

      <h3 className="font-semibold">{product.name}</h3>

      <p className="text-blue-400 font-bold mt-1">
        R$ {product.price.toFixed(2)}
      </p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => addToCart(product)}
          className="flex bg-blue-500 hover:bg-blue-600 p-2 rounded-xl cursor-pointer"
        >
          <ShoppingCart size={18} />
        </button>

        <button className="flex-1 border border-blue-500 text-blue-400 rounded-lg cursor-pointer">
          Comprar Agora
        </button>
      </div>
    </div>

  );
}