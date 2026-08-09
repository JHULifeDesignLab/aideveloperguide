import { MDXProvider } from '@mdx-js/react'
import { Link } from 'react-router-dom'
import ResourcePageLayout from '../components/ResourcePageLayout'
import { mdxComponents } from '../components/MDXContent'
import AiToolsContent from '../content/other/ai-tools-overview.mdx'

export default function AiToolsPage() {
  return (
    <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="pt-6">
        <Link to="/" className="text-sm text-gray-400 transition-colors hover:text-gray-600">← Back to Home</Link>
      </div>
      <ResourcePageLayout
        title="Building with AI-Assisted Tools"
        subtitle="Coding assistants, the current market, and the practices that make them a superpower"
        icon="🛠️"
      >
        <MDXProvider components={mdxComponents}>
          <AiToolsContent />
        </MDXProvider>
      </ResourcePageLayout>
    </div>
  )
}
