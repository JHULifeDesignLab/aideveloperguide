import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import GoogleStep2Content from '../content/google/step-2.mdx'

export default function GoogleStep2() {
  return (
    <StepPageLayout vendor="google" step="2">
      <MDXProvider components={mdxComponents}>
        <GoogleStep2Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
