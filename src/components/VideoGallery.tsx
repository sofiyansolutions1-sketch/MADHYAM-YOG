import { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videos = [
  { id: 'XRwl1zPmCOY' },
  { id: 'tlHrkeW-WQw' },
  { id: 'qe5jyZLOdBo' },
  { id: 'plTE4QBIx8g' },
  { id: '-L8WIPq4qOI' },
  { id: 'tPzn4tgAdMU' },
  { id: 'vUMcq9aelr0' },
  { id: 'jVR6_tZo0x4' },
  { id: '304dW9jsvVg' },
  { id: '4EJHHDJUOI4' }
];

function InteractiveVideo({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-[9/16] overflow-hidden bg-black border border-border-subtle group rounded-xl shadow-md cursor-pointer" onClick={() => setIsPlaying(true)}>
      {!isPlaying ? (
        <>
          <img 
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt="Video thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-primary-theme/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary-bg/80 flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-primary-theme ml-1" strokeWidth={2} />
            </div>
          </div>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&modestbranding=1&playsinline=1&rel=0`}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; encrypted-media; fullscreen"
          title="YouTube Video"
        />
      )}
    </div>
  );
}

export function VideoGallery() {
  return (
    <section id="glimpses" className="py-16 md:py-24 bg-primary-bg relative overflow-hidden">
      <div className="w-full px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-4">Video Testimonials</h2>
          <p className="text-xl lg:text-2xl max-w-2xl mx-auto text-text-secondary">
            Hear directly from our community about their genuine experiences and wellness journeys with Madhyam Yog.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {videos.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1, duration: 0.6 }}
            >
              <InteractiveVideo videoId={item.id} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
