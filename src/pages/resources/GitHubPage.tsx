import { MDXProvider } from '@mdx-js/react'
import TocPageLayout from '../../components/TocPageLayout'
import { TocItem } from '../../components/TocSidebar'
import { mdxComponents } from '../../components/MDXContent'
import GitHubContent from '../../content/resources/github.mdx'

const tocItems: TocItem[] = [
  { id: 'step1', label: 'Polished project repo' },
  { id: 'step2', label: 'Clean commit history' },
  { id: 'step3', label: 'Profile README portfolio' },
  { id: 'step4', label: 'GitHub features' },
  { id: 'step5', label: 'Add to resume & LinkedIn' },
  { id: 'bonus', label: 'Real-world Git' },
]

export default function GitHubPage() {
  return (
    <TocPageLayout
      title="GitHub & Portfolio"
      subtitle="Build an impressive developer profile that stands out to recruiters"
      icon="🐱"
      tocItems={tocItems}
    >
      <MDXProvider components={mdxComponents}>
        <GitHubContent />
      </MDXProvider>
    </TocPageLayout>
  )
}
