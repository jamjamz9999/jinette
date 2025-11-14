import React from 'react';
import footerBg from '/images/footerbg.png';
import instagramIcon from '/images/instagram.png';
import facebookIcon from '/images/facebook.png';

const Footer = ({ onAdminClick }) => {
  // Add breathing animation CSS and background movement
  const styles = `
    @keyframes breathingGlow {
      0%, 100% {
        filter: brightness(0.7);
      }
      50% {
        filter: brightness(1.2);
      }
    }
    
    .social-icon-breathing {
      animation: breathingGlow 3.5s ease-in-out infinite;
    }

    @keyframes moveBackground {
      0% {
        background-position: 0% 0%;
      }
      25% {
        background-position: 100% 0%;
      }
      50% {
        background-position: 100% 100%;
      }
      75% {
        background-position: 0% 100%;
      }
      100% {
        background-position: 0% 0%;
      }
    }

    .footer-animated-bg {
      animation: moveBackground 15s ease-in-out infinite;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <footer 
        className="footer-animated-bg relative py-12 px-8 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: '150%',
          backgroundPosition: '0% 0%',
          backgroundAttachment: 'scroll',
          backgroundColor: 'rgba(0,0,0,0.85)'
        }}
      >
        {/* Overlay to ensure text is readable - 25% opacity for 75% image visibility */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none"></div>
        
        {/* Glassmorphic overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at top, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}></div>

        <div className="relative z-10 px-4 sm:px-6 md:px-8">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left - Made in America */}
            <div className="flex items-center gap-2 sm:gap-3 lg:flex-1" style={{ marginLeft: '10px' }}>
              <span className="text-2xl sm:text-3xl">🇺🇸</span>
              <div className="flex items-center gap-1 flex-wrap">
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase">
                  Made in America with 
                </p>
                <span className="text-red-500 text-base sm:text-lg">❤</span>
              </div>
            </div>

            {/* Center - Social Icons - Absolutely Centered */}
            <div className="flex justify-center gap-4 sm:gap-6 lg:flex-1 lg:justify-center">
              {[
                { href: 'https://instagram.com', src: instagramIcon, alt: 'Instagram' },
                { href: 'https://facebook.com', src: facebookIcon, alt: 'Facebook' },
              ].map((icon) => (
                <a
                  key={icon.alt}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-breathing transition-all duration-300"
                  style={{ display: 'inline-block', cursor: 'pointer' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(1.5) drop-shadow(0 0 18px rgba(100, 200, 255, 0.9))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = '';
                  }}
                  title={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} className="w-12 h-12 sm:w-14 sm:h-14" />
                </a>
              ))}
            </div>

            {/* Right - Contact Info */}
            {/* Right - Contact Info */}
            <div className="flex flex-col items-center lg:items-end gap-2 text-xs sm:text-sm text-white lg:flex-1">
              <div className="flex flex-col items-center lg:items-end gap-1">
                <a href="tel:+14842745444" className="hover:text-gray-300 transition-colors text-center lg:text-right font-semibold">
                  (484) 274-5444
                </a>
                <a href="mailto:info@jinetteramos.com" className="hover:text-gray-300 transition-colors text-center lg:text-right break-all">
                  info@jinetteramos.com
                </a>
              </div>
              <div className="text-center lg:text-right text-xs text-gray-200">
                <p>1101 Hamilton St</p>
                <p>Allentown, PA 18101</p>
                <p className="text-xs text-gray-300 mt-1">Available for travel</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-500 opacity-30"></div>

          {/* Bottom Copyright */}
          <div className="text-center text-xs sm:text-sm text-white relative pt-4">
            <p className="mb-4 md:mb-0">© 2016-2025 Jinette Ramos Photography. All rights reserved.</p>
            {/* Admin Button - Far Right */}
            <button
              onClick={onAdminClick}
              className="absolute bottom-0 right-0 mt-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-gray-800/50 hover:bg-gray-700/70 text-white text-xs font-semibold rounded-full border border-white/20 transition-all duration-300"
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              Admin
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
