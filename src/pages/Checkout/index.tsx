import React from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import { useCart } from '../../hooks/useCart';
import { useCheckout } from './hooks/useCheckout';

export default function Checkout() {
  const navigate = useNavigate();
  const { cartItems, loading: cartLoading } = useCart();
  const { processPayment, loading: checkoutLoading } = useCheckout();

  if (cartLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 rounded w-1/4" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="h-96 bg-gray-200 rounded" />
            </div>
            <div className="lg:col-span-4">
              <div className="h-64 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Checkout</h1>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <CheckoutForm onSubmit={processPayment} loading={checkoutLoading} />
          </div>
          <div className="lg:col-span-4">
            <OrderSummary items={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}