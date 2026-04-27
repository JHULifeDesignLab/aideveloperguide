import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import RagStep3Content from '../../../content/rag/step-3.mdx'

export default function RagStep3() {
  return (
    <StepPageLayout vendor="rag" pageKey="step-3">
      <MDXProvider components={mdxComponents}>
        <RagStep3Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
