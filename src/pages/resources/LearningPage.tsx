import { MDXProvider } from '@mdx-js/react'
import ResourcePageLayout from '../../components/ResourcePageLayout'
import { mdxComponents } from '../../components/MDXContent'
import LearningContent from '../../content/resources/learning.mdx'

export default function LearningPage() {
  return (
    <ResourcePageLayout 
      title="Further Learning" 
      subtitle="Curated educational resources to advance your skills"
      icon="🎓"
    >
      <MDXProvider components={mdxComponents}>
        <LearningContent />
      </MDXProvider>
    </ResourcePageLayout>
  )
}
