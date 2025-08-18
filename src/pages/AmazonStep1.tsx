import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import AmazonStep1Content from '../content/amazon/step-1.mdx'

export default function AmazonStep1Page() {
  return (
    <StepPageLayout vendor="amazon" step="beginner">
      <MDXProvider components={mdxComponents}>
        <AmazonStep1Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
