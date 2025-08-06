import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import VendorLanding from '../components/VendorLanding'
import GoogleIndex from '../content/google/_index.mdx'

export default function GooglePage() {
  return (
    <div>
      <VendorLanding vendor="google" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <MDXProvider components={mdxComponents}>
          <GoogleIndex />
        </MDXProvider>
      </div>
    </div>
  )
}
