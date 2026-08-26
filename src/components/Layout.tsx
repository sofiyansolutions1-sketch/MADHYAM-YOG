import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { Link } from 'react-router-dom';

const logoBrand = "https://iili.io/CDYbKa2.png";

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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Wellness', href: '/#programs' },
    { name: 'Membership', href: '/#membership' },
    { name: 'Content', href: '/#glimpses' },
    { name: 'About Shilpa', href: '/#founder' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-8 flex items-center justify-between">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 md:gap-4 group">
              <img 
                src={logoBrand} 
                alt="Madhyam Yog Logo" 
                className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-wider text-text-primary">
                  MADHYAM YOG
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-text-secondary mt-0.5 hidden sm:block">
                  Holistic Yoga & Wellness
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.href.includes('#') ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium text-text-secondary hover:text-primary-theme transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="font-medium text-text-secondary hover:text-primary-theme transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-primary-theme hover:bg-accent-theme text-white font-medium px-6 py-3 rounded-none transition-colors duration-300 border border-transparent hover:border-accent-theme hover:shadow-[0_0_20px_rgba(42,77,58,0.3)]"
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
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                  <img 
                    src={logoBrand} 
                    alt="Madhyam Yog Logo" 
                    className="h-10 w-auto object-contain"
                  />
                  <span className="font-serif text-xl tracking-wider text-text-primary">
                    MADHYAM YOG
                  </span>
                </Link>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-text-primary">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col space-y-6">
              {navLinks.map((link) => 
                link.href.includes('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl lg:text-4xl font-serif text-text-primary hover:text-primary-theme transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl lg:text-4xl font-serif text-text-primary hover:text-primary-theme transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
            <div className="p-6 border-t border-border-subtle bg-secondary-bg">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full block text-center bg-primary-theme hover:bg-accent-theme text-white font-medium px-6 py-4 transition-colors"
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
            className="w-full block text-center bg-primary-theme text-white font-medium px-6 py-3 transition-colors"
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
        className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-card-bg border border-border-subtle flex items-center justify-center text-text-primary hover:text-primary-theme hover:border-primary-theme transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(42,77,58,0.3)]"
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
      <div className="w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12 lg:mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={logoBrand} 
                alt="Madhyam Yog Logo" 
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl tracking-wider text-text-primary mb-1">
                  MADHYAM YOG
                </h3>
                <p className="text-primary-theme uppercase tracking-widest text-[10px] font-semibold">
                  Yoga • Wellness • Transformation
                </p>
              </div>
            </div>
            <p className="text-text-primary font-medium mb-1">Shilpa Goyal</p>
            <p className="text-text-lg mb-6">Health & Wellness Coach | Yoga Teacher</p>
            <p className="text-text-lg leading-relaxed max-w-sm mb-6">
              Helping you build a healthier relationship with your Body • Breath • Food • Mind & Lifestyle
            </p>
            <a href="tel:+919352639390" className="text-text-sm flex items-center gap-2 mb-4 hover:text-primary-theme transition-colors w-fit">
              <Phone className="w-4 h-4" />
              +91 93526 39390
            </a>
            <a href="https://www.instagram.com/madhyam_yog/" target="_blank" rel="noopener noreferrer" className="text-text-sm flex items-center gap-2 hover:text-primary-theme transition-colors w-fit group">
              <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              @madhyam_yog
            </a>
          </div>

          <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
            <h4 className="text-text-sm">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Programs', 'Membership', 'Yoga', 'Wellness', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-text-sm">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms & Conditions', 'Disclaimer'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 mt-12">
          <div className="flex items-center justify-between">
            <p className="text-text-xs text-text-secondary pr-20 lg:pr-0">
              © {new Date().getFullYear()} Madhyam Yog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
