import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../../../components/StepPageLayout'
import { mdxComponents } from '../../../components/MDXContent'
import ClaudeCodeStep1Content from '../../../content/other/llm-basics.mdx'

export default function ClaudeCodeStep1() {
  return (
    <StepPageLayout vendor="claude-code" pageKey="step-1" colorOverride={{ bgColor: 'bg-slate-500', textColor: 'text-slate-500', borderColor: 'border-slate-500' }}>
      <MDXProvider components={mdxComponents}>
        <ClaudeCodeStep1Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
