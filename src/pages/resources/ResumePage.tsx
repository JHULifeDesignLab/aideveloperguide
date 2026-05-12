import { MDXProvider } from '@mdx-js/react'
import ResourcePageLayout from '../../components/ResourcePageLayout'
import { mdxComponents } from '../../components/MDXContent'
import ResumeContent from '../../content/resources/resume.mdx'

export default function ResumePage() {
  return (
    <ResourcePageLayout
      title="Resume"
      subtitle="Turn what you built here into lines that land interviews"
      icon="📄"
    >
      <MDXProvider components={mdxComponents}>
        <ResumeContent />
      </MDXProvider>
    </ResourcePageLayout>
  )
}
