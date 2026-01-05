import { jsxDEV } from "react/jsx-dev-runtime";
import ProductCard  from "../ProductCard"; 
import products from "../../data/products";


function CadeiraGamer({ products, onAdd, onFavorite  }) {
    const chairProducts = products.filter(p => p.category === 'cadeira');

return (
    <section className="pt-28 px-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Cadeiras Gamer</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {chairProducts.map((product) => (
                <ProductCard 
                key={product.id} 
                product={product} 
                onAdd={onAdd}
                onFavorite={onFavorite}
                />
            ))}
    </div>
</section>

);
}
export default CadeiraGamer;