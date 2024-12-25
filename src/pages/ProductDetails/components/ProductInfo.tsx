import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Product } from '../../../types/database';
import { useCart } from '../../../hooks/useCart';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, loading } = useCart();

  const handleAddToCart = async () => {
    await addToCart(product.id, quantity);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
      <p className="text-3xl tracking-tight text-gray-900">${product.price.toFixed(2)}</p>

      <div className="mt-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-gray-700"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-4 text-gray-900">{quantity}</span>
            <button
              type="button"
              className="p-2 text-gray-600 hover:text-gray-700"
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={loading || product.stock === 0}
            className="flex-1 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {loading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </p>
      </div>
    </div>
  );
}