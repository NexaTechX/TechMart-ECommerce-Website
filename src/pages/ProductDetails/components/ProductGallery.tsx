import React from 'react';

interface ProductGalleryProps {
  imageUrl: string | null;
  name: string;
}

export default function ProductGallery({ imageUrl, name }: ProductGalleryProps) {
  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
      <img
        src={imageUrl || 'https://via.placeholder.com/600x600'}
        alt={name}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}