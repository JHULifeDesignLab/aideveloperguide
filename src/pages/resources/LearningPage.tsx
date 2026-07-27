import { MDXProvider } from '@mdx-js/react'
import TocPageLayout from '../../components/TocPageLayout'
import { TocItem } from '../../components/TocSidebar'
import { mdxComponents } from '../../components/MDXContent'
import LearningContent from '../../content/resources/learning.mdx'

const tocItems: TocItem[] = [
  { id: 'cloud-deployment-guides', label: 'Cloud deployment guides' },
  { id: 'ready-for-more-challenges', label: 'Ready for more challenges?' },
  { id: 'appendix-b-courses-tools--communities', label: 'Courses, tools & communities' },
]

export default function LearningPage() {
  return (
    <TocPageLayout
      title="Further Learning"
      subtitle="Curated educational resources to advance your skills"
      icon="🎓"
      tocItems={tocItems}
    >
      <MDXProvider components={mdxComponents}>
        <LearningContent />
      </MDXProvider>
    </TocPageLayout>
  )
}
