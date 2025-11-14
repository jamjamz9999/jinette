import React from 'react';

const PricingPage = () => {
  const pricingPackages = [
    {
      name: 'The Signature Portrait Experience',
      price: '$675',
      duration: 'Starting at',
      description: 'Perfect for families, couples, or maternity sessions who want a complete storytelling experience.',
      features: [
        'Up to 1 hour of session time',
        '25–30 edited images delivered via online gallery',
        'Styling guidance + location planning',
      ],
      featured: true,
    },
    {
      name: 'The Keepsake Collection',
      price: '$925',
      duration: 'Starting at',
      description: 'Designed for newborns and milestone sessions, capturing your family\'s newest chapter. Ideal for expecting moms, growing families, and couples wanting a deeper, more styled session.',
      features: [
        'Up to 2 hours in-studio (with flexibility for feedings + soothing)',
        '2 outfit changes',
        '30–40 edited images',
        '$50 print credit toward albums or wall art',
        'Use of studio props and wraps',
      ],
    },
    {
      name: 'The Mini Story Session',
      price: '$350',
      duration: 'Starting at',
      description: 'Ideal for quick updates or seasonal moments — perfect for families, kids, or couples wanting a smaller collection.',
      features: [
        '25 minutes of session time',
        '15 edited images',
        'One location',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-semibold">Investment</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            More Than a Photo Session — It's Your Legacy in Focus
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Jinette Ramos Photography, your investment goes far beyond beautiful images. It's about capturing the stories, emotions, and milestones that make your life uniquely yours. Every session is thoughtfully crafted to reflect your personality, style, and the beauty of God's hand in your story.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mt-4">
            I believe that photography is one of the most meaningful ways to preserve what truly matters — the laughter, the connection, and the memories that become your family's legacy.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              What's Included in Every Session
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every portrait experience includes:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              'A pre-session consultation (phone or zoom) to plan your vision and styling',
              'A relaxed, guided photoshoot in studio or on location',
              'A private online gallery of professionally edited, high-resolution images',
              'Print release + access to professional print and product options',
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 text-xl mt-1 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600">Optional heirloom albums, wall art, and canvas upgrades</p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
              Session Options
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-start">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-10 transition-all duration-500 hover:scale-105 ${
                  pkg.featured
                    ? 'bg-gradient-to-br from-black to-gray-900 text-white shadow-2xl border-2 border-gray-700 lg:scale-105'
                    : 'bg-white text-gray-900 shadow-xl border border-gray-200 hover:shadow-2xl'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${pkg.featured ? 'text-white' : 'text-black'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                    {pkg.name}
                  </h3>
                  <p className={`text-sm mb-2 ${pkg.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                    {pkg.duration}
                  </p>
                  <div className="mb-6">
                    <span className={`text-5xl md:text-6xl font-bold ${pkg.featured ? 'text-white' : 'text-black'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                      {pkg.price}
                    </span>
                  </div>
                  {pkg.description && (
                    <p className={`text-sm mb-6 ${pkg.featured ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                      {pkg.description}
                    </p>
                  )}
                </div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`text-xl mt-1 flex-shrink-0 ${pkg.featured ? 'text-purple-400' : 'text-purple-600'}`}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className={`${pkg.featured ? 'text-gray-200' : 'text-gray-700'} leading-relaxed`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-black hover:bg-gray-800 text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>

          {/* Add-Ons Section */}
          <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                Add-On Options
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Available with Any Package
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-5 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl flex-shrink-0">📸</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">Additional images</h3>
                  <p className="text-gray-600 leading-relaxed">$25 each</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl flex-shrink-0">🖼️</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">Photo album</h3>
                  <p className="text-gray-600 leading-relaxed">Starting at $350</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl flex-shrink-0">🖼️</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">Canvas print</h3>
                  <p className="text-gray-600 leading-relaxed">Starting at $175</p>
                </div>
              </div>
              <div className="flex items-start gap-5 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">Travel outside Lehigh Valley</h3>
                  <p className="text-gray-600 leading-relaxed">Custom quote</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;

