import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { useFavorites } from "./context/FavoritesContext";
import { useUser } from "./context/UserContext";
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';

function Navbar({ onOpenCart, onOpenFavorites, onOpenUser }) {
  const { cart } = useCart();
  const { favorites } = useFavorites();
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-zinc-900 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}

        <Link to="/" className="text-2xl font-bold text-blue-500">
          Noxus <span className="text-purple-500">Gamers</span>
        </Link>

        {/* NAVEGAÇÃO DESKTOP */}

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-400 cursor-pointer" id="Hero">Home</Link>
          <Link to="/catalog" className="hover:text-blue-400 cursor-pointer">Catálogo</Link>
          <Link to="/hardware" className="hover:text-blue-400 cursor-pointer">Hardaware</Link>
          <Link to="/cadeira-gamer" className="hover:text-blue-400 cursor-pointer">Cadeira Gamer</Link>
          <Link to="/" className="hover:text-blue-400 cursor-pointer" onClick={onOpenFavorites}>Favoritos</Link>
        </div>

        {/* ÍCONES */}

        <div className="flex items-center gap-4">
          <Link to="/catalog" className="p-2 font-bold">
            <Search className="hover:text-blue-400 cursor-pointer" />
          </Link>

          <button onClick={onOpenUser} className="p-2 cursor-pointer flex items-center gap-2">
            <User className="hover:text-blue-400" />
            {user && <span className="hidden md:block">{user.name}</span>}
          </button>

          <button onClick={onOpenFavorites} className="relative p-2 cursor-pointer">
            <Heart className="hover:text-blue-400" />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>

          <button onClick={onOpenCart} className="relative cursor-pointer">
            <ShoppingCart className="hover:text-blue-400" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          {/* ÍCONE HAMBÚRGUER PARA MOBILE */}

          <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-zinc-700 transition-colors">
            <Menu className="hover:text-blue-400" />
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}

      {isMenuOpen && (
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-zinc-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <button onClick={toggleMenu} className="absolute top-5 right-5 p-2">
                <X size={32} className="hover:text-blue-400" />
              </button>

          <Link to="/" className="text-4xl font-bold hover:text-blue-400 cursor-pointer" onClick={toggleMenu} id="Hero">Home</Link>
          <Link to="/catalog" className="text-4xl font-bold hover:text-blue-400 cursor-pointer" onClick={toggleMenu}>Catálogo</Link>
           <Link to="/hardware" className="text-4xl font-bold hover:text-blue-400 cursor-pointer" onClick={toggleMenu}>Hardaware</Link>
           <Link to="/cadeira-gamer" className="text-4xl font-bold hover:text-blue-400 cursor-pointer" onClick={toggleMenu}>Cadeira Gamer</Link>
          <Link to="/" className="text-4xl font-bold hover:text-blue-400 cursor-pointer" onClick={toggleMenu} id="FavoritesSidebar">Favoritos</Link>
        </div>
        </div>
      )}
    </header>
  );
}


export default Navbar;