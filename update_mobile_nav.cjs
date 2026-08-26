const fs = require('fs');
let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

const regex = /\{\/\* Mobile Sticky CTA - Shown only when not at the very top and menu is closed \*\/\}\s*<div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-primary-bg\/90 backdrop-blur border-t border-border-subtle">\s*<a\s*href="#contact"\s*className="w-full block text-center bg-primary-theme text-white font-medium px-6 py-3 transition-colors"\s*>\s*Book Consultation\s*<\/a>\s*<\/div>/m;

const newFooter = `{/* Mobile Sticky Footer - Nav Categories + CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary-bg/95 backdrop-blur-md border-t border-border-subtle shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex flex-col">
        {/* Horizontal Nav Categories */}
        <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-border-subtle">
          <ul className="flex items-center px-4 py-3 space-x-6 w-max">
            {navLinks.map((link) => (
              <li key={link.name} className="flex-shrink-0">
                {link.href.includes('#') ? (
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary-theme text-sm font-medium tracking-wide transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-text-secondary hover:text-primary-theme text-sm font-medium tracking-wide transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Sticky CTA */}
        <div className="p-3">
           <a
              href="#contact"
              className="w-full block text-center bg-primary-theme hover:bg-accent-theme text-white font-medium px-6 py-3 rounded-sm transition-colors"
            >
              Book Consultation
            </a>
        </div>
      </div>`;

if (content.match(regex)) {
  content = content.replace(regex, newFooter);
  fs.writeFileSync('src/components/Layout.tsx', content);
  console.log("Successfully updated Layout.tsx");
} else {
  console.log("Could not find the target text to replace.");
}
