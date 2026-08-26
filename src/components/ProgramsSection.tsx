import { motion } from 'motion/react';
import { ReadMore } from './ReadMore';
import { MobileExpandable } from './MobileExpandable';
import { ArrowRight, Activity, Users, User, ShieldPlus, Heart, Scale, Flame, RefreshCcw, BrainCircuit, Smile } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "Group Yoga Classes",
    subtitle: "Practice Together. Grow Together.",
    desc: "Live group Yoga sessions designed for regular guidance, consistency and community. Receive a daily Zoom meeting link after joining. Connect with us on Zoom for live, interactive online yoga sessions. We teach and guide you live via Zoom to ensure personalized attention.",
    includes: ["Yoga Asanas", "Pranayama", "Mobility", "Flexibility", "Relaxation", "Breath Awareness", "Meditation", "Lifestyle Guidance"],
    cta: "Join a Group Class",
    icon: Users
  },
  {
    id: 2,
    title: "One-to-One Yoga",
    subtitle: "Personalised Yoga. Designed Around You.",
    desc: "For people who want personal guidance, structured routines, modifications and accountability. Receive a daily Zoom meeting link after joining. Connect with us on Zoom for live, interactive online yoga sessions. We teach and guide you live via Zoom to ensure personalized attention.",
    includes: [],
    cta: "Book One-to-One",
    icon: User
  },
  {
    id: 3,
    title: "Medical Yoga",
    subtitle: "Yoga With a Personalised Wellness Approach",
    desc: "Medical Yoga is complementary wellness support and does not replace medical diagnosis, treatment or prescribed medication.",
    includes: [],
    cta: "Enquire About Medical Yoga",
    icon: Activity
  },
  {
    id: 4,
    title: "Therapeutic Yoga",
    subtitle: "Gentle. Personalised. Purposeful.",
    desc: "Focus areas include Mobility, Flexibility, Posture, Strength, Body Awareness, Stress Management, and Relaxation.",
    includes: [],
    cta: "Book Therapeutic Yoga",
    icon: ShieldPlus
  },
  {
    id: 5,
    title: "Weight Management",
    subtitle: "Don't Just Lose Weight. Build a Healthier Lifestyle.",
    desc: "A sustainable lifestyle journey rather than a crash-diet service.",
    formula: "YOGA + MOVEMENT + MINDFUL NUTRITION + LIFESTYLE + ACCOUNTABILITY",
    includes: [],
    cta: "Explore Weight Management",
    icon: Scale
  },
  {
    id: 7,
    title: "Detox Programs",
    subtitle: "Reset. Nourish. Reconnect.",
    desc: "Clean eating guidance, Hydration, Yoga, Pranayama, Meditation, Mindful lifestyle practices, Digestive-supportive meal guidance, Structured routines.",
    includes: [],
    cta: "Explore Detox",
    icon: Flame
  },
  {
    id: 8,
    title: "Liver Detox",
    subtitle: "Give Your Lifestyle a Reset",
    desc: "Focus on lifestyle and dietary habits supporting overall digestive and metabolic wellbeing. This is a wellness and lifestyle-support program, not a replacement for medical treatment.",
    includes: [],
    cta: "Know More",
    icon: RefreshCcw
  },
  {
    id: 9,
    title: "Meditation",
    subtitle: "Quiet the Mind. Reconnect With Yourself.",
    desc: "Highlighting Mindfulness, Relaxation, Breath Awareness, Emotional Awareness, Mind-Body Connection, and Inner Calm.",
    includes: [],
    cta: "Start Your Meditation Journey",
    icon: BrainCircuit
  },
  {
    id: 10,
    title: "Face Yoga",
    subtitle: "Natural Movement for a Healthier-Looking Face",
    desc: "Facial muscle awareness, Relaxation, Gentle facial exercises, Facial massage techniques, and Mindful self-care.",
    includes: [],
    cta: "Explore Face Yoga",
    icon: Smile
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 lg:py-32 bg-secondary-bg">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-6">Wellness Designed Around You</h2>
          <p className="text-text-2xl">
            Different bodies, lifestyles and goals require different approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, idx) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                className="group flex flex-col bg-card-bg border border-border-subtle p-8 hover:border-primary-theme/50 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform">
                  <Icon className="w-24 h-24 text-primary-theme" />
                </div>
                
                <div className="mb-6 relative z-10">
                  <p className="text-primary-theme text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-primary-theme"></span>
                    {String(prog.id).padStart(2, '0')}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-serif text-text-primary mb-2 transition-all">{prog.title}</h3>
                  <p className="font-medium text-text-secondary uppercase tracking-wider">{prog.subtitle}</p>
                </div>
                
                <div className="flex-1 relative z-10 mb-8">
                  {prog.formula && (
                    <p className="text-xs font-semibold text-primary-theme uppercase tracking-widest mb-4 bg-primary-theme/10 p-3 border border-primary-theme/20">
                      {prog.formula}
                    </p>
                  )}
                  <div className="text-text-lg leading-relaxed mb-6"><ReadMore text={prog.desc} maxLength={80} /></div>
                  
                  {prog.includes.length > 0 && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {prog.includes.map(item => (
                        <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                           <div className="w-1 h-1 rounded-full bg-primary-theme mt-1.5 flex-shrink-0"></div>
                           {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                
                <div className="relative z-10 mt-auto">
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-primary group-hover:text-primary-theme transition-colors">
                    {prog.cta}
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProgram() {
  const steps = [
    { week: "WEEK 01", label: "BUILD" },
    { week: "WEEK 04", label: "ADAPT" },
    { week: "WEEK 08", label: "RESET" },
    { week: "WEEK 12", label: "TRANSFORM" },
  ];

  const pillars = [
    { title: "MOVE", desc: "Yoga & movement practices" },
    { title: "NOURISH", desc: "Practical balanced nutrition guidance" },
    { title: "RESET", desc: "Better lifestyle habits" },
    { title: "MIND", desc: "Stress management, mindfulness & meditation" },
    { title: "TRACK", desc: "Progress & accountability" }
  ];

  const handleEnquireClick = () => {
    const select = document.querySelector('select[name="interest"]') as HTMLSelectElement | null;
    if (select) {
      select.value = "90-Day Program";
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = "#contact";
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary-bg relative border-y border-border-subtle overflow-hidden">
      <div className="absolute inset-0 theme-glow-bg opacity-20"></div>
      
      <div className="w-full px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-primary-theme/30 bg-primary-theme/5 px-4 py-1.5 mb-6">
               <p className="text-primary-theme text-xs uppercase tracking-widest font-semibold">Hero Program • Not a crash diet</p>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-4 leading-tight">
              90 DAYS.<br />ONE HEALTHIER YOU.
            </h2>
            <p className="text-2xl text-text-secondary mb-8 md:mb-12">90 Days to Build Better Habits</p>
            
            <div className="space-y-6 mb-10 md:mb-12">
               {pillars.map((pillar) => (
                 <div key={pillar.title} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="w-full sm:w-24 flex-shrink-0">
                      <span className="text-sm font-bold text-text-primary tracking-wider uppercase">{pillar.title}</span>
                    </div>
                    <div className="hidden sm:block flex-1 h-px bg-border-subtle"></div>
                    <div className="flex-1">
                      <span className="text-sm text-text-secondary">{pillar.desc}</span>
                    </div>
                 </div>
               ))}
            </div>

            <button
              onClick={handleEnquireClick}
              className="bg-primary-theme hover:bg-accent-theme text-white px-8 py-4 font-medium tracking-wider uppercase transition-all duration-300 w-full sm:w-auto text-center"
            >
              Start Your 90-Day Journey
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-6 sm:p-8 border border-border-subtle bg-card-bg/80 backdrop-blur">
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-serif text-text-primary mb-8 sm:mb-12 text-center">Your Transformation Timeline</h3>
              
              <div className="relative">
                <div className="absolute left-[59px] sm:left-[107px] top-4 bottom-4 w-px bg-border-subtle"></div>
                <div className="space-y-6">
                  {steps.map((step, idx) => (
                    <motion.div 
                      key={step.week}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2, duration: 0.5 }}
                      className="relative flex items-center gap-4 sm:gap-6"
                    >
                      <div className="w-[45px] sm:w-[80px] text-right flex-shrink-0">
                         <span className="text-[10px] sm:text-xs font-semibold text-text-secondary tracking-widest">{step.week}</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary-theme shadow-[0_0_10px_rgba(42,77,58,0.8)] relative z-10 flex-shrink-0"></div>
                      <div className="bg-primary-bg border border-border-subtle px-4 sm:px-6 py-3 sm:py-4 flex-1 group hover:border-primary-theme/50 transition-colors">
                        <span className="text-lg font-serif text-text-primary tracking-wider group-hover:text-primary-theme transition-colors">{step.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
