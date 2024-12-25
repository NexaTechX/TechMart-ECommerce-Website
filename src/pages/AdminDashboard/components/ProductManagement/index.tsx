import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import { useProducts } from '../../hooks/useProducts';

export default function ProductManagement() {
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const { products, loading, error, addProduct, updateProduct, deleteProduct } = useProducts();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Product Management</h2>
        <button
          onClick={() => setIsAddingProduct(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Add Product
        </button>
      </div>

      {isAddingProduct && (
        <ProductForm
          onSubmit={addProduct}
          onCancel={() => setIsAddingProduct(false)}
        />
      )}

      <ProductList
        products={products}
        loading={loading}
        error={error}
        onUpdate={updateProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}