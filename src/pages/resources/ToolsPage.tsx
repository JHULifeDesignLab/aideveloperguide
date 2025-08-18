import { MDXProvider } from '@mdx-js/react'
import ResourcePageLayout from '../../components/ResourcePageLayout'
import { mdxComponents } from '../../components/MDXContent'
import ToolsContent from '../../content/resources/tools.mdx'

export default function ToolsPage() {
  return (
    <ResourcePageLayout 
      title="Development Tools" 
      subtitle="Essential tools and frameworks for modern AI development"
      icon="🛠️"
    >
      <MDXProvider components={mdxComponents}>
        <ToolsContent />
      </MDXProvider>
    </ResourcePageLayout>
  )
}
