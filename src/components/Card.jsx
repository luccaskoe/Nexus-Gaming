import React from 'react';

function Card({ open, items, onClose }) {

  if (!open) return null;
  const subtotal = items.reduce((acc, i) => acc + i.price, 0);


return (

        <div className="fixed inset-0 bg-black/60 z-50 flex justify-end">
            <aside className="w-full sm:w-96 bg-[#0f1115] p-6">
                <h3 className="text-xl font-bold mb-4">Meu Carrinho</h3>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>{item.name}</span>
                  <span>R$ {item.price}</span>
          </div>
        ))}

      </div>
            <div className="border-t border-gray-700 mt-6 pt-4">
              <div className="flex justify-between font-bold mb-4">
                <span>Subtotal</span>
                <span>R$ {subtotal}</span>
    </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold">Finalizar Compra</button>
          <button onClick={onClose} className="w-full text-gray-400 mt-3">Fechar</button>
        
          </div>
    </aside>
</div>

  );
}

export default Card;