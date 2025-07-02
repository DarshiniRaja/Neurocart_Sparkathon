import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">🛒 Explore Smartwatches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-cover rounded-md"
            />
            <h3 className="mt-3 font-semibold text-lg text-gray-800">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.brand}</p>
            <p className="text-blue-600 font-bold mt-1">{product.price}</p>
            <p className="text-yellow-500 mt-1">⭐ {product.rating}</p>
            <button className="mt-3 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
              Quick View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
