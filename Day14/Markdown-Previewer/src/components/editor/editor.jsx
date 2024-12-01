import React, { useState } from 'react';
import TitleBar from '../title-bar/title-bar'; // TitleBar component
import { useMarkdown } from '../../providers/markdown-provider'; // Markdown context
import './editor.css'; // Styling for the editor component

const Editor = () => {
  const [markdown, setMarkdown] = useMarkdown(); // Access markdown context
  const [words, setWords] = useState(0); // Track word count
  const [chars, setChars] = useState(0); // Track character count

  // Utility function to count words
  const getWordsCount = (str) => (str.match(/(\w+)/g) || []).length;

  // Utility function to count characters
  const getCharsCount = (str) => str.length;

  // Handle markdown input changes
  const updateMarkdown = (event) => {
    const value = event.target.value;
    setMarkdown(value);
    setWords(getWordsCount(value));
    setChars(getCharsCount(value));
  };

  // Download the current markdown as a .md file
  const downloadFile = () => {
    const link = document.createElement('a');
    const file = new Blob([markdown], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = 'Untitled.md';
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="editor__wrap">
      {/* Title bar with word and character counts */}
      <TitleBar title="Editor" aside={`${words} Words ${chars} Characters`} />

      {/* Markdown text area */}
      <textarea
        className="editor"
        placeholder="Start typing your markdown..."
        value={markdown}
        onChange={updateMarkdown}
      />

      {/* Download button */}
      <button className="editor__download" onClick={downloadFile}>
        Download File
      </button>
    </div>
  );
};

export default Editor;
