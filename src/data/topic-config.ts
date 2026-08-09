export interface ColorConfig {
  bgColor: string
  textColor: string
  borderColor: string
  gradientColor: string
}

export interface PageConfig {
  /** Path relative to src/content/, without .mdx extension. Defaults to `{vendor}/{pageKey}` or `{vendor}/_index` for the index page. */
  mdxPath?: string
  colorOverride?: ColorConfig
}

export interface TopicConfig extends ColorConfig {
  name: string
  pages?: Record<string, PageConfig>
}

export const topicConfigs: Record<string, TopicConfig> = {
  google: {
    name: 'Google Cloud',
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    borderColor: 'border-blue-500',
    gradientColor: 'rgba(59,130,246,0.13)',
  },
  amazon: {
    name: 'Amazon AWS',
    bgColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    borderColor: 'border-orange-500',
    gradientColor: 'rgba(249,115,22,0.13)',
  },
  microsoft: {
    name: 'Microsoft Azure',
    bgColor: 'bg-blue-600',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-600',
    gradientColor: 'rgba(37,99,235,0.13)',
  },
  'claude-code': {
    name: 'Claude Code',
    bgColor: 'bg-purple-600',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-600',
    gradientColor: 'rgba(147,51,234,0.13)',
    pages: {
      'step-1': {
        mdxPath: 'other/llm-basics',
        colorOverride: {
          bgColor: 'bg-slate-500',
          textColor: 'text-slate-500',
          borderColor: 'border-slate-500',
          gradientColor: 'rgba(100,116,139,0.13)',
        },
      },
    },
  },
  rag: {
    name: 'RAG Development',
    bgColor: 'bg-green-600',
    textColor: 'text-green-600',
    borderColor: 'border-green-600',
    gradientColor: 'rgba(22,163,74,0.13)',
  },
  vercel: {
    name: 'Vercel',
    bgColor: 'bg-gray-900',
    textColor: 'text-gray-900',
    borderColor: 'border-gray-900',
    gradientColor: 'rgba(17,24,39,0.13)',
  },
  render: {
    name: 'Render',
    bgColor: 'bg-emerald-600',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-600',
    gradientColor: 'rgba(5,150,105,0.13)',
  },
  langchain: {
    name: 'LangChain',
    bgColor: 'bg-teal-700',
    textColor: 'text-teal-700',
    borderColor: 'border-teal-700',
    gradientColor: 'rgba(15,118,110,0.13)',
  },
  cursor: {
    name: 'Cursor',
    bgColor: 'bg-indigo-600',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-600',
    gradientColor: 'rgba(79,70,229,0.13)',
  },
  netlify: {
    name: 'Netlify',
    bgColor: 'bg-cyan-600',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-600',
    gradientColor: 'rgba(8,145,178,0.13)',
  },
  mcp: {
    name: 'MCP',
    bgColor: 'bg-sky-600',
    textColor: 'text-sky-600',
    borderColor: 'border-sky-600',
    gradientColor: 'rgba(2,132,199,0.13)',
  },
  'github-copilot': {
    name: 'GitHub Copilot',
    bgColor: 'bg-slate-600',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-600',
    gradientColor: 'rgba(71,85,105,0.13)',
  },
}
