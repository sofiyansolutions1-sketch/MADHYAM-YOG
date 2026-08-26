import { motion } from 'motion/react';

export function LiverDetox() {
  const programs = [
    {
      id: 1,
      title: "8-Day Liver Detox Transformation",
      desc1: "A holistic yoga & wellness journey combining mindful practices, guided nutrition and daily support for a healthier lifestyle.",
      desc2: "Build better habits, boost your well-being and create meaningful transformation—one day at a time.",
      image: "https://iili.io/CDkTVUJ.jpg"
    },
    {
      id: 2,
      title: "8-Day Liver Detox Transformation",
      desc1: "A guided yoga, pranayama & wellness journey designed to support digestion, energy, sleep and mindful living.",
      desc2: "Small daily practices, meaningful changes—feel lighter, healthier and more balanced with Madhyamyog.",
      image: "https://iili.io/CDkFr12.jpg"
    },
    {
      id: 3,
      title: "8-Day Yoga & Wellness Transformation",
      desc1: "Detox-inspired routines, yoga, pranayama & mindful practices for a lighter, healthier you.",
      desc2: "Build better habits, feel more energized, and transform your well-being—one day at a time.",
      image: "https://iili.io/CDkq8Xa.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-card-bg relative border-t border-border-subtle">
      <div className="w-full px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-primary-theme text-xl uppercase tracking-widest font-semibold mb-4">Liver Detox</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary">Transformation Program</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-start">
          {programs.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="flex flex-col h-full space-y-6"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md border border-border-subtle aspect-[4/5] bg-black">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col flex-grow text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-serif text-text-primary mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {item.desc1}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  {item.desc2}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
