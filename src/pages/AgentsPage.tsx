import { MDXProvider } from '@mdx-js/react'
import { Link } from 'react-router-dom'
import ResourcePageLayout from '../components/ResourcePageLayout'
import { mdxComponents } from '../components/MDXContent'
import AgentsContent from '../content/other/agents-overview.mdx'

export default function AgentsPage() {
  return (
    <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="pt-6">
        <Link to="/" className="text-sm text-gray-400 transition-colors hover:text-gray-600">← Back to Home</Link>
      </div>
      <ResourcePageLayout
        title="Building with Agents"
        subtitle="Software that plans, uses tools, and acts — the architecture behind the AI wave"
        icon="🤖"
      >
        <MDXProvider components={mdxComponents}>
          <AgentsContent />
        </MDXProvider>
      </ResourcePageLayout>
    </div>
  )
}
