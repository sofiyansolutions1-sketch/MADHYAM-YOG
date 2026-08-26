const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const bumpRules = [
  // Subheadings (eyebrows)
  {
    regex: /text-sm uppercase tracking-widest/g,
    replace: 'text-base md:text-lg lg:text-xl uppercase tracking-widest'
  },
  // text-text-secondary paragraphs that might be text-sm or text-base
  {
    regex: /text-text-secondary text-sm/g,
    replace: 'text-text-secondary text-base lg:text-lg'
  },
  {
    regex: /text-text-secondary text-base/g,
    replace: 'text-text-secondary text-lg lg:text-xl'
  }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  bumpRules.forEach(rule => {
    newContent = newContent.replace(rule.regex, rule.replace);
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx')) {
      processFile(filePath);
    }
  });
}

walkDir(directoryPath);
