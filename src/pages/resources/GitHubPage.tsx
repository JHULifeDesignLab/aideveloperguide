import { MDXProvider } from '@mdx-js/react'
import ResourcePageLayout from '../../components/ResourcePageLayout'
import { mdxComponents } from '../../components/MDXContent'
import GitHubContent from '../../content/resources/github.mdx'

export default function GitHubPage() {
  return (
    <ResourcePageLayout 
      title="GitHub & Portfolio" 
      subtitle="Build an impressive developer profile that stands out to recruiters"
      icon="🐱"
    >
      <MDXProvider components={mdxComponents}>
        <GitHubContent />
      </MDXProvider>
    </ResourcePageLayout>
  )
}
