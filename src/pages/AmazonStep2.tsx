import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import AmazonStep2Content from '../content/amazon/step-2.mdx'

export default function AmazonStep2Page() {
  return (
    <StepPageLayout vendor="amazon" pageKey="step-2">
      <MDXProvider components={mdxComponents}>
        <AmazonStep2Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
