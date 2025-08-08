import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import MicrosoftIndex from '../content/microsoft/_index.mdx'

export default function MicrosoftPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <MicrosoftIndex />
      </MDXProvider>
    </div>
  )
}
