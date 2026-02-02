// MessageText.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "katex/dist/katex.min.css";

export interface MessageTextProps {
  content: string;
  userSent: boolean;
}

export function MessageText({ content, userSent }: MessageTextProps) {
  // Custom components for markdown elements
  const markdownComponents: Components = {
    // Tables
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto my-4 rounded-lg">
        <table className={`w-full border-collapse text-sm ${userSent ? 'bg-white/10' : 'bg-white'}`} {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead className="font-semibold" {...props} />
    ),
    th: ({ node, ...props }) => (
      <th className={`px-4 py-3 text-left border-b-2 ${userSent ? 'border-white/30 bg-black/20' : 'border-gray-300 bg-gray-50'}`} {...props} />
    ),
    td: ({ node, ...props }) => <td className="px-4 py-3" {...props} />,
    tr: ({ node, ...props }) => <tr className={`border-b last:border-b-0 ${userSent ? 'border-white/15 hover:bg-white/5' : 'border-gray-200 hover:bg-gray-50'}`} {...props} />,

    // Code blocks and inline code
    code: ({ node, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      const isInline = !match;

      return !isInline ? (
        <div className="my-4 rounded-lg overflow-hidden">
          <SyntaxHighlighter style={oneLight} language={match[1]} PreTag="div">
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className={`px-1.5 py-0.5 rounded font-mono text-sm font-medium ${userSent ? 'bg-white/30 text-slate-800 border border-white/20' : 'bg-gray-200 text-gray-800 border border-gray-300'}`} {...props}>
          {children}
        </code>
      );
    },

    // Images
    img: ({ node, ...props }) => (
      <img className={`max-w-full h-auto rounded-lg my-4 block ${userSent ? 'border-2 border-white/20' : 'border-2 border-gray-200'}`} loading="lazy" {...props} />
    ),

    // Links
    a: ({ node, ...props }) => (
      <a
        className={`underline underline-offset-2 transition-all hover:opacity-80 hover:decoration-2 font-medium ${userSent ? 'text-blue-700' : 'text-blue-600'}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),

    // Blockquotes
    blockquote: ({ node, ...props }) => (
      <blockquote className={`my-4 pl-4 italic ${userSent ? 'border-l-4 border-white/40 bg-black/10 py-2 pr-4 rounded' : 'border-l-4 border-gray-400 bg-gray-200 py-2 pr-4 rounded'}`} {...props} />
    ),

    // Lists
    ul: ({ node, ...props }) => (
      <ul className="my-3 pl-6 list-disc marker:font-semibold" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="my-3 pl-6 list-decimal marker:font-semibold" {...props} />
    ),
    li: ({ node, ...props }) => <li className="my-1 pl-1" {...props} />,

    // Headings
    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold my-3 leading-tight" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold my-3 leading-tight" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-xl font-semibold my-3 leading-snug" {...props} />,
    h4: ({ node, ...props }) => <h4 className="text-lg font-semibold my-3 leading-snug" {...props} />,

    // Paragraphs
    p: ({ node, ...props }) => <p className="my-2 first:mt-0 last:mb-0" {...props} />,

    // Horizontal rule
    hr: ({ node, ...props }) => (
      <hr className={`my-6 border-0 border-t ${userSent ? 'border-white/30' : 'border-gray-300'}`} {...props} />
    ),

    // Strong and emphasis
    strong: ({ node, ...props }) => (
      <strong className="font-bold" {...props} />
    ),
    em: ({ node, ...props }) => <em className="italic" {...props} />,

    // Strikethrough (from remarkGfm)
    del: ({ node, ...props }) => (
      <del className="line-through opacity-70" {...props} />
    ),
  };

  return (
    <div
      className={`rounded-xl transition-all ${
        userSent 
          ? 'bg-[#d8e0f6] text-black hover:bg-[#c8d4f0]' 
          : 'bg-[#d9ecda] text-black hover:bg-[#cfe2d0] shadow-sm hover:shadow-md'
      }`}
    >
      <div className="p-3 md:p-4 rounded-xl break-words leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={markdownComponents}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default MessageText;
