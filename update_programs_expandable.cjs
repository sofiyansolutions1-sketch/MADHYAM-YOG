const fs = require('fs');
let content = fs.readFileSync('src/components/ProgramsSection.tsx', 'utf8');

if (!content.includes('TextExpandable')) {
  content = content.replace("import { ArrowRight", "import { TextExpandable } from './TextExpandable';\nimport { ArrowRight");
}

const descRegex = /<p className="text-text-lg leading-relaxed mb-6">\s*\{prog\.desc\}\s*<\/p>/m;

if (content.match(descRegex)) {
  const newDesc = `<div className="text-text-lg leading-relaxed mb-6"><TextExpandable text={prog.desc} maxLength={80} /></div>`;
  content = content.replace(descRegex, newDesc);
}

fs.writeFileSync('src/components/ProgramsSection.tsx', content);
