const fs = require('fs');

// 1. Home.tsx: Remove TrustStrip
let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');
home = home.replace(/import \{ Hero,  TrustStrip  \} from '\.\.\/components\/HeroSection';/, "import { Hero } from '../components/HeroSection';");
home = home.replace(/\s*<ScrollReveal><TrustStrip \/><\/ScrollReveal>/, "");
fs.writeFileSync('src/pages/Home.tsx', home);

// 2. Remove Hero from About, Wellness, Content, Teacher, Contact
const removeHero = (file, isDestructured) => {
  let content = fs.readFileSync(file, 'utf8');
  if (isDestructured) {
    content = content.replace(/Hero,  /, "");
  } else {
    content = content.replace(/import \{ Hero \} from '\.\.\/components\/HeroSection';\n?/, "");
  }
  content = content.replace(/\s*<ScrollReveal><Hero \/><\/ScrollReveal>/, "");
  fs.writeFileSync(file, content);
};

removeHero('src/pages/About.tsx', true);
removeHero('src/pages/Wellness.tsx', false);
removeHero('src/pages/Content.tsx', false);
removeHero('src/pages/Teacher.tsx', true);
removeHero('src/pages/Contact.tsx', false);

console.log("Updates completed successfully.");
