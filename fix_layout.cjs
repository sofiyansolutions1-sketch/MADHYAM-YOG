const fs = require('fs');
let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

content = content.replace(
  "{ name: 'About Shilpa', href: '/teacher' },",
  "{ name: 'Teacher', href: '/teacher' },"
);

content = content.replace(
  "const displayName = link.name === 'About Shilpa' ? 'Shilpa' : link.name;",
  "const displayName = link.name === 'About Shilpa' ? 'Teacher' : link.name;" // But wait, link.name is now 'Teacher'
);

content = content.replace(
  "['Home', 'About', 'Wellness', 'Content', 'About Shilpa', 'Contact']",
  "['Home', 'About', 'Wellness', 'Content', 'Teacher', 'Contact']"
);

content = content.replace(
  "if (item === 'About Shilpa') path = '/teacher';",
  "if (item === 'Teacher') path = '/teacher';"
);

fs.writeFileSync('src/components/Layout.tsx', content);
console.log("Updated navigation to Teacher");
