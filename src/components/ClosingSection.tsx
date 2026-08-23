import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Quote } from 'lucide-react';

export function Philosophy() {
  return (
    <section className="py-24 md:py-32 lg:py-48 bg-primary-bg relative overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-blue/10 via-primary-bg to-primary-bg"></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <Quote className="w-16 h-16 mx-auto text-primary-blue/20 mb-8" />
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-text-primary leading-tight mb-12 italic">
          "Don't just change your weight. Change your relationship with your health."
        </h2>
        
        <p className="text-lg md:text-xl text-text-secondary mb-16 max-w-3xl mx-auto font-light">
          We believe sustainable wellness is created through small, consistent and conscious changes.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <span className="px-6 py-2 border border-border-subtle text-xs tracking-widest uppercase font-semibold text-text-secondary">NO EXTREME PROMISES</span>
          <span className="px-6 py-2 border border-border-subtle text-xs tracking-widest uppercase font-semibold text-text-secondary">NO ONE-SIZE-FITS-ALL SOLUTIONS</span>
          <span className="px-6 py-2 border border-border-subtle text-xs tracking-widest uppercase font-semibold text-text-secondary">NO QUICK FIXES</span>
        </div>

        <p className="text-primary-blue text-sm uppercase tracking-[0.2em] font-bold">
          JUST YOGA • AWARENESS • GUIDANCE • CONSISTENCY • HEALTHIER LIVING
        </p>
      </div>
    </section>
  );
}

