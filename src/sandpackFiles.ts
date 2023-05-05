const indexHtml = `
<div id="root"></div>
`;

const appTsx = `
export function App() {
  return <div>It works!</div>;
}
`;

const indexTsx = `
import { createRoot } from 'react-dom/client';

import { App } from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(<App />);
`;

const sampleFeatureTs = `
export function sampleFeature(allTrainings: Training[]) {
  return true;
}
`;

const sampleFeatureTestTs = `
import { sampleFeature } from './sample-feature';

it('filters trainings based on the user criteria', () => {
  expect(sampleFeature()).toBe(true);
});
`;

const packageJson = `
{
  "name": "react-ts",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
  },
  "dependencies": {
    "@types/react": "^18.0.8",
    "@types/react-dom": "^18.0.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "typescript": "^5.0.2"
  }
}
`;

export const files = {
  'public/index.html': indexHtml,
  'src/App.tsx': appTsx,
  'src/index.tsx': indexTsx,
  'src/sample-feature.ts': sampleFeatureTs,
  'src/sample-feature.test.ts': sampleFeatureTestTs,
  'package.json': packageJson,
};

export const defaultFile = 'src/sample-feature.ts';

for (const [key, value] of Object.entries(files)) {
  files[key as keyof typeof files] = value.trim();
}
