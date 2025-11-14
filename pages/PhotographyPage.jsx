import React, { useState, useMemo } from 'react';
import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from '../constants';
import PageWrapper from '../components/PageWrapper';

const PhotographyPage = ({ onImageClick, isAdmin = false }) => {
  // Filter categories to only show those that have photos, and remove empty ones
  const availableCategories = GALLERY_CATEGORIES.filter(category => {
    if (category === 'All') return true;
    if (!category || category.trim() === '') return false;
    return GALLERY_PHOTOS.some(photo => photo.category === category);
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPhotos = selectedCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  const handleImageClick = (photoId) => {
    if (onImageClick) {
      onImageClick(photoId);
    }
  };

  return (
    <PageWrapper className="bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative mb-16 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">Welcome To My Photography Portfolio</h1>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A collection of moments frozen in time. Explore my work across different styles and stories.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {availableCategories.filter(category => category && category.trim() !== '').map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-semibold transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-gray-200 to-gray-300 text-black scale-105'
                  : 'bg-white/80 backdrop-blur-md text-black hover:bg-white border border-gray-200/50 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid — masonry layout with hover info overlays */}
        {filteredPhotos.length > 0 ? (
          <div className="gallery-masonry">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="gallery-masonry-item group"
                onClick={() => handleImageClick(photo.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && handleImageClick(photo.id)}
              >
                <img src={photo.thumbnail || photo.src} alt={photo.title} className="gallery-masonry-img" />
                <div className="gallery-masonry-overlay">
                  <div className="gallery-masonry-category">{photo.category}</div>
                  <h3 className="gallery-masonry-title">{photo.title}</h3>
                  <p className="gallery-masonry-description">{photo.description?.slice(0, 100) || 'Fine art photography crafted with passion and precision.'}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">No images found.</div>
        )}
      </div>
    </PageWrapper>
  );
};

export default PhotographyPage;

