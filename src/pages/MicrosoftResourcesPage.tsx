import { MDXProvider } from '@mdx-js/react'
import NavigationLayout from '../components/NavigationLayout'
import { mdxComponents } from '../components/MDXContent'
import MicrosoftResources from '../content/microsoft/resources.mdx'

export default function MicrosoftResourcesPage() {
  return (
    <NavigationLayout vendor="microsoft" pageKey="resources">
      <MDXProvider components={mdxComponents}>
        <MicrosoftResources />
      </MDXProvider>
    </NavigationLayout>
  )
}
