import { ReactNode } from 'react'
import type { MDXComponents } from 'mdx/types'
import ResumeTip from './ResumeTip'

interface MDXContentProps {
  children: ReactNode
}

// Custom checklist component
const CheckList = ({ children }: { children: ReactNode }) => (
  <ul className="space-y-2 my-4">
    {children}
  </ul>
)

const CheckListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start space-x-3">
    <span className="flex-shrink-0 w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
      ✓
    </span>
    <span className="text-gray-700">{children}</span>
  </li>
)

// Custom table components for MDX
const MDXTable = ({ children, ...props }: any) => (
  <div className="overflow-x-auto my-8">
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm" {...props}>
      {children}
    </table>
  </div>
)

const MDXThead = ({ children, ...props }: any) => (
  <thead className="bg-gray-50" {...props}>{children}</thead>
)

const MDXTbody = ({ children, ...props }: any) => (
  <tbody className="divide-y divide-gray-200" {...props}>{children}</tbody>
)

const MDXTh = ({ children, ...props }: any) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200" {...props}>
    {children}
  </th>
)

const MDXTd = ({ children, ...props }: any) => (
  <td className="px-6 py-4 text-gray-700" {...props}>
    {children}
  </td>
)

const MDXTr = ({ children, ...props }: any) => (
  <tr className="hover:bg-gray-50 transition-colors" {...props}>{children}</tr>
)

// Custom heading and text components
const MDXH2 = ({ children, ...props }: any) => (
  <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 first:mt-0" {...props}>{children}</h2>
)

const MDXH3 = ({ children, ...props }: any) => (
  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8" {...props}>{children}</h3>
)

const MDXP = ({ children, ...props }: any) => (
  <p className="text-gray-700 leading-relaxed mb-4" {...props}>{children}</p>
)

const MDXStrong = ({ children, ...props }: any) => (
  <strong className="font-semibold text-gray-900" {...props}>{children}</strong>
)

const MDXUl = ({ children, ...props }: any) => (
  <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2" {...props}>{children}</ul>
)

const MDXOl = ({ children, ...props }: any) => (
  <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2" {...props}>{children}</ol>
)

const MDXLi = ({ children, ...props }: any) => (
  <li className="leading-relaxed" {...props}>{children}</li>
)

const MDXBlockquote = ({ children, ...props }: any) => (
  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg mb-6 italic" {...props}>
    {children}
  </blockquote>
)

const MDXLink = ({ children, href, ...props }: any) => (
  <a 
    href={href} 
    className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors" 
    target={href?.startsWith('http') ? '_blank' : undefined}
    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    {...props}
  >
    {children}
  </a>
)

// MDX components mapping
export const mdxComponents: MDXComponents = {
  table: MDXTable,
  thead: MDXThead,
  tbody: MDXTbody,
  th: MDXTh,
  td: MDXTd,
  tr: MDXTr,
  h2: MDXH2,
  h3: MDXH3,
  p: MDXP,
  strong: MDXStrong,
  ul: MDXUl,
  ol: MDXOl,
  li: MDXLi,
  blockquote: MDXBlockquote,
  a: MDXLink,
  CheckList,
  CheckListItem,
  ResumeTip,
}

export default function MDXContent({ children }: MDXContentProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </div>
  )
}
