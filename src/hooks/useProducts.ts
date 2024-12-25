import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Product } from '../types/database';

interface UseProductsOptions {
  featured?: boolean;
  limit?: number;
  category?: string;
}

export function useProducts(options: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let query = supabase.from('products').select('*');

        if (options.featured) {
          // Assuming we have a featured column or using some criteria
          query = query.limit(options.limit || 4);
        }

        if (options.category) {
          query = query.eq('category', options.category);
        }

        if (options.limit) {
          query = query.limit(options.limit);
        }

        const { data, error } = await query;

        if (error) throw error;
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [options.featured, options.limit, options.category]);

  return { products, loading, error };
}