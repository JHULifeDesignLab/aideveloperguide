import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import MicrosoftStep2 from '../content/microsoft/step-2.mdx'

export default function MicrosoftStep2Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <MicrosoftStep2 />
      </MDXProvider>
    </div>
  )
}
