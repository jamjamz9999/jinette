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
      icon: '📸',
      description: 'Perfect for quick moments'
    },
    {
      name: 'Signature',
      price: '$675',
      values: ['60 min', '25–30', '1-2', 'Studio or location', 'Phone/Zoom + styling'],
      featured: true,
      icon: '⭐',
      description: 'Most popular choice'
    },
    {
      name: 'Keepsake',
      price: '$925',
      values: ['120 min', '30–40', '2', 'Multiple locations', 'Full planning'],
      icon: '💎',
      description: 'The ultimate experience'
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto py-16 px-6 sm:px-8">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">Investment</p>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">Transparent Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl">Thoughtfully crafted portrait sessions — editorial, timeless, and designed to become heirlooms.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        {/* Pricing Cards Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.featured
                    ? 'md:scale-105 border-2 border-black shadow-2xl bg-black text-white'
                    : 'border border-gray-200 bg-white hover:shadow-lg'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 text-xs font-bold tracking-wider">
                    POPULAR
                  </div>
                )}
                
                <div className="p-8 sm:p-10">
                  <div className="text-5xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.featured ? 'text-gray-200' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <div className="mb-8">
                    <span className="text-5xl font-bold">{plan.price}</span>
                  </div>
                  <a
                    href="/contact"
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.featured
                        ? 'bg-white text-black hover:bg-yellow-400'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    Book Session
                  </a>
                </div>

                <div className={`px-8 sm:px-10 pb-8 border-t ${plan.featured ? 'border-gray-700' : 'border-gray-100'}`}>
                  <ul className="space-y-4">
                    {features.map((feature, idx) => (
                      <li key={feature} className={`text-sm flex items-start gap-3 ${plan.featured ? 'text-gray-200' : 'text-gray-700'}`}>
                        <span className="text-lg leading-none">✓</span>
                        <div>
                          <div className="font-medium">{feature}</div>
                          <div className={`text-xs ${plan.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                            {plan.values[idx]}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-10 md:p-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Add-On Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Additional Images', price: '$25 each', emoji: '📷' },
              { title: 'Photo Album', price: 'Starting at $350', emoji: '📖' },
              { title: 'Canvas Print', price: 'Starting at $175', emoji: '🖼️' },
              { title: 'Travel Outside Area', price: 'Custom quote', emoji: '✈️' },
            ].map((addon) => (
              <div key={addon.title} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{addon.emoji}</div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2">{addon.title}</h3>
                <p className="text-gray-600 text-sm">{addon.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What if I want to reschedule?',
                a: 'Life happens! You can reschedule up to 2 weeks before your session with no penalties.'
              },
              {
                q: 'Do you offer payment plans?',
                a: 'Yes, we offer flexible payment plans. Contact us to discuss options that work for your budget.'
              },
              {
                q: 'What\'s your cancellation policy?',
                a: 'Deposits are non-refundable but can be transferred to another date or client. Full refunds available up to 30 days before session.'
              },
              {
                q: 'Do you travel for sessions?',
                a: 'Absolutely! We travel throughout Pennsylvania and beyond. Travel fees apply for locations over 50 miles away.'
              },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Let's create something timeless together. All sessions include a pre-session consultation and professional editing.</p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-colors"
          >
            Schedule Your Session
          </a>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;
