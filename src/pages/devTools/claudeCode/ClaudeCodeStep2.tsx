import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import ClaudeCodeStep2Content from '../../../content/claude-code/step-2.mdx'

export default function ClaudeCodeStep2() {
  return (
    <StepPageLayout vendor="claude-code" pageKey="step-2">
      <MDXProvider components={mdxComponents}>
        <ClaudeCodeStep2Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
