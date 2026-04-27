import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import ClaudeCodeStep3Content from '../../../content/claude-code/step-3.mdx'

export default function ClaudeCodeStep3() {
  return (
    <StepPageLayout vendor="claude-code" pageKey="step-3">
      <MDXProvider components={mdxComponents}>
        <ClaudeCodeStep3Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
