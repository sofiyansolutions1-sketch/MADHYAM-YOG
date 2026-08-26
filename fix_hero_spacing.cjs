const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace('main className="flex-grow overflow-x-hidden pt-20"', 'main className="flex-grow overflow-x-hidden pt-0"');
fs.writeFileSync('src/App.tsx', appContent);

let heroContent = fs.readFileSync('src/components/HeroSection.tsx', 'utf8');
// Replace mt-[88px] with nothing or mt-0 so the video is flush to the top
heroContent = heroContent.replace('mt-[88px] lg:mt-0', 'mt-0');
// The inner container needs padding-top to ensure text isn't covered by the header
heroContent = heroContent.replace('pt-10 pb-16 lg:px-8 lg:pt-32 lg:pb-20', 'pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-20');
fs.writeFileSync('src/components/HeroSection.tsx', heroContent);

console.log("Spacing updated successfully");
