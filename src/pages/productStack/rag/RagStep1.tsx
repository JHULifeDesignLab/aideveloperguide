import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import RagStep1Content from '../../../content/rag/step-1.mdx'

export default function RagStep1() {
  return (
    <StepPageLayout vendor="rag" pageKey="step-1">
      <MDXProvider components={mdxComponents}>
        <RagStep1Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
