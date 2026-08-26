const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'components');

const bumpRules = [
  // Subheadings (eyebrows)
  {
    regex: /text-sm uppercase tracking-widest/g,
    replace: 'text-base md:text-lg lg:text-xl uppercase tracking-widest'
  },
  // Main Headings (H2)
  {
    regex: /text-3xl md:text-4xl font-serif/g,
    replace: 'text-4xl md:text-5xl lg:text-6xl font-serif'
  },
  {
    regex: /text-3xl md:text-4xl lg:text-5xl font-serif/g,
    replace: 'text-4xl md:text-5xl lg:text-7xl font-serif'
  },
  {
    regex: /text-4xl md:text-5xl font-serif/g,
    replace: 'text-5xl md:text-6xl lg:text-7xl font-serif'
  },
  {
    regex: /text-4xl md:text-5xl lg:text-6xl font-serif/g,
    replace: 'text-5xl md:text-6xl lg:text-7xl font-serif'
  },
  // Subtexts (Paragraphs)
  {
    regex: /text-sm md:text-base/g,
    replace: 'text-lg md:text-xl lg:text-2xl'
  },
  {
    regex: /text-text-secondary text-lg/g,
    replace: 'text-text-secondary text-lg md:text-xl lg:text-2xl'
  },
  {
    regex: /text-lg md:text-xl text-text-secondary/g,
    replace: 'text-lg md:text-xl lg:text-2xl text-text-secondary'
  },
  {
    regex: /text-base md:text-lg text-text-secondary/g,
    replace: 'text-lg md:text-xl lg:text-2xl text-text-secondary'
  },
  // H3 Headings
  {
    regex: /text-2xl font-serif/g,
    replace: 'text-3xl lg:text-4xl font-serif'
  },
  {
    regex: /text-3xl font-serif/g,
    replace: 'text-4xl lg:text-5xl font-serif'
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
