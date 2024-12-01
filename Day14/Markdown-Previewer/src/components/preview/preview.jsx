import ReactMarkdown from 'react-markdown';

import { useMarkdown } from '../../providers/markdown-provider';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as styles from 'react-syntax-highlighter/dist/esm/styles/prism'; // Import all styles
import remarkGfm from 'remark-gfm'; // For GitHub-flavored markdown
import TitleBar from '../title-bar/title-bar';
import './preview.css';

const Preview = () => {
  const [markdown] = useMarkdown();

  return (
    <div className="preview">
      <TitleBar title="Preview" />
      <div className="preview__scroll">
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]} // Enable GitHub-flavored markdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={styles.docco} // Use docco style from the imported styles
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};


export default Preview;
