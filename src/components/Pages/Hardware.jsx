import React from 'react';
import ProductCard from '../ProductCard';
import products from '../../data/products';

function Hardware({ products, onAdd, onFavorite }) {
    const hardwareProducts = products.filter(p => p.category === 'hardware');


    return (
        
    <main className="max-w-7xl mx-auto px-6 mt-20">
      <h2 className="text-3xl font-bold mb-8">Hardwares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
         {hardwareProducts.map(p => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={onAdd}
            onFavorite={onFavorite}
          />
        ))}
      </div>
    </main>
  
    );
}

export default Hardware;