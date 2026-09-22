import { MDXProvider } from '@mdx-js/react'
import TocPageLayout from '../../components/TocPageLayout'
import { TocItem } from '../../components/TocSidebar'
import { mdxComponents } from '../../components/MDXContent'
import HopkinsContent from '../../content/resources/hopkins.mdx'
import LearningContent from '../../content/resources/learning.mdx'
import CommunityContent from '../../content/resources/community.mdx'

const tocItems: TocItem[] = [
  { id: 'hopkins-career-support', label: 'Hopkins career support' },
  { id: 'cloud-deployment-guides', label: 'Cloud deployment guides' },
  { id: 'courses-tutorials', label: 'Courses & tutorials' },
  { id: 'communities', label: 'Communities & research' },
  { id: 'news-updates', label: 'News & staying current' },
  { id: 'getting-involved', label: 'Getting involved' },
]

const sectionDivider = <hr className="my-8 border-t-2 border-gray-200" />

export default function ResourcesPage() {
  return (
    <TocPageLayout
      title="Resources"
      subtitle="Hopkins career support, further learning, and communities to grow with"
      icon="📚"
      tocItems={tocItems}
    >
      <MDXProvider components={mdxComponents}>
        <HopkinsContent />
        {sectionDivider}
        <LearningContent />
        {sectionDivider}
        <CommunityContent />
      </MDXProvider>
    </TocPageLayout>
  )
}
