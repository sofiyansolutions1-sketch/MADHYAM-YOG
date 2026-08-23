import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800",
    fullUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=100&w=1920",
    title: "Meditation & Mindfulness",
    className: "md:col-span-2 md:row-span-2 h-64 md:h-auto",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    fullUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=100&w=1920",
    title: "Therapeutic Yoga",
    className: "md:col-span-1 md:row-span-1 h-64",
  },
  {
    id: 3,
    url: "https://iili.io/Ct1zMtR.png",
    fullUrl: "https://iili.io/Ct1zMtR.png",
    title: "Mindful Movement",
    className: "md:col-span-1 md:row-span-1 h-64",
  },
  {
    id: 4,
    url: "https://iili.io/Ct1OPql.png",
    fullUrl: "https://iili.io/Ct1OPql.png",
    title: "Balance & Harmony",
    className: "md:col-span-1 md:row-span-1 h-64",
  },
  {
    id: 5,
    url: "https://iili.io/Ct1eeCx.png",
    fullUrl: "https://iili.io/Ct1eeCx.png",
    title: "Inner Peace",
    className: "md:col-span-1 md:row-span-1 h-64",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1593164842264-854604db2260?auto=format&fit=crop&q=80&w=800",
    fullUrl: "https://images.unsplash.com/photo-1593164842264-854604db2260?auto=format&fit=crop&q=100&w=1920",
    title: "One-to-One Guidance",
    className: "md:col-span-1 md:row-span-1 h-64",
  },
  {
    id: 7,
    url: "https://iili.io/Ct1gBIt.png",
    fullUrl: "https://iili.io/Ct1gBIt.png",
    title: "Daily Practice",
    className: "md:col-span-1 md:row-span-1 h-64",
  },
  {
    id: 8,
    url: "https://iili.io/CtXPv0N.png",
    fullUrl: "https://iili.io/CtXPv0N.png",
    title: "Holistic Health",
    className: "md:col-span-2 md:row-span-1 h-64",
  },
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
      <div className="absolute inset-0 blue-glow-bg opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary-blue text-sm uppercase tracking-widest font-semibold mb-4">Our Wellness Gallery</p>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary">The Madhyam Yog Experience</h2>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 auto-rows-fr h-auto md:h-[800px]">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              onClick={() => setSelectedImage(image.fullUrl)}
              className={`relative overflow-hidden cursor-pointer group border border-border-subtle ${image.className}`}
            >
              {/* Image with grayscale that reveals full color on hover */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Dark/Blue Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 bg-primary-blue/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500 pointer-events-none"></div>

              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif text-text-primary tracking-wide">{image.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center backdrop-blur">
                    <Maximize2 className="w-4 h-4 text-primary-blue" />
                  </div>
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
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card-bg border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary-blue hover:border-primary-blue transition-colors z-10"
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
              className="max-w-full max-h-full object-contain shadow-2xl border border-border-subtle"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing lightbox
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
