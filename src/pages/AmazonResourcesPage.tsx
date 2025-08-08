import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import AmazonResourcesContent from '../content/amazon/resources.mdx'

export default function AmazonResourcesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <AmazonResourcesContent />
      </MDXProvider>
    </div>
  )
}
