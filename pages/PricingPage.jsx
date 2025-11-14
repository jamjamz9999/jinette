import React from 'react';

const PricingPage = () => {
  const features = [
    'Session length',
    'Edited images',
    'Outfits / changes',
    'Location',
    'Pre-session planning',
  ];

  const plans = [
    {
      name: 'Mini Story',
      price: '$350',
      values: ['25 min', '15', '1', 'One location', 'Phone/Zoom'],
    },
    {
      name: 'Signature',
      price: '$675',
      values: ['60 min', '25–30', '1-2', 'Studio or location', 'Phone/Zoom + styling'],
      featured: true,
    },
    {
      name: 'Keepsake',
      price: '$925',
      values: ['120 min', '30–40', '2', 'Multiple locations', 'Full planning'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto py-12 px-6">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Investment</p>
          <h1 className="text-4xl md:text-5xl font-bold heading-serif">Pricing & Session Options</h1>
          <p className="mt-4 text-base text-gray-700 max-w-2xl">Thoughtfully crafted portrait sessions — editorial, timeless, and designed to become heirlooms.</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold mb-3 display-serif">What's included</h2>
            <p className="text-gray-700 mb-4">Every session includes a pre-session consultation, professional editing, and a private online gallery.</p>
          </div>
        </section>

        <section className="mb-12">
          <div className="pricing-table-wrapper shadow-sm overflow-x-auto">
            <table className="pricing-table" role="table" aria-label="Pricing options">
              <thead>
                <tr>
                  <th className="feature-head" scope="col">Features</th>
                  {plans.map((p) => {
                    const headerClass = p.name.toLowerCase().includes('mini')
                      ? 'header-plan-mini'
                      : p.name.toLowerCase().includes('signature') || p.featured
                      ? 'header-plan-signature'
                      : 'header-plan-keepsake';
                    const featuredClass = p.featured ? 'plan-featured' : '';
                    return (
                      <th key={p.name} scope="col" className={`plan-head ${headerClass} ${featuredClass}`}>
                        {p.featured && <div className="ribbon">Most popular</div>}
                        <div className="pricing-plan-name">{p.name}</div>
                        <div className="pricing-price">{p.price}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {features.map((feat, rIdx) => (
                  <tr key={`row-${rIdx}`}>
                    <th scope="row" className="feature-cell">{feat}</th>
                    {plans.map((p, cIdx) => {
                      const planClass = p.name.toLowerCase().includes('mini') ? 'plan-mini' : p.featured ? 'plan-signature' : 'plan-keepsake';
                      const featuredClass = p.featured ? 'plan-featured' : '';
                      return (
                        <td key={`val-${rIdx}-${cIdx}`} className={`value-cell ${planClass} ${featuredClass}`}>{p.values[rIdx]}</td>
                      );
                    })}
                  </tr>
                ))}

                <tr>
                  <th className="feature-cell" scope="row">&nbsp;</th>
                  {plans.map((p) => {
                    const slug = p.name.toLowerCase().includes('mini') ? 'mini' : p.featured ? 'signature' : 'keepsake';
                    return (
                      <td key={`cta-${p.name}`} className="value-cell text-center">
                        <a href="/contact" className="table-book-link" aria-label={`Book ${p.name}`}>
                          <img src={`/icons/book-${slug}.svg`} alt={`Book ${p.name}`} className="svg-book-btn" />
                        </a>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Booking banner removed from here and re-inserted below (closer to footer) */}

        <section>
          <h3 className="text-xl font-semibold mb-4 display-serif">Add-On Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="p-4 bg-white border border-gray-100">
              <div className="font-medium">Additional images</div>
              <div className="text-sm text-gray-600">$25 each</div>
            </div>
            <div className="p-4 bg-white border border-gray-100">
              <div className="font-medium">Photo album</div>
              <div className="text-sm text-gray-600">Starting at $350</div>
            </div>
            <div className="p-4 bg-white border border-gray-100">
              <div className="font-medium">Canvas print</div>
              <div className="text-sm text-gray-600">Starting at $175</div>
            </div>
            <div className="p-4 bg-white border border-gray-100">
              <div className="font-medium">Travel outside Lehigh Valley</div>
              <div className="text-sm text-gray-600">Custom quote</div>
            </div>
          </div>
        </section>

        {/* New: full-bleed booking banner placed lower on the page (above footer) */}
        <section>
          <div className="black-cta mt-12 mb-12">
            <div className="container-inner max-w-6xl mx-auto px-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold heading-serif">BOOK ME NOW</h2>
                  <p className="mt-1">10% deposit required and you are good to go.</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="/contact" aria-label="Book Mini Story"><img src="/icons/book-mini.svg" alt="Book Mini Story" className="svg-book-btn" /></a>
                  <a href="/contact" aria-label="Book Signature"><img src="/icons/book-signature.svg" alt="Book Signature" className="svg-book-btn" /></a>
                  <a href="/contact" aria-label="Book Keepsake"><img src="/icons/book-keepsake.svg" alt="Book Keepsake" className="svg-book-btn" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
