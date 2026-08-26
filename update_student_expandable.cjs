const fs = require('fs');
let content = fs.readFileSync('src/components/StudentResult.tsx', 'utf8');

if (!content.includes('MobileExpandable')) {
  content = content.replace("import { motion } from 'motion/react';", "import { motion } from 'motion/react';\nimport { MobileExpandable } from './MobileExpandable';");
}

const textRegex = /<p className="text-text-secondary leading-relaxed mb-4">\s*\{item\.desc1\}\s*<\/p>\s*<p className="text-text-secondary leading-relaxed mb-8">\s*\{item\.desc2\}\s*<\/p>/m;

if (content.match(textRegex)) {
  const newText = `<div className="mb-8">
                  <MobileExpandable collapsedHeight="80px" gradientFrom="from-primary-bg">
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {item.desc1}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {item.desc2}
                    </p>
                  </MobileExpandable>
                </div>`;
  content = content.replace(textRegex, newText);
}

fs.writeFileSync('src/components/StudentResult.tsx', content);
