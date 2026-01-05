var _s = $RefreshSig$();
import {  X, Trash  } from "lucide-react";
import { useCart } from "./context/CartContext"; 

function CartSidebar({ isOpen, onClose }) {
  const { cart, removeFromCart, subtotal, clearCart  } = useCart();

   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isOpen) {
    return null;

  }

  return (

     <div className="fixed top-0 right-0 h-full w-80 bg-zinc-900 text-white p-6 shadow-lg z-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Seu Carrinho</h2>
        {/* O botão 'X' agora chama a função onClose recebida por props */}
        <button onClick={onClose} className="cursor-pointer text-zinc-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-zinc-400">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-zinc-400">
                    {item.quantity} x R$ {item.price.toFixed(2)}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)} >
                  <Trash size={18} className="text-red-500 hover:text-red-400 cursor-pointer" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-zinc-700 pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button onClick={clearCart} className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded cursor-pointer">
              Limpar Carrinho
            </button>
            <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded cursor-pointer">
              Finalizar Compra
            </button>
          </div>
        </>
      )}

    </div>

  );
}


export default CartSidebar;