import { MDXProvider } from '@mdx-js/react'
import TocPageLayout from '../../components/TocPageLayout'
import { TocItem } from '../../components/TocSidebar'
import { mdxComponents } from '../../components/MDXContent'
import CommunityContent from '../../content/resources/community.mdx'

const tocItems: TocItem[] = [
  { id: 'professional-communities', label: 'Professional communities' },
  { id: 'academic-research', label: 'Academic & research' },
  { id: 'local-communities', label: 'Local communities' },
  { id: 'news-updates', label: 'News & updates' },
  { id: 'getting-involved', label: 'Getting involved' },
]

export default function CommunityPage() {
  return (
    <TocPageLayout
      title="Community & News"
      subtitle="Connect with fellow developers and stay updated with AI research"
      icon="👥"
      tocItems={tocItems}
    >
      <MDXProvider components={mdxComponents}>
        <CommunityContent />
      </MDXProvider>
    </TocPageLayout>
  )
}
