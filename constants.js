import { getGalleryImageMap } from './scripts/import-gallery.js';

export const NAV_LINKS = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/experience', title: 'The Experience' },
  { path: '/photography', title: 'Portfolio' },
  { path: '/investment', title: 'Investment' },
  { path: '/studio', title: 'The Studio' },
  { path: '/contact', title: 'Contact' },
];

const imageMap = getGalleryImageMap();

const photoMetadata = [
  // Family Portraits Category
  { id: 1, filename: 'DSC00207.jpg', title: 'Elegant Portrait', caption: 'A timeless portrait capturing personality and emotion with expert lighting.', category: 'Family Portraits', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'A timeless portrait capturing personality and emotion with expert lighting and composition. This studio session showcases professional portrait photography at its finest.' },
  { id: 2, filename: 'DSC00790.jpg', title: 'Editorial Portrait', caption: 'An artistic portrait with editorial flair and sophisticated styling.', category: 'Family Portraits', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'An artistic portrait with editorial flair and sophisticated styling. This image demonstrates creative vision and professional technique.' },
  { id: 3, filename: 'DSC00827.jpg', title: 'Studio Portrait', caption: 'A beautifully lit studio portrait showcasing professional quality and attention to detail.', category: 'Family Portraits', location: 'Allentown Studio, PA', equipment: 'Canon EOS R6 with Canon RF 35mm f/1.8 Macro IS STM', description: 'A beautifully lit studio portrait showcasing professional quality and attention to detail. Perfect lighting creates depth and dimension.' },
  { id: 4, filename: 'DSC01942.jpg', title: 'Authentic Moments', caption: 'Capturing genuine expressions and authentic moments in a relaxed studio setting.', category: 'Family Portraits', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'Capturing genuine expressions and authentic moments in a relaxed studio setting. This portrait reflects natural beauty and personality.' },
  { id: 5, filename: 'DSC02288-2.jpg', title: 'Storytelling Portrait', caption: 'A compelling portrait that tells a story through expert composition and emotional connection.', category: 'Family Portraits', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'A compelling portrait that tells a story through expert composition and emotional connection. Every element is thoughtfully placed.' },
  
  // Maternity & Newborns Category
  { id: 6, filename: 'DSC02293.jpg', title: 'Artistic Expression', caption: 'Creative portrait photography with unique style and artistic vision.', category: 'Maternity & Newborns', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'Creative portrait photography with unique style and artistic vision. This image showcases the artistry of professional portraiture.' },
  { id: 7, filename: 'DSC02313.jpg', title: 'Portrait Excellence', caption: 'Professional portrait photography demonstrating technical mastery and creative artistry.', category: 'Maternity & Newborns', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'Professional portrait photography demonstrating technical mastery and creative artistry. A perfect balance of skill and vision.' },
  { id: 8, filename: 'DSC06277-2.jpg', title: 'Studio Mastery', caption: 'High-quality studio photography with perfect lighting and professional composition.', category: 'Maternity & Newborns', location: 'Allentown Studio, PA', equipment: 'Canon EOS R6 with Canon RF 35mm f/1.8 Macro IS STM', description: 'High-quality studio photography with perfect lighting and professional composition. Every detail is carefully crafted.' },
  { id: 9, filename: 'DSC06289.jpg', title: 'Portrait Art', caption: 'Artistic portrait photography showcasing talent, creativity, and professional expertise.', category: 'Maternity & Newborns', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'Artistic portrait photography showcasing talent, creativity, and professional expertise. A work of art in every frame.' },
  
  // Senior Grads Category
  { id: 10, filename: 'DSC09728_(2).jpg', title: 'Professional Session', caption: 'A professional photography session delivering stunning results with expert technique.', category: 'Senior Grads', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'A professional photography session delivering stunning results with expert technique. Quality that exceeds expectations.' },
  { id: 11, filename: 'DSC09876.JPG', title: 'Studio Portrait Session', caption: 'A refined studio portrait session capturing elegance and sophistication.', category: 'Senior Grads', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'A refined studio portrait session capturing elegance and sophistication. Professional lighting creates a timeless image.' },
  { id: 12, filename: 'DSC09879.JPG', title: 'Expert Portrait', caption: 'Expert studio portrait photography with professional lighting and composition.', category: 'Senior Grads', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'Expert studio portrait photography with professional lighting and composition. Every detail is perfectly executed.' },
  
  // Couples & Engagements Category
  { id: 13, filename: 'DSC09884.JPG', title: 'Professional Portrait', caption: 'A professional portrait showcasing technical excellence and artistic vision.', category: 'Couples & Engagements', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'A professional portrait showcasing technical excellence and artistic vision. Quality that speaks for itself.' },
  { id: 14, filename: 'DSC09907.JPG', title: 'Studio Work', caption: 'Professional photography work demonstrating the highest quality and attention to detail.', category: 'Couples & Engagements', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'Professional photography work demonstrating the highest quality and attention to detail. Excellence in every frame.' },
  { id: 15, filename: 'DSC09909.JPG', title: 'Portrait Photography', caption: 'A stunning portrait that captures the essence of the subject with professional artistry.', category: 'Couples & Engagements', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'A stunning portrait that captures the essence of the subject with professional artistry. Timeless and elegant.' },
  
  // Professional Headshots Category
  { id: 16, filename: 'IMG_0983_copy.jpg', title: 'Memorable Portrait', caption: 'A memorable portrait session delivering beautiful results and lasting memories.', category: 'Professional Headshots', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'A memorable portrait session delivering beautiful results and lasting memories. Professional quality that you\'ll treasure forever.' },
  { id: 17, filename: 'IMG_5870 2 copy.jpg', title: 'Portrait Session', caption: 'A professional portrait session capturing personality and style with expert technique.', category: 'Professional Headshots', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'A professional portrait session capturing personality and style with expert technique. Every detail is thoughtfully composed.' },
  { id: 18, filename: 'IMG_9025.JPG', title: 'Studio Excellence', caption: 'Studio photography excellence showcasing professional mastery and creative vision.', category: 'Professional Headshots', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'Studio photography excellence showcasing professional mastery and creative vision. Quality that stands the test of time.' },
  
  // Creative & Artistic Category
  { id: 19, filename: 'luke-40.jpeg', title: 'Portrait Artistry', caption: 'Portrait artistry at its finest, capturing the beauty and character of the subject.', category: 'Creative & Artistic', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'Portrait artistry at its finest, capturing the beauty and character of the subject. Expert composition and lighting.' },
  { id: 20, filename: 'MetalMisfits-(1 of 1).jpg', title: 'Creative Portrait', caption: 'A creative photography session with unique styling and artistic results.', category: 'Creative & Artistic', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'A creative photography session with unique styling and artistic results. Bold and distinctive portrait work.' },

  // Google Maps Contributor Photos - Additional Gallery Content
  { id: 21, filename: 'DSC00207.jpg', title: 'Urban Portrait Study', caption: 'Capturing urban beauty with refined studio lighting and composition.', category: 'Family Portraits', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'A refined urban-inspired portrait study showcasing professional studio photography with careful attention to lighting and composition.' },
  { id: 22, filename: 'DSC00790.jpg', title: 'Styled Editorial Session', caption: 'Editorial-quality portrait with artistic direction and sophisticated styling.', category: 'Couples & Engagements', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'A styled editorial session featuring sophisticated composition, creative direction, and professional artistry for an unforgettable portrait experience.' },
  { id: 23, filename: 'DSC00827.jpg', title: 'Studio Luminosity', caption: 'Masterfully lit studio portrait with professional-grade equipment and expertise.', category: 'Senior Grads', location: 'Allentown Studio, PA', equipment: 'Canon EOS R6 with Canon RF 35mm f/1.8 Macro IS STM', description: 'Studio photography featuring expert lighting techniques and professional composition. Every element is carefully controlled for gallery-quality results.' },
  { id: 24, filename: 'DSC01942.jpg', title: 'Genuine Connection', caption: 'Authentic moments captured with natural warmth and professional technique.', category: 'Family Portraits', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 85mm f/1.2L USM', description: 'A portrait session focusing on genuine human connection and emotional authenticity, captured with professional studio expertise and creative vision.' },
  { id: 25, filename: '1754668544694.jpeg', title: 'Modern Portrait Series', caption: 'Contemporary portrait photography with artistic vision and professional finish.', category: 'Creative & Artistic', location: 'Allentown Studio, PA', equipment: 'Canon EOS R5 with Canon RF 50mm f/1.2L USM', description: 'A modern portrait exploring contemporary aesthetics with bold artistic direction and masterful post-production for a striking gallery piece.' },
];

export const GALLERY_PHOTOS = photoMetadata.map(photo => ({
  ...photo,
  src: imageMap[photo.filename],
  thumbnail: imageMap[photo.filename],
}));

export const GALLERY_CATEGORIES = [
  'All',
  'Family Portraits',
  'Maternity & Newborns',
  'Senior Grads',
  'Couples & Engagements',
  'Professional Headshots',
  'Creative & Artistic',
];

export const FAQ_DATA = [
    { question: "What is your photography style?", answer: "My style is a blend of documentary and fine art. I aim to capture genuine moments and emotions, creating timeless, elegant images that tell your story beautifully." },
    { question: "Do you travel for photo sessions?", answer: "Absolutely! I love exploring new places. Travel fees may apply for locations outside of a 50-mile radius from my studio. Let's chat about your dream location!" },
    { question: "How will we receive our photos?", answer: "You will receive your professionally edited, high-resolution photos through a private online gallery. From there, you can download, share, and order prints." },
    { question: "What is the turnaround time for photos?", answer: "For portrait sessions, the turnaround time is typically 2-3 weeks. For weddings and larger events, it's usually 6-8 weeks. I always aim to deliver your beautiful images as quickly as possible without compromising on quality." },
];
