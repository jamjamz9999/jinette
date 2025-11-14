import React, { useState } from 'react';
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
        <div className="flex justify-center flex-wrap gap-4 mb-16">
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

        {/* Gallery Grid — editorial two-column layout on large screens */}
        {filteredPhotos.length > 0 ? (
          <div className="gallery-layout">
            {/* Left: feature image */}
            <div className="gallery-left">
              {filteredPhotos[0] && (
                  <div
                    className="group relative overflow-visible cursor-pointer transition-shadow duration-500"
                    onClick={() => handleImageClick(filteredPhotos[0].id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && handleImageClick(filteredPhotos[0].id)}
                  >
                    <figure className="polaroid size-lg">
                      <div className="polaroid-frame">
                        <img src={filteredPhotos[0].thumbnail || filteredPhotos[0].src} alt={filteredPhotos[0].title} className="polaroid-img" />
                        <div className="polaroid-overlay" />
                      </div>
                      <figcaption className="polaroid-caption">{filteredPhotos[0].title}</figcaption>
                    </figure>
                  </div>
                )}
            </div>

            {/* Right: stacked grid of remaining images */}
            <div className="gallery-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredPhotos.slice(1).map((photo, idx) => {
                  const sizes = ['size-sm','size-md','size-sm','size-md','size-sm'];
                  const sizeClass = sizes[idx % sizes.length] || 'size-md';
                  return (
                    <div key={photo.id} className="group relative overflow-visible cursor-pointer" onClick={() => handleImageClick(photo.id)} role="button" tabIndex={0} onKeyDown={(event) => (event.key === 'Enter' || event.key === ' ') && handleImageClick(photo.id)}>
                      <figure className={`polaroid ${sizeClass}`}>
                        <div className="polaroid-frame">
                          <img src={photo.thumbnail || photo.src} alt={photo.title} className="polaroid-img" />
                          <div className="polaroid-overlay" />
                        </div>
                        <figcaption className="polaroid-caption">{photo.title}</figcaption>
                      </figure>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">No images found.</div>
        )}
      </div>
    </PageWrapper>
  );
};

export default PhotographyPage;

