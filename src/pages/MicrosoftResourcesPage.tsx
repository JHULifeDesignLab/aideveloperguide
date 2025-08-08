import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import MicrosoftResources from '../content/microsoft/resources.mdx'

export default function MicrosoftResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <MicrosoftResources />
      </MDXProvider>
    </div>
  )
}
