import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import MicrosoftStep3 from '../content/microsoft/step-3.mdx'

export default function MicrosoftStep3Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <MicrosoftStep3 />
      </MDXProvider>
    </div>
  )
}
