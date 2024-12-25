import React from 'react';
import { useParams } from 'react-router-dom';
import ProductInfo from './components/ProductInfo';
import ProductGallery from './components/ProductGallery';
import ProductDescription from './components/ProductDescription';
import RelatedProducts from './components/RelatedProducts';
import { useProduct } from '../../hooks/useProduct';

export default function ProductDetails() {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200 rounded-lg" />
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-24 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center text-red-600">
        Product not found or failed to load.
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <ProductGallery imageUrl={product.image_url} name={product.name} />
          <ProductInfo product={product} />
        </div>
        <ProductDescription description={product.description} />
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </div>
    </div>
  );
}