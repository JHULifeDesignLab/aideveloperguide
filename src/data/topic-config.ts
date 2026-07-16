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
}
