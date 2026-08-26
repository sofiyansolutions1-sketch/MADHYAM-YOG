const fs = require('fs');
let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

const footerRegex = /\{\/\* Mobile Sticky Footer - Nav Categories \*\/\}([\s\S]*?)<\/div>\s*<\/div>\s*<\/>/m;

const newFooter = `{/* Mobile Sticky Footer - Nav Categories */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary-bg/95 backdrop-blur-md border-t border-border-subtle shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex flex-col">
        <div className="w-full px-2 py-3">
          <ul className="flex items-center justify-between w-full">
            {navLinks.filter(link => link.name !== 'Membership').map((link) => {
              const displayName = link.name === 'About Shilpa' ? 'Shilpa' : link.name;
              return (
              <li key={link.name} className="flex shrink flex-col items-center justify-center text-center">
                {link.name === 'Contact' ? (
                  <a
                    href={link.href}
                    className="bg-primary-theme text-white px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-medium tracking-tight transition-colors inline-block"
                  >
                    Contact
                  </a>
                ) : link.href.includes('#') ? (
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary-theme text-[10px] sm:text-xs font-medium tracking-tight transition-colors leading-tight"
                  >
                    {displayName}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-text-secondary hover:text-primary-theme text-[10px] sm:text-xs font-medium tracking-tight transition-colors leading-tight"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            )})}
          </ul>
        </div>
      </div>
    </>`;

if (content.match(footerRegex)) {
  content = content.replace(footerRegex, newFooter);
  console.log("Footer replaced successfully.");
} else {
  console.log("Failed to find footer regex");
}

fs.writeFileSync('src/components/Layout.tsx', content);
