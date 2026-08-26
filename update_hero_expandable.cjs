const fs = require('fs');
let content = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');

if (!content.includes('MobileExpandable')) {
  content = content.replace("import { CheckCircle2 } from 'lucide-react';", "import { CheckCircle2 } from 'lucide-react';\nimport { MobileExpandable } from './MobileExpandable';");
}

const aboutRegex = /<div className="space-y-6 text-text-secondary text-lg lg:text-xl leading-relaxed mb-10">([\s\S]*?)<\/div>\s*<div className="pt-8 border-t border-border-subtle">/m;
const aboutMatch = content.match(aboutRegex);

if (aboutMatch) {
  const newAbout = `<div className="space-y-6 text-text-secondary text-lg lg:text-xl leading-relaxed mb-10">
              <MobileExpandable collapsedHeight="120px" gradientFrom="from-primary-bg">
${aboutMatch[1]}
              </MobileExpandable>
            </div>
            <div className="pt-8 border-t border-border-subtle">`;
  content = content.replace(aboutRegex, newAbout);
}

const founderRegex = /<blockquote className="text-xl text-text-primary font-serif leading-relaxed italic mb-10 pl-6 border-l border-primary-theme relative">([\s\S]*?)<\/blockquote>/m;
const founderMatch = content.match(founderRegex);

if (founderMatch) {
  const newFounder = `<blockquote className="text-xl text-text-primary font-serif leading-relaxed italic mb-10 pl-6 border-l border-primary-theme relative">
              <MobileExpandable collapsedHeight="80px" gradientFrom="from-primary-bg">
${founderMatch[1]}
              </MobileExpandable>
            </blockquote>`;
  content = content.replace(founderRegex, newFounder);
}

fs.writeFileSync('src/components/HeroSection.tsx', content);
