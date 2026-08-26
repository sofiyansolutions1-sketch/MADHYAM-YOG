const fs = require('fs');
let content = fs.readFileSync('src/components/ProgramsSection.tsx', 'utf8');

if (!content.includes('MobileExpandable')) {
  content = content.replace("import { TextExpandable } from './TextExpandable';", "import { TextExpandable } from './TextExpandable';\nimport { MobileExpandable } from './MobileExpandable';");
}

const gridRegex = /<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/m;
const match = content.match(gridRegex);

if (match) {
  const newGrid = `<MobileExpandable collapsedHeight="600px" gradientFrom="from-secondary-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            ${match[1]}
          </div>
        </MobileExpandable>
      </div>
    </section>`;
  content = content.replace(gridRegex, newGrid);
}

fs.writeFileSync('src/components/ProgramsSection.tsx', content);
