import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import GoogleResourcesContent from '../content/google/resources.mdx'

export default function GoogleResources() {
  return (
    <StepPageLayout vendor="google" pageKey="resources">
      <MDXProvider components={mdxComponents}>
        <GoogleResourcesContent />
      </MDXProvider>
    </StepPageLayout>
  )
}
