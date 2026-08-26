const fs = require('fs');
let content = fs.readFileSync('src/components/GallerySection.tsx', 'utf8');

if (!content.includes('MobileExpandable')) {
  content = content.replace("import { motion, AnimatePresence } from 'motion/react';", "import { motion, AnimatePresence } from 'motion/react';\nimport { MobileExpandable } from './MobileExpandable';");
}

const gridRegex = /<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">([\s\S]*?)<\/div>\s*<\/div>\s*\{\/\* Full-screen Lightbox/m;
const match = content.match(gridRegex);

if (match) {
  const newGrid = `<MobileExpandable collapsedHeight="600px" gradientFrom="from-primary-bg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            ${match[1]}
          </div>
        </MobileExpandable>
      </div>
      {/* Full-screen Lightbox`;
  content = content.replace(gridRegex, newGrid);
}

fs.writeFileSync('src/components/GallerySection.tsx', content);
