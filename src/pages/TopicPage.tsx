import { useParams } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import { ComponentType } from 'react'
import { mdxComponents } from '../components/MDXContent'
import StepPageLayout from '../components/StepPageLayout'
import { topicConfigs } from '../data/topic-config'

// Build-time glob of all topic MDX files — Vite resolves the pattern statically
const allMdx = import.meta.glob('../content/**/*.mdx', { eager: true }) as Record<
  string,
  { default: ComponentType }
>

function resolveMdxComponent(vendor: string, pageKey: string): ComponentType | null {
  const pageConfig = topicConfigs[vendor]?.pages?.[pageKey]
  const mdxPath = pageConfig?.mdxPath ?? `${vendor}/${pageKey === 'index' ? '_index' : pageKey}`
  const mod = allMdx[`../content/${mdxPath}.mdx`]
  return mod?.default ?? null
}

export default function TopicPage() {
  const { vendor, page } = useParams<{ vendor: string; page?: string }>()
  const pageKey = page ?? 'index'

  if (!vendor || !topicConfigs[vendor]) {
    return <div className="text-center py-16 text-gray-500">Topic not found.</div>
  }

  const Content = resolveMdxComponent(vendor, pageKey)
  if (!Content) {
    return <div className="text-center py-16 text-gray-500">Page not found.</div>
  }

  const pageConfig = topicConfigs[vendor].pages?.[pageKey]

  // Index pages are self-contained — each _index.mdx imports VendorLanding + NavigationLayout itself
  if (pageKey === 'index') {
    return (
      <MDXProvider components={mdxComponents}>
        <Content />
      </MDXProvider>
    )
  }

  return (
    <StepPageLayout vendor={vendor} pageKey={pageKey} colorOverride={pageConfig?.colorOverride}>
      <MDXProvider components={mdxComponents}>
        <Content />
      </MDXProvider>
    </StepPageLayout>
  )
}
