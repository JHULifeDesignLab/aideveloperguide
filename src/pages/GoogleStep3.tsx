import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import GoogleStep3Content from '../content/google/step-3.mdx'

export default function GoogleStep3() {
  return (
    <StepPageLayout vendor="google" pageKey="step-3">
      <MDXProvider components={mdxComponents}>
        <GoogleStep3Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
