import React from 'react';
import { X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  { id: 'laptops', name: 'Laptops' },
  { id: 'smartphones', name: 'Smartphones' },
  { id: 'audio', name: 'Audio' },
  { id: 'wearables', name: 'Wearables' },
];

const priceRanges = [
  { id: '0-100', name: 'Under $100' },
  { id: '100-500', name: '$100 to $500' },
  { id: '500-1000', name: '$500 to $1000' },
  { id: '1000+', name: 'Over $1000' },
];

export default function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };

  return (
    <>
      {/* Desktop filter sidebar */}
      <div className="hidden lg:block">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <input
                type="radio"
                id={category.id}
                name="category"
                checked={searchParams.get('category') === category.id}
                onChange={() => handleCategoryChange(category.id)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor={category.id} className="ml-3 text-sm text-gray-600">
                {category.name}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
          <div className="space-y-4">
            {priceRanges.map((range) => (
              <div key={range.id} className="flex items-center">
                <input
                  type="radio"
                  id={range.id}
                  name="price"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor={range.id} className="ml-3 text-sm text-gray-600">
                  {range.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile filter dialog */}
      {isOpen && (
        <div className="relative z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="fixed inset-0 z-40 flex">
            <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={onClose}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-4 px-4">
                {/* Mobile filters content - same as desktop but styled for mobile */}
                <div className="space-y-6">
                  {/* Categories */}
                  <div>
                    <h3 className="text-md font-medium text-gray-900">Categories</h3>
                    <div className="mt-4 space-y-4">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-${category.id}`}
                            name="mobile-category"
                            checked={searchParams.get('category') === category.id}
                            onChange={() => handleCategoryChange(category.id)}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`mobile-${category.id}`} className="ml-3 text-sm text-gray-600">
                            {category.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price ranges */}
                  <div>
                    <h3 className="text-md font-medium text-gray-900">Price Range</h3>
                    <div className="mt-4 space-y-4">
                      {priceRanges.map((range) => (
                        <div key={range.id} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-${range.id}`}
                            name="mobile-price"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label htmlFor={`mobile-${range.id}`} className="ml-3 text-sm text-gray-600">
                            {range.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}