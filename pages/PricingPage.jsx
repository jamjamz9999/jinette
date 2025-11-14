import React from 'react';

const PricingPage = () => {
  const pricingPackages = [
    {
      name: 'Mini Story Session',
      price: '$350',
      duration: 'Starting at',
      description: 'A short, focused session capturing authentic moments — great for families, couples, or seasonal minis.',
      features: ['25 minutes of session time', '15 edited images', 'One location'],
    },
    {
      name: 'Signature Portrait Experience',
      price: '$675',
      duration: 'Starting at',
      description: 'A storytelling session for families or couples who want a fuller, curated experience.',
      features: ['Up to 1 hour session', '25–30 edited images', 'Styling guidance + location planning'],
      featured: true,
    },
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
                    import React from 'react';

                    const PricingPage = () => {
                      const pricingPackages = [
                        { name: 'Mini Story Session', price: '$350', duration: 'Starting at', description: 'A short, focused session', features: ['25 minutes', '15 edited images', 'One location'] },
                        { name: 'Signature Portrait Experience', price: '$675', duration: 'Starting at', description: 'Full storytelling session', features: ['Up to 1 hour', '25–30 edited images', 'Styling guidance'], featured: true },
                        { name: 'Keepsake Collection', price: '$925', duration: 'Starting at', description: 'Extended session for milestones', features: ['Up to 2 hours', '2 outfit changes', '30–40 edited images'] },
                      ];

                      return (
                        <div className="min-h-screen bg-white text-gray-900">
                          <header className="border-b border-gray-200">
                            <div className="max-w-5xl mx-auto py-14 px-6">
                              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Investment</p>
                              <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Investment & Session Options</h1>
                              <p className="mt-4 text-base text-gray-700 max-w-2xl">Thoughtfully crafted portrait sessions with a focus on storytelling.</p>
                            </div>
                          </header>

                          <main className="max-w-6xl mx-auto px-6 py-16">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">
                              <section className="lg:col-span-2">
                                <div className="mb-10">
                                  <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What's included</h2>
                                  <hr className="border-gray-200 mb-6" />
                                  <ul className="space-y-4 text-gray-700">
                                    <li>Pre-session consultation (phone/Zoom)</li>
                                    <li>Guided photoshoot on location or in studio</li>
                                    <li>Secure online gallery with edited images</li>
                                    <li>Print release + professional printing options</li>
                                  </ul>
                                </div>

                                <div className="space-y-8">
                                  {pricingPackages.map((pkg) => (
                                    <article key={pkg.name} className={`group border-t border-gray-200 pt-8 pb-6 ${pkg.featured ? 'relative bg-white' : ''}`}>
                                      <div className="flex items-baseline justify-between">
                                        <div>
                                          <h3 className="text-2xl font-serif font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.name}</h3>
                                          <p className="text-sm text-gray-500 mt-1">{pkg.duration}</p>
                                        </div>
                                        <div className="text-right">
                                          <div className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{pkg.price}</div>
                                        </div>
                                      </div>

                                      <p className="mt-4 text-gray-700 max-w-xl leading-relaxed">{pkg.description}</p>

                                      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                                        {pkg.features.map((f, i) => (
                                          <li key={i} className="flex items-start gap-3"><span className="text-gray-400 mt-1">•</span><span>{f}</span></li>
                                        ))}
                                      </ul>

                                      <div className="mt-6 flex items-center gap-4">
                                        <button className={`px-5 py-2 rounded-sm border text-sm font-medium transition-colors ${pkg.featured ? 'bg-black text-white border-black hover:bg-gray-900' : 'text-gray-900 border-gray-300 hover:bg-gray-50'}`}>Book now</button>
                                        <a href="#contact" className="text-sm text-gray-500 underline">Have questions?</a>
                                      </div>
                                    </article>
                                  ))}
                                </div>
                              </section>

                              <aside className="hidden lg:block">
                                <div className="sticky top-24">
                                  <div className="border border-gray-100 p-6 rounded-sm bg-gray-50">
                                    <h4 className="text-sm font-semibold mb-2">Quick facts</h4>
                                    <p className="text-sm text-gray-700">Deposits hold dates. Print and album pricing available on request.</p>
                                    <hr className="my-4 border-gray-200" />
                                    <div className="text-sm">
                                      <p className="font-medium">Studio location</p>
                                      <p className="text-gray-600">Allentown, PA</p>
                                    </div>
                                  </div>
                                </div>
                              </aside>
                            </div>

                            <section className="mt-16">
                              <div className="border-t border-gray-200 pt-10">
                                <h3 className="text-xl font-semibold mb-4">Add-On Options</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                                  <div className="p-4 bg-white border border-gray-100"><div className="font-medium">Additional images</div><div className="text-sm text-gray-600">$25 each</div></div>
                                  <div className="p-4 bg-white border border-gray-100"><div className="font-medium">Photo album</div><div className="text-sm text-gray-600">Starting at $350</div></div>
                                  <div className="p-4 bg-white border border-gray-100"><div className="font-medium">Canvas print</div><div className="text-sm text-gray-600">Starting at $175</div></div>
                                  <div className="p-4 bg-white border border-gray-100"><div className="font-medium">Travel outside Lehigh Valley</div><div className="text-sm text-gray-600">Custom quote</div></div>
                                </div>
                              </div>
                            </section>
                          </main>
                        </div>
                      );
                    };

                    export default PricingPage;
                  };


