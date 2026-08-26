const fs = require('fs');

const fixNav = (file) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/href={`#(.*?)`}/g, "to={`/$1`}");
    content = content.replace(/href={`#(.*?)`}/g, "to={`/$1`}"); // Just in case
    // Fix footer
    content = content.replace(
      /\{name: 'Home', href: '\/'\},\s*\{name: 'About', href: '\/#about'\},\s*\{name: 'Wellness', href: '\/#programs'\},\s*\{name: 'Membership', href: '\/#membership'\},\s*\{name: 'Content', href: '\/#glimpses'\},\s*\{name: 'About Shilpa', href: '\/#founder'\},\s*\{name: 'Contact', href: '\/#contact'\}/g,
      "{name: 'Home', href: '/'}, {name: 'About', href: '/about'}, {name: 'Wellness', href: '/wellness'}, {name: 'Membership', href: '/#membership'}, {name: 'Content', href: '/content'}, {name: 'About Shilpa', href: '/teacher'}, {name: 'Contact', href: '/contact'}"
    );

    // Footer bottom links
    content = content.replace(
      /\{?\['Home', 'About', 'Programs', 'Membership', 'Yoga', 'Wellness', 'Contact'\]\.map\(\(item\) => \(\s*<li key=\{item\}>\s*<a href=\{`#\$\{item\.toLowerCase\(\)\.replace\(' ', ''\)\}`\}\s*className="text-text-sm transition-colors"\s*>\s*\{item\}\s*<\/a>\s*<\/li>\s*\)\)\}?/g,
      `{['Home', 'About', 'Wellness', 'Content', 'About Shilpa', 'Contact'].map((item) => {
        let path = '/';
        if (item === 'About Shilpa') path = '/teacher';
        else if (item !== 'Home') path = '/' + item.toLowerCase();
        
        return (
          <li key={item}>
            <Link to={path} className="text-text-sm transition-colors">
              {item}
            </Link>
          </li>
        );
      })}`
    );
    
    // Add Link to footer
    if (content.includes("export function Footer()") && !content.includes("import { Link }")) {
      content = `import { Link } from 'react-router-dom';\n` + content;
    }
    
    fs.writeFileSync(file, content);
  }
};

fixNav('src/components/Layout.tsx');
