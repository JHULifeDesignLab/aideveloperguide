import { MDXProvider } from '@mdx-js/react'
import ResourcePageLayout from '../../components/ResourcePageLayout'
import TocSidebar, { TocItem } from '../../components/TocSidebar'
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
    <div className="mx-auto max-w-7xl lg:flex lg:gap-4 lg:px-6">
      {/* Sticky TOC sidebar (desktop) */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-6 py-8">
          <TocSidebar items={tocItems} />
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Inline TOC fallback (mobile/tablet) */}
        <div className="px-4 pt-8 lg:hidden">
          <TocSidebar items={tocItems} />
        </div>

        <ResourcePageLayout
          title="Resume"
          subtitle="Turn what you built here into lines that land interviews"
          icon="📄"
        >
          <MDXProvider components={mdxComponents}>
            <ResumeContent />
          </MDXProvider>
        </ResourcePageLayout>
      </div>
    </div>
  )
}
