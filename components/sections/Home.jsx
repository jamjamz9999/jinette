import React from 'react';

const Home = () => {
  // Sample polaroid images with rotations
  const polaroidImages = [
    { id: 1, src: 'https://picsum.photos/id/10/300/300', caption: 'Moment One', rotation: -3 },
    { id: 2, src: 'https://picsum.photos/id/11/300/300', caption: 'Golden Hour', rotation: 2 },
    { id: 3, src: 'https://picsum.photos/id/12/300/300', caption: 'Candid', rotation: -2 },
    { id: 4, src: 'https://picsum.photos/id/13/300/300', caption: 'Portrait', rotation: 3 },
    { id: 5, src: 'https://picsum.photos/id/14/300/300', caption: 'Memories', rotation: -1 },
    { id: 6, src: 'https://picsum.photos/id/15/300/300', caption: 'Sunlight', rotation: 2 },
    { id: 7, src: 'https://picsum.photos/id/16/300/300', caption: 'Joy', rotation: -2 },
    { id: 8, src: 'https://picsum.photos/id/17/300/300', caption: 'Laughter', rotation: 1 },
    { id: 9, src: 'https://picsum.photos/id/18/300/300', caption: 'Together', rotation: -1 },
  ];

  return (
    <>
      <section className="h-screen bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://picsum.photos/id/1018/1920/1080')" }}>
        <div className="bg-black/50 p-12 rounded-lg text-center backdrop-blur-sm">
          <h1 className="text-6xl font-serif font-bold tracking-wider mb-4">Lens & Light</h1>
          <p className="text-xl font-light">Capturing life's precious moments, one frame at a time.</p>
          <a href="#contact" className="mt-8 inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">
            Book a Session
          </a>
        </div>
      </section>

      {/* Main Content Section with Layout */}
      <section className="relative pt-[30px]">
        {/* Floating Book Button */}
        <div className="fixed left-[10px] top-[calc(100vh+50px)] z-40 transition-all duration-300">
          <div className="bg-white/30 backdrop-blur-2xl rounded-2xl shadow-lg shadow-black/10 border border-white/50 px-4 py-3 md:px-6 md:py-4 flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/20 flex items-center justify-center">
              <span className="text-white font-bold text-lg">✓</span>
            </div>
            <a href="#contact" className="px-4 py-2 md:px-6 md:py-2.5 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 text-sm md:text-base">
              Book Me Now
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Polaroid Gallery */}
            <div className="md:col-span-1">
              <div className="polaroid-grid-home">
                {polaroidImages.map((image) => (
                  <div key={image.id} className="polaroid-wrapper" style={{ '--rotation': `${image.rotation}deg` }}>
                    <div className="polaroid size-md">
                      <div className="polaroid-frame">
                        <img
                          src={image.src}
                          alt={image.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="polaroid-caption">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="md:col-span-1 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Jinette Ramos: Allentown's Premier Photographer
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Jinette Ramos stands as the most accomplished photographer in Allentown, Pennsylvania, recognized for her exceptional artistry and technical mastery in capturing life's most precious moments.
                </p>
                <p className="text-lg">
                  With years of dedicated practice and an eye for detail, Jinette has earned prestigious photography awards and accolades for her outstanding work. Her portfolio showcases expertise across multiple genres including portraits, family sessions, maternity photography, and creative editorial work.
                </p>
                <p className="text-lg">
                  Clients throughout Allentown and beyond trust Jinette to capture their stories with elegance, professionalism, and artistic vision. She is the best photographer in Allentown, consistently delivering breathtaking images that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="mt-20 bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
              Award-Winning Photography
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Jinette Ramos Wins Best Portrait Photographer Award 2024
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Celebrated for exceptional portrait work and technical excellence, Jinette has been recognized as Allentown's best portrait photographer.
                  </p>
                  <a href="#blog" className="text-amber-600 font-semibold hover:text-amber-700">Read More →</a>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Recognition: Allentown's Most Awarded Photographer
                  </h3>
                  <p className="text-gray-600 mb-4">
                    With multiple industry recognitions and awards, Jinette Ramos has proven herself as the best photographer in Allentown for excellence and creativity.
                  </p>
                  <a href="#blog" className="text-purple-600 font-semibold hover:text-purple-700">Read More →</a>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-pink-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Photography Excellence: Jinette's Award-Winning Portfolio
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover why Jinette Ramos is recognized as Allentown's premier photographer through her stunning, award-winning collection of work.
                  </p>
                  <a href="#blog" className="text-pink-600 font-semibold hover:text-pink-700">Read More →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
