import React from 'react';
import FeaturedProducts from './components/FeaturedProducts';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories';

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroBanner />
      <FeaturedProducts />
      <Categories />
    </div>
  );
}