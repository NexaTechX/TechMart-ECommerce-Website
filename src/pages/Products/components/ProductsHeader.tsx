import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface ProductsHeaderProps {
  category: string | null;
  onFilterClick: () => void;
}

export default function ProductsHeader({ category, onFilterClick }: ProductsHeaderProps) {
  const categoryTitle = category 
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : 'All Products';

  return (
    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{categoryTitle}</h1>

      <div className="flex items-center">
        <div className="relative inline-block text-left">
          <select
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-8 text-gray-900 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
          >
            <option>Most Popular</option>
            <option>Best Rating</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <button
          type="button"
          className="ml-4 lg:hidden p-2 text-gray-400 hover:text-gray-500"
          onClick={onFilterClick}
        >
          <SlidersHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}