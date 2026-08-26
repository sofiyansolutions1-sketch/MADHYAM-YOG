const fs = require('fs');
const pages = [
  'src/pages/Home.tsx',
  'src/pages/About.tsx',
  'src/pages/Wellness.tsx',
  'src/pages/Content.tsx',
  'src/pages/Teacher.tsx',
  'src/pages/Contact.tsx'
];

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Make sure Hero is imported
  if (!content.includes('import { Hero }')) {
    if (content.includes("from '../components/HeroSection'")) {
      content = content.replace(/import \{(.*?)\} from '\.\.\/components\/HeroSection';/, "import { Hero, $1 } from '../components/HeroSection';");
    } else {
      content = "import { Hero } from '../components/HeroSection';\n" + content;
    }
  }

  // Inject Hero at the top of the Fragment
  if (!content.includes('<Hero />')) {
    content = content.replace(/<>\s*/, "<>\n      <ScrollReveal><Hero /></ScrollReveal>\n      ");
  }

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
