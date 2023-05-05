import {
  Sandpack,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackTests,
} from '@codesandbox/sandpack-react';
import { defaultFile, files } from './sandpackFiles';

function App() {
  return (
    <SandpackProvider
      files={files}
      customSetup={{
        // To ensure the types are well loaded
        dependencies: JSON.parse(files['package.json']).dependencies,
        // environment: 'create-react-app-typescript',
      }}
      theme="auto"
      // template="react-ts"
      options={{
        classes: { 'sp-wrapper': '!h-full', 'sp-layout': '!h-full', 'sp-stack': '!h-full' },
        activeFile: defaultFile,
      }}
    >
      <SandpackLayout>
        <SandpackTests />
        <SandpackCodeEditor
          wrapContent
        />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
}

export default App;
