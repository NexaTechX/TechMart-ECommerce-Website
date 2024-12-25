import React from 'react';
import ProductCard from '../../../components/ProductCard';
import { useProducts } from '../../../hooks/useProducts';

interface ProductGridProps {
  category?: string | null;
}

export default function ProductGrid({ category }: ProductGridProps) {
  const { products, loading, error } = useProducts({ category: category || undefined });

  if (loading) {
    return (
      <div className="lg:col-span-3">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200 rounded-lg" />
              <div className="mt-4 h-4 bg-gray-200 rounded w-3/4" />
              <div className="mt-1 h-4 bg-gray-200 rounded w-1/4" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="lg:col-span-3 text-center text-red-600">
        Failed to load products. Please try again later.
      </div>
    );
  }

  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}