import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ReadMore } from './ReadMore';
import { ChevronDown, Quote } from 'lucide-react';

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = () => (
  <div className="flex gap-1 text-[#FBBC05]">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export function Philosophy() {
  return (
    <section className="pt-10 md:pt-12 pb-12 md:pb-16 lg:pb-20 bg-primary-bg relative overflow-hidden flex items-center justify-center border-t border-border-subtle">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-theme/10 via-primary-bg to-primary-bg"></div>
      
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: The Core Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary-theme/30 mb-8" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-text-primary leading-tight italic">
              "Don't just change your weight. Change your relationship with your health."
            </h2>
          </motion.div>
          
          {/* Right Side: The Explanation & Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col lg:border-l lg:border-border-subtle lg:pl-16 xl:pl-24"
          >
            <p className="text-xl md:text-2xl text-text-secondary mb-12 font-light leading-relaxed">
              We believe sustainable wellness is created through small, consistent and conscious changes.
            </p>

            <div className="space-y-4 mb-14">
              <div className="flex items-center gap-4 bg-card-bg/60 p-5 border border-border-subtle rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-primary-theme shrink-0"></div>
                <span className="text-xs md:text-sm tracking-widest uppercase font-semibold text-text-primary">NO EXTREME PROMISES</span>
              </div>
              <div className="flex items-center gap-4 bg-card-bg/60 p-5 border border-border-subtle rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-primary-theme shrink-0"></div>
                <span className="text-xs md:text-sm tracking-widest uppercase font-semibold text-text-primary">NO ONE-SIZE-FITS-ALL SOLUTIONS</span>
              </div>
              <div className="flex items-center gap-4 bg-card-bg/60 p-5 border border-border-subtle rounded-lg shadow-sm">
                <div className="w-2 h-2 rounded-full bg-primary-theme shrink-0"></div>
                <span className="text-xs md:text-sm tracking-widest uppercase font-semibold text-text-primary">NO QUICK FIXES</span>
              </div>
            </div>

            <div className="pt-8 border-t border-border-subtle">
              <p className="text-primary-theme text-xs md:text-sm uppercase tracking-[0.2em] font-bold leading-relaxed">
                JUST YOGA • AWARENESS • GUIDANCE <br className="hidden xl:block" />
                CONSISTENCY • HEALTHIER LIVING
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export function TransitionVideo() {
  return (
    <section className="bg-primary-bg py-0">
      <div className="w-full relative h-[40vh] md:h-[60vh] lg:h-[75vh] overflow-hidden group border-y border-border-subtle bg-black">
        <div className="absolute inset-0 bg-primary-theme/10 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700 z-20"></div>
        <div className="absolute top-1/2 left-1/2 w-[200%] h-[180%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <iframe
            src="https://www.youtube.com/embed/w62BRWQBxrI?autoplay=1&mute=1&controls=0&loop=1&playlist=w62BRWQBxrI&modestbranding=1&playsinline=1&rel=0&vq=hd1080"
            className="w-full h-full border-0 pointer-events-none"
            allow="autoplay; encrypted-media; fullscreen"
            title="Transition Video"
          />
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    { name: "Priya Sharma", time: "2 months ago", text: "Joining Madhyam Yog has been truly transformative. Shilpa's personalized approach and deep understanding of holistic wellness helped me build a sustainable routine. Highly recommend her sessions!" },
    { name: "Neha Gupta", time: "5 months ago", text: "The one-on-one sessions are incredible. I came in with severe lower back issues, and within a few weeks of consistent, tailored therapeutic yoga practice, I've seen massive improvements. Her focus on proper form is unparalleled." },
    { name: "Anjali Verma", time: "11 months ago", text: "Shilpa is a fantastic coach. She doesn't just focus on the physical postures, but on breath, mindfulness, and overall lifestyle. The group sessions are deeply calming and challenging at the same time." }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary-bg border-y border-border-subtle relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary-theme/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full px-6 lg:px-8 relative z-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 bg-card-bg px-6 py-3 rounded-full border border-border-subtle shadow-sm hover:shadow-md transition-shadow duration-300">
              <GoogleIcon className="w-6 h-6" />
              <span className="font-semibold text-text-primary tracking-wide">Google Reviews</span>
              <div className="w-px h-5 bg-border-subtle mx-1"></div>
              <Stars />
              <span className="font-semibold text-text-primary">5.0</span>
            </div>
          </div>
          <p className="text-primary-theme text-xl uppercase tracking-widest font-semibold mb-4">Real Experiences</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-6">What Our Students Say</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
             Discover how our holistic approach to wellness has helped our community achieve balance, strength, and mindful living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative p-8 md:p-10 bg-card-bg border border-border-subtle rounded-2xl group hover:border-primary-theme/40 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full"
            >
               <div className="flex items-start justify-between mb-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-bg border border-border-subtle flex items-center justify-center text-primary-theme font-serif text-xl flex-shrink-0">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary tracking-wide">{item.name}</p>
                      <p className="text-text-secondary text-sm mt-0.5">{item.time}</p>
                    </div>
                 </div>
                 <GoogleIcon className="w-5 h-5 opacity-90" />
               </div>

               <div className="mb-5">
                 <Stars />
               </div>

               <div className="text-text-secondary text-lg leading-relaxed flex-grow">
                 <ReadMore text={item.text} maxLength={100} />
               </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a 
              href="https://share.google/xDsI8V74Fv9Dm38Vn"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-primary-theme text-white px-8 py-4 font-semibold tracking-wide hover:bg-accent-theme transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 rounded-full"
            >
              <GoogleIcon className="w-5 h-5 bg-white rounded-full p-0.5" />
              Write a Review
            </a>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqCategories = [
    {
      title: "General FAQs",
      faqs: [
        { q: "Is Madhyam Yog suitable for beginners?", a: "Yes, our programs are designed for all levels. No previous experience is required, and we provide personalized modifications to ensure a safe practice." },
        { q: "Are the sessions online?", a: "Yes, our programs are conducted online, allowing you to access guided wellness support from the comfort of your home." },
        { q: "What is the difference between Group and One-to-One Yoga?", a: "Group Yoga offers community through live sessions, while One-to-One Yoga provides highly personalized guidance and structured routines tailored to your specific needs." },
        { q: "Can the wellness programs be customised?", a: "Absolutely. Our One-to-One, Therapeutic, and Medical Yoga programs are highly customized to your individual goals and physical requirements." },
        { q: "How do I choose the right program to start?", a: "The best way to start is by booking a consultation. We will discuss your lifestyle and goals to recommend the most suitable wellness pathway for you." }
      ]
    },
    {
      title: "Pregnancy & Postnatal Yoga FAQs",
      faqs: [
        { q: "Is it safe to practice Yoga during pregnancy?", a: "We offer gentle, pregnancy-focused practices adapted to your specific stage. However, you must consult your healthcare professional to confirm medical suitability before beginning." },
        { q: "When can I start Postnatal Yoga after giving birth?", a: "Postnatal Yoga focuses on gentle recovery and rebuilding strength, but since recovery varies by delivery type, you should always seek healthcare-professional guidance on the appropriate time to begin." },
        { q: "What do the Prenatal and Postnatal sessions include?", a: "Sessions focus on gentle movement, mobility, breathing, posture support, and relaxation. Prenatal includes birth-preparation practices, while Postnatal focuses on core awareness and gradual recovery." },
        { q: "Are the sessions personalised?", a: "Yes, every session is strictly adapted according to your individual needs, comfort level, and stage of pregnancy or recovery." }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-primary-bg">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveCategory(idx);
                setOpenIndex(0);
              }}
              className={`px-8 py-3 rounded-full font-medium transition-colors duration-300 border text-sm md:text-base tracking-wide ${
                activeCategory === idx 
                  ? 'bg-primary-theme text-white border-primary-theme' 
                  : 'bg-transparent text-text-secondary border-border-subtle hover:border-primary-theme/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        <div className="space-y-4 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqCategories[activeCategory].faqs.map((faq, idx) => (
                <div key={idx} className="border border-border-subtle bg-secondary-bg overflow-hidden rounded-lg">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                  >
                    <span className="font-serif text-xl md:text-2xl text-text-primary pr-8">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 shrink-0 text-primary-theme transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 md:p-8 pt-0 text-lg md:text-xl text-text-secondary leading-relaxed border-t border-border-subtle mt-2">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-16 md:py-16 md:py-24 lg:py-32 bg-card-bg border-y border-border-subtle relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-theme/10 via-primary-bg to-primary-bg"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-8">
          Ready to Start Your Wellness Journey?
        </h2>
        <p className="text-lg text-text-secondary mb-12 leading-relaxed font-light">
          Whether you are looking for Yoga, Weight Management, Therapeutic Yoga, Detox, Meditation or Personalised Wellness Guidance — Madhyam Yog is here to guide you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href="#contact" 
            className="bg-primary-theme hover:bg-accent-theme text-sm font-bold tracking-wider uppercase transition-all duration-300 border border-transparent hover:border-accent-theme hover:shadow-[0_0_30px_rgba(42,77,58,0.4)] w-full sm:w-auto px-8 py-4"
          >
             Book a Consultation
          </a>
          <a 
            href="#programs" 
            className="bg-transparent border border-border-subtle hover:border-primary-theme text-text-sm font-bold tracking-wider uppercase transition-colors w-full sm:w-auto px-8 py-4"
          >
             Join Madhyam Yog
          </a>
        </div>
        <p className="font-serif italic text-text-xl border-t border-border-subtle pt-12 inline-block">
          Your body is your first home. Take care of it.
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const address = formData.get('address');
    const interest = formData.get('interest');
    const message = formData.get('message');

    const text = `*New Inquiry via Website*\n*Name:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n*Interested In:* ${interest}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    
    window.open(`https://wa.me/919352639390?text=${encodedText}`, '_blank');

    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary-bg relative border-t border-border-subtle overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary-theme/5 via-primary-bg to-primary-bg pointer-events-none"></div>
      
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 xl:px-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Contact Details */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary leading-tight mb-6">
                Start Your <br/>Journey Today
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-lg font-light">
                Whether you're ready to book a consultation or just want to learn more about our programs, we are here to help. Reach out to us, and we'll guide you to the right path.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-card-bg border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:border-primary-theme group-hover:bg-primary-theme/5 transition-all duration-300">
                    <span className="text-primary-theme text-2xl font-serif">M</span>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-semibold text-text-secondary mb-2">Platform</h4>
                    <p className="text-lg text-text-primary font-medium">Madhyam Yog</p>
                    <p className="text-text-secondary">Online Wellness Platform</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-card-bg border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:border-primary-theme group-hover:bg-primary-theme/5 transition-all duration-300">
                    <svg className="w-6 h-6 text-primary-theme" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-semibold text-text-secondary mb-2">Direct Contact</h4>
                    <p className="text-lg text-text-primary font-medium">+91 93526 39390</p>
                    <p className="text-text-secondary">Available via Call & WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-border-subtle">
              <p className="text-sm font-semibold tracking-widest text-text-secondary uppercase mb-6">Connect on Social Media</p>
              <a href="https://www.instagram.com/madhyam_yog/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 hover:bg-primary-theme/5 p-4 -ml-4 rounded-xl border border-transparent hover:border-primary-theme/20 transition-all duration-300 w-fit">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-text-primary font-bold text-lg group-hover:text-primary-theme transition-colors">@madhyam_yog</h4>
                  <p className="text-text-secondary text-sm">Follow us for daily wellness inspiration</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-card-bg border border-border-subtle rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
             {formStatus === 'success' ? (
                <div className="absolute inset-0 bg-card-bg flex flex-col items-center justify-center z-10 text-center p-8">
                   <div className="w-20 h-20 rounded-full bg-primary-theme/10 border border-primary-theme/30 flex items-center justify-center mb-6">
                      <svg className="w-10 h-10 text-primary-theme" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                   </div>
                   <h3 className="text-3xl lg:text-4xl font-serif text-text-primary mb-3">Message Prepared</h3>
                   <p className="text-text-secondary text-lg mb-8 max-w-sm">Your inquiry is ready to be sent. WhatsApp should open automatically.</p>
                   <button onClick={() => setFormStatus('idle')} className="text-primary-theme text-sm uppercase tracking-[0.15em] font-bold border-b border-primary-theme pb-1 hover:text-accent-theme hover:border-accent-theme transition-colors">Send Another Inquiry</button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">Full Name</label>
                      <input name="name" required type="text" className="w-full bg-transparent border-b-2 border-border-subtle focus:border-primary-theme px-0 py-2 text-text-primary outline-none transition-colors text-lg" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">Phone Number</label>
                      <input name="phone" required type="tel" className="w-full bg-transparent border-b-2 border-border-subtle focus:border-primary-theme px-0 py-2 text-text-primary outline-none transition-colors text-lg" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">Address</label>
                    <input name="address" required type="text" className="w-full bg-transparent border-b-2 border-border-subtle focus:border-primary-theme px-0 py-2 text-text-primary outline-none transition-colors text-lg" placeholder="Your full address" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">What are you interested in?</label>
                    <div className="relative">
                      <select name="interest" required defaultValue="" className="w-full bg-transparent border-b-2 border-border-subtle focus:border-primary-theme px-0 py-2 text-text-primary outline-none transition-colors appearance-none text-lg cursor-pointer">
                        <option value="" disabled className="bg-card-bg text-text-secondary">Select a program</option>
                        <option value="Group Yoga" className="bg-card-bg">Group Yoga</option>
                        <option value="One-to-One Yoga" className="bg-card-bg">One-to-One Yoga</option>
                        <option value="Therapeutic Yoga" className="bg-card-bg">Therapeutic Yoga</option>
                        <option value="Medical Yoga" className="bg-card-bg">Medical Yoga</option>
                        <option value="Weight Management" className="bg-card-bg">Weight Management</option>
                        <option value="90-Day Program" className="bg-card-bg">90-Day Program</option>
                        <option value="Detox" className="bg-card-bg">Detox</option>
                        <option value="Liver Detox" className="bg-card-bg">Liver Detox</option>
                        <option value="Meditation" className="bg-card-bg">Meditation</option>
                        <option value="Face Yoga" className="bg-card-bg">Face Yoga</option>
                        <option value="General Consultation" className="bg-card-bg">General Consultation</option>
                        <option value="Premium Membership" className="bg-card-bg">Premium Membership</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown className="w-5 h-5 text-text-secondary" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-widest">Message</label>
                    <textarea name="message" rows={3} className="w-full bg-transparent border-b-2 border-border-subtle focus:border-primary-theme px-0 py-2 text-text-primary outline-none transition-colors resize-none text-lg" placeholder="Tell us a little about your goals..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-primary-theme hover:bg-accent-theme text-white px-8 py-5 text-sm font-bold tracking-widest uppercase transition-all mt-4 disabled:opacity-70 rounded-md shadow-lg shadow-primary-theme/20 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                    {formStatus === 'submitting' ? 'Preparing WhatsApp...' : (
                      <>
                        Send Enquiry via WhatsApp
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                      </>
                    )}
                  </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
