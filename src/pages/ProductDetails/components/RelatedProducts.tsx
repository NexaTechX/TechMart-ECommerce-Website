import React from 'react';
import { useProducts } from '../../../hooks/useProducts';
import ProductCard from '../../../components/ProductCard';

interface RelatedProductsProps {
  category: string;
  currentProductId: string;
}

export default function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
  const { products, loading } = useProducts({ category, limit: 4 });
  const relatedProducts = products.filter(p => p.id !== currentProductId);

  if (loading || relatedProducts.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Related Products</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}