export function TransitionVideo() {
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
    <section className="bg-primary-bg py-0">
      <div className="w-full relative h-[40vh] md:h-[60vh] lg:h-[75vh] overflow-hidden group border-y border-border-subtle">
        <video 
          ref={videoRef}
          src="https://cdn.jumpshare.com/preview/qp5ycEX3HhIFznVpE_lyGw8WglqywD9u7synBl8oG1IkkboYzGtNAL7rsermHzcqU7F8ZdmZHmhEbbHJK5jbPgIjp1DvVZf-zWz67sKkCtFtE6h45m0TsHxYen1S6kTmalwk61NrIPNHogH3gKm4F26yjbN-I2pg_cnoHs_AmgI.mp4" 
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-primary-blue/5 mix-blend-overlay pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const placeholders = [
    { name: "Student Name", program: "Group Yoga", text: "Student testimonial will be updated here. This space is reserved for genuine feedback from Madhyam Yog students." },
    { name: "Student Name", program: "One-to-One Yoga", text: "Student testimonial will be updated here. This space is reserved for genuine feedback from Madhyam Yog students." },
    { name: "Student Name", program: "Therapeutic Yoga", text: "Student testimonial will be updated here. This space is reserved for genuine feedback from Madhyam Yog students." }
  ];

  return (
    <section className="py-16 md:py-16 md:py-24 lg:py-32 bg-secondary-bg border-y border-border-subtle relative overflow-hidden">
      {/* Subtle background glow to highlight the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary-blue text-sm uppercase tracking-widest font-semibold mb-4">Real Experiences</p>
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary">What Our Students Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholders.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="relative p-8 md:p-10 bg-card-bg border border-border-subtle group hover:border-primary-blue/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(22,139,255,0.08)]"
            >
               {/* Top decorative accent */}
               <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-blue/0 to-transparent group-hover:via-primary-blue/50 transition-all duration-500"></div>

               <Quote className="w-10 h-10 text-primary-blue/20 mb-8 transform group-hover:scale-110 group-hover:text-primary-blue/40 transition-all duration-500" />

               <p className="text-text-primary/90 text-lg leading-relaxed italic mb-10 font-light">
                 "{item.text}"
               </p>

               <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary-bg border border-border-subtle flex items-center justify-center text-primary-blue font-serif text-lg flex-shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-text-primary font-medium text-sm tracking-wide">{item.name}</p>
                    <p className="text-primary-blue text-xs uppercase tracking-wider font-semibold mt-1">{item.program}</p>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { q: "Is Madhyam Yog suitable for beginners?", a: "Yes, our programs are designed to accommodate all levels, including complete beginners. We provide modifications and personal attention to ensure a safe and effective practice." },
    { q: "Are the sessions online?", a: "Yes, our programs are conducted online, allowing you to access guided wellness support from the comfort of your home." },
    { q: "What is the difference between Group Yoga and One-to-One Yoga?", a: "Group Yoga offers community and consistency through live group sessions, while One-to-One Yoga provides highly personalized guidance, structured routines, and modifications designed specifically for your individual needs." },
    { q: "What is Therapeutic Yoga?", a: "Therapeutic Yoga focuses on gentle, purposeful movements designed to support mobility, flexibility, posture, and stress management." },
    { q: "What is Medical Yoga?", a: "Medical Yoga is a complementary wellness support system. It is not a replacement for medical diagnosis, treatment, or prescribed medication, but rather a holistic approach to supporting your overall wellbeing alongside professional care." },
    { q: "Is the 90-Day Program a crash diet?", a: "No. The 90-Day Program focuses on building sustainable habits through mindful nutrition, movement, and lifestyle changes, not extreme restrictions or quick fixes." },
    { q: "Do I need previous Yoga experience?", a: "No previous experience is required. Our guidance is tailored to your current capabilities and wellness goals." },
    { q: "How does the consultation process work?", a: "The consultation involves discussing your goals, current lifestyle, and any requirements you have, allowing us to recommend the most suitable wellness pathway for you." },
    { q: "Can programs be customised?", a: "Yes, One-to-One, Therapeutic, and Medical Yoga programs are highly customized to the individual." },
    { q: "How do I choose the right program?", a: "Booking a consultation is the best way to start. We will help you understand which program aligns best with your goals." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-primary-bg">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-text-primary text-center mb-16">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border-subtle bg-secondary-bg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-text-primary pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary-blue transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-text-secondary text-sm leading-relaxed border-t border-border-subtle mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-16 md:py-16 md:py-24 lg:py-32 bg-card-bg border-y border-border-subtle relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-blue/10 via-primary-bg to-primary-bg"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary mb-8 text-glow">
          Ready to Start Your Wellness Journey?
        </h2>
        <p className="text-lg text-text-secondary mb-12 leading-relaxed font-light">
          Whether you are looking for Yoga, Weight Management, Therapeutic Yoga, Detox, Meditation or Personalised Wellness Guidance — Madhyam Yog is here to guide you.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a
             href="#contact"
             className="bg-primary-blue hover:bg-accent-blue text-white px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 border border-transparent hover:border-accent-blue hover:shadow-[0_0_30px_rgba(22,139,255,0.4)] w-full sm:w-auto"
          >
             Book a Consultation
          </a>
          <a
             href="#programs"
             className="bg-transparent border border-border-subtle hover:border-primary-blue text-text-primary px-8 py-4 text-sm font-bold tracking-wider uppercase transition-colors w-full sm:w-auto"
          >
             Join Madhyam Yog
          </a>
        </div>

        <p className="font-serif italic text-text-secondary text-xl border-t border-border-subtle pt-12 inline-block">
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
    <section id="contact" className="py-24 bg-card-bg border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">Get in Touch</h2>
            <p className="text-text-secondary text-lg mb-12">
              Take the first step towards a healthier you. Fill out the form below to enquire about a program or book a consultation.
            </p>
            
            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-bg border border-border-subtle flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-blue text-xl font-serif">M</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium mb-1">Madhyam Yog</h4>
                    <p className="text-text-secondary text-sm mb-2">Online Wellness Platform</p>
                    <p className="text-text-primary font-medium">+91 93526 39390</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-primary-bg border border-border-subtle p-8 md:p-10 relative overflow-hidden">
             {formStatus === 'success' ? (
                <div className="absolute inset-0 bg-primary-bg flex flex-col items-center justify-center z-10 text-center p-8">
                   <div className="w-16 h-16 rounded-full bg-primary-blue/20 flex items-center justify-center mb-6">
                      <ChevronDown className="w-8 h-8 text-primary-blue" />
                   </div>
                   <h3 className="text-2xl font-serif text-text-primary mb-2">Message Prepared</h3>
                   <p className="text-text-secondary">Your WhatsApp should open automatically. Thank you for reaching out.</p>
                   <button onClick={() => setFormStatus('idle')} className="mt-8 text-primary-blue text-sm uppercase tracking-wider font-semibold">Send Another</button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Full Name</label>
                      <input name="name" required type="text" className="w-full bg-transparent border-b border-border-subtle focus:border-primary-blue px-0 py-3 text-text-primary outline-none transition-colors" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Phone Number</label>
                      <input name="phone" required type="tel" className="w-full bg-transparent border-b border-border-subtle focus:border-primary-blue px-0 py-3 text-text-primary outline-none transition-colors" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Address</label>
                    <input name="address" required type="text" className="w-full bg-transparent border-b border-border-subtle focus:border-primary-blue px-0 py-3 text-text-primary outline-none transition-colors" placeholder="Your full address" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">What are you interested in?</label>
                    <select name="interest" required defaultValue="" className="w-full bg-transparent border-b border-border-subtle focus:border-primary-blue px-0 py-3 text-text-primary outline-none transition-colors appearance-none">
                      <option value="" disabled className="bg-primary-bg">Select a program</option>
                      <option value="Group Yoga" className="bg-primary-bg">Group Yoga</option>
                      <option value="One-to-One Yoga" className="bg-primary-bg">One-to-One Yoga</option>
                      <option value="Therapeutic Yoga" className="bg-primary-bg">Therapeutic Yoga</option>
                      <option value="Medical Yoga" className="bg-primary-bg">Medical Yoga</option>
                      <option value="Weight Management" className="bg-primary-bg">Weight Management</option>
                      <option value="90-Day Program" className="bg-primary-bg">90-Day Program</option>
                      <option value="Detox" className="bg-primary-bg">Detox</option>
                      <option value="Liver Detox" className="bg-primary-bg">Liver Detox</option>
                      <option value="Meditation" className="bg-primary-bg">Meditation</option>
                      <option value="Face Yoga" className="bg-primary-bg">Face Yoga</option>
                      <option value="General Consultation" className="bg-primary-bg">General Consultation</option>
                      <option value="Premium Membership" className="bg-primary-bg">Premium Membership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Message</label>
                    <textarea name="message" rows={4} className="w-full bg-transparent border-b border-border-subtle focus:border-primary-blue px-0 py-3 text-text-primary outline-none transition-colors resize-none" placeholder="Tell us a little about your goals..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-primary-blue hover:bg-accent-blue text-white px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all mt-4 disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? 'Preparing WhatsApp...' : 'Send Enquiry via WhatsApp'}
                  </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
