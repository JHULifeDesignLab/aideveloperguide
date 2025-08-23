import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import MicrosoftStep3 from '../content/microsoft/step-3.mdx'

export default function MicrosoftStep3Page() {
  return (
    <StepPageLayout vendor="microsoft" pageKey="step-3">
      <MDXProvider components={mdxComponents}>
        <MicrosoftStep3 />
      </MDXProvider>
    </StepPageLayout>
  )
}
