import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Phone, Sparkles, Clock, Calendar, Activity, ChevronLeft } from 'lucide-react';

const GOALS = ['Start Yoga', 'Weight Management', 'Detox/Lifestyle', 'Health & Wellness', 'Prenatal/Postnatal', 'Stress & Mind', 'Senior Wellness', 'Face Yoga'];
const AGES = ['Under 25', '25–35', '36–50', '50+'];
const EXPERIENCE = ['Complete Beginner', 'Some Experience', 'Regular Practice', 'Advanced'];
const TIMES = ['15 mins', '30 mins', '45 mins', '60 mins'];
const FREQS = ['2–3 days', '4–5 days', '6 days', 'Daily'];

const getRecommendation = (goal: string) => {
  switch(goal) {
    case 'Start Yoga': return { title: 'Foundational Yoga', desc: 'Perfect for beginners to build a safe foundation.' };
    case 'Weight Management': return { title: 'Dynamic Weight Loss', desc: 'Active flows designed to build strength and burn calories.' };
    case 'Detox/Lifestyle': return { title: 'Holistic Detox', desc: 'Cleansing practices and lifestyle guidance for renewal.' };
    case 'Health & Wellness': return { title: 'Therapeutic Wellness', desc: 'Balanced practices for physical and mental health.' };
    case 'Prenatal/Postnatal': return { title: 'Pre & Postnatal Yoga', desc: 'Safe, specialized guidance for mothers.' };
    case 'Stress & Mind': return { title: 'Mindfulness & Restorative', desc: 'Calming practices to soothe the nervous system.' };
    case 'Senior Wellness': return { title: 'Gentle Senior Wellness', desc: 'Accessible, supportive practices for aging gracefully.' };
    case 'Face Yoga': return { title: 'Facial Yoga & Glow', desc: 'Targeted exercises for facial toning and rejuvenation.' };
    default: return { title: 'Personalized Program', desc: 'A tailored approach to your unique needs.' };
  }
};

