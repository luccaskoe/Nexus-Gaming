import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(product) {
    const exists = favorites.find(item => item.id === product.id);
    if (!exists) {
      setFavorites(prev => [...prev, product]);
    }
  }

  function removeFavorite(id) {
    setFavorites(prev => prev.filter(item => item.id !== id));
  }

  function isFavorite(id) {
    return favorites.some(item => item.id === id);
  }

  return (

    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
    
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}