import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import AmazonStep3Content from '../content/amazon/step-3.mdx'

export default function AmazonStep3Page() {
  return (
    <StepPageLayout vendor="amazon" step="responsible-ai">
      <MDXProvider components={mdxComponents}>
        <AmazonStep3Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
