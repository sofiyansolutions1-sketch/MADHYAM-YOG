import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const terminals = [
  {
    id: 1,
    video: "https://res.cloudinary.com/kvdymfeq/video/upload/v1787712411/WhatsApp_Video_2026-08-25_at_4.10.30_PM.mp4",
    quote: "A Real Conversation. A Meaningful Wellness Experience.",
    paragraphs: [
      "Wellness becomes more meaningful when guidance is personal.",
      "Hear Dr. Rahul Mahala share his perspective in a genuine one-to-one conversation with Madhyam Yog — reflecting the trust, personal attention and supportive approach that define the Madhyam Yog wellness experience.",
      "At Madhyam Yog, every journey is different. Through Yoga, mindful lifestyle practices, personalised guidance and consistent support, the focus is on helping individuals build a healthier and more balanced relationship with their wellbeing."
    ],
    footerMain: "Real Conversations",
    footerSub: "Personal Guidance • A Holistic Approach to Wellness"
  },
  {
    id: 2,
    video: "https://res.cloudinary.com/kvdymfeq/video/upload/v1787712477/WhatsApp_Video_2026-08-25_at_4.09.18_PM.mp4",
    quote: "Real experiences. Genuine change. A journey that feels personal.",
    paragraphs: [
      "Hear Ritu Mishra share her experience in a heartfelt conversation with Madhyam Yog, reflecting the value of personalised guidance, consistent support and a holistic approach to wellness.",
      "At Madhyam Yog, every individual is different — and so is their journey. Through Yoga, mindful lifestyle practices, personalised guidance and consistent support, we help create healthier habits that can become a sustainable part of everyday life."
    ],
    footerMain: "One Journey",
    footerSub: "One Experience • One Step Closer to a Healthier You"
  },
  {
    id: 3,
    video: "https://res.cloudinary.com/kvdymfeq/video/upload/v1787712503/WhatsApp_Video_2026-08-25_at_4.17.12_PM.mp4",
    quote: "Because meaningful wellness begins with the right guidance.",
    paragraphs: [
      "A genuine client conversation with Madhyam Yog, sharing her personal experience and reflecting on the value of personalised guidance, consistent support and a holistic approach to wellbeing.",
      "At Madhyam Yog, wellness is not about a one-size-fits-all routine. It is about understanding the individual and bringing together Yoga, mindful lifestyle practices, movement, breath and sustainable habits to create a journey that fits real life."
    ],
    footerMain: "Real Experience",
    footerSub: "Personal Guidance • Holistic Wellness"
  },
  {
    id: 4,
    video: "https://res.cloudinary.com/kvdymfeq/video/upload/v1787712532/WhatsApp_Video_2026-08-25_at_4.11.39_PM.mp4",
    quote: "When the right guidance becomes part of your journey, wellness feels different.",
    paragraphs: [
      "In this heartfelt conversation, a Madhyam Yog client shares her personal experience while connecting directly with Shilpa Goyal — reflecting the value of personalised guidance, consistent support and a holistic approach to wellbeing.",
      "At Madhyam Yog, every individual is different. That’s why we look beyond a one-size-fits-all routine and bring together Yoga, movement, breath, mindful lifestyle practices and sustainable habits to support each person’s unique wellness journey."
    ],
    footerMain: "Real Experience",
    footerSub: "Genuine Connection • Holistic Wellness"
  }
];

export function VideoTerminals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlayNext, setAutoPlayNext] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const nextTerminal = () => {
    setActiveIndex((prev) => (prev + 1) % terminals.length);
    setIsPlaying(false);
  };
  
  const prevTerminal = () => {
    setActiveIndex((prev) => (prev - 1 + terminals.length) % terminals.length);
    setIsPlaying(false);
  };

  const current = terminals[activeIndex];

  const handlePlayOverlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setAutoPlayNext(true);
    }
  };

  const handleVideoEnd = () => {
    nextTerminal();
  };

  useEffect(() => {
    if (autoPlayNext && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      setIsPlaying(true);
    }
  }, [activeIndex, autoPlayNext]);

  return (
    <section className="pt-10 md:pt-12 pb-10 md:pb-12 bg-primary-bg relative border-t-[3px] border-text-primary/10 overflow-hidden">
      <div className="w-full px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Video */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative flex lg:justify-end col-span-1 lg:col-span-5"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={current.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[420px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-border-subtle group bg-card-bg lg:mr-8"
              >
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  playsInline
                  preload="metadata"
                  onEnded={handleVideoEnd}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={current.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Custom Play Overlay - Highly Engaging */}
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40 z-10 cursor-pointer"
                    onClick={handlePlayOverlayClick}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-primary-theme opacity-60 animate-ping"></div>
                      <div className="relative w-24 h-24 rounded-full bg-primary-bg/95 backdrop-blur-md flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-10 h-10 text-primary-theme fill-primary-theme ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full min-h-[500px] col-span-1 lg:col-span-7"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-text-primary mb-6">
                Student Experiences
              </h2>
              <div className="w-16 h-1 bg-text-primary/60 mb-10"></div>
            </div>
            
            <div className="flex-grow flex flex-col justify-center max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="border-l-[4px] border-text-primary/60 pl-8 py-2 mb-10">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-text-primary leading-tight">
                      "{current.quote}"
                    </p>
                  </div>
                  
                  <div className="space-y-6 mb-12">
                    {current.paragraphs.map((p, i) => (
                      <p key={i} className="text-text-primary text-xl leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                  
                  <div className="pt-8 border-t border-border-subtle">
                    <h4 className="text-base tracking-[0.2em] font-semibold text-text-primary uppercase mb-3">
                      {current.footerMain}
                    </h4>
                    <p className="text-sm md:text-base tracking-widest text-text-secondary uppercase leading-relaxed">
                      {current.footerSub}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-border-subtle max-w-3xl">
               <div className="flex gap-3">
                 {terminals.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-3 rounded-full transition-all duration-500 ${activeIndex === idx ? 'bg-primary-theme w-10' : 'bg-border-subtle hover:bg-text-secondary w-3'}`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                 ))}
               </div>
               
               <div className="flex gap-4">
                  <button 
                    onClick={prevTerminal} 
                    className="w-16 h-16 rounded-full bg-card-bg border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary-theme hover:border-primary-theme hover:scale-105 transition-all shadow-sm hover:shadow-md"
                    aria-label="Previous Story"
                  >
                     <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button 
                    onClick={nextTerminal} 
                    className="group relative h-16 px-8 rounded-full bg-primary-theme border-none flex items-center justify-center text-white hover:bg-accent-theme transition-all shadow-lg hover:shadow-xl hover:scale-105 overflow-hidden"
                  >
                     <span className="font-semibold uppercase tracking-widest text-sm mr-2 z-10">Next Story</span>
                     <ChevronRight className="w-6 h-6 z-10 group-hover:translate-x-1 transition-transform" />
                     {/* Light sweep animation to encourage clicks */}
                     <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  </button>
               </div>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
