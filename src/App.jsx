import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* COMPONENTES */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import { CartProvider } from "./components/context/CartContext";    
import { FavoritesProvider } from "./components/context/FavoritesContext";
import { UserProvider } from "./components/context/UserContext";
import FavoritesSidebar from "./components/FavoritesSidebar";
import CartSidebar from "./components/CartSidebar";
import UserModal from "./components/UserModal";

/* PÁGINAS */
import Hardware from "./components/Pages/Hardware";
import CadeiraGamer from "./components/Pages/CadeiraGamer";

/* DADOS */
import products from "./data/products";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const handleOpenCart = () => setCartOpen(true);
  const handleCloseCart = () => setCartOpen(false); 

  return (
            
    
      <CartProvider>
        <FavoritesProvider>
          <UserProvider>
            <div className="bg-[#0f1115] text-gray-200 min-h-screen flex flex-col">
              <Navbar
                onOpenCart={handleOpenCart}
                onOpenFavorites={() => setFavoritesOpen(true)}
                onOpenUser={() => setUserOpen(true)}
              />

              <main className="flex-grow">

                <Routes>
                  {/* Rota Principal (Home) */}

                  <Route
                    path="/"
                    element={
                      <>
                         <Hero products={products} />
                        <div className="max-w-7xl mx-auto px-6 mt-20">
                          <h2 className="text-3xl font-bold mb-8">Produtos em Destaque</h2>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {products.map(p => (
                              <ProductCard key={p.id} product={p} />
                            ))}
                          </div>
                        </div>
                      </>
                    }
                  />

                  {/* Rota de Catálogo */}

                  <Route
                    path="/catalog"
                    element={<Catalog products={products} />}
                  />

                  {/* Rota de Hardware */}

                  <Route
                    path="/hardware"
                    element={<Hardware products={products} />}
                  />

                  {/* Rota de Cadeira Gamer */}

                  <Route
                    path="/cadeira-gamer"
                    element={<CadeiraGamer products={products} />}
                  />
                </Routes>
              </main>

              {cartOpen && (
                <CartSidebar
                  isOpen={cartOpen}
                  onClose={handleCloseCart}
                />
              )}

              <FavoritesSidebar
                isOpen={favoritesOpen}
                onClose={() => setFavoritesOpen(false)}
              />

              {userOpen && (
                <UserModal
                  isOpen={userOpen}
                  onClose={() => setUserOpen(false)}
                />
              )}

              <Footer />
            </div>
          </UserProvider>
        </FavoritesProvider>
      </CartProvider>
    

  );
}

export default App;
