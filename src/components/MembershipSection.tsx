import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Check, ArrowRight, Star, Video } from 'lucide-react';

export function MembershipSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnquireClick = () => {
    // Attempt to auto-select the Membership option in the contact form
    const select = document.querySelector('select[name="interest"]') as HTMLSelectElement | null;
    if (select) {
      select.value = "Premium Membership";
    }
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = "#contact";
    }
  };

  return (
    <section id="membership" className="py-16 md:py-24 lg:py-32 bg-primary-bg relative overflow-hidden border-y border-border-subtle">
      {/* Subtle Premium Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card-bg border border-primary-blue/30 relative overflow-hidden group shadow-[0_0_50px_rgba(22,139,255,0.05)]"
        >
          {/* Animated Gradient Border effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-primary-blue/10 to-primary-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary-blue/10 flex items-center justify-center mb-6">
              <Crown className="w-8 h-8 text-primary-blue" />
            </div>
            
            <p className="text-primary-blue text-sm uppercase tracking-widest font-semibold mb-3">Exclusive Access</p>
            <h2 className="text-3xl md:text-5xl font-serif text-text-primary mb-6">The Madhyam Yog Membership</h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-6 font-light">
              A complete, ongoing holistic transformation. Designed for those committed to making wellness a permanent lifestyle rather than a temporary retreat.
            </p>

            <div className="bg-primary-blue/5 border border-primary-blue/20 rounded-xl p-5 max-w-2xl mx-auto mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-primary-blue/10 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <Video className="w-5 h-5 text-primary-blue" />
              </div>
              <div>
                <h4 className="text-text-primary font-semibold text-sm mb-1 uppercase tracking-wider">Live Online Sessions</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Receive a daily Zoom meeting link after joining. Connect with us on Zoom for live, interactive online yoga sessions. We teach and guide you live via Zoom to ensure personalized attention.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 text-text-primary hover:text-primary-blue transition-colors font-medium border-b border-dashed border-text-secondary hover:border-primary-blue pb-1"
            >
              {isOpen ? 'Close Membership Details' : 'View Membership Benefits'}
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ArrowRight className={`w-4 h-4 ${isOpen ? '-rotate-90' : 'rotate-90'}`} />
              </motion.div>
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden border-t border-primary-blue/20 bg-primary-bg/50 backdrop-blur-sm"
              >
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-serif text-text-primary mb-6 flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary-blue" />
                      Membership Inclusions
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Unlimited access to all Group Yoga classes",
                        "Two exclusive One-to-One sessions per month",
                        "Personalized monthly diet & nutrition plans",
                        "Continuous WhatsApp support & wellness tracking",
                        "Priority booking for Detox & Therapeutic programs"
                      ].map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center items-start md:items-center md:border-l md:border-border-subtle md:pl-12">
                    <p className="text-text-primary text-lg mb-2 text-center w-full">Ready to commit to yourself?</p>
                    <p className="text-text-secondary text-sm mb-8 text-center w-full">Join an exclusive circle of mindful individuals.</p>
                    
                    <button
                      onClick={handleEnquireClick}
                      className="w-full md:w-auto bg-primary-blue hover:bg-accent-blue text-white px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(22,139,255,0.2)] hover:shadow-[0_0_30px_rgba(22,139,255,0.4)] flex items-center justify-center gap-2"
                    >
                      Enquire About Membership
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
