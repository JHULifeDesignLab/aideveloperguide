import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import ClaudeCodeLeakContent from '../../../content/claude-code/the-leak.mdx'

export default function ClaudeCodeLeakPage() {
  return (
    <StepPageLayout vendor="claude-code" pageKey="the-leak">
      <MDXProvider components={mdxComponents}>
        <ClaudeCodeLeakContent />
      </MDXProvider>
    </StepPageLayout>
  )
}
