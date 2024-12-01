import { createContext, useContext, useState } from 'react';

const MarkdownContext = createContext(null);

const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState('');
  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
      {children}
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = () => {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw new Error("useMarkdown must be used within a MarkdownProvider");
  }
  return context;
};

export default MarkdownProvider;
