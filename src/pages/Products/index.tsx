import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from './components/ProductGrid';
import FilterSidebar from './components/FilterSidebar';
import ProductsHeader from './components/ProductsHeader';

export default function Products() {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const category = searchParams.get('category');

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductsHeader 
          category={category} 
          onFilterClick={() => setIsFilterOpen(true)} 
        />
        
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <FilterSidebar 
            isOpen={isFilterOpen} 
            onClose={() => setIsFilterOpen(false)} 
          />
          <ProductGrid category={category} />
        </div>
      </div>
    </div>
  );
}