import { MDXProvider } from '@mdx-js/react'
import StepPageLayout from '../components/StepPageLayout'
import { mdxComponents } from '../components/MDXContent'
import MicrosoftStep1 from '../content/microsoft/step-1.mdx'

export default function MicrosoftStep1Page() {
  return (
    <StepPageLayout vendor="microsoft" pageKey="step-1">
      <MDXProvider components={mdxComponents}>
        <MicrosoftStep1 />
      </MDXProvider>
    </StepPageLayout>
  )
}
