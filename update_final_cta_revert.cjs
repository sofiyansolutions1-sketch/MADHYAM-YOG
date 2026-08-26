const fs = require('fs');
let content = fs.readFileSync('src/components/ClosingSection.tsx', 'utf8');

const regex = /export function FinalCTA\(\) \{[\s\S]*?Your Health Journey Starts With One Decision\.[\s\S]*?<\/section>\s*\);\s*\}/m;

const oldCTA = `export function FinalCTA() {
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
}`;

content = content.replace(regex, oldCTA);
fs.writeFileSync('src/components/ClosingSection.tsx', content);
