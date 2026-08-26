const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const fixRules = [
  { regex: /text-[a-z0-9]+ md:text-[a-z0-9]+ lg:text-[a-z0-9]+ mb-8 uppercase tracking-wider text-sm/g, replace: 'text-lg md:text-xl lg:text-2xl mb-8 uppercase tracking-wider' },
  { regex: /text-text-secondary text-lg lg:text-xl lg:text-lg/g, replace: 'text-text-secondary text-lg lg:text-xl' },
  { regex: /text-text-secondary text-lg lg:text-xl lg:text-xl/g, replace: 'text-text-secondary text-lg lg:text-xl' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  fixRules.forEach(rule => {
    newContent = newContent.replace(rule.regex, rule.replace);
  });
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
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
