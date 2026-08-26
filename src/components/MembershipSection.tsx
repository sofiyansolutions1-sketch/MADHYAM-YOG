import { motion } from 'motion/react';
import { Crown, Check, ArrowRight, Video } from 'lucide-react';

export function MembershipSection() {
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
    <section id="membership" className="bg-primary-theme text-white border-y border-primary-theme/90">
      <div className="flex flex-col lg:flex-row w-full min-h-[700px]">
        {/* Image Half */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <div className="absolute inset-0 bg-primary-theme/20 z-10 mix-blend-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1593164842264-854604db2260?auto=format&fit=crop&q=80&w=1200" 
            alt="Membership Wellness" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Content Half */}
        <div className="w-full lg:w-1/2 flex items-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          
          <div className="relative z-10 w-full max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/20 shadow-lg">
                <Crown className="w-8 h-8 text-[#EAE5D9]" />
              </div>
              
              <p className="text-[#EAE5D9] text-xl uppercase tracking-widest font-semibold mb-3">Exclusive Access</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 text-white leading-tight">The Madhyam Yog Membership</h2>
              <p className="text-white/80 text-lg mb-10 font-light leading-relaxed">
                A complete, ongoing holistic transformation. Designed for those committed to making wellness a permanent lifestyle rather than a temporary retreat.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-10 flex flex-col sm:flex-row items-start gap-5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Video className="w-5 h-5 text-[#EAE5D9]" />
                </div>
                <div>
                  <h4 className="text-sm mb-2 uppercase tracking-wider">Live Online Sessions</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Receive a daily Zoom meeting link after joining. Connect with us on Zoom for live, interactive online yoga sessions. We teach and guide you live via Zoom to ensure personalized attention.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
                {[
                  "Unlimited Group Yoga classes",
                  "1-on-1 Sessions per month",
                  "Diet & Nutrition plans",
                  "Continuous WhatsApp support",
                  "Priority booking for Detox"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#EAE5D9] flex-shrink-0" />
                    <span className="text-white/90 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleEnquireClick}
                className="w-full sm:w-auto bg-[#EAE5D9] hover:bg-white text-primary-theme px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Inquire About Membership
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