export function YogaCheckup() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ goal: '', age: '', experience: '', time: '', frequency: '' });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelect = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setTimeout(() => {
      if (step < 5) setStep(step + 1);
      else analyzeResults();
    }, 300);
  };

  const analyzeResults = () => {
    setIsAnalyzing(true);
    setStep(6);
    setTimeout(() => {
      setIsAnalyzing(false);
      setStep(7);
    }, 1500);
  };

  const handleBack = () => { if (step > 0 && step <= 5) setStep(step - 1); };
  const recommendation = getRecommendation(answers.goal);
  const phoneNumber = "+919352639390";

  return (
    <section id="free-checkup" className="py-16 md:py-24 bg-primary-theme overflow-hidden relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto px-4 lg:px-8 relative z-10">

        {/* HIGHLIGHT HEADER */}
        <div className="text-center mb-8 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 shadow-xl"
          >
            <Sparkles className="w-3 h-3 text-yellow-300" />
            Highly Recommended For You
          </motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow-sm">Not sure where to start?</h2>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-medium">Take our free 60-second assessment to unlock a personalized wellness journey designed specifically for your body and goals.</p>
        </div>

        {/* CARD W/O OVERFLOW-Y-AUTO AND W/O ASPECT-VIDEO */}
        <div className="bg-card-bg text-text-primary shadow-2xl w-full flex flex-col justify-center rounded-2xl relative min-h-[450px] lg:min-h-[500px]">
          <AnimatePresence mode="wait">

            {/* STEP 0: Intro */}
            {step === 0 && (
              <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6 sm:p-10 lg:p-16 w-full h-full flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-primary-theme/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary-theme" />
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-text-primary mb-3">Free Yoga Checkup</h2>
                <p className="text-text-secondary text-xs sm:text-sm lg:text-base mb-8 max-w-xl mx-auto leading-relaxed">
                  Answer 5 quick questions about your lifestyle and goals, and we'll curate the perfect starting point for you.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(1)}
                  className="relative bg-primary-theme hover:bg-accent-theme text-white px-8 py-4 text-xs lg:text-sm font-bold tracking-wide flex items-center gap-2 mx-auto transition-all rounded shadow-[0_0_20px_rgba(42,77,58,0.4)] overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:animate-pulse"></span>
                  TAKE FREE CHECKUP <ArrowRight className="w-4 h-4" />
                </motion.button>
                <p className="mt-4 text-[10px] text-text-secondary uppercase tracking-widest font-semibold">* 100% Free & Confidential</p>
              </motion.div>
            )}

            {/* STEPS 1-5: Questions */}
            {step > 0 && step <= 5 && (
              <motion.div key={`step-${step}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-5 sm:p-8 lg:p-12 w-full h-full flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <button onClick={handleBack} className="text-text-secondary hover:text-primary-theme transition-colors flex items-center gap-1 text-[10px] sm:text-xs font-medium">
                    <ChevronLeft className="w-3 h-3 lg:w-4 lg:h-4" /> Back
                  </button>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-primary-theme uppercase">Step {step} of 5</div>
                </div>

                <div className="w-full bg-border-subtle h-1 mb-6 lg:mb-10 rounded-full overflow-hidden">
                  <motion.div className="bg-primary-theme h-full" initial={{ width: `${((step - 1) / 5) * 100}%` }} animate={{ width: `${(step / 5) * 100}%` }} transition={{ duration: 0.3 }} />
                </div>

                {step === 1 && (
                  <>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-serif text-text-primary mb-4 lg:mb-8 text-center sm:text-left">What is your primary yoga goal?</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                      {GOALS.map(goal => (
                        <button key={goal} onClick={() => handleSelect('goal', goal)} className={`p-3 lg:p-4 text-center border rounded transition-all duration-200 ${answers.goal === goal ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}`}>
                          <span className="font-medium text-text-primary text-[10px] sm:text-xs lg:text-sm">{goal}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-serif text-text-primary mb-4 lg:mb-8 text-center sm:text-left">Which age group do you belong to?</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                      {AGES.map(age => (
                        <button key={age} onClick={() => handleSelect('age', age)} className={`p-3 lg:p-4 text-center border rounded transition-all duration-200 ${answers.age === age ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}`}>
                          <span className="font-medium text-text-primary text-xs lg:text-sm">{age}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-serif text-text-primary mb-4 lg:mb-8 text-center sm:text-left">What is your yoga experience level?</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                      {EXPERIENCE.map(exp => (
                        <button key={exp} onClick={() => handleSelect('experience', exp)} className={`p-3 lg:p-4 text-center border rounded transition-all duration-200 ${answers.experience === exp ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}`}>
                          <span className="font-medium text-text-primary text-[10px] sm:text-xs lg:text-sm">{exp}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 4 && (
                  <>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-serif text-text-primary mb-4 lg:mb-8 text-center sm:text-left">How much daily time can you commit?</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                      {TIMES.map(time => (
                        <button key={time} onClick={() => handleSelect('time', time)} className={`p-3 lg:p-4 text-center border rounded flex flex-col sm:flex-row items-center justify-center gap-1.5 lg:gap-2 transition-all duration-200 ${answers.time === time ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}`}>
                          <Clock className={`w-4 h-4 ${answers.time === time ? 'text-primary-theme' : 'text-text-secondary'}`} />
                          <span className="font-medium text-text-primary text-xs lg:text-sm">{time}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}

                {step === 5 && (
                  <>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-serif text-text-primary mb-4 lg:mb-8 text-center sm:text-left">Preferred weekly frequency?</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                      {FREQS.map(freq => (
                        <button key={freq} onClick={() => handleSelect('frequency', freq)} className={`p-3 lg:p-4 text-center border rounded flex flex-col sm:flex-row items-center justify-center gap-1.5 lg:gap-2 transition-all duration-200 ${answers.frequency === freq ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}`}>
                          <Calendar className={`w-4 h-4 ${answers.frequency === freq ? 'text-primary-theme' : 'text-text-secondary'}`} />
                          <span className="font-medium text-text-primary text-xs lg:text-sm">{freq}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* STEP 6: Analyzing */}
            {step === 6 && (
              <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-10 h-10 lg:w-16 lg:h-16 border-4 border-primary-theme/20 border-t-primary-theme rounded-full animate-spin mb-4 lg:mb-6"></div>
                <h3 className="text-xl lg:text-2xl font-serif text-text-primary mb-2">Analyzing your profile...</h3>
                <p className="text-text-secondary text-xs lg:text-sm">Curating your personalized wellness journey.</p>
              </motion.div>
            )}

            {/* STEP 7: Results */}
            {step === 7 && (
              <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 sm:p-6 lg:p-10 w-full h-full flex flex-col justify-center">

                <div className="text-center mb-4 lg:mb-8 shrink-0">
                  <span className="inline-block px-2 py-0.5 bg-primary-theme/10 text-primary-theme text-[9px] lg:text-[10px] font-bold tracking-widest uppercase mb-2 rounded">
                    Assessment Complete
                  </span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-text-primary">Your Recommended Journey</h2>
                  <p className="text-text-secondary text-[10px] lg:text-xs mt-1">Based on your goals and lifestyle, here is your blueprint.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 flex-grow">

                  {/* Left Column */}
                  <div className="flex flex-col h-full">
                    <div className="bg-primary-bg p-4 lg:p-6 border border-border-subtle relative overflow-hidden flex-grow rounded-lg flex flex-col justify-center">
                      <div className="absolute top-0 right-0 p-2 lg:p-4 opacity-5 pointer-events-none">
                         <Sparkles className="w-12 h-12 lg:w-20 lg:h-20" />
                      </div>
                      <h3 className="text-[9px] lg:text-[10px] font-semibold tracking-widest text-primary-theme uppercase mb-1">Primary Program</h3>
                      <h4 className="text-lg lg:text-2xl font-serif text-text-primary mb-2">{recommendation.title}</h4>
                      <p className="text-text-secondary text-[10px] lg:text-sm mb-4 leading-relaxed">{recommendation.desc}</p>

                      <div className="flex flex-wrap gap-2 lg:gap-4 pt-3 lg:pt-4 border-t border-border-subtle mt-auto">
                         <div className="flex items-center gap-1 text-[9px] lg:text-xs font-medium text-text-primary">
                           <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-primary-theme" /> {answers.time}
                         </div>
                         <div className="flex items-center gap-1 text-[9px] lg:text-xs font-medium text-text-primary">
                           <Calendar className="w-3 h-3 lg:w-4 lg:h-4 text-primary-theme" /> {answers.frequency}
                         </div>
                         <div className="flex items-center gap-1 text-[9px] lg:text-xs font-medium text-text-primary">
                           <Activity className="w-3 h-3 lg:w-4 lg:h-4 text-primary-theme" /> {answers.experience}
                         </div>
                      </div>
                    </div>

                    <div className="mt-3 lg:mt-4 shrink-0">
                      <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-primary-theme hover:bg-accent-theme text-white px-4 py-2.5 lg:py-3 text-[11px] lg:text-sm font-medium tracking-wide transition-colors w-full rounded shadow-sm">
                        <Phone className="w-3 h-3 lg:w-4 lg:h-4" /> CONSULT A YOGA TEACHER
                      </a>
                      <button onClick={() => setStep(0)} className="mt-2.5 lg:mt-3 text-text-secondary hover:text-primary-theme text-[10px] lg:text-xs font-medium text-center w-full transition-colors underline underline-offset-2">
                        Retake Assessment
                      </button>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col justify-center h-full">
                    <h3 className="text-sm lg:text-lg font-serif text-text-primary mb-3 lg:mb-5">Suggested Milestone Map</h3>
                    <div className="space-y-3 lg:space-y-5 flex-grow">
                      <div className="flex gap-3 lg:gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary-theme text-white flex items-center justify-center text-[9px] lg:text-xs font-bold shadow-sm">30</div>
                          <div className="w-px h-full bg-border-subtle my-0.5 lg:my-1"></div>
                        </div>
                        <div className="pb-1 lg:pb-2">
                          <h4 className="font-bold text-text-primary text-[11px] lg:text-sm mb-0.5">30 Days: Foundation</h4>
                          <p className="text-text-secondary text-[9px] lg:text-xs leading-relaxed">Establish consistency, learn proper alignment, and feel energy shifts.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 lg:gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary-theme text-white flex items-center justify-center text-[9px] lg:text-xs font-bold shadow-sm">60</div>
                          <div className="w-px h-full bg-border-subtle my-0.5 lg:my-1"></div>
                        </div>
                        <div className="pb-1 lg:pb-2">
                          <h4 className="font-bold text-text-primary text-[11px] lg:text-sm mb-0.5">60 Days: Strength & Depth</h4>
                          <p className="text-text-secondary text-[9px] lg:text-xs leading-relaxed">Noticeable improvements in flexibility and progression toward goals.</p>
                        </div>
                      </div>
                      <div className="flex gap-3 lg:gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-primary-theme text-white flex items-center justify-center text-[9px] lg:text-xs font-bold shadow-sm">90</div>
                        </div>
                        <div>
                          <h4 className="font-bold text-text-primary text-[11px] lg:text-sm mb-0.5">90 Days: Transformation</h4>
                          <p className="text-text-secondary text-[9px] lg:text-xs leading-relaxed">Yoga becomes a natural lifestyle habit with lasting wellness benefits.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 lg:mt-4 p-2.5 lg:p-3 bg-secondary-bg/50 border border-border-subtle rounded shrink-0">
                      <p className="text-[8px] lg:text-[10px] text-text-secondary text-center leading-relaxed">
                        *This provides advisory wellness suggestions, not medical diagnoses. Consult a doctor for specific health concerns.
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
