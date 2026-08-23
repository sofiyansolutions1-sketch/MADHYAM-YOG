import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Membership', href: '#membership' },
    { name: 'Yoga', href: '#programs' },
    { name: 'Wellness', href: '#programs' },
    { name: 'About Shilpa', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <div className="flex flex-col">
            <a href="#" className="font-serif text-2xl tracking-wider text-text-primary">
              MADHYAM YOG
            </a>
            <span className="text-[10px] uppercase tracking-widest text-text-secondary mt-1">
              Holistic Yoga & Wellness
            </span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-primary-blue transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-primary-blue hover:bg-accent-blue text-white text-sm font-medium px-6 py-3 rounded-none transition-colors duration-300 border border-transparent hover:border-accent-blue hover:shadow-[0_0_20px_rgba(22,139,255,0.3)]"
            >
              BOOK A CONSULTATION
            </a>
          </div>

          <button
            className="lg:hidden text-text-primary"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-primary-bg flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border-subtle">
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wider text-text-primary">MADHYAM YOG</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-text-primary">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-text-primary hover:text-primary-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="p-6 border-t border-border-subtle bg-secondary-bg">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center bg-primary-blue hover:bg-accent-blue text-white font-medium px-6 py-4 transition-colors"
              >
                BOOK A CONSULTATION
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA - Shown only when not at the very top and menu is closed */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-primary-bg/90 backdrop-blur border-t border-border-subtle">
         <a
            href="#contact"
            className="w-full block text-center bg-primary-blue text-white text-sm font-medium px-6 py-3 transition-colors"
          >
            Book Consultation
          </a>
      </div>
    </>
  );
}

export function FloatingContact() {
  const phoneNumber = "919352639390";
  const displayPhone = "+91 93526 39390";
  
  return (
    <div className="fixed bottom-24 lg:bottom-8 right-6 z-50 flex flex-col gap-4">
      <a 
        href={`tel:${displayPhone.replace(/\s/g, '')}`} 
        className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-card-bg border border-border-subtle flex items-center justify-center text-text-primary hover:text-primary-blue hover:border-primary-blue transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(22,139,255,0.3)]"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>
      <a 
        href={`https://wa.me/${phoneNumber}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-bg border-t border-border-subtle pt-16 pb-32 lg:pt-20 lg:pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12 lg:mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <h3 className="font-serif text-3xl tracking-wider text-text-primary mb-2">
              MADHYAM YOG
            </h3>
            <p className="text-primary-blue uppercase tracking-widest text-xs mb-6 font-semibold">
              Yoga • Wellness • Transformation
            </p>
            <p className="text-text-primary font-medium mb-1">Shilpa Goyal</p>
            <p className="text-text-secondary text-sm mb-6">Health & Wellness Coach | Yoga Teacher</p>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
              Helping you build a healthier relationship with your Body • Breath • Food • Mind & Lifestyle
            </p>
            <a href="tel:+919352639390" className="text-text-primary hover:text-primary-blue transition-colors font-medium text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 93526 39390
            </a>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-text-primary font-medium mb-6 uppercase tracking-wider text-sm">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Programs', 'Membership', 'Yoga', 'Wellness', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-text-secondary hover:text-primary-blue text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-text-primary font-medium mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-text-secondary hover:text-primary-blue text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8">
          <p className="text-text-secondary text-xs leading-relaxed max-w-4xl pr-20 lg:pr-0">
            <strong className="text-text-primary font-medium">Disclaimer:</strong> Madhyam Yog provides Yoga, wellness, lifestyle and nutrition guidance for educational and supportive purposes. These services are not a substitute for medical diagnosis or treatment. Individuals with medical conditions should consult their qualified healthcare professional before starting a new wellness or exercise program.
          </p>
          <div className="mt-8 flex items-center justify-between">
            <p className="text-text-secondary text-xs pr-20 lg:pr-0">
              © {new Date().getFullYear()} Madhyam Yog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
