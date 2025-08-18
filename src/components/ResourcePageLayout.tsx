import { ReactNode } from 'react'

interface ResourcePageLayoutProps {
  title: string
  subtitle: string
  icon: string
  children: ReactNode
}

export default function ResourcePageLayout({ title, subtitle, icon, children }: ResourcePageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4">
            <span className="text-2xl">{icon}</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </div>
  )
}
