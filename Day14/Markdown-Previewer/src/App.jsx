import React from 'react';
import MainLayout from './components/main-layout/main-layout';
import Editor from './components/editor/editor';
import Preview from './components/preview/preview';
import MarkdownProvider from './providers/markdown-provider';

const App = () => {
  return (
    // MarkdownProvider wraps the application, providing markdown state to all child components
    <MarkdownProvider>
      <MainLayout>
        {/* Editor Column */}
        <MainLayout.Column>
          <Editor />
        </MainLayout.Column>

        {/* Preview Column */}
        <MainLayout.Column>
          <Preview />
        </MainLayout.Column>
      </MainLayout>
    </MarkdownProvider>
  );
};

export default App;
