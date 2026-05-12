import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import RagStep2Content from '../../../content/rag/step-2.mdx'

export default function RagStep2() {
  return (
    <StepPageLayout vendor="rag" pageKey="step-2">
      <MDXProvider components={mdxComponents}>
        <RagStep2Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
