import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import GoogleStep1Content from '../content/google/step-1.mdx'

export default function GoogleStep1() {
  return (
    <StepPageLayout vendor="google" pageKey="step-1">
      <MDXProvider components={mdxComponents}>
        <GoogleStep1Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
