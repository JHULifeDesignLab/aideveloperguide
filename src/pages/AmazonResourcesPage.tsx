import { MDXProvider } from '@mdx-js/react'
import NavigationLayout from '../components/NavigationLayout'
import { mdxComponents } from '../components/MDXContent'
import AmazonResourcesContent from '../content/amazon/resources.mdx'

export default function AmazonResourcesPage() {
  return (
    <NavigationLayout vendor="amazon" pageKey="resources">
      <MDXProvider components={mdxComponents}>
        <AmazonResourcesContent />
      </MDXProvider>
    </NavigationLayout>
  )
}
