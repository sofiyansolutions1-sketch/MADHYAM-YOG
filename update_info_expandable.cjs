const fs = require('fs');
let content = fs.readFileSync('src/components/InfoSection.tsx', 'utf8');

if (!content.includes('MobileExpandable')) {
  content = content.replace("import { Target", "import { MobileExpandable } from './MobileExpandable';\nimport { Target");
}

const grid1Regex = /<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/m;
const match1 = content.match(grid1Regex);

if (match1) {
  const newGrid1 = `<MobileExpandable collapsedHeight="250px" gradientFrom="from-primary-bg">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
            ${match1[1]}
          </div>
        </MobileExpandable>
      </div>
    </section>`;
  content = content.replace(grid1Regex, newGrid1);
}

const grid2Regex = /<div className="grid grid-cols-1 md:grid-cols-3 gap-6">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/m;
const match2 = content.match(grid2Regex);

if (match2) {
  const newGrid2 = `<MobileExpandable collapsedHeight="180px" gradientFrom="from-secondary-bg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${match2[1]}
          </div>
        </MobileExpandable>
      </div>
    </section>`;
  content = content.replace(grid2Regex, newGrid2);
}

fs.writeFileSync('src/components/InfoSection.tsx', content);
