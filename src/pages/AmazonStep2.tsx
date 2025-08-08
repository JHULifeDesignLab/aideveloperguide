import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import AmazonStep2Content from '../content/amazon/step-2.mdx'

export default function AmazonStep2Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <AmazonStep2Content />
      </MDXProvider>
    </div>
  )
}
