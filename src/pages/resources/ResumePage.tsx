import { MDXProvider } from '@mdx-js/react'
import TocPageLayout from '../../components/TocPageLayout'
import { TocItem } from '../../components/TocSidebar'
import { mdxComponents } from '../../components/MDXContent'
import ResumeContent from '../../content/resources/resume.mdx'

const tocItems: TocItem[] = [
  { id: 'the-mindset', label: 'The mindset' },
  { id: 'structure-for-students', label: 'Structure for students' },
  { id: 'writing-bullets', label: 'Writing bullets' },
  { id: 'what-to-add', label: 'What to add from this guide' },
  { id: 'hopkins-review', label: 'Free Hopkins reviews' },
  { id: 'dos-and-donts', label: 'DOs and DON\'Ts' },
  { id: 'gamify-applying', label: 'Gamify applying' },
  { id: 'the-interview', label: 'The interview' },
]

export default function ResumePage() {
  return (
    <TocPageLayout
      title="Resume"
      subtitle="Turn what you built here into content to land interviews"
      icon="📄"
      tocItems={tocItems}
    >
      <MDXProvider components={mdxComponents}>
        <ResumeContent />
      </MDXProvider>
    </TocPageLayout>
  )
}
