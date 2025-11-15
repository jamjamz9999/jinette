import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../constants.js';
import asset from '../src/utils/assets';

const HomePage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselImages = GALLERY_PHOTOS.slice(0, 10);
  const featuredCollections = [
    {
      title: 'Editorial Portraits',
      description: 'Intimate, story-driven sessions that celebrate personality.',
      stats: '25 shoots in 2025',
      image: GALLERY_PHOTOS[2],
    },
    {
      title: 'Destination Landscapes',
      description: 'Expeditions that turn natural light into fine art prints.',
      stats: '12 countries captured',
      image: GALLERY_PHOTOS[6],
    },
  ];

  const galleryHighlights = GALLERY_PHOTOS.slice(3, 9);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section with Two Images and Text */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-28">
        <div className="grid gap-8 sm:gap-12 lg:gap-14 lg:grid-cols-[1fr,1fr] items-center">
          {/* Left Side - Two Images with Glass UI Containers */}
          <div className="relative w-full max-w-3xl mx-auto order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={carouselImages[carouselIndex]?.src || carouselImages[carouselIndex]?.thumbnail}
                alt={carouselImages[carouselIndex]?.title || 'Gallery preview'}
                className="w-full h-[420px] sm:h-[520px] md:h-[620px] object-cover"
              />
              <button
                onClick={() => setCarouselIndex((i) => (i - 1 + carouselImages.length) % carouselImages.length)}
                aria-label="Previous"
                className="absolute left-4 top-1/2 -translate-y-1/2 glass-btn p-0 rounded-full flex items-center justify-center w-12 h-12"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setCarouselIndex((i) => (i + 1) % carouselImages.length)}
                aria-label="Next"
                className="absolute right-4 top-1/2 -translate-y-1/2 glass-btn p-0 rounded-full flex items-center justify-center w-12 h-12"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-black flex items-center gap-2 sm:gap-4 flex-wrap">
            <span>Storytelling Portraits &amp; Cinematic</span>
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <span>Moments</span>
              <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.1))' }}>
                {/* Camera Body */}
                <rect x="4" y="7" width="16" height="12" rx="2" fill="currentColor"/>
                <rect x="5" y="8" width="14" height="10" rx="1.5" fill="white"/>
                {/* Camera Lens */}
                <circle cx="12" cy="13" r="4" fill="currentColor"/>
                <circle cx="12" cy="13" r="3" fill="white"/>
                <circle cx="12" cy="13" r="1.5" fill="currentColor"/>
                {/* Viewfinder */}
                <rect x="9" y="4" width="6" height="3" rx="1" fill="currentColor"/>
                {/* Flash */}
                <circle cx="17" cy="9" r="1" fill="white"/>
                {/* Camera Strap Ring */}
                <circle cx="6" cy="10" r="1" fill="currentColor"/>
                <circle cx="18" cy="10" r="1" fill="currentColor"/>
              </svg>
            </span>
          </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Hi, I'm Jinette Ramos, a portrait photographer, faith-filled creative, and proud mom of seven. I specialize in capturing families, expecting moms, newborns, couples, and seniors with a warm, timeless touch and a hint of editorial elegance. My passion for photography is rooted in my faith and fueled by connection, joy, and storytelling. Every session is a reflection of love, purpose, and the beauty of who you are.
            </p>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-gray-50 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gray-500">Featured Collections</p>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-black">Curated stories with luminous detail</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 max-w-lg">
              Each commission is styled, art-directed, and retouched in house for a cohesive, gallery-worthy finish. Scroll
              through a sampling of recent collaborations.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredCollections.map((collection) => (
              <div
                key={collection.title}
                className="relative rounded-[28px] overflow-hidden bg-white shadow-lg shadow-black/10 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={collection.image.fullSize || collection.image.src || collection.image.thumbnail}
                  alt={collection.title}
                  className="h-64 sm:h-72 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                  <div className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-5 md:p-6 shadow-lg shadow-black/15">
                    <h3 className="text-xl sm:text-2xl font-semibold text-black">{collection.title}</h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">{collection.description}</p>
                    <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-xs sm:text-sm uppercase tracking-[0.35em] text-gray-500">
                      <span>{collection.stats}</span>
                      <span className="flex items-center gap-2 text-black">
                        View Gallery
                        <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-14">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gray-500">Gallery Highlights</p>
              <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-black flex items-center gap-2 flex-wrap">
                <span>A kaleidoscope of light</span>
                <img src={asset('/images/smileyicon.png')} alt="Smiley" className="w-6 h-6 sm:w-8 sm:h-8 object-contain inline-block" />
                <span>emotion</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base max-w-xl text-gray-600 leading-relaxed">
              From candid lifestyle portraits to architectural silhouettes, explore the range of disciplines we bring to every
              commission. Each collection is delivered with meticulous post-production and guided storytelling.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {galleryHighlights.map((photo) => (
              <article key={photo.id} className="group rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={photo.src || photo.thumbnail}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                  <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 rounded-xl sm:rounded-2xl bg-white/90 px-3 sm:px-4 py-2 sm:py-3 shadow-md shadow-black/10">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gray-500">{photo.category}</p>
                    <h3 className="mt-1 sm:mt-2 text-base sm:text-lg font-semibold text-black">{photo.title}</h3>
                  </div>
                </div>
                <div className="px-4 sm:px-5 py-4 sm:py-6 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {photo.description?.slice(0, 140) || 'Fine art photography crafted with passion and precision.'}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-white/70">My Vision</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight px-2">
              My vision is to build a photography brand that inspires others to see the beauty in their story and the hand of God in every moment.
            </h2>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg px-2">
              Through timeless, editorial-inspired imagery and a faith-centered approach, I aim to preserve memories that speak of love, legacy, and divine intention, while fostering a creative community rooted in encouragement, purpose, and light.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
