const fs = require('fs');
let content = fs.readFileSync('src/components/ClosingSection.tsx', 'utf8');

const regex = /export function FinalCTA\(\) \{[\s\S]*?Your body is your first home\. Take care of it\.\s*<\/p>\s*<\/div>\s*<\/section>\s*\);\s*\}/m;

const newCTA = `export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-card-bg border-y border-border-subtle relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-theme/10 via-primary-bg to-primary-bg pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary mb-8 leading-tight">
          Your Health Journey Starts With One Decision.
        </h2>
        <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed font-serif italic max-w-2xl mx-auto">
          You don't have to change everything today.<br />
          Start with one conscious step.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-primary-theme/80 font-medium tracking-widest uppercase text-xs md:text-sm mb-12">
          <span>Yoga</span>
          <span className="hidden sm:inline text-[8px]">•</span>
          <span>Movement</span>
          <span className="hidden sm:inline text-[8px]">•</span>
          <span>Nourishment</span>
          <span className="hidden sm:inline text-[8px]">•</span>
          <span>Mindfulness</span>
          <span className="hidden sm:inline text-[8px]">•</span>
          <span>Consistency</span>
        </div>

        <p className="text-lg md:text-xl text-text-primary font-medium mb-10">
          Let Madhyam Yog guide you.
        </p>
        
        <div className="flex justify-center mb-16">
          <a 
            href="#contact" 
            className="inline-block bg-primary-theme hover:bg-accent-theme text-white px-8 py-4 font-medium tracking-wider uppercase transition-all duration-300 rounded-lg hover:shadow-[0_0_30px_rgba(42,77,58,0.4)] w-full sm:w-auto"
          >
             BOOK A CONSULTATION
          </a>
        </div>
      </div>
    </section>
  );
}`;

content = content.replace(regex, newCTA);
fs.writeFileSync('src/components/ClosingSection.tsx', content);
