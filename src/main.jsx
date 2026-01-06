import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './components/context/CartContext.jsx';
import { FavoritesProvider } from './components/context/FavoritesContext.jsx';
import { UserProvider } from './components/context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Nexus-Gaming/">
      <UserProvider>
        <FavoritesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FavoritesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);