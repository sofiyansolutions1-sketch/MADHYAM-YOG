import { motion } from 'motion/react';
import { ArrowRight, HelpCircle } from 'lucide-react';

export function PrenatalPostnatalYoga() {
  const faqs = [
    {
      question: "What does the Prenatal Yoga program include?",
      answer: "Gentle movement, breathing, and relaxation to improve posture and prepare for birth."
    },
    {
      question: "How does Postnatal Yoga help with recovery?",
      answer: "Recovery-focused movement to regain mobility, rebuild core strength, and support posture."
    },
    {
      question: "Are the sessions customized for my specific stage?",
      answer: "Yes, every session is carefully adapted to your specific stage of pregnancy or recovery."
    }
  ];

  return (
    <section className="pt-10 md:pt-16 pb-8 md:pb-12 bg-primary-bg relative overflow-hidden border-t border-border-subtle">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-theme/5 via-primary-bg to-primary-bg"></div>
      
      <div className="w-full px-6 lg:px-12 max-w-[1600px] mx-auto relative z-10">
        {/* Header - Reduced Margins */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary mb-4">
              Prenatal & Postnatal<br/>Yoga
            </h2>
            <p className="text-text-primary text-sm uppercase tracking-[0.15em] font-bold mb-4">
              A Gentle Journey Through Motherhood
            </p>
            <p className="text-text-secondary text-sm md:text-base italic leading-relaxed font-light max-w-2xl mx-auto">
              “Specially designed Yoga sessions to support women during pregnancy and postpartum with safe, gentle and mindful practices.”
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Side: Video (No offset border, clean corners) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
             <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-border-subtle bg-black">
               <div className="absolute w-[134%] h-[134%] -left-[17%] -top-[17%] pointer-events-none">
                 <iframe
                   src="https://www.youtube.com/embed/BGiWL_2jaPE?autoplay=1&mute=1&controls=0&loop=1&playlist=BGiWL_2jaPE&modestbranding=1&playsinline=1&rel=0"
                   className="w-full h-full border-0 pointer-events-none"
                   allow="autoplay; encrypted-media; fullscreen"
                   title="Prenatal & Postnatal Yoga"
                 />
               </div>
             </div>
          </motion.div>

          {/* Right Side: Compact Q&A */}
          <div className="flex flex-col justify-center h-full">
            <div className="space-y-3 w-full">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
                  className="bg-primary-bg border border-border-subtle p-4 md:p-5 rounded-lg shadow-sm w-full"
                >
                  <h4 className="text-sm md:text-base font-serif text-text-primary mb-1.5 flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-text-secondary shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-text-secondary text-xs md:text-sm leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-5"
            >
              <div className="flex flex-col items-start gap-3">
                <a 
                  href="#programs" 
                  className="group flex items-center gap-2 bg-transparent border border-border-subtle hover:border-text-primary text-text-primary px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm"
                >
                  Explore Prenatal & Postnatal Yoga
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <p className="text-[10px] text-text-secondary/70 leading-snug max-w-sm pl-1">
                  * Pregnant and postpartum women should consult their healthcare professional before beginning Yoga or exercise.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
