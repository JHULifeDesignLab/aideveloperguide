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
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
          <span className="text-xl">{icon}</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>

      <div className="prose prose-sm max-w-none">
        {children}
      </div>
    </div>
  )
}
