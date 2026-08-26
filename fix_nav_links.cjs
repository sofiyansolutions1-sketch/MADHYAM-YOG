const fs = require('fs');
let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

content = content.replace(
  /const navLinks = \[([\s\S]*?)\];/,
  `const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Wellness', href: '/wellness' },
    { name: 'Membership', href: '/#membership' },
    { name: 'Content', href: '/content' },
    { name: 'About Shilpa', href: '/teacher' },
    { name: 'Contact', href: '/contact' },
  ];`
);

fs.writeFileSync('src/components/Layout.tsx', content);
