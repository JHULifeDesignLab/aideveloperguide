import { MDXProvider } from '@mdx-js/react'
import ResourcePageLayout from '../../components/ResourcePageLayout'
import { mdxComponents } from '../../components/MDXContent'
import LinkedInContent from '../../content/resources/linkedin.mdx'

export default function LinkedInPage() {
  return (
    <ResourcePageLayout
      title="LinkedIn"
      subtitle="Make your profile show up in the right searches"
      icon="💼"
    >
      <MDXProvider components={mdxComponents}>
        <LinkedInContent />
      </MDXProvider>
    </ResourcePageLayout>
  )
}
