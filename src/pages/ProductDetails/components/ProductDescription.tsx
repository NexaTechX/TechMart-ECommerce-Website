import React from 'react';

interface ProductDescriptionProps {
  description: string | null;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  if (!description) return null;

  return (
    <div className="mt-16">
      <h2 className="text-lg font-medium text-gray-900">Description</h2>
      <div className="mt-6 prose prose-sm text-gray-500">
        <p>{description}</p>
      </div>
    </div>
  );
}