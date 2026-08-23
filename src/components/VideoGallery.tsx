import { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';

const videos = [
  {
    src: "https://cdn.jumpshare.com/preview/Xrz81DuL79NE6WJgZI-kTk4pUazEkK2YuB8g5Xtf7drh_2Bt1A45d3Q2wK8DCwljwPQ-VU1x2crqsVFl0ZHtDBvbItKQh13Bb0dR7R79j0WVLBXYC6AnxfFtDhyKcEbWe2gfDGCfoMGHT58PfMcXOG6yjbN-I2pg_cnoHs_AmgI.mp4",
    className: "object-center"
  },
  {
    src: "https://cdn.jumpshare.com/preview/bnZwfVGyxO0GiFwhLTSh8JdkCxwXWA1z2QyPz0s9kbXyZU_FmACZJtN309WFX7w0IlU9cWLVz8wjiPy0Cyg1lKVM2G9CS9m0cyuW5K_QNYNiar0W_l8xNW_oW05UV8RxftHfO3jfXwyeXfIey8JgX26yjbN-I2pg_cnoHs_AmgI.mp4",
    className: "object-center"
  },
  {
    src: "https://cdn.jumpshare.com/preview/cGxRNmK5v95v9jg7uEa5uWC-hfSlMu-YOP3Z1eiOf8yHXayd-0eKPwDijXWRnhAnMUCtpUDw8gKE5DbstMjlwAo-bs1S-6NUSp0jKfGrBsTSTvKNBhlvuMGoTtAUN5omjkbx3pzGBrZNcBziAd3vcG6yjbN-I2pg_cnoHs_AmgI.mp4",
    className: "object-center"
  },
  {
    src: "https://cdn.jumpshare.com/preview/1wlZn9lIaROpre8QBVs3mBzfX5hNayz2ynww17gcRj8K7TlXFFs9I69Nc05O-kGGJPSekeifppOr0RVg_NremMI7sbI9fcOUXu9PmH55UgBFqAIIzYtIhCDzaZ6Ib89k_JZ-cbMsLQ0Cc0VlSQS3Wm6yjbN-I2pg_cnoHs_AmgI.mp4",
    className: "object-[80%_center]" // Focuses on the character in the right side of the frame
  }
];

function AutoPlayVideo({ src, videoClassName = "object-center" }: { src: string, videoClassName?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Observe when this video comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(e => console.error("Autoplay failed:", e));
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-[9/16] overflow-hidden bg-card-bg/50 border border-border-subtle group">
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${videoClassName}`}
        loop
        muted
        playsInline
      />
    </div>
  );
}

export function VideoGallery() {
  return (
    <section className="py-16 md:py-24 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4">Glimpses of Practice</h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto">
            Experience the flow, movement, and mindful presence of our daily holistic practices.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {videos.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <AutoPlayVideo src={item.src} videoClassName={item.className} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
