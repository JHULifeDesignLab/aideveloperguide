import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../../../components/MDXContent'
import VendorLanding from '../../../components/VendorLanding'
import ClaudeCodeIndex from '../../../content/claude-code/_index.mdx'

export default function ClaudeCodePage() {
  return (
    <div>
      <VendorLanding vendor="claude-code" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <MDXProvider components={mdxComponents}>
          <ClaudeCodeIndex />
        </MDXProvider>
      </div>
    </div>
  )
}
