import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { supabase } from '../../../lib/supabase';
import { CheckoutFormData } from '../types';
import toast from 'react-hot-toast';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export function useCheckout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const processPayment = async (data: CheckoutFormData) => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Failed to load Stripe');

      // Create order in database
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([
          {
            shipping_address: {
              firstName: data.firstName,
              lastName: data.lastName,
              address: data.address,
              city: data.city,
              postalCode: data.postalCode,
              email: data.email
            },
            payment_method: 'stripe',
            status: 'pending'
          }
        ])
        .select()
        .single();

      if (orderError) throw orderError;

      // Process payment with Stripe
      const { error: paymentError } = await stripe.confirmCardPayment(order.client_secret, {
        payment_method: {
          card: data.card,
          billing_details: {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email
          }
        }
      });

      if (paymentError) throw paymentError;

      toast.success('Order placed successfully!');
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to process payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { processPayment, loading };
}