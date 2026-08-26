const fs = require('fs');

const filesToUpdate = ['src/components/ProgramsSection.tsx', 'src/components/ClosingSection.tsx'];

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import \{ TextExpandable \} from '\.\/TextExpandable';/g, "import { ReadMore } from './ReadMore';");
  content = content.replace(/<TextExpandable/g, "<ReadMore");
  fs.writeFileSync(file, content);
});

// Remove the old TextExpandable file
if (fs.existsSync('src/components/TextExpandable.tsx')) {
  fs.unlinkSync('src/components/TextExpandable.tsx');
}
