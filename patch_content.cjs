const fs = require('fs');

const code = `import { motion } from 'motion/react';
import { PlayCircle, FileText, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const contentItems = [
  {
    type: "Video",
    icon: PlayCircle,
    title: "Morning Flow Basics",
    desc: "A 15-minute gentle start to your day.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800"
  },
  {
    type: "Article",
    icon: FileText,
    title: "Understanding Prana",
    desc: "The science and tradition of breath control.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800"
  },
  {
    type: "Audio",
    icon: Headphones,
    title: "Guided Yoga Nidra",
    desc: "Deep relaxation for better sleep.",
    image: "https://images.unsplash.com/photo-1588286840104-a4fa6f53443a?auto=format&fit=crop&q=80&w=800"
  }
];

export function ContentSection() {
  return (
    <section id="content" className="py-24 bg-primary-bg relative border-t border-border-subtle overflow-hidden">
      <div className="w-full px-6 lg:px-8 relative z-10 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-theme text-xl uppercase tracking-widest font-semibold mb-4">Library</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-8">Explore Our Content</h2>
          <p className="text-xl lg:text-2xl max-w-2xl mx-auto mb-8 text-text-secondary">
            Access our full library of videos, audio guides, and articles designed to support your daily practice.
          </p>
          <Link 
            to="/content" 
            className="inline-flex items-center gap-2 bg-primary-theme hover:bg-accent-theme text-white px-8 py-4 font-medium tracking-wider uppercase transition-all duration-300 rounded-lg shadow-md hover:shadow-lg"
          >
            View Full Library <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {contentItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group border border-border-subtle bg-card-bg flex flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary-theme transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary-bg/90 backdrop-blur text-primary-theme px-3 py-1.5 rounded-full flex items-center gap-2 shadow-md">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">{item.type}</span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-serif text-text-primary mb-3 group-hover:text-primary-theme transition-colors">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync('src/components/ContentSection.tsx', code);
