import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import ClaudeCodeResourcesContent from '../../../content/claude-code/resources.mdx'

export default function ClaudeCodeResources() {
  return (
    <StepPageLayout vendor="claude-code" pageKey="resources">
      <MDXProvider components={mdxComponents}>
        <ClaudeCodeResourcesContent />
      </MDXProvider>
    </StepPageLayout>
  )
}
