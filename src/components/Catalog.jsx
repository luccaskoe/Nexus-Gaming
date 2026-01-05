import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';



function Catalog({ products, onAdd }) {
   const [search, setSearch] = useState("");

    const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())

  );

  return (

      <section className="pt-28 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Catálogo dos Produtos</h2>

        <div className="flex justify-center mb-8">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
        ) : (
          <p className="text-center text-zinc-400 text-lg">
            Produto não encontrado 😕
          </p>
        )}

      </div>
    </section>

  );
}

export default Catalog;