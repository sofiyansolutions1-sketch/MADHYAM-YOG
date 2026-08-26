const fs = require('fs');
let content = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');

const regex = /<p className="text-primary-theme text-sm font-semibold tracking-\[0\.2em\] uppercase mb-4 lg:mb-6 flex items-center gap-4">[\s\S]*?<\/div>\s*<\/motion\.div>/m;

const oldHero = `<p className="text-primary-theme text-sm font-semibold tracking-[0.2em] uppercase mb-4 lg:mb-6 flex items-center gap-4">
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
          </motion.div>`;

content = content.replace(regex, oldHero);
fs.writeFileSync('src/components/HeroSection.tsx', content);
