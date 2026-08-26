const fs = require('fs');

const code = `import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
  { id: 1, url: "https://iili.io/CDv0DWG.jpg", title: "Gallery Image 1" },
  { id: 2, url: "https://iili.io/CDvEena.jpg", title: "Gallery Image 2" },
  { id: 3, url: "https://iili.io/CDvGXff.jpg", title: "Gallery Image 3" },
  { id: 4, url: "https://iili.io/CDvM3bt.jpg", title: "Gallery Image 4" },
  { id: 5, url: "https://iili.io/CDvMlrx.jpg", title: "Gallery Image 5" },
  { id: 6, url: "https://iili.io/CDv1wBf.jpg", title: "Gallery Image 6" },
  { id: 7, url: "https://iili.io/CDvMQ24.jpg", title: "Gallery Image 7" },
  { id: 8, url: "https://iili.io/CDvV1Gs.jpg", title: "Gallery Image 8" },
  { id: 9, url: "https://iili.io/CDvVbcv.jpg", title: "Gallery Image 9" },
  { id: 10, url: "https://iili.io/CDvWAiu.jpg", title: "Gallery Image 10" },
  { id: 11, url: "https://iili.io/CDvWpqu.jpg", title: "Gallery Image 11" },
  { id: 12, url: "https://iili.io/CDvXlrG.jpg", title: "Gallery Image 12" }
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary-bg border-y border-border-subtle relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 theme-glow-bg opacity-10 pointer-events-none"></div>

      <div className="w-full px-6 lg:px-8 relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-theme text-xl uppercase tracking-widest font-semibold mb-4">Our Wellness Gallery</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary">The Madhyam Yog Experience</h2>
        </div>

        {/* 4x3 Grid Layout as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.6 }}
              onClick={() => setSelectedImage(image.url)}
              className="relative overflow-hidden cursor-pointer group rounded-xl bg-card-bg shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Dark/Blue Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-20">
                <div className="w-12 h-12 rounded-full bg-primary-bg/80 flex items-center justify-center backdrop-blur shadow-lg scale-75 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <Maximize2 className="w-5 h-5 text-primary-theme" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-screen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-primary-bg/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card-bg border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary-theme hover:border-primary-theme transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src={selectedImage}
              alt="Gallery Fullscreen"
              className="max-w-full max-h-full object-contain shadow-2xl border border-border-subtle rounded-lg"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
`;
fs.writeFileSync('src/components/GallerySection.tsx', code);
