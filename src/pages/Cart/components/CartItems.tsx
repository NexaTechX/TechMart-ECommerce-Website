import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { CartItem } from '../../../types/database';
import { useCart } from '../../../hooks/useCart';

interface CartItemsProps {
  items: CartItem[];
}

export default function CartItems({ items }: CartItemsProps) {
  const { updateQuantity, removeItem, loading } = useCart();

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-sm">
          <div className="flex-shrink-0 w-24 h-24">
            <img
              src={item.product?.image_url || 'https://via.placeholder.com/96'}
              alt={item.product?.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900">{item.product?.name}</h3>
            <p className="mt-1 text-sm text-gray-500">${item.product?.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                disabled={loading || item.quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 text-gray-900">{item.quantity}</span>
              <button
                type="button"
                className="p-2 text-gray-600 hover:text-gray-700 disabled:opacity-50"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                disabled={loading || (item.product?.stock || 0) <= item.quantity}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 disabled:opacity-50"
              onClick={() => removeItem(item.id)}
              disabled={loading}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}