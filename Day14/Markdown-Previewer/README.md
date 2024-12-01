
# Markdown-Previewer

A React application that allows users to write and preview markdown content. This app includes a live markdown editor with real-time preview and options to download the markdown file.

## Features
- A live editor for writing markdown content.
- Real-time preview of the markdown content.
- Ability to download the written markdown as a `.md` file.
- Word and character count displayed in the editor.

## Tech Stack
- **React**: For building the user interface and managing the app state.
- **React Markdown**: For rendering markdown content into HTML.
- **SyntaxHighlighter**: For highlighting code blocks in the preview.
- **CSS**: For custom styling.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/TheBMPatil/21_Days_21_Projects.git
   ```
2. Navigate to the project directory:
   ```bash
   cd markdown-previewer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` to view the app.

## Learnings
- Managing state using `useState` and context API to share the markdown content across components.
- Using `react-markdown` to render markdown and `SyntaxHighlighter` to highlight code blocks.
- Creating a real-time preview system for markdown content.
- Implementing a file download feature for the markdown content.
