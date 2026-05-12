import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../../../components/MDXContent'
import AmazonIndex from '../../../content/amazon/_index.mdx'

export default function AmazonPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <AmazonIndex />
      </MDXProvider>
    </div>
  )
}
