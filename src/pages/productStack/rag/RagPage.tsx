import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../../../components/MDXContent'
import VendorLanding from '../../../components/VendorLanding'
import RagIndex from '../../../content/rag/_index.mdx'

export default function RagPage() {
  return (
    <div>
      <VendorLanding vendor="rag" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <MDXProvider components={mdxComponents}>
          <RagIndex />
        </MDXProvider>
      </div>
    </div>
  )
}
