import { motion } from 'motion/react';

export function StudentResult() {
  const transformations = [
    {
      id: 1,
      title: "Real Change. Healthier Habits. A Better You.",
      desc1: "A transformation is not just about changing your weight — it’s about changing the way you move, eat, think and care for your body.",
      desc2: "With Madhyam Yog’s holistic approach, Yoga, mindful nutrition, movement, mindfulness and lifestyle habits come together to help you build sustainable, healthier routines.",
      footer: "Small Changes. Consistent Practice. Meaningful Transformation.",
      image: "https://iili.io/CDe3T0P.jpg"
    },
    {
      id: 2,
      title: "From Change to Confidence.",
      desc1: "A healthier lifestyle is not just about how you look — it’s about how you feel, move and connect with yourself.",
      desc2: "Through mindful movement, Yoga, healthier habits and consistent guidance, Madhyam Yog supports meaningful transformation that goes beyond the weighing scale.",
      footer: "Small Steps. Consistent Habits. A Healthier You.",
      image: "https://iili.io/CDe21Se.jpg"
    },
    {
      id: 3,
      title: "From Consistency to Confidence.",
      desc1: "A journey shaped by mindful movement, Yoga, healthier lifestyle habits and consistent effort.",
      desc2: "This transformation reflects Madhyam Yog’s holistic approach to weight management — focusing not just on the number on the scale, but on building healthier habits that can last.",
      footer: "13 KG Down. Healthier Habits. A Stronger Journey.",
      image: "https://iili.io/CDe34ku.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-primary-bg relative border-t border-border-subtle">
      <div className="w-full px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-primary-theme text-xl uppercase tracking-widest font-semibold mb-4">Transformation</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary">Real Results</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-start">
          {transformations.map((item, idx) => (
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
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl lg:text-3xl font-serif text-text-primary mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {item.desc1}
                </p>
                <p className="text-text-secondary leading-relaxed mb-8">
                  {item.desc2}
                </p>
                <div className="mt-auto pt-4 border-t border-border-subtle">
                  <p className="text-sm uppercase tracking-widest font-bold text-primary-theme leading-relaxed">
                    {item.footer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
