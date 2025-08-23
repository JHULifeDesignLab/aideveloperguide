import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import MicrosoftStep2 from '../content/microsoft/step-2.mdx'

export default function MicrosoftStep2Page() {
  return (
    <StepPageLayout vendor="microsoft" pageKey="step-2">
      <MDXProvider components={mdxComponents}>
        <MicrosoftStep2 />
      </MDXProvider>
    </StepPageLayout>
  )
}
