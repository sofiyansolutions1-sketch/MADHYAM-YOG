import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col lg:block overflow-hidden lg:min-h-screen bg-primary-bg">
      {/* Background Video & Overlay */}
      <div className="relative w-full aspect-video mt-[88px] lg:mt-0 lg:absolute lg:inset-0 lg:z-0 lg:h-full overflow-hidden bg-black pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="https://res.cloudinary.com/kvdymfeq/video/upload/v1787648802/Hi_Gemini_is_video_ko_ra.mp4" type="video/mp4" />
        </video>
        {/* Deep color gradients for text readability - applied to desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070B]/90 via-[#05070B]/50 to-transparent hidden lg:block"></div>
      </div>

      <div className="relative z-10 w-full px-6 pt-10 pb-16 lg:px-8 lg:pt-32 lg:pb-20 flex lg:items-center lg:min-h-screen">
        <div className="w-full lg:w-3/5 xl:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="py-0 lg:py-8"
          >
            <p className="text-primary-theme text-sm font-semibold tracking-[0.2em] uppercase mb-4 lg:mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-primary-theme"></span>
              Holistic Yoga • Therapeutic Wellness
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 text-text-primary lg:text-white drop-shadow-sm lg:drop-shadow-lg">
              Transform Your Health.<br />
              <span className="text-primary-theme lg:text-primary-theme">Reconnect With Your Body.</span><br />
              Reclaim Your Life.
            </h1>
            <p className="text-xl lg:text-2xl text-text-secondary lg:text-white/90 lg:drop-shadow-md leading-relaxed mb-8 max-w-xl font-medium">
              At Madhyam Yog, wellness is more than exercise or weight loss. We bring together Yoga, breath, mindful nutrition, meditation and sustainable lifestyle practices to help you build a healthier relationship with your body and mind.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <a
                href="#contact"
                className="bg-primary-theme hover:bg-accent-theme text-white px-8 py-4 font-medium tracking-wider uppercase transition-all duration-300 border border-transparent hover:border-accent-theme hover:shadow-[0_0_30px_rgba(42,77,58,0.4)] w-full sm:w-auto text-center rounded-lg"
              >
                Book a Consultation
              </a>
              <a
                href="#programs"
                className="bg-primary-theme/5 lg:bg-white/10 lg:backdrop-blur-sm text-primary-theme lg:text-white border border-primary-theme/20 lg:border-white/20 hover:border-primary-theme lg:hover:border-white px-8 py-4 font-medium tracking-wider uppercase transition-all duration-300 w-full sm:w-auto text-center rounded-lg hover:bg-primary-theme/10 lg:hover:bg-white/20"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const credentials = [
    "500-Hour Yoga Teacher Training",
    "Ayurvedic Diet & Nutrition",
    "Yoga Therapy",
    "Personalised Guidance",
    "Holistic Wellness"
  ];

  return (
    <div className="border-y border-border-subtle bg-secondary-bg/50 backdrop-blur py-8 overflow-hidden relative">
      <div className="absolute inset-0 theme-glow-bg opacity-30"></div>
      <div className="w-full px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-4">
          {credentials.map((cred, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary-theme flex-shrink-0" />
              <span className="font-medium text-text-secondary uppercase tracking-wider">{cred}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function About() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-primary-bg relative">
      <div className="w-full px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full group overflow-hidden bg-black"
          >
             <div className="absolute inset-0 border border-border-subtle translate-x-4 translate-y-4 z-20 pointer-events-none"></div>
             <video
               autoPlay
               loop
               muted
               playsInline
               className="absolute inset-0 w-full h-full object-cover z-10"
               src="https://res.cloudinary.com/kvdymfeq/video/upload/v1787717032/290920_medium.mp4"
             />
             <div className="absolute inset-0 bg-primary-theme/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700 z-20"></div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-8 leading-tight">Yoga Beyond the Mat</h2>
            <div className="w-16 h-1 bg-primary-theme mb-10"></div>
            
            <p className="text-2xl text-text-primary font-medium leading-relaxed mb-10 italic border-l-4 border-primary-theme pl-6">
              "True transformation begins when the practice leaves the studio and enters your daily life. We empower you to take charge of your health through awareness and sustainable habits."
            </p>
            
            <div className="space-y-6 text-text-secondary text-lg lg:text-xl leading-relaxed mb-10">
              <p>
                At Madhyam Yog, we view Yoga not merely as physical exercise, but as a comprehensive blueprint for living. Our holistic wellness platform was created with one simple vision: to seamlessly integrate the ancient wisdom of traditional Yoga with practical, modern wellness guidance.
              </p>
              <p>
                We believe that every aspect of your life—from how you breathe and move, to what you consume and how you rest—is deeply interconnected. By honoring these connections, we help you cultivate lasting balance, resilience, and vitality in an increasingly fast-paced world.
              </p>
            </div>

            <div className="pt-8 border-t border-border-subtle">
              <p className="text-xl uppercase tracking-widest text-primary-theme font-semibold mb-4">The Foundation</p>
              <div className="flex flex-wrap gap-4 text-text-lg font-medium tracking-wider uppercase">
                <span>Body</span>
                <span className="text-border-subtle">•</span>
                <span>Breath</span>
                <span className="text-border-subtle">•</span>
                <span>Food</span>
                <span className="text-border-subtle">•</span>
                <span>Mind</span>
                <span className="text-border-subtle">•</span>
                <span>Lifestyle</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Pillars() {
  const pillars = [
    { title: "Body", desc: "Yoga, movement, mobility and strength." },
    { title: "Breath", desc: "Pranayama and conscious breathing." },
    { title: "Food", desc: "Mindful and balanced nutrition." },
    { title: "Mind", desc: "Meditation, mindfulness and stress management." },
    { title: "Lifestyle", desc: "Sleep, routine, consistency and healthy habits." }
  ];

  return (
    <section className="py-24 bg-card-bg relative border-y border-border-subtle overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-theme/5 rounded-full blur-[120px]"></div>
      
      <div className="w-full px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-primary-theme text-xl uppercase tracking-widest font-semibold mb-6">Body • Breath • Food • Mind • Lifestyle</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary">A Holistic Approach to Wellness</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-8 border border-border-subtle bg-primary-bg hover:bg-secondary-bg transition-all duration-500 overflow-hidden cursor-pointer h-[280px] lg:h-[320px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-theme/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-3xl lg:text-4xl font-serif text-text-primary mb-3 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">{pillar.title}</h3>
              <div className="h-px w-0 bg-primary-theme mb-4 group-hover:w-full transition-all duration-500"></div>
              <p className="text-text-lg leading-relaxed opacity-60 group-hover:opacity-100 relative z-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section id="founder" className="py-16 md:py-24 lg:py-32 bg-primary-bg">
      <div className="w-full px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
               <img 
                 src="https://iili.io/Ct0tpGS.png" 
                 alt="Shilpa Goyal"
                 className="w-full h-full object-cover object-top transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-theme/10 blur-[50px] rounded-full z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative z-10"
          >
            <p className="text-primary-theme text-xl uppercase tracking-widest font-semibold mb-4">Your Yoga & Wellness Guide</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-2">Shilpa Goyal</h2>
            <p className="text-text-2xl mb-8 uppercase tracking-wider font-medium">Health & Wellness Coach | Yoga Teacher</p>
            
            <div className="flex flex-col gap-3 mb-10">
               <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary-theme"></div>
                 <span className="text-text-secondary">500-hour Yoga Teacher Training</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary-theme"></div>
                 <span className="text-text-secondary">Ayurvedic Diet & Nutrition</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary-theme"></div>
                 <span className="text-text-secondary">Yoga Therapy</span>
               </div>
            </div>

            <blockquote className="text-xl text-text-primary font-serif leading-relaxed italic mb-10 pl-6 border-l border-primary-theme relative">
               <span className="absolute -left-3 -top-2 text-4xl text-primary-theme opacity-40">"</span>
               Health is not achieved by treating one symptom at a time. It is built through balance, consistency and conscious living.
            </blockquote>

            <a
              href="#contact"
              className="inline-block border border-border-subtle hover:border-primary-theme hover:text-primary-theme text-text-primary px-8 py-4 font-medium tracking-wider uppercase transition-all duration-300"
            >
              Meet Shilpa
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
