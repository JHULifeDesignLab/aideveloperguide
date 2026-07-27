import { MDXProvider } from '@mdx-js/react'
import { Link } from 'react-router-dom'
import ResourcePageLayout from '../components/ResourcePageLayout'
import { mdxComponents } from '../components/MDXContent'
import LlmBasicsContent from '../content/other/llm-basics.mdx'

export default function LlmBasicsPage() {
  return (
    <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="pt-6">
        <Link to="/where-to-start" className="text-sm text-gray-400 transition-colors hover:text-gray-600">
          ← Back to Where to Start
        </Link>
      </div>
      <ResourcePageLayout
        title="LLM Basics"
        subtitle="How large language models actually work, and why they behave the way they do"
        icon="🧠"
      >
        <MDXProvider components={mdxComponents}>
          <LlmBasicsContent />
        </MDXProvider>
      </ResourcePageLayout>
    </div>
  )
}
