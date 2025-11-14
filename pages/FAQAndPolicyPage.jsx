import React from 'react';

const FAQAndPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <section className="relative py-24 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)'
        }}></div>
        <div className="relative max-w-6xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Frequently Asked Questions & Studio Policies</h1>
          <p className="text-xl text-gray-300">Because every great experience starts with clarity and care.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-black to-transparent mx-auto"></div>
          </div>
          <div className="space-y-6">
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">When should I book my session?</h3>
              <p className="text-gray-600 leading-relaxed">The sooner, the better! Most sessions are booked 4–6 weeks in advance. For newborn or maternity sessions, I recommend booking early in your pregnancy to secure your preferred date.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">Where do sessions take place?</h3>
              <p className="text-gray-600 leading-relaxed">Sessions can be held in my Lehigh Valley studio or at an outdoor location of your choice. I'll help you choose a setting that reflects your story, whether it's cozy and intimate indoors or light-filled and natural outdoors.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">Do you offer wardrobe or styling help?</h3>
              <p className="text-gray-600 leading-relaxed">Absolutely! Every session includes styling guidance. I'll help you choose colors, textures, and outfits that photograph beautifully and match the tone of your session — especially if you love that subtle editorial feel.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">How do I book a session?</h3>
              <p className="text-gray-600 leading-relaxed">Simply click "Book Your Session" on the site or fill out the inquiry form. Once your session details are confirmed, a retainer and signed agreement are required to secure your date.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">What payment methods do you accept?</h3>
              <p className="text-gray-600 leading-relaxed">All payments are handled securely through my booking platform. I accept major credit cards and digital payments. Your non-refundable retainer is due at booking, with the remaining balance due one day before your session.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">What happens if it rains or I need to reschedule?</h3>
              <p className="text-gray-600 leading-relaxed">Life happens — and weather doesn't always cooperate! Outdoor sessions will be rescheduled at no cost due to inclement weather. If you need to reschedule for personal reasons, please do so at least 48 hours in advance so we can move your session without penalty.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">What if I'm running late?</h3>
              <p className="text-gray-600 leading-relaxed">I completely understand that things come up! However, out of respect for other clients, your session will end at the originally scheduled time. If you're running more than 15 minutes late, your session may need to be rescheduled and a rescheduling fee may apply.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">When will I receive my images?</h3>
              <p className="text-gray-600 leading-relaxed">You'll receive your online gallery within 1–2 weeks after your session. Each image is hand-edited with care to ensure quality and consistency that reflects my editorial style.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">How many photos do I get?</h3>
              <p className="text-gray-600 leading-relaxed">Each package includes a set number of images (see the Investment page for details). You'll also have the option to purchase additional images, albums, or wall art.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">Can I share my photos on social media?</h3>
              <p className="text-gray-600 leading-relaxed">Yes! I love when clients share their images. I only ask that you credit @jinetteramosphotography when posting. For commercial use or publications, please contact me for a release or licensing agreement.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">What's your cancellation policy?</h3>
              <p className="text-gray-600 leading-relaxed">Retainers are non-refundable since they reserve your session date and time. If you need to cancel, your payment can be transferred to a future session within 90 days, as long as you notify me in advance.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">Do you photograph events or weddings?</h3>
              <p className="text-gray-600 leading-relaxed">I currently specialize in portrait photography — families, maternity, newborns, couples, and graduates. However, I occasionally accept intimate weddings and elopements (under 80 guests) upon request.</p>
            </div>
            <div className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-gray-300/80 hover:-translate-y-1" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
            }}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black transition-colors">What makes your work different?</h3>
              <p className="text-gray-600 leading-relaxed">My photography blends authenticity, and editorial artistry. Each session is more than a shoot, it's an experience meant to uplift, connect, and remind you that you are wonderfully made.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="relative py-20 px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)'
        }}></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
            boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.3)'
          }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Final Note</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Every session is personal to me — it's not just about taking pictures but about telling your story through emotion. My goal is that when you look at your photos, you feel seen, valued, and reminded of God's goodness in your life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQAndPolicyPage;
