import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Jinette captured our family in such a beautiful and authentic way. Her attention to detail and creative eye made us feel so comfortable during our session.",
      author: "Sarah & James",
      service: "Family Portraits",
      image: null, // Placeholder for profile image
    },
    {
      quote: "As an expecting mother, I wanted photos that would commemorate this special time. Jinette delivered exactly that with such grace and professionalism.",
      author: "Michelle",
      service: "Maternity Session",
      image: null,
    },
    {
      quote: "Our newborn photos are absolutely stunning. Jinette's expertise in posing and lighting resulted in images we'll treasure forever.",
      author: "David & Lisa",
      service: "Newborn Photography",
      image: null,
    },
    {
      quote: "Jinette has an incredible gift for capturing genuine moments. Our engagement photos are works of art that we're so excited to share.",
      author: "Emily & Michael",
      service: "Engagement Session",
      image: null,
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gray-500 mb-3 sm:mb-4">What Clients Say</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">Testimonials</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real words from families and couples who trusted me to capture their most precious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-base sm:text-lg text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div>
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
