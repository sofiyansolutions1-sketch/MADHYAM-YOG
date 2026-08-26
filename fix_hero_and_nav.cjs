const fs = require('fs');

// 1. Fix Layout (Nav height)
let layoutContent = fs.readFileSync('src/components/Layout.tsx', 'utf8');
layoutContent = layoutContent.replace(
  /isScrolled \? 'py-4' : 'py-6'/g,
  "isScrolled ? 'py-2 lg:py-4' : 'py-3 lg:py-6'"
);
fs.writeFileSync('src/components/Layout.tsx', layoutContent);

// 2. Fix HeroSection (Video margin and Text padding)
let heroContent = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');

// Add margin top to video on mobile (e.g. mt-[64px] or mt-[60px])
heroContent = heroContent.replace(
  /className="relative w-full aspect-video mt-0 lg:absolute/g,
  'className="relative w-full aspect-[4/3] sm:aspect-video mt-[64px] lg:mt-0 lg:absolute'
);

// Reduce padding above and below text on mobile
heroContent = heroContent.replace(
  /className="relative z-10 w-full px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-20/g,
  'className="relative z-10 w-full px-6 pt-8 pb-8 lg:px-8 lg:pt-32 lg:pb-20'
);

// Reduce top padding inside the motion div if any
heroContent = heroContent.replace(
  /className="py-0 lg:py-8"/g,
  'className="py-2 lg:py-8"'
);

fs.writeFileSync('src/components/HeroSection.tsx', heroContent);

console.log("Updated navigation and hero section");
