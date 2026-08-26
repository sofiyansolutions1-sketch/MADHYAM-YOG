const fs = require('fs');

const code = `import { useState } from 'react';
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
    <section className="py-8 md:py-16 bg-secondary-bg overflow-hidden relative flex items-center justify-center min-h-[calc(100vh-100px)] lg:min-h-0">
      <div className="absolute inset-0 theme-glow-bg opacity-30"></div>
      
      <div className="w-full max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="bg-card-bg border border-border-subtle shadow-xl overflow-hidden w-full lg:aspect-video flex flex-col justify-center rounded-xl relative min-h-[450px] lg:min-h-0">
          <AnimatePresence mode="wait">
            
            {/* STEP 0: Intro */}
            {step === 0 && (
              <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6 sm:p-10 lg:p-16 w-full h-full flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-primary-theme/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-primary-theme" />
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-text-primary mb-3">Free Yoga Checkup</h2>
                <p className="text-text-secondary text-xs sm:text-sm lg:text-base mb-6 max-w-xl mx-auto leading-relaxed">
                  Take our quick 60-second assessment to discover the ideal wellness journey tailored to your body, goals, and schedule.
                </p>
                <button onClick={() => setStep(1)} className="bg-primary-theme hover:bg-accent-theme text-white px-6 py-3 text-xs lg:text-sm font-medium tracking-wide flex items-center gap-2 mx-auto transition-colors rounded">
                  START ASSESSMENT <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* STEPS 1-5: Questions */}
            {step > 0 && step <= 5 && (
              <motion.div key={\`step-\${step}\`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-5 sm:p-8 lg:p-12 w-full h-full flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <button onClick={handleBack} className="text-text-secondary hover:text-primary-theme transition-colors flex items-center gap-1 text-[10px] sm:text-xs font-medium">
                    <ChevronLeft className="w-3 h-3 lg:w-4 lg:h-4" /> Back
                  </button>
                  <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-primary-theme uppercase">Step {step} of 5</div>
                </div>

                <div className="w-full bg-border-subtle h-1 mb-6 lg:mb-10 rounded-full overflow-hidden">
                  <motion.div className="bg-primary-theme h-full" initial={{ width: \`\${((step - 1) / 5) * 100}%\` }} animate={{ width: \`\${(step / 5) * 100}%\` }} transition={{ duration: 0.3 }} />
                </div>

                {step === 1 && (
                  <>
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-serif text-text-primary mb-4 lg:mb-8 text-center sm:text-left">What is your primary yoga goal?</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                      {GOALS.map(goal => (
                        <button key={goal} onClick={() => handleSelect('goal', goal)} className={\`p-3 lg:p-4 text-center border rounded transition-all duration-200 \${answers.goal === goal ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}\`}>
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
                        <button key={age} onClick={() => handleSelect('age', age)} className={\`p-3 lg:p-4 text-center border rounded transition-all duration-200 \${answers.age === age ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}\`}>
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
                        <button key={exp} onClick={() => handleSelect('experience', exp)} className={\`p-3 lg:p-4 text-center border rounded transition-all duration-200 \${answers.experience === exp ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}\`}>
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
                        <button key={time} onClick={() => handleSelect('time', time)} className={\`p-3 lg:p-4 text-center border rounded flex flex-col sm:flex-row items-center justify-center gap-1.5 lg:gap-2 transition-all duration-200 \${answers.time === time ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}\`}>
                          <Clock className={\`w-4 h-4 \${answers.time === time ? 'text-primary-theme' : 'text-text-secondary'}\`} />
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
                        <button key={freq} onClick={() => handleSelect('frequency', freq)} className={\`p-3 lg:p-4 text-center border rounded flex flex-col sm:flex-row items-center justify-center gap-1.5 lg:gap-2 transition-all duration-200 \${answers.frequency === freq ? 'border-primary-theme bg-primary-theme/5 shadow-sm' : 'border-border-subtle hover:border-primary-theme/50 bg-transparent'}\`}>
                          <Calendar className={\`w-4 h-4 \${answers.frequency === freq ? 'text-primary-theme' : 'text-text-secondary'}\`} />
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
              <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 sm:p-6 lg:p-10 w-full h-full flex flex-col justify-center overflow-y-auto">
                
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
                      <a href={\`tel:\${phoneNumber}\`} className="flex items-center justify-center gap-2 bg-primary-theme hover:bg-accent-theme text-white px-4 py-2.5 lg:py-3 text-[11px] lg:text-sm font-medium tracking-wide transition-colors w-full rounded shadow-sm">
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
`

fs.writeFileSync('src/components/YogaCheckup.tsx', code);
console.log('Restructured YogaCheckup');
