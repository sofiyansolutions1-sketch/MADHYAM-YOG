import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex flex-col lg:block overflow-hidden lg:min-h-screen">
      {/* Background Video & Overlay */}
      <div className="relative w-full aspect-video mt-20 lg:mt-0 lg:absolute lg:inset-0 lg:z-0 lg:h-full">
        <video
          src="https://cdn.jumpshare.com/preview/nxeHzV50s7ddEVdIkkyhg38DW3FE4N9BMuyCLrcJIyeo5LcClGxRu07E57IQuKOzgMAymwGTZ3yfBB3qHb0qR658asPjlml5SKA0gbs8dWXDLHWgL3b2fILJ5dXcX2iDCL1kh7BTyVrssAB5r1eTgm6yjbN-I2pg_cnoHs_AmgI.mp4"
          className="w-full h-full object-cover object-center lg:opacity-60"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Desktop gradients */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-primary-bg via-primary-bg/70 to-transparent"></div>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-primary-bg/50 via-transparent to-primary-bg"></div>
        {/* Mobile gradient to blend video into content */}
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-bg to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8 pb-16 lg:px-8 lg:pt-32 lg:pb-20 w-full flex lg:items-center lg:min-h-screen">
        <div className="w-full lg:w-3/5 xl:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-primary-blue text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-px bg-primary-blue"></span>
              Holistic Yoga • Therapeutic Wellness
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 text-text-primary text-glow">
              Transform Your Health.<br />
              <span className="text-text-secondary">Reconnect With Your Body.</span><br />
              Reclaim Your Life.
            </h1>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl font-light">
              At Madhyam Yog, wellness is more than exercise or weight loss. We bring together Yoga, breath, mindful nutrition, meditation and sustainable lifestyle practices to help you build a healthier relationship with your body and mind.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <a
                href="#contact"
                className="bg-primary-blue hover:bg-accent-blue text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 border border-transparent hover:border-accent-blue hover:shadow-[0_0_30px_rgba(22,139,255,0.4)] w-full sm:w-auto text-center"
              >
                Book a Consultation
              </a>
              <a
                href="#programs"
                className="bg-primary-bg/50 backdrop-blur-sm text-text-primary border border-border-subtle hover:border-text-primary px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 w-full sm:w-auto text-center"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden lg:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-text-secondary">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-primary-blue" />
        </motion.div>
      </motion.div>
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
      <div className="absolute inset-0 blue-glow-bg opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-4">
          {credentials.map((cred, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-primary-blue flex-shrink-0" />
              <span className="text-sm font-medium text-text-secondary uppercase tracking-wider">{cred}</span>
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full group"
          >
             <div className="absolute inset-0 border border-border-subtle translate-x-4 translate-y-4"></div>
             <video 
               ref={videoRef}
               src="https://cdn.jumpshare.com/preview/lwOo4kDwpJohHEZ4g3zzkeo3SEsZIheCBQtJMznBCQ5oQ6t-QmlyeXLdRff__yKdhAWiWDP1G-0VzoTS6ZQ4VvA-KH-MPza1JSVpoC5OhXAwDkw6W-jK_t0yTUejCslTckp7EPn6CkIinSPwqM_sKm6yjbN-I2pg_cnoHs_AmgI.mp4" 
               className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
               loop
               muted
               playsInline
             />
             <div className="absolute inset-0 bg-primary-blue/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-8">Yoga Beyond the Mat</h2>
            <div className="w-12 h-px bg-primary-blue mb-8"></div>
            
            <p className="text-xl text-text-primary font-medium leading-relaxed mb-8 italic border-l-2 border-primary-blue pl-6">
              "Empowering you to take charge of your health through Yoga, awareness and sustainable lifestyle changes."
            </p>
            
            <p className="text-text-secondary leading-relaxed mb-8">
              Madhyam Yog is a holistic wellness platform created with one simple vision. We combine traditional Yoga practices with practical wellness guidance to help you navigate modern life with balance and vitality.
            </p>

            <div className="pt-8 border-t border-border-subtle">
              <p className="text-sm uppercase tracking-widest text-primary-blue font-semibold mb-4">The Foundation</p>
              <div className="flex flex-wrap gap-4 text-text-secondary text-sm font-medium tracking-wider uppercase">
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary-blue text-sm uppercase tracking-widest font-semibold mb-4">Body • Breath • Food • Mind • Lifestyle</p>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary">A Holistic Approach to Wellness</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative p-8 border border-border-subtle bg-primary-bg hover:bg-secondary-bg transition-all duration-500 overflow-hidden cursor-pointer h-[240px] flex flex-col justify-end"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-serif text-text-primary mb-2 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">{pillar.title}</h3>
              <div className="h-px w-0 bg-primary-blue mb-4 group-hover:w-full transition-all duration-500"></div>
              <p className="text-text-secondary text-sm leading-relaxed opacity-60 group-hover:opacity-100 relative z-10 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-blue/10 blur-[50px] rounded-full z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative z-10"
          >
            <p className="text-primary-blue text-sm uppercase tracking-widest font-semibold mb-4">Your Yoga & Wellness Guide</p>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-2">Shilpa Goyal</h2>
            <p className="text-text-secondary text-lg mb-8 uppercase tracking-wider text-sm font-medium">Health & Wellness Coach | Yoga Teacher</p>
            
            <div className="flex flex-col gap-3 mb-10">
               <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                 <span className="text-text-secondary">500-hour Yoga Teacher Training</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                 <span className="text-text-secondary">Ayurvedic Diet & Nutrition</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                 <span className="text-text-secondary">Yoga Therapy</span>
               </div>
            </div>

            <blockquote className="text-xl text-text-primary font-serif leading-relaxed italic mb-10 pl-6 border-l border-primary-blue relative">
               <span className="absolute -left-3 -top-2 text-4xl text-primary-blue opacity-40">"</span>
               Health is not achieved by treating one symptom at a time. It is built through balance, consistency and conscious living.
            </blockquote>

            <a
              href="#contact"
              className="inline-block border border-border-subtle hover:border-primary-blue hover:text-primary-blue text-text-primary px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              Meet Shilpa
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
