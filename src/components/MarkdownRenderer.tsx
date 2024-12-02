import { useEffect, useMemo } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';
import 'highlight.js/styles/github.css';

interface MarkdownRendererProps {
  markdown: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  markdown,
  className = ''
}) => {
  // 配置 marked
  useEffect(() => {
    marked.setOptions({
      gfm: true, // GitHub Flavored Markdown
      breaks: true, // 转换换行符为 <br>
      highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(code, { language: lang }).value;
          } catch (err) {
            console.error('代码高亮出错:', err);
          }
        }
        return code; // 使用普通代码块
      },
    });
  }, []);

  // 解析 Markdown
  const htmlContent = useMemo(() => {
    try {
      // 解析 Markdown 为 HTML
      const rawHtml = marked(markdown);
      // 净化 HTML 以防止 XSS 攻击
      const cleanHtml = DOMPurify.sanitize(rawHtml);
      return cleanHtml;
    } catch (error) {
      console.error('Markdown 解析错误:', error);
      return '内容解析错误';
    }
  }, [markdown]);

  return (
    <div 
      className={`prose prose-lg max-w-none dark:prose-invert ${className}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default MarkdownRenderer; 