const fs = require('fs');
let content = fs.readFileSync('src/components/ClosingSection.tsx', 'utf8');

if (!content.includes('TextExpandable')) {
  content = content.replace("import { motion, AnimatePresence } from 'motion/react';", "import { motion, AnimatePresence } from 'motion/react';\nimport { TextExpandable } from './TextExpandable';");
}

const textRegex = /<p className="text-text-secondary text-lg leading-relaxed flex-grow">\s*\{item\.text\}\s*<\/p>/m;

if (content.match(textRegex)) {
  const newText = `<div className="text-text-secondary text-lg leading-relaxed flex-grow">
                 <TextExpandable text={item.text} maxLength={100} />
               </div>`;
  content = content.replace(textRegex, newText);
}

fs.writeFileSync('src/components/ClosingSection.tsx', content);
