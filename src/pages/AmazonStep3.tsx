import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import AmazonStep3Content from '../content/amazon/step-3.mdx'

export default function AmazonStep3Page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MDXProvider components={mdxComponents}>
        <AmazonStep3Content />
      </MDXProvider>
    </div>
  )
}
