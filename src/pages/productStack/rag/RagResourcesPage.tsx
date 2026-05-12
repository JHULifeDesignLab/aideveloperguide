import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import RagResourcesContent from '../../../content/rag/resources.mdx'

export default function RagResourcesPage() {
  return (
    <StepPageLayout vendor="rag" pageKey="resources">
      <MDXProvider components={mdxComponents}>
        <RagResourcesContent />
      </MDXProvider>
    </StepPageLayout>
  )
}
