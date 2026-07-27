import { MDXProvider } from '@mdx-js/react'
import TocPageLayout from '../../components/TocPageLayout'
import { TocItem } from '../../components/TocSidebar'
import { mdxComponents } from '../../components/MDXContent'
import LinkedInContent from '../../content/resources/linkedin.mdx'

const tocItems: TocItem[] = [
  { id: 'why-linkedin', label: 'Why LinkedIn matters' },
  { id: 'skills-section', label: 'Skills section' },
  { id: 'certifications-section', label: 'Certifications' },
  { id: 'featured-section', label: 'Featured section' },
  { id: 'about-section', label: 'About section' },
  { id: 'posting-strategy', label: 'Posting strategy' },
]

export default function LinkedInPage() {
  return (
    <TocPageLayout
      title="LinkedIn"
      subtitle="Make your profile show up in the right searches"
      icon="💼"
      tocItems={tocItems}
    >
      <MDXProvider components={mdxComponents}>
        <LinkedInContent />
      </MDXProvider>
    </TocPageLayout>
  )
}
