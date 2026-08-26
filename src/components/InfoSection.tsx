import { motion } from 'motion/react';
import { MobileExpandable } from './MobileExpandable';
import { Target, Lightbulb, Link, Briefcase, BookOpen, Layers, Laptop, ShieldCheck } from 'lucide-react';

export function WhyChoose() {
  const features = [
    {
      title: "Personal Attention",
      desc: "We focus on the individual rather than a one-size-fits-all approach.",
      icon: Target
    },
    {
      title: "Holistic Approach",
      desc: "Yoga, nutrition, lifestyle, breath and mindfulness work together.",
      icon: Layers
    },
    {
      title: "Structured Programs",
      desc: "Clear journeys with guidance, consistency and accountability.",
      icon: Briefcase
    },
    {
      title: "Practical Wellness",
      desc: "Create habits that fit into real life.",
      icon: Lightbulb
    },
    {
      title: "Education & Empowerment",
      desc: "Understand your body and lifestyle instead of simply following instructions.",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary-bg">
      <div className="w-full px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary">More Than a Yoga Class</h2>
        </div>
        <MobileExpandable collapsedHeight="250px" gradientFrom="from-primary-bg">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
            
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-card-bg p-8 border border-border-subtle hover:border-primary-theme transition-all duration-300 rounded-xl flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-primary-theme/5 flex items-center justify-center mb-6 hover:bg-primary-theme/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary-theme" />
                </div>
                <h3 className="text-xl font-serif text-text-primary mb-3 tracking-wide">{feat.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feat.desc}</p>
              </motion.div>
            );
          })}
        
          </div>
        </MobileExpandable>
      </div>
    </section>
  );
}

export function WhoIsItFor() {
  const points = [
    {
      title: "Beginners to Advanced",
      desc: "Programs adapted to your comfort level.",
      icon: ShieldCheck
    },
    {
      title: "Online Sessions",
      desc: "Practice safely from your own home.",
      icon: Laptop
    },
    {
      title: "Community & Support",
      desc: "Connect with like-minded individuals.",
      icon: Link
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary-bg border-t border-border-subtle">
      <div className="w-full px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary">Who Is It For?</h2>
        </div>
        <MobileExpandable collapsedHeight="180px" gradientFrom="from-secondary-bg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="text-center p-8 bg-card-bg rounded-xl border border-border-subtle"
              >
                <div className="mx-auto w-16 h-16 bg-primary-theme/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-theme" />
                </div>
                <h3 className="text-xl font-serif text-text-primary mb-3">{pt.title}</h3>
                <p className="text-text-secondary">{pt.desc}</p>
              </motion.div>
            );
          })}
        
          </div>
        </MobileExpandable>
      </div>
    </section>
  );
}
