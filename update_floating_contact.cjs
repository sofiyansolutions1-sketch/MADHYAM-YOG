const fs = require('fs');
let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

const regex = /<div className="fixed bottom-24 lg:bottom-8 right-6 z-50 flex flex-col gap-4">/;
const newFloating = `<div className="fixed bottom-36 lg:bottom-8 right-6 z-50 flex flex-col gap-4">`;

if (content.match(regex)) {
  content = content.replace(regex, newFloating);
  fs.writeFileSync('src/components/Layout.tsx', content);
  console.log("Successfully updated FloatingContact.");
} else {
  console.log("Could not find the FloatingContact div to replace.");
}
