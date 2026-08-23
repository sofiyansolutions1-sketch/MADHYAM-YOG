import { motion } from 'motion/react';
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary">More Than a Yoga Class</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {features.slice(0, 3).map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group border border-border-subtle p-8 hover:bg-secondary-bg transition-colors"
              >
                <Icon className="w-8 h-8 text-primary-blue mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="text-xl font-serif text-text-primary mb-3">{feat.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            )
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto mt-6">
           {features.slice(3, 5).map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx + 3) * 0.1, duration: 0.5 }}
                className="group border border-border-subtle p-8 hover:bg-secondary-bg transition-colors"
              >
                <Icon className="w-8 h-8 text-primary-blue mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <h3 className="text-xl font-serif text-text-primary mb-3">{feat.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export function WhoIsItFor() {
  const personas = [
    { title: "Beginners", desc: "Start your Yoga journey." },
    { title: "Busy Professionals", desc: "Build sustainable wellness habits." },
    { title: "Weight Management Seekers", desc: "Develop healthier lifestyle habits." },
    { title: "Mobility Seekers", desc: "Improve flexibility, movement and body awareness." },
    { title: "Stress & Mindfulness Seekers", desc: "Develop relaxation and mindfulness practices." },
    { title: "Personal Guidance Seekers", desc: "Receive customised Yoga and wellness support." }
  ];

  return (
    <section className="py-24 bg-card-bg border-y border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div>
             <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-4">Is Madhyam Yog Right For You?</h2>
          </div>
          <a
             href="#programs"
             className="bg-primary-blue hover:bg-accent-blue text-white px-6 py-3 text-sm font-medium tracking-wider uppercase transition-colors"
          >
             Find Your Program
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {personas.map((persona, idx) => (
            <motion.div
              key={persona.title}
              initial={{ opacity: 0, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full border border-primary-blue flex items-center justify-center flex-shrink-0 mt-1 bg-primary-blue/10">
                <ShieldCheck className="w-4 h-4 text-primary-blue" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-text-primary mb-2">{persona.title}</h3>
                <p className="text-text-secondary text-sm">{persona.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OnlineExperience() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6">Wellness That Fits Into Your Life</h2>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed">
              Access guided wellness support from wherever you are. Our online platform brings premium Yoga and personalized coaching directly to your home. Receive a daily Zoom meeting link after joining. Connect with us on Zoom for live, interactive online yoga sessions. We teach and guide you live via Zoom to ensure personalized attention.
            </p>
            
            <div className="space-y-4 mb-10">
              {['Online guided sessions', 'Personalised guidance', 'Structured programs', 'Regular accountability', 'Flexible participation', 'Digital wellness journey'].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue"></div>
                  <span className="text-text-primary">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="bg-transparent border border-border-subtle hover:border-primary-blue text-text-primary px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all inline-block"
            >
              Start Online
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-primary-blue/5 border border-border-subtle p-4">
              <img 
                src="https://images.unsplash.com/photo-1593164842264-854604db2260?auto=format&fit=crop&q=80" 
                alt="Online Yoga Experience"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Abstract laptop/phone framing elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-64 border border-primary-blue/30 bg-primary-bg p-2 shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80" 
                alt="Mobile Yoga Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { num: "01", title: "Connect", desc: "Book a consultation or enquire about a program." },
    { num: "02", title: "Understand", desc: "Discuss your goals, lifestyle and requirements." },
    { num: "03", title: "Personalise", desc: "Choose a suitable Yoga or wellness pathway." },
    { num: "04", title: "Transform", desc: "Build sustainable habits with guidance and consistency." }
  ];

  return (
    <section className="py-24 bg-secondary-bg border-y border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-text-primary text-center mb-20">How It Works</h2>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-border-subtle">
             <motion.div 
               className="absolute inset-0 bg-primary-blue origin-left"
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
             ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.3, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary-bg border border-primary-blue text-primary-blue flex items-center justify-center font-serif text-lg mb-6 relative">
                  {step.num}
                  <div className="absolute inset-0 rounded-full bg-primary-blue/20 blur-md"></div>
                </div>
                <h3 className="text-xl font-serif text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
