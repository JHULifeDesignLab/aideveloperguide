import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import AmazonStep1Content from '../content/amazon/step-1.mdx'

export default function AmazonStep1Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <AmazonStep1Content />
      </MDXProvider>
    </div>
  )
}
