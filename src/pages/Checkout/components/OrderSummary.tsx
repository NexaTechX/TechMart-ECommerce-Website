import React, { useMemo } from 'react';
import { CartItem } from '../../../types/database';

interface OrderSummaryProps {
  items: CartItem[];
}

export default function OrderSummary({ items }: OrderSummaryProps) {
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + (item.product?.price || 0) * item.quantity;
    }, 0);
  }, [items]);

  const shipping = 0; // Free shipping for now
  const total = subtotal + shipping;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm text-gray-600">
                {item.quantity}x {item.product?.name}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              ${((item.product?.price || 0) * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}

        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Subtotal</span>
            <span className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-600">Shipping</span>
            <span className="text-sm font-medium text-gray-900">Free</span>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <span className="text-base font-medium text-gray-900">Total</span>
            <span className="text-base font-medium text-gray-900">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}