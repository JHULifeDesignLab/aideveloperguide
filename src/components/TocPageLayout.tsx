import { ReactNode } from 'react'
import ResourcePageLayout from './ResourcePageLayout'
import TocSidebar, { TocItem } from './TocSidebar'

interface TocPageLayoutProps {
  title: string
  subtitle: string
  icon: string
  tocItems: TocItem[]
  children: ReactNode
}

/** ResourcePageLayout with the sticky TOC sidebar used on the Resume tab. */
export default function TocPageLayout({ title, subtitle, icon, tocItems, children }: TocPageLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl lg:flex lg:gap-4 lg:px-6">
      {/* Sticky TOC sidebar (desktop) */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-6 py-8">
          <TocSidebar items={tocItems} />
        </div>
      </aside>

      <div className="flex-1 min-w-0">
        {/* Inline TOC fallback (mobile/tablet) */}
        <div className="px-4 pt-8 lg:hidden">
          <TocSidebar items={tocItems} />
        </div>

        <ResourcePageLayout title={title} subtitle={subtitle} icon={icon}>
          {children}
        </ResourcePageLayout>
      </div>
    </div>
  )
}
