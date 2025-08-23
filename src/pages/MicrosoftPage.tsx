import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '../components/MDXContent'
import VendorLanding from '../components/VendorLanding'
import NavigationLayout from '../components/NavigationLayout'
import MicrosoftIndex from '../content/microsoft/_index.mdx'

export default function MicrosoftPage() {
  return (
    <div>
      <VendorLanding vendor="microsoft" />
      <NavigationLayout vendor="microsoft" pageKey="index">
        <MDXProvider components={mdxComponents}>
          <MicrosoftIndex />
        </MDXProvider>
      </NavigationLayout>
    </div>
  )
}
