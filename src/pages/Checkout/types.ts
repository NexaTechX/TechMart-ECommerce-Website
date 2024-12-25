import { StripeCardElement } from '@stripe/stripe-js';

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  card: StripeCardElement;
}