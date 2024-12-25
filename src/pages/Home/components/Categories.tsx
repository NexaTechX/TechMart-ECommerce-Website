import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Smartphone, Headphones, Watch } from 'lucide-react';

const categories = [
  { name: 'Laptops', icon: Laptop, href: '/products?category=laptops' },
  { name: 'Smartphones', icon: Smartphone, href: '/products?category=smartphones' },
  { name: 'Audio', icon: Headphones, href: '/products?category=audio' },
  { name: 'Wearables', icon: Watch, href: '/products?category=wearables' },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.name}
              to={category.href}
              className="group relative rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center">
                <Icon className="h-8 w-8 text-indigo-600" />
              </div>
              <p className="mt-4 text-base font-medium text-gray-900 text-center">
                {category.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}