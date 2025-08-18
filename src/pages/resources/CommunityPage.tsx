import { MDXProvider } from '@mdx-js/react'
import ResourcePageLayout from '../../components/ResourcePageLayout'
import { mdxComponents } from '../../components/MDXContent'
import CommunityContent from '../../content/resources/community.mdx'

export default function CommunityPage() {
  return (
    <ResourcePageLayout 
      title="Community & News" 
      subtitle="Connect with fellow developers and stay updated with AI research"
      icon="👥"
    >
      <MDXProvider components={mdxComponents}>
        <CommunityContent />
      </MDXProvider>
    </ResourcePageLayout>
  )
}
