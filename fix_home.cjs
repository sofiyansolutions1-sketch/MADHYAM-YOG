const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Add import
if (!content.includes('YogaCheckup')) {
  content = "import { YogaCheckup } from '../components/YogaCheckup';\n" + content;
}

// Inject component
content = content.replace(
  /<ScrollReveal><GallerySection \/><\/ScrollReveal>/,
  "<ScrollReveal><YogaCheckup /></ScrollReveal>\n      <ScrollReveal><GallerySection /></ScrollReveal>"
);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log("Injected YogaCheckup into Home.tsx");
