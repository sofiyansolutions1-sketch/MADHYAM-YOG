const fs = require('fs');
let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

const regex = /const navLinks = \[[\s\S]*?\];/m;

const oldNavLinks = `const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Wellness', href: '/#programs' },
    { name: 'Membership', href: '/#membership' },
    { name: 'Content', href: '/#glimpses' },
    { name: 'About Shilpa', href: '/#founder' },
    { name: 'Contact', href: '/#contact' },
  ];`;

content = content.replace(regex, oldNavLinks);
fs.writeFileSync('src/components/Layout.tsx', content);
